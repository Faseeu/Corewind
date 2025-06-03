"use client"

import { Target, Code, Brain } from "lucide-react"

const steps = [
  {
    icon: Target,
    title: "Choose Your Lesson",
    description: "Pick a focused lesson from our structured learning paths.",
    number: "01",
  },
  {
    icon: Code,
    title: "Apply & See",
    description: "Type Tailwind classes and watch your component update live.",
    number: "02",
  },
  {
    icon: Brain,
    title: "Understand & Master",
    description: "Get clear explanations and expert tips to solidify your learning.",
    number: "03",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to Tailwind Mastery</h2>
            <p className="text-xl text-muted-foreground">in 3 Simple Steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className={`text-center relative animate-fade-in stagger-${index + 1}`}>
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-1/2 z-0" />
                  )}

                  <div className="relative z-10 bg-background">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>

                    {/* Icon */}
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
