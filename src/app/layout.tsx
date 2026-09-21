import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Imren Rahbay — Full Stack Developer";
const description =
  "Portfolio of Imren Rahbay, a full stack developer specializing in React, Next.js, Node.js and Express.";

export const metadata: Metadata = {
  metadataBase: new URL("https://imren-r-portfolio.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <div className="flex flex-1 flex-col">{children}</div>
        <Contact />
      </body>
    </html>
  );
}
