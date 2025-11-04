"use client";

import { useEffect } from "react";
import { Github } from "./icons/Github";
import { Resume } from "./icons/Resume";
import { Dm } from "./icons/Dm";

export default function QuickButtons() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "g") window.open("https://github.com/nextpointer", "_blank");
      if (key === "r")
        window.open(
          "https://drive.google.com/file/d/1ZspYNscQ3JSRoWgP0CRJf8lLzGwQAbg3/view?usp=sharing",
          "_blank",
        );
      if (key === "d")
        window.open(
          "https://x.com/messages/compose?recipient_id=1763310996066623490",
          "_blank",
        );
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="mt-6 mb-2 flex flex-row gap-3 items-center justify-start">
      <button
        onClick={() => window.open("https://github.com/nextpointer", "_blank")}
        className="
            px-2 py-1
            rounded-md
            bg-background
            border-none outline-none cursor-pointer
            flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            shadow-[0px_-2px_0px_0px_rgba(0,0,0,0.2),inset_0px_-6px_0px_-3px_rgba(255,255,255,0.5),0px_5px_0px_0px_rgba(255,255,255,0.1),0px_0px_0px_2px_rgba(0,0,0,0.05)]


            dark:shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_-6px_0px_-3px_rgba(0,0,0,0.5),0px_5px_0px_0px_rgba(0,0,0,0.1),0px_0px_0px_2px_rgba(255,255,255,0.05)]
            group
          "
      >
        <Github className="h-4 w-4" />
        <span className="text-heading-text-color text-xs opacity-90 group-hover:opacity-100 transition-opacity">
          github
        </span>
        <span
          className="
              ml-1 px-1.5 py-0.5
              text-normral-text-color text-xs font-mono
              border border-[rgba(255,255,255,0.12)]
              rounded
              bg-[rgba(0,0,0,0.2)]
              group-hover:border-[rgba(255,255,255,0.18)]
              group-hover:bg-[rgba(0,0,0,0.15)]
              transition-all

              hidden md:block
            "
        >
          G
        </span>
      </button>
      <button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1ZspYNscQ3JSRoWgP0CRJf8lLzGwQAbg3/view?usp=sharing",
            "_blank",
          )
        }
        className="
            px-2 py-1
            rounded-md
            bg-background
            border-none outline-none cursor-pointer
            flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            shadow-[0px_-2px_0px_0px_rgba(0,0,0,0.2),inset_0px_-6px_0px_-3px_rgba(255,255,255,0.5),0px_5px_0px_0px_rgba(255,255,255,0.1),0px_0px_0px_2px_rgba(0,0,0,0.05)]
            dark:shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_-6px_0px_-3px_rgba(0,0,0,0.5),0px_5px_0px_0px_rgba(0,0,0,0.1),0px_0px_0px_2px_rgba(255,255,255,0.05)]

            group
          "
      >
        <Resume className="h-4 w-4" />

        {/* Text */}
        <span className="text-heading-text-color text-xs opacity-90 group-hover:opacity-100 transition-opacity">
          resume
        </span>
        <span
          className="
              ml-1 px-1.5 py-0.5
              text-normral-text-color text-xs font-mono
              border border-[rgba(255,255,255,0.12)]
              rounded
              bg-[rgba(0,0,0,0.2)]
              group-hover:border-[rgba(255,255,255,0.18)]
              group-hover:bg-[rgba(0,0,0,0.15)]
              transition-all
              hidden md:block
            "
        >
          R
        </span>
      </button>
      <button
        onClick={() =>
          window.open(
            "https://x.com/messages/compose?recipient_id=1763310996066623490",
            "_blank",
          )
        }
        className="
            px-1.5 py-1
            rounded-md
            bg-background
            border-none outline-none cursor-pointer
            flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            shadow-[0px_-2px_0px_0px_rgba(0,0,0,0.2),inset_0px_-6px_0px_-3px_rgba(255,255,255,0.5),0px_5px_0px_0px_rgba(255,255,255,0.1),0px_0px_0px_2px_rgba(0,0,0,0.05)]
            dark:shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_-6px_0px_-3px_rgba(0,0,0,0.5),0px_5px_0px_0px_rgba(0,0,0,0.1),0px_0px_0px_2px_rgba(255,255,255,0.05)]
            group
          "
      >
        <Dm className="h-4 w-4" />

        {/* Text */}
        <span className="text-heading-text-color text-xs opacity-90 group-hover:opacity-100 transition-opacity">
          twitter dm
        </span>
        <span
          className="
              ml-1 px-1.5 py-0.5
              text-normral-text-color text-xs font-mono
              border border-[rgba(255,255,255,0.12)]
              rounded
              bg-[rgba(0,0,0,0.2)]
              group-hover:border-[rgba(255,255,255,0.18)]
              group-hover:bg-[rgba(0,0,0,0.15)]
              transition-all
              hidden md:block
            "
        >
          D
        </span>
      </button>
    </div>
  );
}
