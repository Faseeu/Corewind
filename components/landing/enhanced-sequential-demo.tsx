"use client"

import { useState, useEffect } from "react"
import { SequentialLiveDemo as SequentialLiveDemoComponent } from "./sequential-live-demo"
import { EnhancedTextHighlighter } from "../ui/enhanced-text-highlighter"
import { SvgText } from "../ui/svg-text"
import { useRef, useMemo, useCallback } from "react"
import { Copy, Check, Eye } from "lucide-react"
import type React from "react"

// Enhanced TypeScript interfaces
interface DemoSequence {
  id: string
  name: string
  description: string
  category: "buttons" | "cards" | "forms" | "navigation" | "layouts"
  classes: string[]
  component: "button" | "div" | "form" | "nav" | "input" | "select"
  starter_component_jsx?: string
  children?: string
  attributes?: Record<string, string>
}

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
  starter_component_jsx?: string
  children?: string
  attributes?: Record<string, string>
  targetClasses?: string[]
}

// Custom hook to track typewriter progress
const useTypewriterProgress = (text: string, speed: number, isPlaying: boolean, key: number) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    setProgress(0)
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        currentIndex++
        setProgress(currentIndex)
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, isPlaying, key])

  return progress
}

// Constants
const TYPING_SPEEDS = {
  slow: 60,
  normal: 30,
  fast: 15,
  instant: 1,
} as const

const TRANSITION_DURATION = 300
const AUTO_ADVANCE_DELAY = 2000
const CLICK_DEBOUNCE_DELAY = 300

// Enhanced demo sequences with more variety
const demoSequences: DemoSequence[] = [
  // Buttons
  {
    id: "basic-button",
    name: "Basic Button",
    description: "Building a simple button from scratch",
    category: "buttons",
    classes: ["bg-blue-500", "text-white", "px-6", "py-3", "rounded-lg", "font-medium"],
    component: "button",
    children: "Click me",
  },
  {
    id: "enhanced-button",
    name: "Enhanced Button",
    description: "Adding hover effects and shadows",
    category: "buttons",
    classes: [
      "bg-gradient-to-r",
      "from-purple-500",
      "to-pink-500",
      "text-white",
      "px-8",
      "py-4",
      "rounded-xl",
      "font-semibold",
      "shadow-lg",
      "hover:shadow-xl",
      "hover:scale-105",
      "transition-all",
      "duration-300",
      "active:scale-95",
    ],
    component: "button",
    children: "Gradient Button",
  },
  {
    id: "outline-button",
    name: "Outline Button",
    description: "Creating a minimalist outline style",
    category: "buttons",
    classes: [
      "border-2",
      "border-indigo-500",
      "text-indigo-500",
      "px-6",
      "py-3",
      "rounded-lg",
      "font-medium",
      "hover:bg-indigo-500",
      "hover:text-white",
      "transition-colors",
      "duration-200",
    ],
    component: "button",
    children: "Outline Style",
  },

  // Cards
  {
    id: "basic-card",
    name: "Basic Card",
    description: "Creating a simple card layout",
    category: "cards",
    classes: ["bg-white", "p-6", "rounded-2xl", "shadow-md", "border", "border-gray-100", "max-w-sm"],
    component: "div",
    children: "Card Content",
  },
  {
    id: "feature-card",
    name: "Feature Card",
    description: "Advanced card with hover effects",
    category: "cards",
    classes: [
      "bg-white",
      "p-8",
      "rounded-3xl",
      "shadow-xl",
      "border",
      "border-gray-100",
      "max-w-md",
      "hover:shadow-2xl",
      "hover:-translate-y-2",
      "transition-all",
      "duration-300",
      "cursor-pointer",
      "group",
      "relative",
      "overflow-hidden",
    ],
    component: "div",
    children: "✨ Premium Feature",
  },
  {
    id: "pricing-card",
    name: "Pricing Card",
    description: "Professional pricing card design",
    category: "cards",
    classes: [
      "bg-gradient-to-br",
      "from-blue-50",
      "to-indigo-100",
      "p-8",
      "rounded-2xl",
      "shadow-lg",
      "border-2",
      "border-blue-200",
      "relative",
      "overflow-hidden",
      "transform",
      "hover:scale-105",
      "transition-transform",
      "duration-300",
    ],
    component: "div",
    children: "💎 Pro Plan - $29/mo",
  },

  // Forms
  {
    id: "input-field",
    name: "Input Field",
    description: "Styled form input with focus states",
    category: "forms",
    classes: [
      "w-full",
      "px-4",
      "py-3",
      "border",
      "border-gray-300",
      "rounded-lg",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-blue-500",
      "focus:border-transparent",
      "transition-all",
      "duration-200",
      "placeholder-gray-400",
    ],
    component: "input",
    attributes: { type: "text", placeholder: "Enter your email..." },
  },
  {
    id: "select-dropdown",
    name: "Select Dropdown",
    description: "Custom styled select element",
    category: "forms",
    classes: [
      "w-full",
      "px-4",
      "py-3",
      "border",
      "border-gray-300",
      "rounded-lg",
      "bg-white",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-green-500",
      "focus:border-transparent",
      "appearance-none",
      "cursor-pointer",
      "transition-all",
      "duration-200",
    ],
    component: "select",
    children: "<option>Choose an option...</option><option>Option 1</option><option>Option 2</option>",
  },

  // Navigation
  {
    id: "nav-link",
    name: "Navigation Link",
    description: "Styled navigation with hover effects",
    category: "navigation",
    classes: [
      "px-4",
      "py-2",
      "text-gray-700",
      "font-medium",
      "hover:text-blue-600",
      "hover:bg-blue-50",
      "rounded-md",
      "transition-colors",
      "duration-200",
      "relative",
      "after:absolute",
      "after:bottom-0",
      "after:left-0",
      "after:w-0",
      "after:h-0.5",
      "after:bg-blue-600",
      "after:transition-all",
      "after:duration-300",
      "hover:after:w-full",
    ],
    component: "nav",
    children: "About Us",
  },

  // Layouts
  {
    id: "hero-section",
    name: "Hero Section",
    description: "Full-width hero section with gradients",
    category: "layouts",
    classes: [
      "w-full",
      "min-h-96",
      "bg-gradient-to-r",
      "from-violet-600",
      "to-purple-600",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "text-center",
      "p-8",
      "relative",
      "overflow-hidden",
    ],
    component: "div",
    children: "🚀 Welcome to the Future",
  },
]

