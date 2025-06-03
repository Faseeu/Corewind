"use client"

import { TextHighlighter } from "@/components/ui/text-highlighter"

const storyParts = [
  {
    title: "The 'Vibe Coder' & The Wall",
    content: (
      <>
        Honestly, I stumbled into frontend as a{" "}
        <TextHighlighter highlightColor="hsl(200, 90%, 80%)" triggerType="inView">
          'vibe coder.'
        </TextHighlighter>{" "}
        I loved seeing things change on the screen, picking up a few Tailwind classes here and there. But when it came
        to building something specific, or fixing those stubborn layout errors?{" "}
        <TextHighlighter highlightColor="hsl(0, 90%, 80%)" triggerType="inView">
          I'd hit a wall.
        </TextHighlighter>{" "}
        The beautiful designs in my head just wouldn't translate to the screen.
      </>
    ),
    accent: "border-l-blue-400 bg-blue-50/50",
  },
  {
    title: "The Learning Maze & Procrastination",
    content: (
      <>
        Learning Tailwind felt like a{" "}
        <TextHighlighter highlightColor="hsl(45, 90%, 80%)" triggerType="inView">
          maze.
        </TextHighlighter>{" "}
        Long courses I'd never finish, docs that were great but overwhelming for a deep dive, and constantly switching
        tabs to try things out... it just led to{" "}
        <TextHighlighter highlightColor="hsl(15, 90%, 80%)" triggerType="inView">
          more scrolling on social media instead.
        </TextHighlighter>{" "}
        That initial spark to <em>really learn</em> it started to fade.
      </>
    ),
    accent: "border-l-yellow-400 bg-yellow-50/50",
  },
  {
    title: "The Meta-Learning Insight",
    content: (
      <>
        Frustrated but still curious, I started looking into <em>how</em> we actually learn complex skills effectively.
        One principle stood out again and again:{" "}
        <TextHighlighter highlightColor="hsl(280, 90%, 80%)" triggerType="inView">
          <strong>Active Recall & Deliberate Practice.</strong>
        </TextHighlighter>{" "}
        It's not just about consuming information, but actively <em>using</em> it, testing yourself, and getting
        immediate feedback. That's when real understanding sticks.
      </>
    ),
    accent: "border-l-purple-400 bg-purple-50/50",
  },
  {
    title: "The 'Corewind' Spark",
    content: (
      <>
        Then one day, just idly thinking (probably avoiding actual coding!), the idea for Corewind surfaced. What if I
        could combine that active learning insight with everything I <em>wished</em> I had for Tailwind?{" "}
        <TextHighlighter highlightColor="hsl(120, 90%, 80%)" triggerType="inView">
          One place for focused, hands-on exercises.
        </TextHighlighter>{" "}
        Instant visual feedback. No more tab-switching chaos. A way to build up that 'muscle memory' for classes, almost
        like a game, making the important stuff stick without the grind.
      </>
    ),
    accent: "border-l-green-400 bg-green-50/50",
  },
  {
    title: "Building the Dream & The Invitation",
    content: (
      <>
        I started prototyping, pulling in tools and ideas, and was amazed.{" "}
        <TextHighlighter highlightColor="hsl(25, 90%, 80%)" triggerType="inView">
          It <em>worked</em>.
        </TextHighlighter>{" "}
        That feeling of 'getting it,' of classes just clicking into place, was incredible. Corewind became the tool I
        built first for myself. Now, I'm sharing it with you, hoping it makes your journey to mastering Tailwind CSS as
        clear, effective, and enjoyable as it should be.{" "}
        <TextHighlighter highlightColor="hsl(340, 90%, 80%)" triggerType="inView">
          <strong>Welcome aboard.</strong>
        </TextHighlighter>
      </>
    ),
    accent: "border-l-orange-400 bg-orange-50/50",
  },
]

export function FounderStorySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Path to Corewind (And Yours Too!)</h2>
            <p className="text-xl text-muted-foreground">
              The story behind why Corewind exists, and why it might be exactly what you need.
            </p>
          </div>

          <div className="space-y-12">
            {storyParts.map((part, index) => (
              <div
                key={index}
                className={`relative pl-8 py-6 border-l-4 ${part.accent} rounded-r-lg animate-fade-in stagger-${
                  index + 1
                }`}
              >
                {/* Story number */}
                <div className="absolute -left-6 top-6 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{part.title}</h3>
                  <div className="text-lg leading-relaxed text-muted-foreground">{part.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing message */}
          <div className="mt-16 text-center animate-fade-in stagger-6">
            <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-xl text-muted-foreground leading-relaxed">
                This isn't just another learning platform—it's the tool I wish I had when I started. Built from
                frustration, refined through experience, and shared with love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
