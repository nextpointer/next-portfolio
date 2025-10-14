"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { GithubLoopIcon } from "./icons/movingGithub";
import { useEffect, useState } from "react";

export function Footer() {
  const path = usePathname();
  const [myTime, setMyTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setMyTime(`${hours}:${minutes}:${seconds}IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (path === "/") return null; // Hide on homepage

  return (
    <div className="w-full max-w-[650px] px-8 mt-auto flex justify-between flex-row items-center pb-4">
      <div className="flex gap-4 text-heading-text-color justify-center h-full items-center">
        <Link
          href="https://github.com/nextpointer"
          aria-label="GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLoopIcon />
        </Link>
        <Link
          href="https://x.com/nextpointerX"
          aria-label="X profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            {" "}
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>{" "}
          </svg>{" "}
        </Link>{" "}
        <Link
          href="https://www.linkedin.com/in/surajitmaity3112/"
          aria-label="LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
          >
            {" "}
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            ></path>{" "}
          </svg>{" "}
        </Link>
        <ModeToggle />
      </div>
      <p className="text-md">{myTime}</p>
    </div>
  );
}
