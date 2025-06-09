"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-cyan-500/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build with Joy & Confidence?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The frustration of complex CSS ends here. Your clear, interactive path to mastering Tailwind CSS and
              crafting beautiful, responsive UIs starts now. The foundational modules are completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/instant-learning">
                <AnimatedButton size="lg" className="text-lg px-8 py-4 rounded-[25px]">
                  <div className="flex flex-col items-center">
                    <span>Get Started</span>
                    <span className="text-xs opacity-75 font-normal">No sign up required</span>
                  </div>
                </AnimatedButton>
              </Link>
              <Link href="/roadmap">
                <AnimatedButton variant="secondary" size="lg" className="text-lg px-8 py-4 rounded-[25px]">
                  <BookOpen className="w-5 h-5" />
                  View All Learning Paths
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
