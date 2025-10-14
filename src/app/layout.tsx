import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Figtree } from "next/font/google";
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
import { ThemeProvider } from "@/components/theme-provider";
import ClientWrapper from "@/components/ClientWrapper";
import DynamicTitle from "@/components/useDynamicTitle";
import Image from "next/image";

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

// Configure Fonts
const GeistMono = localFont({
  src: "./Fonts/GeistMonoVF.woff",
  display: "swap",
  variable: "--font-geist-mono",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const fitgree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${GeistMono.variable} ${fitgree.variable}`}
      suppressHydrationWarning
    >
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
          <main className="h-dvh flex flex-col items-center bg-background text-normral-text-color overflow-auto">
            <div className="p-4 w-full max-w-[650px] flex items-start flex-col pt-4 md:pt-8 relative ">
              <div
                id="sticky-nav"
                className="sticky left-0 top-0 flex flex-row gap-6 z-50 w-full items-center justify-between rounded-sm backdrop-filter backdrop-blur-3xl bg-opacity-30 text-subheading-text-color p-1.5 mb-8"
              >
                <TransitionLink href="/" ariaLabel="Home">
                  <div className="relative">
                    <Image
                      alt="icon"
                      src={"/nextpointer.png"}
                      height={"30"}
                      width={"30"}
                    />
                  </div>
                </TransitionLink>
                <div className="flex flex-row gap-2 ">
                  <TransitionLink href="/blog" ariaLabel="Blog">
                    <div className="relative">
                      <h2 className="text-[12px] md:text-[14px] px-2 py-1">
                        Blog
                      </h2>
                    </div>
                  </TransitionLink>
                  <TransitionLink href="/snippet" ariaLabel="Snippet">
                    <div className="relative">
                      <h2 className="text-[12px] md:text-[14px] px-2 py-1">
                        Snippet
                      </h2>
                    </div>
                  </TransitionLink>
                  <TransitionLink href="/playground" ariaLabel="Playground">
                    <div className="relative">
                      <h2 className="text-[12px] md:text-[14px] px-2 py-1">
                        Playground
                      </h2>
                    </div>
                  </TransitionLink>
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
