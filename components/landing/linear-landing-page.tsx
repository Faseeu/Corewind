"use client"

import { LinearHeroSection } from "./linear-hero-section"
import { MinimalistFounderStory } from "./minimalist-founder-story"
import { LinearFeaturesSection } from "./linear-features-section"
import { HowItWorksSection } from "./how-it-works-section"
import { TestimonialsSection } from "./testimonials-section"
import { FinalCTASection } from "./final-cta-section"
import { Footer } from "./footer"

export function LinearLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LinearHeroSection />
      <MinimalistFounderStory />
      <LinearFeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
