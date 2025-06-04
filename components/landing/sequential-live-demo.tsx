"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { LivePreview } from "@/components/learning/live-preview"
import Typewriter from "@/components/ui/typewriter"

interface DemoSequence {
  name: string
  description: string
  classes: string[]
  component: string
  starter_component_jsx?: string
}

const demoSequences: DemoSequence[] = [
  {
    name: "Basic Button",
    description: "Building a simple button from scratch",
    classes: ["bg-blue-500", "text-white", "px-6", "py-3", "rounded-lg", "font-medium"],
    component: "button",
  },
  {
    name: "Enhanced Button",
    description: "Adding hover effects and shadows",
    classes: [
      "bg-emerald-500",
      "text-white",
      "px-8",
      "py-4",
      "rounded-xl",
      "font-semibold",
      "shadow-lg",
      "hover:bg-emerald-600",
      "transition-all",
      "duration-300",
    ],
    component: "button",
  },
  {
    name: "Card Component",
    description: "Creating a modern card layout",
    classes: ["bg-white", "p-6", "rounded-2xl", "shadow-xl", "border", "border-gray-100", "max-w-sm"],
    component: "div",
  },
]

export function SequentialLiveDemo() {
  const [currentSequence, setCurrentSequence] = useState(0)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [typingProgress, setTypingProgress] = useState(0)

  const timeoutRef = useRef<NodeJS.Timeout>()
  const clickTimeoutRef = useRef<NodeJS.Timeout>()
  const [clickCount, setClickCount] = useState(0)

  const currentDemo = demoSequences[currentSequence]
  const fullClassString = currentDemo.classes.join(" ")

  // Memoize class positions for better performance
  const classPositions = useMemo(() => {
    const positions: Array<{ class: string; start: number; end: number }> = []
    let currentPos = 0

    currentDemo.classes.forEach((cls) => {
      const start = currentPos
      const end = currentPos + cls.length
      positions.push({ class: cls, start, end })
      currentPos = end + 1 // +1 for the space
    })

    return positions
  }, [currentDemo.classes])

  // Reset when sequence changes
  useEffect(() => {
    setAppliedClasses([])
    setTypingProgress(0)
  }, [currentSequence])

  // Optimized class matching using memoized positions
  useEffect(() => {
    const validClasses = classPositions.filter(({ end }) => typingProgress >= end).map(({ class: cls }) => cls)

    setAppliedClasses(validClasses)
  }, [typingProgress, classPositions])

  // Auto-advance sequences
  useEffect(() => {
    if (!isPlaying || isTransitioning) return

    if (typingProgress >= fullClassString.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSequence((prev) => (prev + 1) % demoSequences.length)
          setIsTransitioning(false)
        }, 300) // Faster transition
      }, 1000) // Shorter wait time
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [typingProgress, fullClassString.length, isPlaying, isTransitioning])

  // Handle single/double click
  const handleContainerClick = () => {
    setClickCount((prev) => prev + 1)

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }

    clickTimeoutRef.current = setTimeout(() => {
      if (clickCount === 1) {
        setIsPlaying(!isPlaying)
      } else if (clickCount >= 2) {
        setCurrentSequence(0)
        setAppliedClasses([])
        setTypingProgress(0)
        setIsPlaying(true)
      }
      setClickCount(0)
    }, 250) // Faster click detection
  }

  const handleSequenceChange = (index: number) => {
    setCurrentSequence(index)
    setIsPlaying(true)
  }

  // Optimized progress handler
  const handleTypewriterProgress = (currentLength: number) => {
    setTypingProgress(currentLength)
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Demo Info */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-foreground">{currentDemo.name}</h3>
        <p className="text-sm text-muted-foreground">{currentDemo.description}</p>
      </div>

      {/* Interactive Instructions */}
      <div className="text-center text-xs text-muted-foreground">
        <p>Click to {isPlaying ? "pause" : "play"} • Double-click to reset</p>
      </div>

      {/* Sequence Selector */}
      <div className="flex justify-center space-x-2">
        {demoSequences.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSequenceChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSequence ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Live Preview - Clickable */}
      <div
        className={`transition-all duration-300 cursor-pointer ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
        onClick={handleContainerClick}
      >
        <LivePreview
          appliedClasses={appliedClasses}
          component={currentDemo.component}
          starter_component_jsx={currentDemo.starter_component_jsx}
        />
      </div>

      {/* Code Window */}
      <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-slate-300">tailwind-classes.txt</span>
          </div>
          <div className="text-xs text-slate-400">
            {appliedClasses.length}/{currentDemo.classes.length} classes applied
          </div>
        </div>

        <div className="p-4 min-h-[80px] flex items-center">
          <div className="font-mono text-sm text-green-400 w-full">
            {isPlaying ? (
              <Typewriter
                key={`${currentSequence}-${isPlaying}`}
                text={fullClassString}
                speed={20} // Faster typing
                loop={false}
                showCursor={true}
                cursorChar="_"
                className="break-all"
                onProgress={handleTypewriterProgress}
              />
            ) : (
              <span className="break-all">
                {fullClassString.slice(0, typingProgress)}
                <span className="animate-pulse">_</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${(typingProgress / fullClassString.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
