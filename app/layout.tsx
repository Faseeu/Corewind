import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation" // Added
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/landing/footer" // Added
import { ErrorBoundary } from "@/components/ui/error-boundary"

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
  const pathname = usePathname()
  const showHeaderFooter = pathname !== '/instant-learning' && !pathname?.startsWith('/instant-learning/')

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-background"> {/* Ensure flex-col for footer positioning */}
          {showHeaderFooter && <Header />}
          <main className={`flex-grow ${showHeaderFooter ? 'pt-16' : ''}`}> {/* Use flex-grow to push footer down */}
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          {showHeaderFooter && <Footer />}
        </div>
      </body>
    </html>
  )
}
