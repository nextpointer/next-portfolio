import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.css";
import localFont from 'next/font/local'



export const metadata: Metadata = {
  title: "Surajit Maity",
  description: "Developer | Learner | Explorer",
};

const GeistMono = localFont(
  {
    src:'./Fonts/GeistMonoVF.woff',
    display:'swap'
  }
)



export const viewport:Viewport={
  themeColor:"#09090b"
}

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
