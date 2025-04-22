import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.css";


export const metadata: Metadata = {
  title: "Surajit Maity",
  description: "Developer | Learner | Explorer",
};

export const viewport:Viewport={
  themeColor:"#09090b"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
