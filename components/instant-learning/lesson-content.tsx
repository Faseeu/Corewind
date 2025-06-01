"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight, Lightbulb, BookOpen, X, Plus } from "lucide-react"

interface Lesson {
  id: string
  title: string
  description: string
  instruction: string
  targetClasses: string[]
  component: string
  hint?: string
}

interface LessonContentProps {
  lesson: Lesson
  moduleTitle: string
  appliedClasses: string[]
  onClassAdd: (className: string) => void
  onClassRemove: (className: string) => void
  onNext: () => void
  isComplete: boolean
  lessonNumber: number
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

export function LessonContent({
  lesson,
  moduleTitle,
  appliedClasses,
  onClassAdd,
  onClassRemove,
  onNext,
  isComplete,
  lessonNumber,
}: LessonContentProps) {
  const [currentInput, setCurrentInput] = useState("")
  const [showHint, setShowHint] = useState(false)

  const filteredSuggestions = commonClasses
    .filter((cls) => cls.toLowerCase().includes(currentInput.toLowerCase()) && !appliedClasses.includes(cls))
    .slice(0, 6)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentInput.trim()) {
      onClassAdd(currentInput.trim())
      setCurrentInput("")
    }
  }

  if (!lesson) {
    return (
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 text-center border border-green-500/20">
        <div className="text-3xl font-bold text-white mb-4">🎉 Congratulations!</div>
        <div className="text-slate-300 text-lg">You've completed all available lessons!</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Lesson Header */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-blue-400 mb-1">
              {moduleTitle} • Lesson {lessonNumber}
            </div>
            <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">{lesson.description}</p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-1">Your Task</div>
                <div className="text-white">{lesson.instruction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Class Management */}
      <div className="bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 overflow-hidden">
        <div className="bg-slate-700/50 px-6 py-4 border-b border-slate-600">
          <h3 className="text-lg font-semibold text-white">Add Tailwind Classes</h3>
          <p className="text-sm text-slate-400 mt-1">Type class names and press Enter to apply them</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Input Section */}
          <div className="relative">
            <div className="relative">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a Tailwind class (e.g., bg-blue-500)..."
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 pr-12 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Plus className="w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Suggestions */}
            {currentInput && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-700 border border-slate-600 rounded-xl shadow-2xl z-10 overflow-hidden">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      onClassAdd(suggestion)
                      setCurrentInput("")
                    }}
                    className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors duration-200 border-b border-slate-600 last:border-b-0"
                  >
                    <span className="font-mono">{suggestion}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Applied Classes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-slate-300">Applied Classes</label>
              <span className="text-xs text-slate-500">{appliedClasses.length} applied</span>
            </div>

            <div className="min-h-[100px] bg-slate-700/50 rounded-xl p-4 border border-slate-600">
              {appliedClasses.length === 0 ? (
                <div className="flex items-center justify-center h-20">
                  <div className="text-center">
                    <div className="text-slate-500 text-sm mb-1">No classes applied yet</div>
                    <div className="text-slate-600 text-xs">Start typing above to add classes</div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {appliedClasses.map((className) => (
                    <div
                      key={className}
                      className={`group inline-flex items-center px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                        lesson.targetClasses.includes(className)
                          ? "bg-green-500/20 text-green-300 border border-green-500/30 shadow-sm"
                          : "bg-slate-600 text-slate-300 border border-slate-500 hover:bg-slate-500"
                      }`}
                    >
                      <span>{className}</span>
                      <button
                        onClick={() => onClassRemove(className)}
                        className="ml-3 text-slate-400 hover:text-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hint Section */}
      {lesson.hint && (
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full p-6 flex items-center justify-between text-left hover:bg-yellow-500/5 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold text-white">Need a hint?</div>
                <div className="text-sm text-slate-400">Click to reveal a helpful tip</div>
              </div>
            </div>
            <ChevronRight
              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${showHint ? "rotate-90" : ""}`}
            />
          </button>

          {showHint && (
            <div className="px-6 pb-6">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="text-yellow-300">{lesson.hint}</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Complete Button */}
      <div className="pt-4">
        <button
          onClick={onNext}
          disabled={!isComplete}
          className={`w-full py-5 px-8 rounded-xl font-semibold text-lg transition-all duration-200 ${
            isComplete
              ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              : "bg-slate-700 text-slate-400 cursor-not-allowed"
          }`}
        >
          <div className="flex items-center justify-center space-x-3">
            <span>{isComplete ? "🎉 Complete Lesson" : "Complete the task to continue"}</span>
            {isComplete && <ChevronRight className="w-6 h-6" />}
          </div>
        </button>
      </div>
    </div>
  )
}
