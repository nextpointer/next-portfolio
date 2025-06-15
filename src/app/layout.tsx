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
import TransitionLink from "@/Components/TransitionLink";

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
    icon: '/favicon.ico',
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
    <html lang="en" className={GeistMono.className}>
      <body>
        <main className="h-dvh flex flex-col items-center bg-[#171717] text-[#d1d5db] overflow-auto">
          <div className="p-4 w-full max-w-[650px] flex items-start flex-col pt-4 md:pt-8 relative">
            <div className="absolute left-0 top-0 flex flex-row gap-4 ml-4 mt-6">
              <TransitionLink href="/">
                <div className="relative">
                  <h2 className="text-sm px-2 py-1">Home</h2>
                  <span className="absolute top-0 left-0 w-1 h-1 border-t-1 border-l-1 border-zinc-500"></span>
                  <span className="absolute top-0 right-0 w-1 h-1 border-t-1 border-r-1 border-zinc-500"></span>
                  <span className="absolute bottom-0 left-0 w-1 h-1 border-b-1 border-l-1 border-zinc-500"></span>
                  <span className="absolute bottom-0 right-0 w-1 h-1 border-b-1 border-r-1 border-zinc-500"></span>
                </div>
              </TransitionLink>

              <TransitionLink href="/blog">
                <div className="relative">
                  <h2 className="text-sm px-2 py-1">Blog</h2>
                  <span className="absolute top-0 left-0 w-1 h-1 border-t-1 border-l-1 border-zinc-500"></span>
                  <span className="absolute top-0 right-0 w-1 h-1 border-t-1 border-r-1 border-zinc-500"></span>
                  <span className="absolute bottom-0 left-0 w-1 h-1 border-b-1 border-l-1 border-zinc-500"></span>
                  <span className="absolute bottom-0 right-0 w-1 h-1 border-b-1 border-r-1 border-zinc-500"></span>
                </div>
              </TransitionLink>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
