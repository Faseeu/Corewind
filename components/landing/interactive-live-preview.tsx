"use client"

import { useState, useEffect } from "react"
import { Monitor, Tablet, Smartphone, RotateCcw, Play, Pause } from "lucide-react"
import Typewriter from "@/components/ui/typewriter"

interface InteractiveLivePreviewProps {
  className?: string
}

const classSequences = [
  {
    name: "Primary Button",
    classes: "bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all font-medium",
    description: "A classic primary button with hover effects",
  },
  {
    name: "Success Button",
    classes:
      "bg-emerald-500 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-600 transition-all font-semibold border-2 border-emerald-400",
    description: "Success variant with enhanced styling",
  },
  {
    name: "Minimal Button",
    classes:
      "bg-slate-100 text-slate-700 px-4 py-2 rounded-full shadow-sm hover:bg-slate-200 transition-all text-sm border border-slate-300",
    description: "Clean, minimal design approach",
  },
  {
    name: "Gradient Button",
    classes:
      "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all font-bold transform hover:scale-105",
    description: "Eye-catching gradient with animations",
  },
]

const viewports = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
]

export function InteractiveLivePreview({ className = "" }: InteractiveLivePreviewProps) {
  const [currentSequence, setCurrentSequence] = useState(0)
  const [activeViewport, setActiveViewport] = useState("desktop")
  const [isPlaying, setIsPlaying] = useState(true)
  const [manualClasses, setManualClasses] = useState("")
  const [isManualMode, setIsManualMode] = useState(false)

  const currentViewport = viewports.find((v) => v.id === activeViewport)
  const currentClassSet = classSequences[currentSequence]

  useEffect(() => {
    if (!isPlaying || isManualMode) return

    const interval = setInterval(() => {
      setCurrentSequence((prev) => (prev + 1) % classSequences.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isPlaying, isManualMode])

  const handleManualInput = (value: string) => {
    setManualClasses(value)
    setIsManualMode(true)
  }

  const resetToAuto = () => {
    setIsManualMode(false)
    setManualClasses("")
    setIsPlaying(true)
  }

  const displayClasses = isManualMode ? manualClasses : currentClassSet.classes
  const displayDescription = isManualMode ? "Custom styling" : currentClassSet.description

  return (
    <div className={`bg-card border border-border rounded-2xl overflow-hidden shadow-xl ${className}`}>
      {/* Header Controls */}
      <div className="bg-muted/50 border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">live-preview.html</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Viewport Controls */}
            {viewports.map((viewport) => {
              const Icon = viewport.icon
              return (
                <button
                  key={viewport.id}
                  onClick={() => setActiveViewport(viewport.id)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    activeViewport === viewport.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "hover:bg-secondary text-muted-foreground"
                  }`}
                  title={viewport.label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              )
            })}

            <div className="w-px h-6 bg-border mx-2"></div>

            {/* Playback Controls */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={resetToAuto}
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors"
              title="Reset to Auto"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Manual Input */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">Try your own classes:</label>
          <input
            type="text"
            value={manualClasses}
            onChange={(e) => handleManualInput(e.target.value)}
            placeholder="Type Tailwind classes here..."
            className="w-full px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Preview Area */}
      <div className="p-8 min-h-[300px] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div
          className="transition-all duration-500 ease-out"
          style={{
            width: currentViewport?.width,
            maxWidth: "100%",
          }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8 flex items-center justify-center min-h-[200px]">
            <button
              className={`transition-all duration-300 ${displayClasses || "px-4 py-2 bg-gray-200 text-gray-600 rounded"}`}
            >
              {displayClasses ? "Beautiful Button" : "Default Button"}
            </button>
          </div>
        </div>
      </div>

      {/* Code Display */}
      <div className="bg-slate-900 text-slate-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-slate-400">Classes Applied:</span>
            {!isManualMode && (
              <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">{currentClassSet.name}</span>
            )}
          </div>
          <span className="text-xs text-slate-500">{displayClasses.split(" ").length} classes</span>
        </div>

        <div className="font-mono text-sm min-h-[60px] flex items-center">
          {isManualMode ? (
            <span className="text-green-400">{manualClasses || "Type some classes above..."}</span>
          ) : (
            <Typewriter
              key={currentSequence}
              text={displayClasses}
              speed={25}
              initialDelay={500}
              loop={false}
              showCursor={true}
              cursorChar="|"
              className="text-green-400"
            />
          )}
        </div>

        <div className="mt-3 pt-3 border-t border-slate-700">
          <p className="text-xs text-slate-400 italic">{displayDescription}</p>
        </div>
      </div>
    </div>
  )
}
