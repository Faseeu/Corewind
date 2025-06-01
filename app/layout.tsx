import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corewind - Master Tailwind CSS Fast",
  description:
    "Learn the essential 20% of Tailwind CSS through hands-on, interactive exercises that cover 80% of common UI tasks.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  )
}
