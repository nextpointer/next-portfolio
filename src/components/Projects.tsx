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

interface Project {
  title: string;
  date: string;
  about: string;
  url: string;
  techStack: string[];
  liveLink: string;
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
};

const projects: Project[] = [
  {
    title: "Piplup",
    date: "2025",
    about: "🌟 A simple AI integrated Quiz App 📚",
    url: "https://github.com/nextpointer/piplup",
    techStack: ["Next", "Neon", "Gemini", "Langchain", "Drizzle", "Auth0"],
    liveLink: "https://piplup-quiz.vercel.app/",
  },
  {
    title: "SplitIt",
    date: "2024",
    about: "💸 A simple money-splitting app 🔪",
    url: "https://github.com/nextpointer/SplitIt",
    techStack: ["ReactJS", "Hono", "SQLite", "Tailwind"],
    liveLink: "https://github.com/nextpointer/SplitIt",
  },
  {
    title: "Mind Matrix",
    date: "2023",
    about: "🧠 A Mental Health Management platform",
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
  },
  {
    title: "RYIT",
    date: "2023",
    about: "🏫 An educational course and blog management platform 🚀",
    url: "https://github.com/nextpointer/RYATM",
    techStack: ["Next", "Sanity"],
    liveLink: "https://www.theryit.com/",
  },
  {
    title: "Mr. Calculator",
    date: "2022",
    about: "🔢 A large number calculator 🤯",
    url: "https://github.com/nextpointer/Mr.-Calculator",
    techStack: ["Fresh", "Deno"],
    liveLink: "https://mr-calculator.deno.dev/",
  },
];

const Projects = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handlers: ((e: MouseEvent) => void)[] = [];

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      };

      handlers[index] = handler;
      card.addEventListener("mousemove", handler);
    });

    return () => {
      cardsRef.current.forEach((card, index) => {
        if (card && handlers[index]) {
          card.removeEventListener("mousemove", handlers[index]);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col w-full mt-2">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          className="glow-hover border border-sidebar-border rounded-lg p-4 mb-4 group"
        >
          <div className="flex flex-row w-full justify-between">
            <h3 className="flex items-center gap-1 text-md font-semibold text-subheading-text-color">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
              >
                {project.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
                      className="mt-1 text-[10px] flex flex-row items-center justify-center pl-6 pr-6 pt-1 pb-1 gap-2 bg-muted border border-sidebar-border rounded-md w-auto"
                    >
                      {typeof Icon === "function" ? (
                        <Icon className="h-5 w-5" />
                      ) : (
                        <Image
                          src={Icon}
                          alt={`${tech} logo used in ${project.title}`}
                          width={24}
                          height={24}
                          className="h-5 w-5 object-contain"
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
      ))}
    </div>
  );
};

export default Projects;
