"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Define TypeScript interfaces
interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbum {
  name: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
}

interface SpotifyTrack {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  uri: string;
}

interface CurrentlyPlayingItem {
  item: SpotifyTrack;
  is_playing: boolean;
}

interface TopTracksResponse {
  items: SpotifyTrack[];
}

interface SpotifyApiResponse {
  currently_playing?: CurrentlyPlayingItem;
  top_tracks?: TopTracksResponse;
  error?: string;
  auth_url?: string;
}

export default function Page() {
  const [spotifyData, setSpotifyData] = useState<SpotifyApiResponse | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSpotifyData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/spotify");

      if (!response.ok) {
        if (response.status === 401) {
          const errorData = await response.json();
          if (errorData.auth_url) {
            window.location.href = errorData.auth_url;
            return;
          }
        }
        throw new Error("Failed to fetch Spotify data");
      }

      const data: SpotifyApiResponse = await response.json();
      setSpotifyData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const controlPlayback = async (
    action: "play" | "pause",
    trackUri: string | null = null,
  ): Promise<void> => {
    try {
      const response = await fetch("/api/spotify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          track_uri: trackUri,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to control playback");
      }

      // Refresh the data to get updated currently playing
      setTimeout(fetchSpotifyData, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  useEffect(() => {
    fetchSpotifyData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-8 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Spotify Integration
        </h1>
        <div className="border border-gray-300 rounded-lg p-6 bg-white">
          <p className="text-gray-800 mb-4">Error: {error}</p>
          <Button
            onClick={fetchSpotifyData}
            className="bg-black text-white hover:bg-gray-800"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">My Spotify</h1>
        <p className="text-gray-600">
          Your current listening activity and top tracks
        </p>
      </div>

      {/* Currently Playing Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-black">
            Currently Playing
          </h2>
          <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
        </div>

        {spotifyData?.currently_playing?.is_playing ? (
          <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {spotifyData.currently_playing.item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {spotifyData.currently_playing.item.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {spotifyData.currently_playing.item.album.name}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => controlPlayback("pause")}
                className="bg-black text-white hover:bg-gray-800"
                size="sm"
              >
                Pause
              </Button>
            </div>
          </div>
        ) : (
          <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm text-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-9.9a9 9 0 012.728-2.728"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">No track currently playing</p>
            <Button
              onClick={() => controlPlayback("play")}
              className="bg-black text-white hover:bg-gray-800"
            >
              Start Playback
            </Button>
          </div>
        )}
      </section>

      {/* Top 10 Tracks Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-black">Top 10 Tracks</h2>
          <span className="text-sm text-gray-500">Last 4 weeks</span>
        </div>

        <div className="space-y-3">
          {spotifyData?.top_tracks?.items?.map(
            (track: SpotifyTrack, index: number) => (
              <div
                key={track.id}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <span className="font-bold text-lg text-black w-6 flex-shrink-0">
                      {index + 1}
                    </span>
                    <img
                      src={track.album.images[2]?.url}
                      alt={track.album.name}
                      className="w-12 h-12 rounded flex-shrink-0 bg-gray-200"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <div className="hidden w-12 h-12 rounded flex-shrink-0 bg-gray-200 items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-black truncate">
                        {track.name}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">
                        {track.artists.map((artist) => artist.name).join(", ")}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => controlPlayback("play", track.uri)}
                    className="bg-white text-black border border-gray-300 hover:bg-gray-50 flex-shrink-0 ml-4"
                    size="sm"
                  >
                    Play
                  </Button>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Refresh Button */}
      <div className="flex justify-center">
        <Button
          onClick={fetchSpotifyData}
          className="bg-white text-black border border-gray-300 hover:bg-gray-50"
          variant="outline"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Refresh Data
        </Button>
      </div>
    </div>
  );
}
