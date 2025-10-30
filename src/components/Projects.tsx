"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

// Icons
import Next from "../../public/logos--nextjs-icon.svg";
import Gemini from "../../public/gemini.svg";
import Drizzle from "../../public/drizzle-orm_dark.svg";
import Neon from "../../public/neon.svg";
import { Auth0 } from "./icons/Auth0";
// import Deno from "../../public/deno_dark.svg";
import Zustand from "../../public/devicon--zustand.svg";
import { Express } from "./icons/Express";
import Hono from "../../public/hono.svg";
import Fresh from "../../public/logos--fresh.svg";
import Sanity from "../../public/logos--sanity.svg";
import MUI from "../../public/materialui.svg";
import MongoDB from "../../public/mongodb.svg";
import Node from "../../public/nodejs.svg";
import ReactJS from "../../public/react_dark.svg";
import SQLite from "../../public/sqlite.svg";
import Tailwind from "../../public/tailwindcss.svg";
import { Langchain } from "./icons/Langchain";
import { GithubLoopIcon } from "./icons/movingGithub";
import Deno from "./icons/Deno";
import { Motion } from "./icons/Motion";
import { Quiz } from "./icons/Quiz";
import { Time } from "./icons/Time";
import { Financial } from "./icons/Financial";
import { Note } from "./icons/Note";
import { Mood } from "./icons/Mood";
import { Math } from "./icons/Math";

interface Project {
  title: string;
  date: string;
  about: string;
  url: string;
  techStack: string[];
  liveLink: string;
  icon: string;
}

type IconType = StaticImageData | React.FC<React.SVGProps<SVGSVGElement>>;
interface TechIcons {
  [key: string]: IconType;
}

const techIcons: TechIcons = {
  Next: Next,
  ReactJS: ReactJS,
  Neon: Neon,
  Gemini: Gemini,
  Langchain: Langchain,
  Drizzle: Drizzle,
  Auth0: Auth0,
  MUI: MUI,
  Zustand: Zustand,
  Node: Node,
  MongoDB: MongoDB,
  Express: Express,
  Sanity: Sanity,
  Hono: Hono,
  SQLite: SQLite,
  Tailwind: Tailwind,
  Fresh: Fresh,
  Deno: Deno,
  Motion: Motion,

  // for projects
  Quiz: Quiz,
  Time: Time,
  Financial: Financial,
  Note: Note,
  Mood: Mood,
  Math: Math,
};

const projects: Project[] = [
  {
    title: "piplup",
    date: "2025",
    about: "AI integrated quiz app",
    url: "https://github.com/nextpointer/piplup",
    techStack: ["Next", "Neon", "Gemini", "Langchain", "Drizzle", "Auth0"],
    liveLink: "https://piplup-quiz.vercel.app/",
    icon: "Quiz",
  },
  {
    title: "n0t3s",
    date: "2025",
    about: "A beautiful notes app",
    url: "https://github.com/nextpointer/n0t3s",
    techStack: ["Next", "Gemini"],
    liveLink: "https://n0t3s.vercel.app/",
    icon: "Note",
  },
  {
    title: "timer",
    date: "2025",
    about: "A minimalist timer app",
    url: "https://github.com/nextpointer/next-timer",
    techStack: ["ReactJS", "Motion"],
    liveLink: "https://next-timer.netlify.app/",
    icon: "Time",
  },
  {
    title: "splitit",
    date: "2024",
    about: "Simple money-splitting app",
    url: "https://github.com/nextpointer/SplitIt",
    techStack: ["ReactJS", "Hono", "SQLite", "Tailwind"],
    liveLink: "https://github.com/nextpointer/SplitIt",
    icon: "Financial",
  },
  {
    title: "mind-matrix",
    date: "2023",
    about: "Mental health management platform",
    url: "https://github.com/nextpointer/Mind-Matrix",
    techStack: [
      "ReactJS",
      "MUI",
      "Gemini",
      "Zustand",
      "Node",
      "MongoDB",
      "Express",
    ],
    liveLink: "https://mindrix.vercel.app/",
    icon: "Mood",
  },
  {
    title: "mr. calculator",
    date: "2022",
    about: "A large number calculator ",
    url: "https://github.com/nextpointer/Mr.-Calculator",
    techStack: ["Fresh", "Deno"],
    liveLink: "https://mr-calculator.deno.dev/",
    icon: "Math",
  },
];

const Projects = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect(() => {
  //   const handlers: ((e: MouseEvent) => void)[] = [];

  //   cardsRef.current.forEach((card, index) => {
  //     if (!card) return;

  //     const handler = (e: MouseEvent) => {
  //       const rect = card.getBoundingClientRect();
  //       const x = e.clientX - rect.left;
  //       const y = e.clientY - rect.top;
  //       card.style.setProperty("--x", `${x}px`);
  //       card.style.setProperty("--y", `${y}px`);
  //     };

  //     handlers[index] = handler;
  //     card.addEventListener("mousemove", handler);
  //   });

  //   return () => {
  //     cardsRef!.current.forEach((card, index) => {
  //       if (card && handlers[index]) {
  //         card.removeEventListener("mousemove", handlers[index]);
  //       }
  //     });
  //   };
  // }, []);

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
      {projects.map((project, index) => {
        const ProjectIcon = techIcons[project.icon];
        return (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="border border-sidebar-border rounded-xs p-4 w-full relative group  hover:border-dashed hover:bg-foreground/3 hover:rounded-none hover:animate-border-blink"
          >
            <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all group-hover:animate-outside-border-blink"></span>
            <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all group-hover:animate-outside-border-blink"></span>
            <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all group-hover:animate-outside-border-blink"></span>
            <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all group-hover:animate-outside-border-blink"></span>
            <div className="flex flex-row w-full justify-between">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-subheading-text-color">
                {typeof ProjectIcon === "function" ? (
                  <ProjectIcon className="h-4 w-4 text-foreground/50 " />
                ) : (
                  <></>
                )}
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 transition-opacity duration-200" />
                </Link>
              </h3>
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code of ${project.title} on GitHub`}
              >
                <GithubLoopIcon />
              </Link>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-normal-text-color">{project.about}</p>
              <div className="flex flex-row justify-between items-center gap-8 md:gap-14 ">
                <div className="flex flex-row gap-2 overflow-x-scroll no-scrollbar ">
                  {project.techStack.map((tech, techIndex) => {
                    const Icon = techIcons[tech];
                    return (
                      <span
                        key={techIndex}
                        className="mt-1 text-[10px] text-subheading-text-color-text-color flex flex-row items-center justify-center px-4 py-1 gap-2 bg-foreground/5 rounded-xs w-auto font-mono"
                      >
                        {typeof Icon === "function" ? (
                          <Icon className="h-3 w-3 " />
                        ) : (
                          <Image
                            src={Icon}
                            alt={`${tech} logo used in ${project.title}`}
                            width={10}
                            height={10}
                            className="h-3 w-3 object-contain"
                            loading="lazy"
                          />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <span className="text-sm text-normral-text-color">
                  {project.date}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
