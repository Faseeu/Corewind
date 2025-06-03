"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content:
      "Corewind finally made Tailwind click for me! The interactive lessons are a game-changer. I went from confused to confident.",
    author: "A. Learner",
    role: "Frontend Developer",
  },
  {
    content:
      "I actually look forward to practicing Tailwind now. The explanations are so clear, and seeing instant results is addictive!",
    author: "Future Fan",
    role: "UI Designer",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Learners Like You</h2>
            <p className="text-xl text-muted-foreground">Real feedback from real developers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 animate-fade-in stagger-${index + 1}`}
              >
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-6" />
                  <blockquote className="text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
