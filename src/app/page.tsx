import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Arrow from "@/components/icons/Arrow";
import { Me } from "@/components/icons/Me";
import { Design } from "@/components/icons/Design";
import { Debug } from "@/components/icons/Debug";
import { Doing } from "@/components/icons/Doing";
import { Work } from "@/components/icons/Work";
import { Done } from "@/components/icons/Done";
import QuickButtons from "@/components/QuickButtons";
import { Ship } from "@/components/Ship";
import { Experience } from "@/components/Experience";
import { FooterSocial } from "@/components/FooterSocial";

export default function Home() {

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
        code; it&apos;s about building things that solve real problems.
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
          href={"https://github.com/nextpointer"}
          target="_blank"
          rel="noopener noreferrer"
          className="border px-2 py-[2px] text-heading-text-color font-medium dark:font-light currentProject relative overflow-hidden rounded-xs isolate inline-block align-middle"
        >
          <span className="relative z-10 flex flex-row gap-1 justify-center items-center">
            &gt;_&lt;
          </span>
        </Link>{" "}
        - Someting bigger is{" "}
        <span className="text-heading-text-color font-medium">
          coming soon.
        </span>
      </p>

      <h2 className="mt-6 font-semibold text-base text-subheading-text-color/90 dark:text-subheading-text-color flex flex-row justify-start items-center gap-2">
        <Doing className="h-4 w-4 inline-block" /> What i&apos;m up to
      </h2>
      <p className="mt-1 text-sm leading-relaxed">
        still exploring, still figuring things out — and loving it {":>"}
      </p>

      <QuickButtons />

      <div className="mt-8 flex justify-between items-center flex-row w-full">
        <h2 className="font-semibold text-base  text-subheading-text-color/90 dark:text-subheading-text-color flex flex-row justify-start items-center gap-2">
          <Work className="h-4 w-4 inline-block text-primary" /> My works
        </h2>
        {/*<Link
          className=" flex flex-row items-center text-sm text-normal-text-color gap-1 underline underline-offset-2 decoration-primary"
          href="https://nextpointer.notion.site/1886b3ab41598025aad0da5600f50062?v=1886b3ab41598088b63a000ce32bf7dc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all projects"
        >
          more
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>*/}
      </div>
      {/*shipping projects*/}
      <Ship />

      <h2 className="mt-6 mb-4 font-semibold text-base  text-subheading-text-color/90 dark:text-subheading-text-color flex flex-row gap-2 justify-center items-center">
        <Done className="h-4 w-4 inline-block" /> Experience
      </h2>
      <Experience />
      {/*<div className="w-full flex-col justify-center items-center relative p-2 group border border-transparent hover:border">
        <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all"></span>
        <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all"></span>
        <div className="flex justify-between items-center">
          <span className="text-md flex flex-col md:flex-row md:gap-3 justify-center items-start gap-2">
            <span className="flex flex-col justify-center items-start gap-1 ">
              Unified Mentor
              <span className="font-light text-[10px] underline decoration-1 underline-offset-2 decoration-primary">
                Fullstack Developer
              </span>
            </span>

            <span className="font-light italic bg-muted py-1 px-2 rounded-md text-xs ">
              intern
            </span>
          </span>
          <span className="font-light text-xs max-w-[50%] md:max-w-full">
            Jan 2025 - June 2025
          </span>
        </div>
        <ul className="list-disc pl-4 pt-4 text-[10px] flex flex-col gap-2">
          <li>
            Optimized development by creating clean, responsive UIs and fully
            functional components using modern technologies.
          </li>
          <li className="">
            Improved website performance and user experience through efficient
            backend integration and streamlined deployments.
          </li>
        </ul>
      </div>
      <div className="w-full flex-col justify-center items-center relative p-2 group border border-transparent hover:border mt-2">
        <span className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-border group-hover:border-primary group-hover:top-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -top-1 -right-1 w-1 h-1 border-t border-r border-border group-hover:border-primary group-hover:top-0 group-hover:right-0 transition-all"></span>
        <span className="absolute -bottom-1 -left-1 w-1 h-1 border-b border-l border-border group-hover:border-primary group-hover:bottom-0 group-hover:left-0 transition-all"></span>
        <span className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-border group-hover:border-primary group-hover:bottom-0 group-hover:right-0 transition-all"></span>
        <div className="flex justify-between items-center">
          <span className="text-md flex flex-col md:flex-row md:gap-1 justify-center items-start gap-2">
            <span className="flex flex-col justify-center items-start gap-1 ">
              Math Coders
              <span className="font-light text-[10px] underline decoration-1 underline-offset-2 decoration-primary">
                Fullstack Developer
              </span>
            </span>

            <span className="font-light italic bg-muted py-1 px-2 rounded-md text-xs ">
              intern
            </span>
          </span>
          <span className="font-light text-xs max-w-[50%] md:max-w-full">
            Jun 2024 - Aug 2024
          </span>
        </div>
        <ul className="list-disc pl-4 pt-4 text-[10px] flex flex-col gap-2">
          <li>
            Developed a scalable educational platform using Next.js and Tailwind
            CSS, driving a 40% increase in user interactions.
          </li>
          <li className="">
            Automated administrative workflows via Sanity CMS, reducing data
            processing time by 20% and eliminating manual errors.
          </li>
        </ul>
      </div>*/}

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
      <FooterSocial/>


    </>
  );
}

export const dynamic = "force-static";
