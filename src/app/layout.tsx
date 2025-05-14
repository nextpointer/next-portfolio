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


export const metadata: Metadata = {
  title: {
    default: "Surajit Maity [nextpointer]",
    template: `%s | Surajit Maity [nextpointer]`,
  },
  description: OG_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: AUTHOR }],
  creator: CREATOR,
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
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>{children}</body>
    </html>
  );
}
