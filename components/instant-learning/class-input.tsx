"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

interface ClassInputProps {
  currentInput: string
  appliedClasses: string[]
  onClassAdd: (className: string) => void
  onClassRemove: (className: string) => void
}

const commonClasses = [
  "w-32",
  "w-48",
  "w-64",
  "h-32",
  "h-48",
  "h-64",
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "p-4",
  "p-6",
  "p-8",
  "px-4",
  "py-2",
  "px-6",
  "py-4",
  "rounded",
  "rounded-lg",
  "rounded-xl",
  "rounded-full",
  "border",
  "border-2",
  "border-4",
  "border-red-500",
  "border-blue-500",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "font-bold",
  "font-semibold",
  "font-medium",
  "text-white",
  "text-black",
  "text-gray-700",
  "text-blue-500",
  "text-center",
  "text-left",
  "text-right",
  "leading-relaxed",
  "flex",
  "space-x-4",
]

export function ClassInput({ appliedClasses, onClassAdd, onClassRemove }: ClassInputProps) {
  const [currentInput, setCurrentInput] = useState("")

  const filteredSuggestions = commonClasses
    .filter((cls) => cls.toLowerCase().includes(currentInput.toLowerCase()) && !appliedClasses.includes(cls))
    .slice(0, 4)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentInput.trim()) {
      onClassAdd(currentInput.trim())
      setCurrentInput("")
    }
  }

  return (
    <div className="w-full">
      <div className="bg-green-100 rounded-2xl p-6 h-full flex flex-col">
        {/* Applied Classes */}
        <div className="mb-4 flex-1">
          <div className="text-sm font-medium text-green-800 mb-3">Applied Classes</div>
          <div className="flex flex-wrap gap-2 min-h-[60px]">
            {appliedClasses.length === 0 ? (
              <div className="text-sm text-green-600 italic">Start typing below...</div>
            ) : (
              appliedClasses.map((className) => (
                <span
                  key={className}
                  className="inline-flex items-center px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-mono group hover:bg-green-300 transition-colors duration-200"
                >
                  {className}
                  <button
                    onClick={() => onClassRemove(className)}
                    className="ml-2 text-green-600 hover:text-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Input Section */}
        <div className="relative">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tailwind classes go here"
            className="w-full bg-white border-2 border-green-300 rounded-xl px-4 py-4 text-slate-800 placeholder-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-lg font-medium"
          />

          {/* Suggestions */}
          {currentInput && filteredSuggestions.length > 0 && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-green-300 rounded-lg shadow-lg z-10 overflow-hidden">
              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    onClassAdd(suggestion)
                    setCurrentInput("")
                  }}
                  className="w-full text-left px-4 py-2 text-slate-700 hover:bg-green-50 transition-colors duration-200 font-mono text-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
