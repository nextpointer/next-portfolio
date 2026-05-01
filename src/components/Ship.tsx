"use client";
import { SharedLayoutBackground } from "@/components/SharedBackground";
import Link from "next/link";
import React from "react";

// App icons
import { Quiz } from "./icons/Quiz";
import { Time } from "./icons/Time";
import { Financial } from "./icons/Financial";
import { Note } from "./icons/Note";
import { Maths } from "./icons/Math";

type IconFC = React.FC<React.SVGProps<SVGSVGElement>>;

interface Project {
  title: string;
  description: string;
  href: string;
  liveLink: string;
  appIcon: IconFC;
  status: "Shipping" | "Shipped";
}

const PROJECTS: Project[] = [
  {
    title: "Expense Op",
    description: "Expense management tool",
    href: "https://expense.nextpointer.dev",
    liveLink: "https://expense.nextpointer.dev",
    appIcon: Financial,
    status: "Shipping",
  },
  {
    title: "Piplup",
    description: "AI integrated quiz app",
    href: "https://github.com/nextpointer/piplup",
    liveLink: "https://piplup-quiz.vercel.app/",
    appIcon: Quiz,
    status: "Shipped",
  },
  {
    title: "N0T3S",
    description: "A beautiful notes app",
    href: "https://github.com/nextpointer/n0t3s",
    liveLink: "https://notes.nextpointer.dev",
    appIcon: Note,
    status: "Shipped",
  },
  {
    title: "Timer",
    description: "A minimalist timer app",
    href: "https://github.com/nextpointer/next-timer",
    liveLink: "https://next-timer.netlify.app/",
    appIcon: Time,
    status: "Shipped",
  },
  {
    title: "Mr. Calculator",
    description: "A large number calculator",
    href: "https://github.com/nextpointer/Mr.-Calculator",
    liveLink: "https://mr-calculator.deno.dev/",
    appIcon: Maths,
    status: "Shipped",
  },
];

export function Ship() {
  return (
    <div className="flex w-full flex-col mt-4">
      <SharedLayoutBackground>
        {PROJECTS.map(
          (
            { title, description, liveLink, appIcon: AppIcon, status },
            index,
          ) => {
            const showStatus =
              index === 0 || PROJECTS[index - 1].status !== status;

            return (
              <Link
                key={index}
                href={liveLink}
                target="_blank"
                className="flex w-full flex-row items-center gap-2 py-2 text-left focus:outline-none group"
              >
                <div className="w-20 shrink-0 hidden sm:block">
                  {showStatus && (
                    <span className="text-xs font-medium text-muted-foreground/60">
                      {status}
                    </span>
                  )}
                </div>

                <AppIcon className="size-5 text-foreground/70" />

                <span className="shrink-0 w-30 text-xs font-medium text-foreground ml-3 truncate">
                  {title}
                </span>

                <span className="ml-auto truncate text-[10px] text-muted-foreground ">
                  {description}
                </span>
              </Link>
            );
          },
        )}
      </SharedLayoutBackground>
    </div>
  );
}
