import { db } from "@/lib/db"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}

