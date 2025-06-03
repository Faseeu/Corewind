"use client"

import { Eye, Target, CheckCircle2 } from "lucide-react"

interface ComponentStageProps {
  appliedClasses: string[]
  component: string
  targetClasses: string[]
  lessonTitle: string
}

export function ComponentStage({ appliedClasses, component, targetClasses, lessonTitle }: ComponentStageProps) {
  const className = appliedClasses.join(" ")
  const correctClasses = appliedClasses.filter((cls) => targetClasses.includes(cls)).length
  const isComplete = targetClasses.every((cls) => appliedClasses.includes(cls))

  const renderComponent = () => {
    const baseClasses = "transition-all duration-300 ease-in-out"
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

    switch (component) {
      case "button":
        return (
          <button
            className={
              combinedClasses ||
              `${baseClasses} px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300`
            }
          >
            Click me
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
            {className.includes("text") ? (
              <span className="text-sm font-medium">Sample Text</span>
            ) : (
              <span className="text-sm text-slate-500 font-medium">Your Box</span>
            )}
          </div>
        )
      case "text":
        return (
          <div className={combinedClasses || `${baseClasses} text-slate-800 max-w-sm`}>
            <h1 className="text-2xl font-bold mb-3">Sample Heading</h1>
            <p className="text-base leading-relaxed">
              This is a sample paragraph to demonstrate text styling and typography changes.
            </p>
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
            <span className="text-sm text-slate-500 font-medium">Element</span>
          </div>
        )
    }
  }

  return (
    <div className="sticky top-24">
      {/* Stage Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Eye className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Component Preview</h2>
            <p className="text-sm text-slate-400">Watch your changes in real-time</p>
          </div>
        </div>
      </div>

      {/* Main Stage */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Stage Toolbar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-slate-600">preview.html</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <Target className="w-4 h-4 text-slate-500" />
                <span className="text-slate-600 font-medium">
                  {correctClasses}/{targetClasses.length}
                </span>
                {isComplete && <CheckCircle2 className="w-4 h-4 text-green-500" />}
              </div>
            </div>
          </div>
        </div>

        {/* Component Display Area */}
        <div className="p-12 min-h-[400px] bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
          <div className="relative">
            {renderComponent()}

            {/* Completion Glow Effect */}
            {isComplete && (
              <div className="absolute inset-0 bg-green-400/20 rounded-lg animate-pulse pointer-events-none" />
            )}
          </div>
        </div>

        {/* Applied Classes Display */}
        <div className="bg-slate-900 px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-300">Applied Classes</span>
            <span className="text-xs text-slate-500">{appliedClasses.length} classes</span>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[32px]">
            {appliedClasses.length === 0 ? (
              <span className="text-sm text-slate-500 italic">No classes applied yet...</span>
            ) : (
              appliedClasses.map((cls) => (
                <span
                  key={cls}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    targetClasses.includes(cls)
                      ? "bg-green-500/20 text-green-300 border border-green-500/30 shadow-sm"
                      : "bg-slate-700 text-slate-300 border border-slate-600"
                  }`}
                >
                  {cls}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Progress</span>
          <span className={`font-medium ${isComplete ? "text-green-400" : "text-slate-300"}`}>
            {isComplete ? "Complete! 🎉" : `${correctClasses}/${targetClasses.length} correct`}
          </span>
        </div>

        <div className="mt-3 w-full bg-slate-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isComplete
                ? "bg-gradient-to-r from-green-400 to-emerald-400"
                : "bg-gradient-to-r from-blue-400 to-cyan-400"
            }`}
            style={{ width: `${(correctClasses / targetClasses.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
