import { NextResponse } from "next/server";

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
  error?: string;
}

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI!;

  try {
    const tokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
        }),
      },
    );

    const tokenData: SpotifyTokenResponse = await tokenResponse.json();

    if (tokenData.error) {
      return NextResponse.json({ error: tokenData.error }, { status: 400 });
    }

    const response = NextResponse.redirect(new URL("/spotify", request.url));

    response.cookies.set("spotify_access_token", tokenData.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: tokenData.expires_in,
      sameSite: "lax",
      path: "/",
    });

    if (tokenData.refresh_token) {
      response.cookies.set("spotify_refresh_token", tokenData.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  } catch (err) {
    console.error("Spotify callback error:", err);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 },
    );
  }
}
