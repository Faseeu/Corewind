"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, X } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isLandingPage = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Corewind</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/learn" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Learn
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link
            href="/roadmap/module-one"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Roadmap
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/instant-learning">
            <AnimatedButton size="sm" className="rounded-[25px]">
              <div className="flex flex-col items-center text-xs">
                <span>Get Started</span>
                <span className="text-[10px] opacity-75 font-normal">No sign up required</span>
              </div>
            </AnimatedButton>
          </Link>
          <button className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-[25px] hover:bg-primary hover:text-primary-foreground transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-[25px] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/learn"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/dashboard"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/roadmap/module-one"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/instant-learning" onClick={() => setIsMenuOpen(false)}>
                <AnimatedButton size="sm" className="w-full rounded-[25px]">
                  <div className="flex flex-col items-center text-xs">
                    <span>Get Started</span>
                    <span className="text-[10px] opacity-75 font-normal">No sign up required</span>
                  </div>
                </AnimatedButton>
              </Link>
              <button
                className="w-full px-4 py-2 text-sm font-medium text-primary border border-primary rounded-[25px] hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
