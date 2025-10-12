import { NextResponse } from "next/server";
import { cookies } from "next/headers";

interface SpotifyApiResponse {
  currently_playing?: any;
  top_tracks?: any;
  error?: string;
}

interface PlaybackControlResponse {
  success?: boolean;
  action?: string;
  error?: string;
}

interface PlaybackControlRequest {
  action: "play" | "pause";
  track_uri?: string;
}

async function refreshAccessToken(refreshToken: string): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

  const res = await fetch("https://accounts.spotify.com/api/token", {
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

  const data = await res.json();
  if (!res.ok || data.error)
    throw new Error(data.error || "Token refresh failed");

  return data.access_token;
}

async function spotifyFetch(url: string, token: string) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 204) return null;
  if (!res.ok) throw new Error("Spotify request failed: " + res.status);
  return res.json();
}

export async function GET(): Promise<NextResponse<SpotifyApiResponse>> {
  const cookieStore = cookies();
  let access = cookieStore.get("spotify_access_token")?.value;
  const refresh = cookieStore.get("spotify_refresh_token")?.value;

  if (!access && !refresh) {
    return NextResponse.json(
      { error: "Not authenticated", auth_url: "/api/spotify/auth" },
      { status: 401 },
    );
  }

  try {
    const nowPlaying = await spotifyFetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      access!,
    );
    const topTracks = await spotifyFetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term",
      access!,
    );

    return NextResponse.json({
      currently_playing: nowPlaying,
      top_tracks: topTracks,
    });
  } catch (err: any) {
    if (err.message.includes("401") && refresh) {
      const newAccess = await refreshAccessToken(refresh);
      const response = NextResponse.json(
        { error: "Token refreshed, retry request" },
        { status: 401 },
      );
      response.cookies.set("spotify_access_token", newAccess, {
        httpOnly: true,
        path: "/",
        maxAge: 3600,
      });
      return response;
    }
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(
  req: Request,
): Promise<NextResponse<PlaybackControlResponse>> {
  const cookieStore = cookies();
  const access = cookieStore.get("spotify_access_token")?.value;
  if (!access)
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { action, track_uri }: PlaybackControlRequest = await req.json();

  const endpoints = {
    play: "https://api.spotify.com/v1/me/player/play",
    pause: "https://api.spotify.com/v1/me/player/pause",
  } as const;

  if (!endpoints[action]) {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  const res = await fetch(endpoints[action], {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${access}`,
      "Content-Type": "application/json",
    },
    body:
      action === "play" && track_uri
        ? JSON.stringify({ uris: [track_uri] })
        : undefined,
  });

  if (!res.ok)
    return NextResponse.json(
      { error: `Failed: ${res.status}` },
      { status: 500 },
    );
  return NextResponse.json({ success: true, action });
}
