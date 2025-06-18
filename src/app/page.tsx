import Projects from "@/components/Projects";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center w-[100%] justify-between">
        <div className="mt-8 flex flex-row gap-3">
          <Image
            alt="icon"
            src={"/nextpointer.png"}
            height={"30"}
            width={"30"}
          />
          <div className="h-8 overflow-hidden">
            <h1 className="text-2xl transition-transform duration-300 hover:-translate-y-8 text-heading-text-color">
              Surajit Maity <br></br> nextpointer
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="relative flex size-3 mr-4 sm:mr-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
          </span>
          <span className="text-heading-text-color text-[0.6rem] md:text-[0.8rem] leading-3 hidden sm:block">
            Open to work
          </span>
        </div>
      </div>
      <p className="mt-6 text-sm leading-6">
        I&apos;m full-stack developer from India, love to explore, build things
        and solving problems.
      </p>
      <p className="mt-4 text-sm leading-6">
        Now building{" "}
        <Link
          href={"https://github.com/nextpointer/careflow"}
          className="underline decoration-gray-500 underline-offset-3 text-subheading-text-color"
        >
          careflow{" "}
        </Link>
        💊- a secure healthcare system that enables efficient patient management
        and communication.
      </p>
      <h2 className="mt-6 font-bold text-base text-heading-text-color">
        What i&apos;m up to
      </h2>
      <p className="mt-1 text-sm leading-5">
        CS undergradute. Still finding who am i {":}"}
      </p>
      <h2 className="mt-4 font-bold text-base text-heading-text-color">My works 🍀</h2>
      <Projects />
      <Link
        className=" flex flex-row items-center underline  decoration-gray-500 underline-offset-2 text-primary"
        href="https://spotless-zebra-fc0.notion.site/Surajit-s-Projects-1886b3ab415980eaa2c2e2ecaf547ca6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View all projects"
      >
        View all projects
        <ArrowUpRight className="h-4" aria-hidden="true" />
      </Link>
      <h2 className="mt-6 font-bold text-base text-heading-text-color">Experience</h2>
      <div className=" w-full flex justify-between items-center">
        <span className="m-1 ml-0 text-sm">
          Math Coders
          <span className="font-light italic bg-muted ml-4 p-2 rounded-4xl text-sm">
            Developer
          </span>
        </span>
        <span className="font-light text-sm max-w-28 md:max-w-full">
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
        >
          <button className="border border-sidebar-border p-3 text-md rounded-2xl flex flex-row items-center justify-center gap-2 cursor-pointer text-heading-text-color">Get in touch <ArrowRight height={15} width={15}/></button>
        </Link>
      </div>
    </>
  );
}

export const dynamic = "force-static";
