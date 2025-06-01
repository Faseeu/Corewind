"use client"

import { useState, memo } from "react"
import { CheckCircle2, Circle, Lightbulb, ChevronDown } from "lucide-react"

interface MissionsCardProps {
  targetClasses: string[]
  appliedClasses: string[]
  hint?: string
}

function MissionsCardOriginal({ targetClasses, appliedClasses, hint }: MissionsCardProps) {
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="h-full flex flex-col">
      <div className="bg-slate-100 rounded-2xl p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Missions</h3>
          <div className="text-sm text-slate-600">Complete these tasks to finish the lesson</div>
        </div>

        {/* Mission List */}
        <div className="space-y-3 flex-1">
          {targetClasses.map((className, index) => {
            const isCompleted = appliedClasses.includes(className)
            return (
              <div key={className} className="flex items-center space-x-3">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
                <div
                  className={`font-mono text-sm transition-colors duration-200 ${
                    isCompleted ? "text-green-700 line-through" : "text-slate-700"
                  }`}
                >
                  Add <span className="bg-slate-200 px-2 py-1 rounded">{className}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Hint Section */}
        {hint && (
          <div className="mt-6 pt-4 border-t border-slate-200">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center justify-between w-full text-left p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Need a hint?</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-yellow-600 transition-transform duration-200 ${showHint ? "rotate-180" : ""}`}
              />
            </button>

            {showHint && (
              <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-sm text-yellow-800">{hint}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export const MissionsCard = memo(MissionsCardOriginal);
MissionsCard.displayName = "MissionsCard";
