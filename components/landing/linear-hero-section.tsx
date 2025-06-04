"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { EnhancedSequentialLiveDemo } from "./enhanced-sequential-demo"
import { AuroraText } from "@/components/ui/aurora-text"
import { OptimizedFloatingElements } from "./optimized-floating-elements"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { StaggeredContainer } from "@/components/ui/staggered-container"

export function LinearHeroSection() {
  return (
    <ErrorBoundary>
      <section className="relative min-h-screen bg-background">
        {/* Optimized background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

        {/* Optimized floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <OptimizedFloatingElements />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Header Content */}
            <div className="text-center mb-20 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Interactive Tailwind CSS Learning
              </div>

              {/* Main Headline with AuroraText */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
                Tailwind.{" "}
                <AuroraText colors={["#3b82f6", "#1d4ed8", "#06b6d4", "#0891b2"]} speed={1.5} className="inline-block">
                  Reimagined.
                </AuroraText>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
                Stop passively watching, start actively building. Our unique, hands-on lessons transform Tailwind CSS
                from complex to intuitive, guiding you to UI mastery, one click at a time.
              </p>

              {/* Value Props with Staggered Animation */}
              <StaggeredContainer
                delay={150}
                className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-muted-foreground"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Learn by doing, not watching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Instant visual feedback</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Master the essential 20%</span>
                </div>
              </StaggeredContainer>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <Link href="/learn">
                  <AnimatedButton size="lg" className="text-lg px-8 py-4 electric-blue-glow will-change-transform">
                    Start Learning for Free
                    <ArrowRight className="w-5 h-5" />
                  </AnimatedButton>
                </Link>
                <Link href="/curriculum">
                  <AnimatedButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                    View Curriculum
                  </AnimatedButton>
                </Link>
              </div>
            </div>

            {/* Live Demo Section */}
            <div className="animate-fade-in stagger-2">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">See It in Action</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Watch as Tailwind classes are applied one by one, building beautiful components in real-time. This is
                  exactly how you'll learn.
                </p>
              </div>

              <ErrorBoundary
                fallback={<div className="text-center text-muted-foreground">Demo temporarily unavailable</div>}
              >
                <EnhancedSequentialLiveDemo />
              </ErrorBoundary>
            </div>

            {/* Social Proof */}
            <div className="mt-24 text-center animate-fade-in stagger-3">
              <p className="text-sm text-muted-foreground mb-8">Trusted by developers learning Tailwind CSS</p>
              <StaggeredContainer delay={100} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Lessons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Interactive Exercises</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Free to Start</div>
                </div>
              </StaggeredContainer>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
