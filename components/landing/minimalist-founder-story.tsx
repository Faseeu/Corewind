"use client"

import { EnhancedTextHighlighter } from "@/components/ui/enhanced-text-highlighter"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { StaggeredContainer } from "@/components/ui/staggered-container"

const storyParagraphs = [
  {
    id: "discovery",
    content: (
      <>
        I started as a{" "}
        <EnhancedTextHighlighter variant="primary" delay={200}>
          'vibe coder'
        </EnhancedTextHighlighter>{" "}
        — someone who loved seeing things change on screen but hit walls when building anything specific. The beautiful
        designs in my head just wouldn't translate to reality.
      </>
    ),
  },
  {
    id: "struggle",
    content: (
      <>
        Learning Tailwind felt like navigating a maze. Long courses I'd never finish, overwhelming documentation, and
        constant tab-switching led to{" "}
        <EnhancedTextHighlighter variant="primary" delay={300}>
          more social media scrolling than actual learning
        </EnhancedTextHighlighter>
        . That initial spark to really master it started fading.
      </>
    ),
  },
  {
    id: "insight",
    content: (
      <>
        Then I discovered the science behind effective skill acquisition:{" "}
        <EnhancedTextHighlighter variant="primary" delay={400}>
          Active Recall and Deliberate Practice
        </EnhancedTextHighlighter>
        . It's not about consuming information — it's about actively using it, testing yourself, and getting immediate
        feedback. That's when real understanding sticks.
      </>
    ),
  },
  {
    id: "solution",
    content: (
      <>
        What if I could combine this learning science with everything I wished I had for Tailwind?{" "}
        <EnhancedTextHighlighter variant="primary" delay={300}>
          One place for focused, hands-on exercises
        </EnhancedTextHighlighter>
        . Instant visual feedback. No tab-switching chaos. A way to build muscle memory for classes, making the
        important stuff stick without the grind.
      </>
    ),
  },
  {
    id: "realization",
    content: (
      <>
        I built Corewind first for myself, and{" "}
        <EnhancedTextHighlighter variant="primary" delay={200}>
          it worked
        </EnhancedTextHighlighter>
        . That feeling of classes clicking into place was incredible. Now I'm sharing it with you, hoping it makes your
        Tailwind journey as clear and enjoyable as it should be.{" "}
        <EnhancedTextHighlighter variant="primary" delay={600}>
          Welcome aboard.
        </EnhancedTextHighlighter>
      </>
    ),
  },
]

export function MinimalistFounderStory() {
  return (
    <ErrorBoundary>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                The Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Corewind Exists</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The journey from frustration to solution — and why it might be exactly what you need.
              </p>
            </div>

            {/* Story Content with Staggered Animation */}
            <StaggeredContainer delay={150} className="space-y-16">
              {storyParagraphs.map((paragraph) => (
                <div key={paragraph.id}>
                  <p className="text-xl md:text-2xl leading-[1.7] text-foreground font-light tracking-wide max-w-4xl mx-auto">
                    {paragraph.content}
                  </p>
                </div>
              ))}
            </StaggeredContainer>

            {/* Closing Statement */}
            <div className="mt-24 text-center animate-fade-in stagger-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl"></div>
                <div className="relative p-12">
                  <div className="w-1 h-20 bg-primary mx-auto mb-8 rounded-full"></div>
                  <p className="text-2xl md:text-3xl font-light text-foreground leading-[1.6] max-w-4xl mx-auto tracking-wide">
                    Built from frustration, refined through experience, and shared with the hope that your Tailwind
                    journey becomes everything mine wasn't — until now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
