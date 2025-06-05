"use client"

import { TextHighlighter } from "@/components/ui/text-highlighter"
import { MediaBetweenText } from "@/components/ui/media-between-text"
import { memo } from "react"

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
        <MediaBetweenText
          firstText="I'd hit a"
          secondText="every single time."
          mediaUrl="/placeholder.svg?height=60&width=80"
          mediaType="image"
          alt="Wall barrier illustration"
          triggerType="inView"
          className="inline-flex items-center text-lg"
          leftTextClassName="text-muted-foreground"
          rightTextClassName="text-muted-foreground"
          mediaContainerClassName="mx-2 w-20 h-8 rounded-md overflow-hidden bg-red-100 flex items-center justify-center"
          animationVariants={{
            initial: { width: 0, opacity: 0 },
            animate: {
              width: "80px",
              opacity: 1,
              transition: { duration: 0.6, type: "spring", bounce: 0.2 },
            },
          }}
        />{" "}
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
        <MediaBetweenText
          firstText="navigating a complex"
          secondText="with no clear path."
          mediaUrl="/placeholder.svg?height=60&width=80"
          mediaType="image"
          alt="Maze illustration"
          triggerType="inView"
          className="inline-flex items-center text-lg"
          leftTextClassName="text-muted-foreground"
          rightTextClassName="text-muted-foreground"
          mediaContainerClassName="mx-2 w-20 h-8 rounded-md overflow-hidden bg-yellow-100 flex items-center justify-center"
          animationVariants={{
            initial: { width: 0, opacity: 0, scale: 0.8 },
            animate: {
              width: "80px",
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, type: "spring", bounce: 0.3 },
            },
          }}
        />{" "}
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
        <MediaBetweenText
          firstText="Active Recall &"
          secondText="Practice."
          mediaUrl="/placeholder.svg?height=60&width=100"
          mediaType="image"
          alt="Brain and practice illustration"
          triggerType="inView"
          className="inline-flex items-center text-lg font-bold"
          leftTextClassName="text-purple-600 font-semibold"
          rightTextClassName="text-purple-600 font-semibold"
          mediaContainerClassName="mx-2 w-24 h-8 rounded-md overflow-hidden bg-purple-100 flex items-center justify-center"
          animationVariants={{
            initial: { width: 0, opacity: 0, rotateY: -90 },
            animate: {
              width: "96px",
              opacity: 1,
              rotateY: 0,
              transition: { duration: 0.8, type: "spring", bounce: 0.1 },
            },
          }}
        />{" "}
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
        <MediaBetweenText
          firstText="One place for focused,"
          secondText="exercises."
          mediaUrl="/placeholder.svg?height=60&width=120"
          mediaType="image"
          alt="Hands-on learning illustration"
          triggerType="inView"
          className="inline-flex items-center text-lg"
          leftTextClassName="text-green-600 font-medium"
          rightTextClassName="text-green-600 font-medium"
          mediaContainerClassName="mx-2 w-28 h-8 rounded-md overflow-hidden bg-green-100 flex items-center justify-center"
          animationVariants={{
            initial: { width: 0, opacity: 0, y: 20 },
            animate: {
              width: "112px",
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, type: "spring", bounce: 0.4 },
            },
          }}
        />{" "}
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
        <MediaBetweenText
          firstText="It"
          secondText="worked!"
          mediaUrl="/placeholder.svg?height=60&width=80"
          mediaType="image"
          alt="Success celebration illustration"
          triggerType="inView"
          className="inline-flex items-center text-lg font-bold"
          leftTextClassName="text-orange-600 font-semibold"
          rightTextClassName="text-orange-600 font-semibold italic"
          mediaContainerClassName="mx-2 w-20 h-8 rounded-md overflow-hidden bg-orange-100 flex items-center justify-center"
          animationVariants={{
            initial: { width: 0, opacity: 0, scale: 0.5 },
            animate: {
              width: "80px",
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, type: "spring", bounce: 0.6 },
            },
          }}
        />{" "}
        That feeling of 'getting it,' of classes just clicking into place, was incredible. Corewind became the tool I
        built first for myself. Now, I'm sharing it with you, hoping it makes your journey to mastering Tailwind CSS as
        clear, effective, and enjoyable as it should be.{" "}
        <MediaBetweenText
          firstText="Welcome"
          secondText="!"
          mediaUrl="/placeholder.svg?height=60&width=100"
          mediaType="image"
          alt="Welcome aboard illustration"
          triggerType="inView"
          className="inline-flex items-center text-xl font-bold"
          leftTextClassName="text-pink-600 font-bold"
          rightTextClassName="text-pink-600 font-bold"
          mediaContainerClassName="mx-2 w-24 h-10 rounded-md overflow-hidden bg-pink-100 flex items-center justify-center"
          animationVariants={{
            initial: { width: 0, opacity: 0, rotateZ: -180 },
            animate: {
              width: "96px",
              opacity: 1,
              rotateZ: 0,
              transition: { duration: 0.8, type: "spring", bounce: 0.2 },
            },
          }}
        />
      </>
    ),
    accent: "border-l-orange-400 bg-orange-50/50",
  },
]

