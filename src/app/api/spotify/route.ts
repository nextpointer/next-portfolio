import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Define types
interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  error?: string;
}

interface PlaybackControlRequest {
  action: "play" | "pause";
  track_uri?: string;
}

interface SpotifyApiResponse {
  currently_playing?: any;
  top_tracks?: any;
  error?: string;
  auth_url?: string;
}

interface PlaybackControlResponse {
  success: boolean;
  action: string;
  error?: string;
}

async function refreshAccessToken(refreshToken: string): Promise<string> {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error("Missing Spotify client credentials");
    }

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed with status: ${response.status}`);
    }

    const data: SpotifyTokenResponse = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.access_token;
  } catch (error) {
    console.error("Token refresh error:", error);
    throw new Error("Failed to refresh token");
  }
}

async function makeSpotifyRequest(
  url: string,
  accessToken: string,
): Promise<any> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    throw new Error("Token expired");
  }

  if (!response.ok) {
    throw new Error(
      `Spotify API request failed with status: ${response.status}`,
    );
  }

  return response.json();
}

export async function GET(
  request: Request,
): Promise<NextResponse<SpotifyApiResponse>> {
  const cookieStore = cookies();
  let accessToken = cookieStore.get("spotify_access_token")?.value;
  const refreshToken = cookieStore.get("spotify_refresh_token")?.value;

  // If no access token, redirect to auth
  if (!accessToken && !refreshToken) {
    return NextResponse.json(
      {
        error: "Not authenticated",
        auth_url: "/api/spotify/auth",
      },
      { status: 401 },
    );
  }

  try {
    // Validate access token exists
    if (!accessToken) {
      throw new Error("No access token available");
    }

    // Get currently playing track
    const currentlyPlaying = await makeSpotifyRequest(
      "https://api.spotify.com/v1/me/player/currently-playing",
      accessToken,
    );

    // Get top tracks
    const topTracks = await makeSpotifyRequest(
      "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term",
      accessToken,
    );

    return NextResponse.json({
      currently_playing: currentlyPlaying,
      top_tracks: topTracks,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    if (errorMessage === "Token expired" && refreshToken) {
      try {
        // Refresh the token
        const newAccessToken = await refreshAccessToken(refreshToken);

        // Update the access token cookie
        const response = NextResponse.json(
          {
            error: "Token refreshed, please retry",
          },
          { status: 401 },
        );

        response.cookies.set("spotify_access_token", newAccessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 3600, // 1 hour
          sameSite: "lax",
          path: "/",
        });

        return response;
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // If refresh fails, clear cookies and redirect to auth
        const response = NextResponse.json(
          {
            error: "Authentication required",
            auth_url: "/api/spotify/auth",
          },
          { status: 401 },
        );

        response.cookies.delete("spotify_access_token");
        response.cookies.delete("spotify_refresh_token");

        return response;
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(
  request: Request,
): Promise<NextResponse<PlaybackControlResponse>> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("spotify_access_token")?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const body: PlaybackControlRequest = await request.json();
    const { action, track_uri } = body;

    if (!action || (action !== "play" && action !== "pause")) {
      return NextResponse.json(
        {
          error: 'Invalid action. Must be "play" or "pause"',
        },
        { status: 400 },
      );
    }

    let spotifyUrl: string;

    switch (action) {
      case "play":
        spotifyUrl = "https://api.spotify.com/v1/me/player/play";
        if (track_uri) {
          // Play specific track
          const playResponse = await fetch(spotifyUrl, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              uris: [track_uri],
            }),
          });

          if (!playResponse.ok) {
            throw new Error(`Failed to play track: ${playResponse.status}`);
          }
        } else {
          // Resume playback
          const resumeResponse = await fetch(spotifyUrl, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!resumeResponse.ok) {
            throw new Error(
              `Failed to resume playback: ${resumeResponse.status}`,
            );
          }
        }
        break;

      case "pause":
        spotifyUrl = "https://api.spotify.com/v1/me/player/pause";
        const pauseResponse = await fetch(spotifyUrl, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!pauseResponse.ok) {
          throw new Error(`Failed to pause playback: ${pauseResponse.status}`);
        }
        break;

      default:
        // This should never happen due to the validation above, but TypeScript requires it
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json({ success: true, action });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
