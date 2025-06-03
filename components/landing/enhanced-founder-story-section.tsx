"use client"

import { EnhancedTextHighlighter } from "@/components/ui/enhanced-text-highlighter"

const storySegments = [
  {
    id: "vibe-coder",
    title: "The 'Vibe Coder' & The Wall",
    number: "01",
    theme: "discovery",
    borderColor: "border-l-blue-500",
    bgColor: "bg-blue-50/30",
    numberBg: "bg-blue-500",
    content: (
      <>
        Honestly, I stumbled into frontend as a{" "}
        <EnhancedTextHighlighter variant="info" delay={200}>
          'vibe coder.'
        </EnhancedTextHighlighter>{" "}
        I loved seeing things change on the screen, picking up a few Tailwind classes here and there. But when it came
        to building something specific, or fixing those stubborn layout errors?{" "}
        <EnhancedTextHighlighter variant="warning" delay={400}>
          I'd hit a wall.
        </EnhancedTextHighlighter>{" "}
        The beautiful designs in my head just wouldn't translate to the screen.
      </>
    ),
  },
  {
    id: "learning-maze",
    title: "The Learning Maze & Procrastination",
    number: "02",
    theme: "struggle",
    borderColor: "border-l-amber-500",
    bgColor: "bg-amber-50/30",
    numberBg: "bg-amber-500",
    content: (
      <>
        Learning Tailwind felt like a{" "}
        <EnhancedTextHighlighter variant="warning" delay={300}>
          maze.
        </EnhancedTextHighlighter>{" "}
        Long courses I'd never finish, docs that were great but overwhelming for a deep dive, and constantly switching
        tabs to try things out... it just led to{" "}
        <EnhancedTextHighlighter variant="secondary" delay={600}>
          more scrolling on social media instead.
        </EnhancedTextHighlighter>{" "}
        That initial spark to <em>really learn</em> it started to fade.
      </>
    ),
  },
  {
    id: "meta-insight",
    title: "The Meta-Learning Insight",
    number: "03",
    theme: "breakthrough",
    borderColor: "border-l-purple-500",
    bgColor: "bg-purple-50/30",
    numberBg: "bg-purple-500",
    content: (
      <>
        Frustrated but still curious, I started looking into <em>how</em> we actually learn complex skills effectively.
        One principle stood out again and again:{" "}
        <EnhancedTextHighlighter variant="accent" delay={400}>
          <strong>Active Recall & Deliberate Practice.</strong>
        </EnhancedTextHighlighter>{" "}
        It's not just about consuming information, but actively <em>using</em> it, testing yourself, and getting
        immediate feedback.{" "}
        <EnhancedTextHighlighter variant="accent" delay={800}>
          That's when real understanding sticks.
        </EnhancedTextHighlighter>
      </>
    ),
  },
  {
    id: "corewind-spark",
    title: "The 'Corewind' Spark",
    number: "04",
    theme: "innovation",
    borderColor: "border-l-emerald-500",
    bgColor: "bg-emerald-50/30",
    numberBg: "bg-emerald-500",
    content: (
      <>
        Then one day, just idly thinking (probably avoiding actual coding!), the idea for Corewind surfaced. What if I
        could combine that active learning insight with everything I <em>wished</em> I had for Tailwind?{" "}
        <EnhancedTextHighlighter variant="success" delay={300}>
          One place for focused, hands-on exercises.
        </EnhancedTextHighlighter>{" "}
        Instant visual feedback. No more tab-switching chaos.{" "}
        <EnhancedTextHighlighter variant="success" delay={700}>
          A way to build up that 'muscle memory' for classes
        </EnhancedTextHighlighter>
        , almost like a game, making the important stuff stick without the grind.
      </>
    ),
  },
  {
    id: "building-dream",
    title: "Building the Dream & The Invitation",
    number: "05",
    theme: "realization",
    borderColor: "border-l-rose-500",
    bgColor: "bg-rose-50/30",
    numberBg: "bg-rose-500",
    content: (
      <>
        I started prototyping, pulling in tools and ideas, and was amazed.{" "}
        <EnhancedTextHighlighter variant="custom" customColor="hsl(25, 90%, 80%)" delay={200}>
          It <em>worked</em>.
        </EnhancedTextHighlighter>{" "}
        That feeling of 'getting it,' of classes just clicking into place, was incredible. Corewind became the tool I
        built first for myself. Now, I'm sharing it with you, hoping it makes your journey to mastering Tailwind CSS as
        clear, effective, and enjoyable as it should be.{" "}
        <EnhancedTextHighlighter variant="custom" customColor="hsl(340, 90%, 80%)" delay={600}>
          <strong>Welcome aboard.</strong>
        </EnhancedTextHighlighter>
      </>
    ),
  },
]

export function EnhancedFounderStorySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              The Origin Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              My Path to Corewind
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The story behind why Corewind exists, and why it might be exactly what you need on your learning journey.
            </p>
          </div>

          {/* Story Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block"></div>

            <div className="space-y-16">
              {storySegments.map((segment, index) => (
                <div
                  key={segment.id}
                  className={`relative animate-fade-in stagger-${index + 1}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Number */}
                  <div className="absolute -left-6 top-8 hidden md:flex">
                    <div
                      className={`w-16 h-16 ${segment.numberBg} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-background`}
                    >
                      {segment.number}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div
                    className={`ml-0 md:ml-16 ${segment.bgColor} ${segment.borderColor} border-l-4 rounded-r-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300`}
                  >
                    {/* Mobile Number */}
                    <div className="flex md:hidden items-center mb-4">
                      <div
                        className={`w-10 h-10 ${segment.numberBg} rounded-full flex items-center justify-center text-white font-bold text-sm mr-4`}
                      >
                        {segment.number}
                      </div>
                      <div className="h-px bg-gradient-to-r from-primary/40 to-transparent flex-1"></div>
                    </div>

                    {/* Story Content */}
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{segment.title}</h3>
                      <div className="text-lg md:text-xl leading-relaxed text-muted-foreground">{segment.content}</div>
                    </div>

                    {/* Theme Indicator */}
                    <div className="mt-6 flex items-center">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground/60 font-medium">
                        {segment.theme}
                      </div>
                      <div className="ml-3 h-px bg-gradient-to-r from-primary/20 to-transparent flex-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-20 text-center animate-fade-in stagger-6">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-cyan-500/5 rounded-3xl p-10 border border-primary/20">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Built from Frustration, Refined through Experience
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  This isn't just another learning platform—it's the tool I wish I had when I started. Every feature,
                  every lesson, every interaction has been crafted with love and shared with hope that it makes your
                  Tailwind journey as smooth and enjoyable as it should be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
