import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getExperience } from "./utils/experience";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const experience = getExperience();

export const metadata: Metadata = {
  title: "Muthukumaran Muthiah - Senior Software Engineer",
  description: `Portfolio of Muthukumaran Muthiah, a Senior Software Engineer with ${experience.shortForm} of experience in Full-Stack Development, Cloud Architecture, and Microservices`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
