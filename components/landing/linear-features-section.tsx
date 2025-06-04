"use client"

import { Sparkles, Target, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Learn by Doing",
    description: "No more passive watching. Build real components and see your code come alive instantly.",
  },
  {
    icon: Target,
    title: "Focused Learning",
    description: "Master the essential 20% of Tailwind that covers 80% of real-world use cases.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "See your changes immediately. Build muscle memory through hands-on practice.",
  },
  {
    icon: Heart,
    title: "Built with Care",
    description: "Every lesson is crafted with love, from beginner-friendly to expert insights.",
  },
]

export function LinearFeaturesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Corewind Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A learning experience designed around how your brain actually learns and retains new skills.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`text-center group animate-fade-in stagger-${index + 1}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
