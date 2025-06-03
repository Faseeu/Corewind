"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import Typewriter from "@/components/ui/typewriter"

const tailwindClasses = [
  "bg-blue-500",
  "text-white",
  "px-6",
  "py-3",
  "rounded-lg",
  "shadow-md",
  "hover:bg-blue-600",
  "transition-all",
  "font-medium",
]

const classSequences = [
  "bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all font-medium",
  "bg-green-500 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-green-600 transition-all font-semibold",
  "bg-purple-500 text-white px-4 py-2 rounded-full shadow-sm hover:bg-purple-600 transition-all text-sm",
]

export function HeroSection() {
  const [currentSequence, setCurrentSequence] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSequence((prev) => (prev + 1) % classSequences.length)
    }, 8000) // Change every 8 seconds to allow full typewriter cycle

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Tailwind Classes Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-muted-foreground/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {tailwindClasses[Math.floor(Math.random() * tailwindClasses.length)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Tailwind.{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Reimagined.
              </span>
            </h1>
          </div>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-1">
            Stop passively watching, start actively building. Our unique, hands-on lessons transform Tailwind CSS from
            complex to intuitive, guiding you to UI mastery, one click at a time.
          </p>

          {/* Interactive Demo Component with Typewriter */}
          <div className="my-12 animate-fade-in stagger-2">
            <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
              <div className="text-sm text-muted-foreground mb-4">Watch Tailwind classes build a component:</div>
              <div className="bg-slate-100 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
                <button className={classSequences[currentSequence]}>Beautiful Button</button>
              </div>
              <div className="mt-4 text-xs font-mono text-muted-foreground min-h-[20px] flex items-center">
                <span className="mr-2">Classes:</span>
                <Typewriter
                  key={currentSequence} // Force re-render when sequence changes
                  text={classSequences[currentSequence]}
                  speed={30}
                  initialDelay={500}
                  loop={false}
                  showCursor={true}
                  cursorChar="|"
                  className="text-primary"
                />
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in stagger-3">
            <Link href="/learn">
              <AnimatedButton size="lg" className="text-lg px-8 py-4">
                Start Your Path to Mastery (Free)
                <ArrowRight className="w-5 h-5" />
              </AnimatedButton>
            </Link>
            <Link href="/curriculum">
              <AnimatedButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5" />
                Explore the Curriculum
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
