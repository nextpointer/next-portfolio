"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Spotify } from "@/components/icons/Spotify";
import { Skeleton } from "@/components/ui/skeleton";
import TransitionLink from "./TransitionLink";

interface Track {
  name: string;
  artist: string;
  album: string;
  image: string;
  is_playing: boolean;
}

export default function CurrentPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchTrack() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/spotify/current");
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to fetch track");
        setTrack(null);
      } else {
        setTrack(data.track || null);
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrack();
    const interval = setInterval(fetchTrack, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <div className="w-full flex flex-col xl:flex-row items-center xl:justify-start p-4 border rounded bg-background relative group mt-6 gap-4">
        <Skeleton className="w-16 h-16 rounded flex-shrink-0" />
        <div className="flex flex-col flex-1 gap-2 ml-4 ">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/4" />
        </div>
        <Skeleton className="h-5 w-36 mt-2 xl:mt-0 xl:ml-4" />
      </div>
    );
  if (error) return <p className="mt-2">Error: {error}</p>;
  if (!track)
    return (
      <div className="mt-6 flex items-centerjustify-center flex-col">
        <div className="flex flex-row gap-1">
          <Spotify className="w-6 h-6" />
          <p className="ml-2">Nothing playing right now.</p>
        </div>
        <TransitionLink
          href="/spotify"
          className="flex items-start flex-row justify-start gap-1 text-sm text-primary underline decoration-foreground underline-offset-2 xl:mt-0 ml-10"
        >
          View your Spotify activity
          <ArrowUpRight className="w-3 h-3" />
        </TransitionLink>
      </div>
    );

  return (
    <div className="w-full flex flex-col xl:flex-row items-center xl:justify-between p-4 border rounded bg-background relative group mt-6 gap-2">
      <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-foreground group-hover:top-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out"></span>
      <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-foreground group-hover:top-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-foreground group-hover:bottom-0 group-hover:left-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>
      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-foreground group-hover:bottom-0 group-hover:right-0 group-hover:border-primary transition-all duration-100 ease-in-out "></span>

      {/* Track Info */}
      <div className="flex flex-row items-center gap-4 w-full xl:w-auto">
        <img
          src={track.image}
          alt={track.album}
          className="w-16 h-16 rounded shadow flex-shrink-0"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-subheading-text-color">
            {track.name}
          </p>
          <p className="text-sm text-normral-text-color">{track.artist}</p>
          {track.is_playing && (
            <span className="text-primary text-xs">Now Playing</span>
          )}
        </div>
      </div>

      {/* Link */}
      <TransitionLink
        href="/spotify"
        className="flex items-start flex-row justify-start gap-1 text-sm text-primary underline xl:ml-4 mt-2 xl:mt-0 ml-0 mr-auto md:mr-0"
      >
        <Spotify className="w-4 h-4 mt-1" />
        View your Spotify activity
        <ArrowUpRight className="w-3 h-3" />
      </TransitionLink>
    </div>
  );
}
