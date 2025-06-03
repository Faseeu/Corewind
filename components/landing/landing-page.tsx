"use client"

import { HeroSection } from "./hero-section"
import { FounderStorySection } from "./founder-story-section"
import { FeaturesSection } from "./features-section"
import { HowItWorksSection } from "./how-it-works-section"
import { TestimonialsSection } from "./testimonials-section"
import { FinalCTASection } from "./final-cta-section"
import { Footer } from "./footer"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FounderStorySection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
