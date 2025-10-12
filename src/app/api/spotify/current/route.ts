import { NextResponse } from "next/server";

async function getAccessToken() {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Failed to refresh token");
  return data.access_token;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const res = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    if (res.status === 204) {
      return NextResponse.json({ message: "Nothing playing right now" });
    }

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json(
        { error: err.error?.message || "Spotify API error" },
        { status: res.status },
      );
    }

    const data = await res.json();

    return NextResponse.json({
      track: {
        name: data.item?.name,
        artist: data.item?.artists.map((a: any) => a.name).join(", "),
        album: data.item?.album.name,
        image: data.item?.album.images[0]?.url,
        is_playing: data.is_playing,
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 },
    );
  }
}
