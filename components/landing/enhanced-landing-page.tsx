"use client"

import { EnhancedHeroSection } from "./enhanced-hero-section"
import { EnhancedFounderStorySection } from "./enhanced-founder-story-section"
import { FeaturesSection } from "./features-section"
import { HowItWorksSection } from "./how-it-works-section"
import { TestimonialsSection } from "./testimonials-section"
import { FinalCTASection } from "./final-cta-section"
import { Footer } from "./footer"

export function EnhancedLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeroSection />
      <EnhancedFounderStorySection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
