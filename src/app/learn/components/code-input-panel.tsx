"use client"

import type React from "react"
import { useState } from "react"
import { X, RotateCcw, Code } from "lucide-react"
import { AnimatedButton } from "@/src/components/ui/animated-button"
import { SuccessFeedback } from "@/src/components/ui/success-feedback"

interface CodeInputPanelProps {
  currentInput: string
  setCurrentInput: (value: string) => void
  appliedClasses: string[]
  onClassAdd: (className: string) => void
  onClassRemove: (className: string) => void
  onReset: () => void
}

const suggestions = [
  "bg-blue-500",
  "bg-red-500",
  "bg-green-500",
  "bg-yellow-500",
  "text-white",
  "text-black",
  "text-gray-500",
  "px-4",
  "py-2",
  "p-4",
  "p-6",
  "rounded",
  "rounded-lg",
  "rounded-full",
  "shadow",
  "shadow-lg",
  "shadow-xl",
]

export function CodeInputPanel({
  currentInput,
  setCurrentInput,
  appliedClasses,
  onClassAdd,
  onClassRemove,
  onReset,
}: CodeInputPanelProps) {
  const [showCSS, setShowCSS] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [inputError, setInputError] = useState(false)

  const filteredSuggestions = suggestions
    .filter((s) => s.toLowerCase().includes(currentInput.toLowerCase()) && !appliedClasses.includes(s))
    .slice(0, 5)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentInput.trim()) {
      if (suggestions.includes(currentInput.trim())) {
        onClassAdd(currentInput.trim())
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 2000)
      } else {
        setInputError(true)
        setTimeout(() => setInputError(false), 500)
      }
    }
  }

  const handleClassAdd = (className: string) => {
    onClassAdd(className)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  return (
    <div className="h-full flex flex-col p-6 space-y-6 animate-slide-up">
      <SuccessFeedback
        show={showSuccess}
        message="Class applied successfully!"
        type="success"
        onClose={() => setShowSuccess(false)}
      />

      {/* Element Info */}
      <div className="animate-fade-in">
        <h3 className="font-semibold mb-2">Styling: Button Element</h3>
      </div>

      {/* Class Input */}
      <div className="space-y-2 animate-fade-in stagger-1">
        <label className="text-sm font-medium">Tailwind Classes</label>
        <div className="relative">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter Tailwind classes..."
            className={`input-base input-focus w-full transition-all duration-200 ${
              inputError ? "animate-shake border-red-500" : ""
            }`}
          />

          {/* Autocomplete Suggestions */}
          {currentInput && filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-10 animate-slide-down">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  onClick={() => handleClassAdd(suggestion)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors animate-fade-in stagger-${index + 1}`}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Applied Classes */}
      <div className="space-y-2 animate-fade-in stagger-2">
        <label className="text-sm font-medium">Applied Classes</label>
        <div className="min-h-[100px] space-y-2">
          {appliedClasses.length === 0 ? (
            <p className="text-sm text-muted-foreground">No classes applied yet</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {appliedClasses.map((className, index) => (
                <span
                  key={className}
                  className={`inline-flex items-center space-x-1 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs transition-all duration-200 hover:bg-primary/20 animate-scale-in stagger-${index + 1}`}
                >
                  <span>{className}</span>
                  <button
                    onClick={() => onClassRemove(className)}
                    className="hover:text-destructive transition-colors hover:scale-110"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CSS Toggle */}
      <button
        onClick={() => setShowCSS(!showCSS)}
        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 animate-fade-in stagger-3"
      >
        <Code className="w-4 h-4" />
        <span>{showCSS ? "Hide" : "Show"} Generated CSS</span>
      </button>

      {showCSS && (
        <div className="bg-secondary p-3 rounded text-xs font-mono animate-slide-down">
          <pre className="whitespace-pre-wrap">
            {appliedClasses.length === 0
              ? "/* No CSS generated */"
              : `/* Generated CSS for: ${appliedClasses.join(" ")} */\n/* CSS output would appear here */`}
          </pre>
        </div>
      )}

      {/* Reset Button */}
      <AnimatedButton variant="secondary" onClick={onReset} className="w-full animate-fade-in stagger-4">
        <RotateCcw className="w-4 h-4" />
        <span>Reset Step</span>
      </AnimatedButton>
    </div>
  )
}
