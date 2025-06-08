"use client"

import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react"
// import { LivePreview } from "@/components/learning/live-preview" // Removed

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

// Simple dynamic element renderer
interface DynamicElementProps {
  appliedClasses: string[]
  componentType: string
  children: React.ReactNode
}

const DynamicElement = memo<DynamicElementProps>(({ appliedClasses, componentType, children }) => {
  const className = appliedClasses.join(" ")
  const baseClasses = "transition-all duration-300 ease-in-out" // Default transition
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

  switch (componentType) {
    case "button":
      return (
        <button
          className={
            combinedClasses ||
            `${baseClasses} px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300`
          }
        >
          {children}
        </button>
      )
    case "div":
      return (
        <div
          className={
            combinedClasses ||
            `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
          }
        >
          {children}
        </div>
      )
    default:
      return (
        <div
          className={
            combinedClasses ||
            `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
          }
        >
          Element: {children}
        </div>
      )
  }
})
DynamicElement.displayName = "DynamicElement"

// Typewriter and OptimizedTypewriter component are removed.

export const SequentialLiveDemo = memo(() => {
  const [currentSequence, setCurrentSequence] = useState(0)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [typingProgress, setTypingProgress] = useState(0)

  const timeoutRef = useRef<NodeJS.Timeout>()
  const clickTimeoutRef = useRef<NodeJS.Timeout>()
  const [clickCount, setClickCount] = useState(0)

  const currentDemo = useMemo(() => demoSequences[currentSequence], [currentSequence])
  const fullClassString = useMemo(() => currentDemo.classes.join(" "), [currentDemo.classes])

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
    setTypingProgress(0) // Reset progress when sequence changes
  }, [currentSequence])

  // Effect to simulate typing when Typewriter is removed
  useEffect(() => {
    let progressInterval: NodeJS.Timeout | undefined
    if (isPlaying && typingProgress < fullClassString.length) {
      progressInterval = setInterval(() => {
        setTypingProgress((prev) => {
          const nextProgress = prev + 1 // Simulate one character at a time
          if (nextProgress >= fullClassString.length) {
            clearInterval(progressInterval)
            return fullClassString.length
          }
          return nextProgress
        })
      }, 50) // Adjust speed as needed, e.g., 50ms per character
    } else if (progressInterval) { // Clear interval if not playing or typing complete
      clearInterval(progressInterval)
    }
    return () => clearInterval(progressInterval)
  }, [isPlaying, fullClassString, typingProgress]) // Rerun if isPlaying, fullClassString, or typingProgress changes

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
        }, 300)
      }, 1000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [typingProgress, fullClassString.length, isPlaying, isTransitioning])

  // Handle single/double click
  const handleContainerClick = useCallback(() => {
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
    }, 250)
  }, [clickCount, isPlaying])

  const handleSequenceChange = useCallback((index: number) => {
    setCurrentSequence(index)
    setIsPlaying(true)
  }, [])

  // Optimized progress handler - no longer needed as child callback
  // const handleTypewriterProgress = useCallback((currentLength: number) => {
  //   setTypingProgress(currentLength)
  // }, [])

  const progressPercentage = useMemo(
    () => Math.min((typingProgress / fullClassString.length) * 100, 100),
    [typingProgress, fullClassString.length],
  )

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

      {/* Live Preview - Redesigned to match the image */}
      <div
        className={`transition-all duration-300 cursor-pointer ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
        onClick={handleContainerClick}
      >
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
          {/* Header bar with colored dots */}
          <div className="bg-[#e2e8f0] px-4 py-3 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#ff6b6b] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffd93d] rounded-full"></div>
              <div className="w-3 h-3 bg-[#6bff8b] rounded-full"></div>
            </div>
          </div>

          {/* Content area */}
          <div className="bg-white p-8 flex items-center justify-center min-h-[200px]">
            <DynamicElement
              appliedClasses={appliedClasses}
              componentType={currentDemo.component}
            >
              {currentDemo.starter_component_jsx || (currentDemo.component === "button" ? "Click Me" : "Your Box")}
            </DynamicElement>
          </div>

          {/* Progress footer */}
          <div className="bg-[#f1f5f9] px-6 py-4 flex items-center justify-between">
            <span className="text-[#64748b] font-medium">Progress</span>
            <span className="text-[#64748b] font-medium">
              {appliedClasses.length}/{currentDemo.classes.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="bg-[#e2e8f0] h-2">
            <div
              className="bg-primary h-2 transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
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
            <span className="break-all">
              {fullClassString.slice(0, typingProgress)}
              {/* Show cursor if playing and not yet complete, or if paused */}
              {(isPlaying && typingProgress < fullClassString.length) || !isPlaying ? (
                <span className="animate-pulse">_</span>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

SequentialLiveDemo.displayName = "SequentialLiveDemo"
