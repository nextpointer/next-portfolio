"use client";

import Projects from "@/components/Projects";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Arrow from "@/components/icons/Arrow";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { GithubLoopIcon } from "@/components/icons/movingGithub";
import { Email } from "@/components/icons/Email";
import { Me } from "@/components/icons/Me";
import { Design } from "@/components/icons/Design";
import { Debug } from "@/components/icons/Debug";
import { Doing } from "@/components/icons/Doing";
import { Work } from "@/components/icons/Work";
import { Done } from "@/components/icons/Done";

export default function Home() {
  // to store the counts temply
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const hasIncremented = sessionStorage.getItem("hasIncrementedVisit");

    if (!hasIncremented) {
      fetch("/api/visits", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setVisits(data.visits))
        .catch(console.error);

      sessionStorage.setItem("hasIncrementedVisit", "true");
    } else {
      fetch("/api/visits", { method: "GET" })
        .then((res) => res.json())
        .then((data) => setVisits(data.visits))
        .catch(console.error);
    }
  }, []);

  return (
    <>
      <div className="flex items-center w-[100%] justify-between group">
        <div className="flex flex-row gap-3 ">
          <div className="h-8 flex flex-row gap-1 items-center ">
            <h1 className="text-3xl font-normal flex flex-col items-start justify-start">
              {" "}
              <span className="text-[12px] text-sidebar-ring flex flex-row gap-1 items-center justify-center">
                <Me className="h-4 w-4" />
                I&apos;m
              </span>{" "}
              nextpointer
            </h1>
            {/*<Tooltip>
              <TooltipTrigger asChild>
                <span className="invisible hover:visible group-hover:visible cursor-help transition-opacity duration-200 border rounded-full px-2.5 py-0.5 ml-1">
                  ?
                </span>
              </TooltipTrigger>
              <TooltipContent
                className="max-w-[620px] rounded-md text-normral-text-color p-4 py-3 pl-1 bg-background"
                side="bottom"
                sideOffset={0}
                alignOffset={-185}
                align="start"
              >
                <p className="mt-4 text-sm leading-6">
                  <span className="text-heading-text-color font-semibold">
                    @nextpointer
                  </span>{" "}
                  is my alias on the internet — that references the idea of
                  staying flexible, connected, and always moving forward.
                </p>
              </TooltipContent>
            </Tooltip>*/}
          </div>
        </div>
        <div className="relative">
          <Link
            className="flex items-center justify-center gap-2 border px-2 sm:px-4 py-2 rounded-xs"
            href={"mailto:maitysurajit0901@gmail.com"}
            aria-label="Available for hire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
            </span>
            <span className="text-heading-text-color text-[0.6rem] md:text-[0.8rem] leading-3 hidden sm:block">
              Available for hire
            </span>
          </Link>
          <Arrow
            height={40}
            width={40}
            className="absolute -left-12 -top-5 rotate-90"
          />
        </div>
      </div>
      <p className="mt-10 text-sm leading-relaxed">
        <span className="text-heading-text-color font-medium">
          Full-stack dev?
        </span>{" "}
        Yuppp!! But what&apos;s the real gig? It&apos;s not just about writing
        code -- it&apos;s about building things that solve real problems.
        <span className="block md:inline-block mt-2 md:m-0 p-0">
          You&apos;ll find me just as deep in{" "}
          <span className="text-heading-text-color font-medium inline-block ">
            Design (<Design className="h-4 w-4 inline-block" />)
          </span>{" "}
          as i am in{" "}
          <span className="text-heading-text-color font-medium inline-block">
            Debugging (<Debug className="h-4 w-4 inline-block" />)
          </span>
          .
        </span>
      </p>
      <p className="mt-4 text-sm leading-relaxed">
        Now building{" "}
        <Link
          href={"https://github.com/nextpointer/postori"}
          target="_blank"
          rel="noopener noreferrer"
          className="border px-2 py-[2px] text-heading-text-color font-medium dark:font-light currentProject relative overflow-hidden rounded-xs isolate inline-block align-middle"
        >
          <span className="relative z-10 flex flex-row gap-1 justify-center items-center">
            Postori <Email className="h-4 w-4 " />
          </span>
        </Link>{" "}
        - a little{" "}
        <span className="text-heading-text-color font-medium">Open source</span>{" "}
        webmail client.
      </p>
      <h2 className="mt-6 font-semibold text-base text-subheading-text-color/90 dark:text-subheading-text-color flex flex-row justify-start items-center gap-2">
        <Doing className="h-4 w-4 inline-block" /> What i&apos;m up to
      </h2>
      <p className="mt-1 text-sm leading-relaxed">
        still exploring, still figuring things out — and loving it {":>"}
      </p>
      <div className="mt-8 flex justify-between items-center flex-row w-full">
        <h2 className="font-semibold text-base  text-subheading-text-color/90 dark:text-subheading-text-color flex flex-row justify-start items-center gap-2">
          <Work className="h-4 w-4 inline-block text-primary" /> My works
        </h2>
        <Link
          className=" flex flex-row items-center text-sm text-normal-text-color gap-1 underline underline-offset-2 decoration-primary"
          href="https://nextpointer.notion.site/1886b3ab41598025aad0da5600f50062?v=1886b3ab41598088b63a000ce32bf7dc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all projects"
        >
          more
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
      <Projects />

      <h2 className="mt-6 mb-4 font-semibold text-base  text-subheading-text-color/90 dark:text-subheading-text-color flex flex-row gap-2 justify-center items-center">
        <Done className="h-4 w-4 inline-block" /> Experience
      </h2>
      <div className="w-full flex justify-between items-center relative p-2 group border border-transparent hover:border">
        <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all"></span>
        <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all"></span>
        <span className="text-md flex flex-col md:flex-row md:gap-6 justify-center items-start gap-2">
          Math Coders
          <span className="font-light italic bg-muted py-1 px-2 rounded-md text-xs ">
            Developer
          </span>
        </span>
        <span className="font-light text-sm max-w-[50%] md:max-w-full">
          Jun 2024 - Aug 2024
        </span>
      </div>
      <div className="flex flex-col w-full items-center mt-4">
        <h2 className="mt-8 font-bold text-2xl md:text-3xl text-heading-text-color text-center w-full">
          Let&apos;s work together
        </h2>
        <span className="mt-2 text-sm leadin-5 mb-6 w-full text-center">
          {[
            "The greatest ideas come from",
            "collaboration. Feel free to reach out :)",
          ].map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </span>
        <Link
          href="mailto:maitysurajit0901@gmail.com?subject=Hello"
          className="mb-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-sidebar-border p-3 text-md rounded-xs flex flex-row items-center justify-center gap-2 cursor-pointer text-heading-text-color">
            Get in touch <ArrowRight height={15} width={15} />
          </button>
        </Link>
      </div>
      <div className="w-full px-4 flex justify-between flex-row items-center pb-4">
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
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/surajitmaity3112/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              ></path>
            </svg>
          </Link>
          <ModeToggle />
        </div>
        <p className="text-md">
          {visits !== null ? (
            <>
              <span className="text-heading-text-color ">{visits}</span>{" "}
              <span className="text-xs">visits so far</span>
            </>
          ) : (
            <>
              000 <span className="text-xs">visits so far</span>
            </>
          )}
        </p>
      </div>
    </>
  );
}

export const dynamic = "force-static";
