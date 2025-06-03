"use client"

import Link from "next/link"
import { Heart, Github, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">Corewind</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Master Tailwind CSS through interactive, hands-on lessons designed for real-world application.
              </p>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>© {currentYear} Corewind. Built with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and Tailwind CSS.</span>
              </div>
            </div>

            {/* Learning */}
            <div>
              <h3 className="font-semibold mb-4">Learning</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/learn" className="hover:text-foreground transition-colors">
                    Start Learning
                  </Link>
                </li>
                <li>
                  <Link href="/curriculum" className="hover:text-foreground transition-colors">
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
