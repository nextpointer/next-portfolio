import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import {
  SEO_KEYWORDS,
  AUTHOR,
  CREATOR,
  DOMAIN,
  SITE_NAME,
  OG_IMAGE,
  OG_TITLE,
  OG_DESCRIPTION,
  TWITTER_CREATOR,
  TWITTER_DESCRIPTION,
  TWITTER_TITLE,
} from "./lib/content";
import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { GithubLoopIcon } from "@/components/icons/movingGithub";
import ClientWrapper from "@/components/ClientWrapper";
import DynamicTitle from "@/components/useDynamicTitle";

export const metadata: Metadata = {
  title: {
    default: "Surajit Maity [nextpointer]",
    template: `%s | Surajit Maity [nextpointer]`,
  },
  description: OG_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: AUTHOR }],
  creator: CREATOR,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: DOMAIN,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Surajit Maity Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TWITTER_TITLE,
    description: TWITTER_DESCRIPTION,
    creator: TWITTER_CREATOR,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const GeistMono = localFont({
  src: "./Fonts/GeistMonoVF.woff",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistMono.className} suppressHydrationWarning>
      <body>
        <ClientWrapper>
          <DynamicTitle />
        </ClientWrapper>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-dvh flex flex-col items-center bg-background text-normral-text-color overflow-auto ">
            <div className="p-4 w-full max-w-[650px] flex items-start flex-col pt-4 md:pt-8 relative ">
              <div
                id="sticky-nav"
                className="sticky left-0 top-0 flex flex-row gap-4 z-50 w-full items-center justify-between rounded-sm backdrop-filter backdrop-blur-3xl bg-opacity-30 text-subheading-text-color p-1.5 mb-8"
              >
                <div className="flex flex-row gap-4">
                  <TransitionLink href="/" ariaLabel="Home">
                    <div className="relative">
                      <h2 className="text-[12px] px-2 py-1">Home</h2>
                      <span className="absolute top-0 left-0 w-1 h-1 border-t-1 border-l-1 border-zinc-500 hover:border-t-rounded"></span>
                      <span className="absolute top-0 right-0 w-1 h-1 border-t-1 border-r-1 border-zinc-500"></span>
                      <span className="absolute bottom-0 left-0 w-1 h-1 border-b-1 border-l-1 border-zinc-500"></span>
                      <span className="absolute bottom-0 right-0 w-1 h-1 border-b-1 border-r-1 border-zinc-500"></span>
                    </div>
                  </TransitionLink>

                  <TransitionLink href="/blog" ariaLabel="Blog">
                    <div className="relative">
                      <h2 className="text-[12px] px-2 py-1">Blog</h2>
                      <span className="absolute top-0 left-0 w-1 h-1 border-t-1 border-l-1 border-zinc-500"></span>
                      <span className="absolute top-0 right-0 w-1 h-1 border-t-1 border-r-1 border-zinc-500"></span>
                      <span className="absolute bottom-0 left-0 w-1 h-1 border-b-1 border-l-1 border-zinc-500"></span>
                      <span className="absolute bottom-0 right-0 w-1 h-1 border-b-1 border-r-1 border-zinc-500"></span>
                    </div>
                  </TransitionLink>
                  <TransitionLink href="/snippet" ariaLabel="Snippet">
                    <div className="relative">
                      <h2 className="text-[12px] px-2 py-1">Snippets</h2>
                      <span className="absolute top-0 left-0 w-1 h-1 border-t-1 border-l-1 border-zinc-500"></span>
                      <span className="absolute top-0 right-0 w-1 h-1 border-t-1 border-r-1 border-zinc-500"></span>
                      <span className="absolute bottom-0 left-0 w-1 h-1 border-b-1 border-l-1 border-zinc-500"></span>
                      <span className="absolute bottom-0 right-0 w-1 h-1 border-b-1 border-r-1 border-zinc-500"></span>
                    </div>
                  </TransitionLink>
                </div>

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
                      width="20"
                      height="20"
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
                      width={24}
                      height={24}
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
              </div>

              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