const StoryPart = memo<{ part: (typeof storyParts)[0]; index: number }>(({ part, index }) => (
  <div className={`relative pl-8 py-6 border-l-4 ${part.accent} rounded-r-lg animate-fade-in stagger-${index + 1}`}>
    {/* Story number */}
    <div className="absolute -left-6 top-6 w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center font-bold text-primary">
      {String(index + 1).padStart(2, "0")}
    </div>

    <div className="space-y-4">
      <h3 className="text-2xl font-black text-foreground font-serif tracking-tight">{part.title}</h3>
      <div className="text-lg leading-relaxed text-muted-foreground">{part.content}</div>
    </div>
  </div>
))

StoryPart.displayName = "StoryPart"

export const FounderStorySection = memo(() => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <MediaBetweenText
              firstText="My Path to"
              secondText="(And Yours Too!)"
              mediaUrl="/placeholder.svg?height=80&width=120"
              mediaType="image"
              alt="Corewind logo"
              triggerType="inView"
              className="text-3xl md:text-4xl font-black mb-4 font-serif tracking-tight justify-center"
              leftTextClassName="text-foreground"
              rightTextClassName="text-foreground"
              mediaContainerClassName="mx-3 w-32 h-12 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center"
              animationVariants={{
                initial: { width: 0, opacity: 0, scale: 0.8 },
                animate: {
                  width: "128px",
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, type: "spring", bounce: 0.3 },
                },
              }}
            />
            <p className="text-xl text-muted-foreground">
              The story behind why Corewind exists, and why it might be exactly what you need.
            </p>
          </div>

          <div className="space-y-12">
            {storyParts.map((part, index) => (
              <StoryPart key={index} part={part} index={index} />
            ))}
          </div>

          {/* Closing message */}
          <div className="mt-16 text-center animate-fade-in stagger-6">
            <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-xl text-muted-foreground leading-relaxed font-semibold">
                <MediaBetweenText
                  firstText="This isn't just another learning platform—it's the tool I wish I had when I started."
                  secondText="Built from frustration, refined through experience, and shared with love."
                  mediaUrl="/placeholder.svg?height=60&width=80"
                  mediaType="image"
                  alt="Heart illustration"
                  triggerType="inView"
                  className="flex flex-col items-center gap-4 text-center"
                  leftTextClassName="text-muted-foreground font-semibold"
                  rightTextClassName="text-muted-foreground font-semibold"
                  mediaContainerClassName="w-20 h-12 rounded-full overflow-hidden bg-red-100 flex items-center justify-center"
                  animationVariants={{
                    initial: { width: 0, height: 0, opacity: 0 },
                    animate: {
                      width: "80px",
                      height: "48px",
                      opacity: 1,
                      transition: { duration: 0.8, type: "spring", bounce: 0.4 },
                    },
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

FounderStorySection.displayName = "FounderStorySection"