// Enhanced LivePreview component styled like the instant learning page
const LivePreview: React.FC<LivePreviewProps> = ({
  appliedClasses,
  component,
  starter_component_jsx,
  children,
  attributes = {},
  targetClasses = [],
}) => {
  const [showTarget, setShowTarget] = useState(false)
  const Tag = component as keyof JSX.IntrinsicElements
  const className = appliedClasses.join(" ")
  const targetClassName = targetClasses.join(" ")

  const renderComponent = (classes: string) => {
    return (
      <Tag className={classes} {...attributes} dangerouslySetInnerHTML={children ? { __html: children } : undefined} />
    )
  }

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-600 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-700 px-6 py-4 border-b border-slate-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <span className="font-medium text-white">Live Preview</span>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="p-8 min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="h-full flex items-center justify-center">
          <div
            className="transition-all duration-300 bg-white rounded-lg shadow-lg p-8 min-h-[200px] flex items-center justify-center relative"
            style={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {/* Your Result */}
            <div className="relative">
              {renderComponent(className)}
              <div className="absolute -top-8 left-0 text-xs font-medium text-slate-600">Your Result</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-slate-700 px-6 py-3 border-t border-slate-600">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Classes applied: {appliedClasses.length}</span>
        </div>
      </div>
    </div>
  )
}

// Enhanced Typewriter component
const TypewriterComponent: React.FC<{
  text: string
  speed: number
  onProgress: (length: number) => void
  isPlaying: boolean
  className?: string
}> = ({ text, speed, onProgress, isPlaying, className = "" }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPlaying) return

    if (currentIndex < text.length) {
      intervalRef.current = setTimeout(() => {
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex)
        setDisplayText(text.slice(0, newIndex))
        onProgress(newIndex)
      }, speed)
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [currentIndex, text, speed, isPlaying, onProgress])

  useEffect(() => {
    setCurrentIndex(0)
    setDisplayText("")
  }, [text])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-green-300">_</span>
    </span>
  )
}

