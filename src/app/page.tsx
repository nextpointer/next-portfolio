import Projects from "@/Components/Projects";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="h-dvh flex flex-col items-center bg-[#09090b] text-[#818181] overflow-auto ">
      <div className="p-4 w-full max-w-[650px] flex items-start flex-col pt-4 md:pt-8">
      <div className="flex items-center w-[100%] justify-between ">
        <div className="h-8 overflow-hidden">
          <h1 className="text-2xl transition-transform duration-300 hover:-translate-y-8 text-[#d6d6d6]">
            Surajit Maity <br></br> nextpointer
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-100 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          <span className="text-red-100 text-[0.8rem] leading-3">Open to work</span>
        </div>
      </div>
      <p className="mt-2">
        I&apos;m full-stack developer from India, love to explore, build things and solving problems
      </p>
      <p className="mt-2">
        Now building <Link href={"https://piplup-quiz.vercel.app"} className="text-[#d6d6d6] underline decoration-gray-500 underline-offset-3">piplup</Link> - a AI integrated quiz app that enable users to create quizzes using AI and participate in quizzes 
      </p>
      <h2 className="mt-4 font-bold text-base text-[#d6d6d6]">What i&apos;m up to</h2>
      <p className="mt-2">CS undergradute. Still finding who am i {":}"}</p>
      <h2 className="mt-4 font-bold text-base text-[#d6d6d6]">My Works</h2>
      <Projects/>
      <Link
        className=" flex flex-row items-center underline  decoration-gray-500 underline-offset-2 mt-2 text-green-500"
        href="https://spotless-zebra-fc0.notion.site/Surajit-s-Projects-1886b3ab415980eaa2c2e2ecaf547ca6"
      >
        See More<ArrowUpRight className="h-4"/>
      </Link>
      <h2 className="mt-4 font-bold text-base text-[#d6d6d6]">Experience</h2>
      <div className=" w-full flex justify-between items-center">
        <span className="m-2 ml-0">
          Math Coders Pvt. Ltd
          <span className="font-light italic">
            &nbsp;&nbsp;&nbsp;&nbsp;Developer
          </span>
        </span>
        <span className="md:text-base font-light text-[15px]">
          Jun 2024 - Aug 2024
        </span>
      </div>
      <h2 className="mt-4 font-bold text-base text-[#d6d6d6]">Contact Me</h2>
      <div className="w-full mt-2 flex justify-between items-center flex-row">
        <Link
          href="mailto:maitysurajit0901@gmail.com?subject=Hello"
          className="italic underline decoration-gray-500 underline-offset-2 hover:text-[#d6d6d6]"
        >
          maitysurajit0901@gmail.com
        </Link>
        <div className="flex gap-2">
          <Link href="https://github.com/nextpointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github hover:text-[#d6d6d6]"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link href="https://x.com/nextpointerX">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" hover:text-[#d6d6d6]"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/surajitmaity3112/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin  hover:text-[#d6d6d6]"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
      <span className="mt-2">
        The greatest ideas come from collaboration. Feel free to reach out{" "}
        {":)"}
      </span>
      </div>
    </main>
  );
}

export const dynamic = "force-static"; 