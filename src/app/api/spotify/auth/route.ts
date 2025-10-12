import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI!;

  if (!clientId || !redirectUri) {
    throw new Error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI");
  }

  const scope = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-recently-played",
  ].join(" ");

  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set("show_dialog", "true");

  return NextResponse.redirect(authUrl.toString());
}
