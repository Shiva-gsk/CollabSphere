
import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local";
import SessionWrapper from "@/components/SessionWrapper"
const myFont = localFont({
  src: "../../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  weight: "400",
  style: "normal",
});
// import { Inter } from "next/font/google"
import type React from "react" // Added import for React

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CollabSphere: The Ultimate Collaboration and Scheduling Platform",
  description:
    "CollabSphere is an intuitive collaboration platform designed for efficient institution control. Create public and private organizations, schedule tasks, meetings, and provide insights seamlessly with all contributors.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className={myFont.className}>{children}</body>

      </SessionWrapper>
    </html>
  )
}

