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
      <div className="container mx-auto max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 opacity-30"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 opacity-30"></div>
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 opacity-30"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl mb-6 text-heading-primary ">
          Spotify Integration
        </h1>
        <div className="border border-border p-6 bg-background">
          <p className="text-destructive/80">Error: {error}</p>
          <p className=" text-sm text-normral-text-color mb-4">
            *A Spotify Premium account is required to access this feature
          </p>
          <Button
            onClick={fetchSpotifyData}
            className="bg-foreground text-background rounded-xs hover:bg-accent-foreground"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-3xl md:text-5xl text-heading-primary mb-2 from-primary via-primary/80 to-primary/30 md:h-14">
            Spotify
          </h1>
          <Button
            onClick={fetchSpotifyData}
            className="bg-background/100 text-foreground rounded-xs border border-foreground/20 hover:bg-background/100"
          >
            <svg
              className="w-4 h-4"
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
          </Button>
        </div>
        <p className="text-normral-text-color">
          Your current listening activity and top tracks
        </p>
      </div>

      {/* Currently Playing Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-subheading-text-color">
            Currently Playing
          </h2>
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>

        {spotifyData?.currently_playing?.is_playing ? (
          <div className="p-6 bg-background relative group border border-border ">
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-foreground group-hover:top-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-foreground group-hover:top-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-foreground group-hover:bottom-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-foreground group-hover:bottom-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex w-16 h-16 bg-primary/30 rounded-xl items-center justify-center">
                  <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-subheading-text-color">
                    {spotifyData.currently_playing.item.name}
                  </h3>
                  <p className="text-normral-text-color text-sm">
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
                className="bg-primary text-black rounded-xs border border-foreground/20"
                size="sm"
              >
                Pause
              </Button>
            </div>
          </div>
        ) : (
          <div className="border border-border p-6 bg-background text-center relative group">
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-foreground group-hover:top-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-foreground group-hover:top-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-foreground group-hover:bottom-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-foreground group-hover:bottom-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 relative">
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
            <p className="text-normral-text-color mb-4">
              No track currently playing
            </p>
            <Button
              onClick={() => controlPlayback("play")}
              className="bg-primary text-black rounded-xs"
            >
              Start Playback
            </Button>
          </div>
        )}
      </section>

      {/* Top 10 Tracks Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-heading-text-color">
            Top 10 Tracks
          </h2>
          <span className="text-sm text-normral-text-color">Last 4 weeks</span>
        </div>

        <div className="space-y-2">
          {spotifyData?.top_tracks?.items?.map(
            (track: SpotifyTrack, index: number) => (
              <div
                key={track.id}
                className="border border-border p-4 bg-background relative group"
              >
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-foreground group-hover:top-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-foreground group-hover:top-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-foreground group-hover:bottom-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-foreground group-hover:bottom-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <span className="font-bold text-lg text-heading-text-color w-6 flex-shrink-0">
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
                      <h3 className="font-semibold text-subheading-text-color truncate">
                        {track.name}
                      </h3>
                      <p className="text-sm text-normral-text-color truncate">
                        {track.artists.map((artist) => artist.name).join(", ")}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => controlPlayback("play", track.uri)}
                    className="bg-background/100 text-foreground rounded-xs border border-foreground/20 flex-shrink-0 ml-4 hover:bg-background/100 cursor-pointer"
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
    </div>
  );
}
