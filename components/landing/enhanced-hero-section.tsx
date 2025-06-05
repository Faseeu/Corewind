"use client"

import Link from "next/link"
import { Play, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { InteractiveLivePreview } from "./interactive-live-preview"

const floatingClasses = [
  "bg-blue-500",
  "text-white",
  "px-4",
  "py-2",
  "rounded-lg",
  "shadow-md",
  "hover:bg-blue-600",
  "transition-all",
  "flex",
  "items-center",
  "justify-center",
  "space-x-2",
  "w-full",
  "max-w-md",
  "mx-auto",
  "font-medium",
  "border",
  "border-blue-400",
  "transform",
  "hover:scale-105",
  "duration-300",
]

export function EnhancedHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Tailwind Classes */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-muted-foreground/15 animate-float-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {floatingClasses[Math.floor(Math.random() * floatingClasses.length)]}
          </div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Interactive Tailwind Learning
            </div>

            {/* Main Headline */}
            <div className="space-y-6 animate-fade-in stagger-1">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Tailwind.{" "}
                <span className="bg-gradient-to-r from-primary via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                  Reimagined.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Stop passively watching, start actively building. Our unique, hands-on lessons transform Tailwind CSS
                from complex to intuitive, guiding you to UI mastery, one click at a time.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-4 animate-fade-in stagger-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Learn by doing, not just watching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-muted-foreground">Instant visual feedback on every change</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">Master the essential 20% that covers 80% of use cases</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <Link href="/instant-learning">
                <AnimatedButton size="lg" className="text-lg px-8 py-4 shadow-lg rounded-[25px]">
                  <div className="flex flex-col items-center">
                    <span>Get Started</span>
                    <span className="text-xs opacity-75 font-normal">No sign up required</span>
                  </div>
                </AnimatedButton>
              </Link>
              <Link href="/roadmap/module-one">
                <AnimatedButton variant="secondary" size="lg" className="text-lg px-8 py-4 rounded-[25px]">
                  <Play className="w-5 h-5" />
                  Explore Roadmap
                </AnimatedButton>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-8 animate-fade-in stagger-4">
              <p className="text-sm text-muted-foreground mb-4">Trusted by developers learning Tailwind CSS</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">1000+</div>
                  <div className="text-xs text-muted-foreground">Lessons Completed</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground">Interactive Exercises</div>
                </div>
                <div className="w-px h-8 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground">Free to Start</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="animate-fade-in stagger-2">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-2">See It in Action</h3>
                <p className="text-muted-foreground">
                  Watch Tailwind classes build beautiful components in real-time. Try typing your own classes!
                </p>
              </div>
              <InteractiveLivePreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
