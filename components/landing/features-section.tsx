"use client"

import { Sparkles, SproutIcon as Seedling, Target, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Sparkles,
    title: "Feel It Click",
    description:
      "Don't just read, *do*. Instantly see your code come alive. Build real UI muscle memory and watch Tailwind's logic become second nature.",
  },
  {
    icon: Seedling,
    title: "Your Friendly Guide",
    description:
      "Starting from scratch? Perfect. We lovingly explain every concept, from 'what's a pixel?' to elegant layouts. You're not alone on this journey.",
  },
  {
    icon: Target,
    title: "The Smart Path",
    description:
      "Learn the vital 20% of Tailwind that delivers 80% of the results. Our lessons are packed with expert insights, not just syntax.",
  },
  {
    icon: Zap,
    title: "Instant Start, Zero Friction",
    description:
      "Jump right into your first lesson. No sign-up required to begin. Your progress is saved seamlessly in your browser.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Corewind Difference</h2>
            <p className="text-xl text-muted-foreground">Learn Smarter, Not Harder.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in stagger-${
                    index + 1
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
