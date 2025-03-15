import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-8 xl:p-24 xl:pl-[32rem] bg-[#09090b] text-white">
      <div className="flex items-center w-[100%] md:w-[46%] justify-between ">
        <h1 className="text-2xl">Surajit Maity</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-100 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          <span>Open to work</span>
        </div>
      </div>
      <span className="mt-2 ">
        I am full-stack developer, love to explore and build things
      </span>
      <h2 className="mt-4 font-bold text-base">What i&apos;m up to</h2>
      <p className="ml-4 mt-2">CS undergradute.Still finding who am i {":}"}</p>
      <h2 className="mt-4 font-bold text-base">My Works</h2>
      <ul className="list-disc ml-8 mt-2 underline decoration-gray-500 underline-offset-2">
        <li>
          <Link href="https://github.com/nextpointer/piplup">
            Piplup - AI integrated Quiz App
          </Link>
        </li>
        <li>
          <Link href="https://github.com/nextpointer/Mind-Matrix">
            Mind Matrix - Mental Health Management platform
          </Link>
        </li>
        <li>
          <Link href="https://github.com/nextpointer/RYATM">
            RYIT - A Educational course platform
          </Link>
        </li>
        <li>
          <Link href="https://github.com/nextpointer/SplitIt">
            SplitIt - Money spliting App
          </Link>
        </li>
        <li>
          <Link href="https://github.com/nextpointer/Mr.-Calculator">
            Mr. Calculator - Large Number Calculator
          </Link>
        </li>
      </ul>
      <Link
        className="ml-8 underline  decoration-gray-500 underline-offset-2 mt-2"
        href="https://spotless-zebra-fc0.notion.site/Surajit-s-Projects-1886b3ab415980eaa2c2e2ecaf547ca6"
      >
        See More...
      </Link>
      <h2 className="mt-4 font-bold text-base">Experience</h2>
      <div className="md:w-[50%] w-full flex justify-between items-center">
        <span className="m-2 ml-4">
          Math Coders Pvt. Ltd
          <span className="font-light italic">
            &nbsp;&nbsp;&nbsp;&nbsp;Developer
          </span>
        </span>
        <span className="md:text-base font-light text-[15px]">
          Jun 2024 - Aug 2024
        </span>
      </div>
      <h2 className="mt-4 font-bold text-base">Contact Me</h2>
      <div className="w-full xl:w-[50%] mt-2 flex justify-between items-center flex-row">
        <Link
          href="mailto:maitysurajit0901@gmail.com?subject=Hello"
          className="ml-4 italic underline decoration-gray-500 underline-offset-2"
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/necstpointer/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
      <span className="ml-4 mt-2">
        The greatest ideas come from collaboration.Feel free to reach out {":)"}
      </span>
    </main>
  );
}
