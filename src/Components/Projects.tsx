"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
// icons
import Next from "../../public/logos--nextjs-icon.svg";
import Gemini from "../../public/gemini.svg";
import Drizzle from "../../public/drizzle-orm_dark.svg";
import Neon from "../../public/neon.svg";
import Auth0 from "../../public/auth0.svg";
import Deno from "../../public/deno_dark.svg";
import Zustand from "../../public/devicon--zustand.svg";
import Express from "../../public/expressjs_dark.svg";
import Hono from "../../public/hono.svg";
import Fresh from "../../public/logos--fresh.svg";
import Sanity from "../../public/logos--sanity.svg";
import MUI from "../../public/materialui.svg";
import MongoDB from "../../public/mongodb.svg";
import Node from "../../public/nodejs.svg";
import ReactJS from "../../public/react_dark.svg";
import SQLite from "../../public/sqlite.svg";
import Tailwind from "../../public/tailwindcss.svg";
import Langchain from "../../public/simple-icons--langchain (3).svg";
import MovingGithub from "../../public/line-md--github-loop (1).svg";

interface Project {
  title: string;
  date: string;
  about: string;
  url: string;
  techStack: StaticImageData[];
  liveLink: string;
}

const Projects = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    };

    const addMouseMoveListeners = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
        }
      });
    };

    const removeMouseMoveListeners = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", (e) =>
            handleMouseMove(e as MouseEvent, card)
          );
        }
      });
    };

    addMouseMoveListeners();

    return () => {
      removeMouseMoveListeners();
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Piplup",
      date: "2024",
      about: "A simple AI integrated Quiz App",
      url: "https://github.com/nextpointer/piplup",
      techStack: [Next, Neon, Gemini, Langchain, Drizzle, Auth0],
      liveLink: "https://piplup-quiz.vercel.app/"
    },
    {
      title: "Mind Matrix",
      date: "2023",
      about: "A Mental Health Management platform",
      url: "https://github.com/nextpointer/Mind-Matrix",
      techStack: [ReactJS, MUI, Gemini, Zustand, Node, MongoDB, Express],
      liveLink: "https://mindrix.vercel.app/"
    },
    {
      title: "RYIT",
      date: "2023",
      about: "An educational course and blog management platform",
      url: "https://github.com/nextpointer/RYATM",
      techStack: [Next, Sanity],
      liveLink: "https://www.theryit.com/"
    },
    {
      title: "SplitIt",
      date: "2024",
      about: "A simple money-splitting app",
      url: "https://github.com/nextpointer/SplitIt",
      techStack: [ReactJS, Hono, SQLite, Tailwind],
      liveLink: "https://github.com/nextpointer/SplitIt"
    },
    {
      title: "Mr. Calculator",
      date: "2022",
      about: "A large number calculator",
      url: "https://github.com/nextpointer/Mr.-Calculator",
      techStack: [Fresh, Deno],
      liveLink: "https://mr-calculator.deno.dev/"
    },
  ];

  return (
    <div className="flex flex-col w-full mt-2">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
          className="relative flex flex-col w-full mb-4 ease-linear rounded-lg group border border-gray-800 p-4 hover:before:opacity-100 before:content-[''] before:opacity-0 before:transition-opacity before:duration-500 before:absolute before:inset-0 before:rounded-lg before:pointer-events-none before:bg-[radial-gradient(300px_circle_at_var(--x,_100px)_var(--y,_100px),rgba(48, 92, 163, 0.1)]"
        >
          <div className="flex flex-row w-full justify-between">
            <h3 className="flex items-center gap-1">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                {project.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </h3>
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <Image 
                src={MovingGithub} 
                alt="GitHub" 
                width={24} 
                height={24} 
                className="h-5 w-5"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">{project.about}</p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <Image
                    key={techIndex}
                    src={tech}
                    alt={`${project.title} tech stack icon`}
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400">{project.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
