"use client"

import { useState, useEffect, useRef, useMemo, useCallback, useReducer } from "react"
import { Copy, Check } from "lucide-react"
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

// Enhanced LivePreview component
const LivePreview: React.FC<LivePreviewProps> = ({
  appliedClasses,
  component,
  starter_component_jsx,
  children,
  attributes = {},
}) => {
  const Tag = component as keyof JSX.IntrinsicElements
  const classString = appliedClasses.join(" ")

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[200px]">
      <div className="text-center space-y-4">
        <div className="text-xs text-gray-500 font-mono mb-2">Applied: {appliedClasses.length} classes</div>
        <Tag
          className={classString}
          {...attributes}
          dangerouslySetInnerHTML={children ? { __html: children } : undefined}
        />
        {appliedClasses.length === 0 && <div className="text-gray-400 text-sm">Component will appear here...</div>}
      </div>
    </div>
  )
}

// Define types for our state and actions
type DemoState = {
  currentSequence: number
  appliedClasses: string[]
  isPlaying: boolean
  isTransitioning: boolean
  typingProgress: number
  clickCount: number
}

type DemoAction =
  | { type: 'TOGGLE_PLAY' }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'RESET' }
  | { type: 'INCREMENT_CLICK' }
  | { type: 'RESET_CLICK' }
  | { type: 'SET_SEQUENCE'; payload: number }
  | { type: 'SET_APPLIED_CLASSES'; payload: string[] }
  | { type: 'SET_TYPING_PROGRESS'; payload: number }
  | { type: 'SET_TRANSITIONING'; payload: boolean };

// State reducer to consolidate state updates
function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return { ...state, isPlaying: !state.isPlaying };
    case 'SET_PLAYING':
      return { ...state, isPlaying: action.payload };
    case 'RESET':
      return {
        ...state,
        currentSequence: 0,
        appliedClasses: [],
        typingProgress: 0,
        isPlaying: true
      };
    case 'INCREMENT_CLICK':
      return { ...state, clickCount: state.clickCount + 1 };
    case 'RESET_CLICK':
      return { ...state, clickCount: 0 };
    case 'SET_SEQUENCE':
      return { ...state, currentSequence: action.payload };
    case 'SET_APPLIED_CLASSES':
      return { ...state, appliedClasses: action.payload };
    case 'SET_TYPING_PROGRESS':
      return { ...state, typingProgress: action.payload };
    case 'SET_TRANSITIONING':
      return { ...state, isTransitioning: action.payload };
    default:
      return state;
  }
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
  // Initialize state with useReducer instead of multiple useState hooks
  const [state, dispatch] = useReducer(demoReducer, {
    currentSequence: 0,
    appliedClasses: [],
    isPlaying: true,
    isTransitioning: false,
    typingProgress: 0,
    clickCount: 0
  });
  
  // Destructure state for easier access
  const { currentSequence, appliedClasses, isPlaying, isTransitioning, typingProgress, clickCount } = state;
  
  // Keep separate useState hooks for UI state that doesn't need to be consolidated
  const [typingSpeed, setTypingSpeed] = useState<keyof typeof TYPING_SPEEDS>("normal")
  const [showSettings, setShowSettings] = useState(false)
  const [typewriterKey, setTypewriterKey] = useState(0)
  const [copied, setCopied] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
    dispatch({ type: 'SET_APPLIED_CLASSES', payload: [] });
    dispatch({ type: 'SET_TYPING_PROGRESS', payload: 0 });
    setTypewriterKey((prev) => prev + 1); // Force typewriter to restart
  }, [currentSequence])

  // Update applied classes based on typing progress
  useEffect(() => {
    const validClasses = classPositions.filter(({ end }) => typewriterProgress >= end).map(({ class: cls }) => cls)

    dispatch({ type: 'SET_APPLIED_CLASSES', payload: validClasses });
    dispatch({ type: 'SET_TYPING_PROGRESS', payload: typewriterProgress });
  }, [typewriterProgress, classPositions])

  // Auto-advance sequences
  useEffect(() => {
    if (!isPlaying || isTransitioning) return

    if (typewriterProgress >= fullClassString.length) {
      timeoutRef.current = setTimeout(() => {
        dispatch({ type: 'SET_TRANSITIONING', payload: true });
        
        setTimeout(() => {
          const nextIndex = (currentSequence + 1) % filteredSequences.length;
          dispatch({ type: 'SET_SEQUENCE', payload: nextIndex });
          dispatch({ type: 'SET_TRANSITIONING', payload: false });
        }, TRANSITION_DURATION)
      }, AUTO_ADVANCE_DELAY)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [typewriterProgress, fullClassString.length, isPlaying, isTransitioning, filteredSequences.length, currentSequence])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    }
  }, [])

  // Enhanced click handler - consolidated state updates using reducer
  const handleContainerClick = useCallback(() => {
    dispatch({ type: 'INCREMENT_CLICK' });

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }

    clickTimeoutRef.current = setTimeout(() => {
      if (clickCount === 1) {
        dispatch({ type: 'TOGGLE_PLAY' });
      } else if (clickCount >= 2) {
        dispatch({ type: 'RESET' });
        setTypewriterKey(prev => prev + 1); // Force typewriter restart
      }
      dispatch({ type: 'RESET_CLICK' });
    }, CLICK_DEBOUNCE_DELAY)
  }, [clickCount])

  const handleSequenceChange = useCallback((index: number) => {
    dispatch({ type: 'SET_SEQUENCE', payload: index });
    dispatch({ type: 'SET_PLAYING', payload: true });
    dispatch({ type: 'RESET_CLICK' });
    setTypewriterKey((prev) => prev + 1); // Force typewriter restart
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
    dispatch({ type: 'RESET' });
    setTypewriterKey((prev) => prev + 1); // Force typewriter restart
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
            <span className="text-sm font-medium text-gray-300">
              {currentDemo.name.toLowerCase().replace(/\s+/g, "-")}.css
            </span>
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