// Main component with all enhancements
export function EnhancedSequentialLiveDemo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <EnhancedTextHighlighter
            text={
              <SvgText className="text-3xl font-bold">
                Learn by
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Doing
              </SvgText>
            }
            highlightColor="bg-blue-100"
            className="mb-2"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our interactive demos let you experiment with Tailwind CSS classes in real-time. Watch as your components
            transform with each class you add.
          </p>
        </div>

        <div
          className={`transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SequentialLiveDemoComponent />
        </div>
      </div>
    </section>
  )
}

export function SequentialLiveDemo() {
  const [currentSequence, setCurrentSequence] = useState(0)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [typingProgress, setTypingProgress] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState<keyof typeof TYPING_SPEEDS>("normal")
  const [showSettings, setShowSettings] = useState(false)
  const [typewriterKey, setTypewriterKey] = useState(0)
  const [copied, setCopied] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [clickCount, setClickCount] = useState(0)

  const currentDemo = demoSequences[currentSequence]
  const fullClassString = currentDemo.classes.join(" ")

  // Track typewriter progress using custom hook
  const typewriterProgress = useTypewriterProgress(
    fullClassString,
    TYPING_SPEEDS[typingSpeed],
    isPlaying,
    typewriterKey,
  )

  // Filter sequences by category
  const filteredSequences = useMemo(() => {
    if (selectedCategory === "all") return demoSequences
    return demoSequences.filter((seq) => seq.category === selectedCategory)
  }, [selectedCategory])

  const categories = useMemo(() => {
    const cats = ["all", ...Array.from(new Set(demoSequences.map((seq) => seq.category)))]
    return cats
  }, [])

  // Memoize class positions for syntax highlighting
  const classPositions = useMemo(() => {
    const positions: Array<{ class: string; start: number; end: number }> = []
    let currentPos = 0

    currentDemo.classes.forEach((cls) => {
      const start = currentPos
      const end = currentPos + cls.length
      positions.push({ class: cls, start, end })
      currentPos = end + 1
    })

    return positions
  }, [currentDemo.classes])

  // Reset when sequence changes
  useEffect(() => {
    setAppliedClasses([])
    setTypingProgress(0)
    setTypewriterKey((prev) => prev + 1) // Force typewriter to restart
  }, [currentSequence])

  // Update applied classes based on typing progress
  useEffect(() => {
    const validClasses = classPositions.filter(({ end }) => typewriterProgress >= end).map(({ class: cls }) => cls)

    setAppliedClasses(validClasses)
    setTypingProgress(typewriterProgress)
  }, [typewriterProgress, classPositions])

  // Auto-advance sequences
  useEffect(() => {
    if (!isPlaying || isTransitioning) return

    if (typewriterProgress >= fullClassString.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSequence((prev) => (prev + 1) % filteredSequences.length)
          setIsTransitioning(false)
        }, TRANSITION_DURATION)
      }, AUTO_ADVANCE_DELAY)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [typewriterProgress, fullClassString.length, isPlaying, isTransitioning, filteredSequences.length])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    }
  }, [])

  // Enhanced click handler
  const handleContainerClick = useCallback(() => {
    setClickCount((prev) => {
      const newCount = prev + 1

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }

      clickTimeoutRef.current = setTimeout(() => {
        if (newCount === 1) {
          setIsPlaying((prev) => !prev)
        } else if (newCount >= 2) {
          setCurrentSequence(0)
          setAppliedClasses([])
          setTypingProgress(0)
          setIsPlaying(true)
        }
        setClickCount(0)
      }, CLICK_DEBOUNCE_DELAY)

      return newCount
    })
  }, [])

  const handleSequenceChange = useCallback((index: number) => {
    setCurrentSequence(index)
    setIsPlaying(true)
    setClickCount(0)
    setTypewriterKey((prev) => prev + 1) // Force typewriter restart
  }, [])

  const handleTypewriterProgress = useCallback((currentLength: number) => {
    // This function is no longer needed since we're using the custom hook
    // but keeping it for backward compatibility
  }, [])

  const handlePrevious = useCallback(() => {
    const prevIndex = currentSequence > 0 ? currentSequence - 1 : filteredSequences.length - 1
    handleSequenceChange(prevIndex)
  }, [currentSequence, filteredSequences.length, handleSequenceChange])

  const handleNext = useCallback(() => {
    const nextIndex = (currentSequence + 1) % filteredSequences.length
    handleSequenceChange(nextIndex)
  }, [currentSequence, filteredSequences.length, handleSequenceChange])

  const handleCopyClasses = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(fullClassString)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy classes:", error)
    }
  }, [fullClassString])

  const handleReset = useCallback(() => {
    setCurrentSequence(0)
    setAppliedClasses([])
    setTypingProgress(0)
    setIsPlaying(true)
    setTypewriterKey((prev) => prev + 1) // Force typewriter restart
  }, [])

  const progressPercentage = Math.min((typingProgress / fullClassString.length) * 100, 100)

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
      {/* Live Preview */}
      <div
        className={`transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl ${
          isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"
        }`}
        onClick={handleContainerClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleContainerClick()
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${isPlaying ? "Pause" : "Play"} demo`}
      >
        <LivePreview
          appliedClasses={appliedClasses}
          component={currentDemo.component}
          starter_component_jsx={currentDemo.starter_component_jsx}
          children={currentDemo.children}
          attributes={currentDemo.attributes}
        />
      </div>

      {/* Code Window */}
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            {/* Removed file name display as requested */}
          </div>
          <button
            onClick={handleCopyClasses}
            className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors text-sm"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="p-6 min-h-[120px] flex items-center">
          <div className="font-mono text-sm text-green-400 w-full leading-relaxed">
            {isPlaying ? (
              <TypewriterComponent
                key={typewriterKey}
                text={fullClassString}
                speed={TYPING_SPEEDS[typingSpeed]}
                onProgress={handleTypewriterProgress}
                isPlaying={isPlaying}
                className="break-all"
              />
            ) : (
              <span className="break-all">
                {fullClassString.slice(0, typingProgress)}
                <span className="animate-pulse text-green-300">_</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
