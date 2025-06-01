"use client"

import { useState } from "react"
import { Monitor, Tablet, Smartphone, Eye } from "lucide-react"

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
  targetClasses: string[]
}

const viewports = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
]

export function LivePreview({ appliedClasses, component, targetClasses }: LivePreviewProps) {
  const [activeViewport, setActiveViewport] = useState("desktop")
  const [showTarget, setShowTarget] = useState(false)

  const currentViewport = viewports.find((v) => v.id === activeViewport)
  const className = appliedClasses.join(" ")
  const targetClassName = targetClasses.join(" ")

  const renderComponent = (classes: string) => {
    switch (component) {
      case "button":
        return <button className={classes || "px-4 py-2 bg-gray-200 text-gray-800 rounded"}>Click me</button>
      case "div":
        return (
          <div className={classes || "w-32 h-32 bg-gray-200 rounded"}>
            {classes.includes("text") ? "Sample Text" : ""}
          </div>
        )
      case "text":
        return (
          <div className={classes || "text-gray-800"}>
            <h1>Sample Heading</h1>
            <p>This is a sample paragraph to demonstrate text styling.</p>
          </div>
        )
      default:
        return <div className={classes || "w-32 h-32 bg-gray-200 rounded"}>Sample Element</div>
    }
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

          {/* Viewport Controls */}
          <div className="flex items-center space-x-1">
            {viewports.map((viewport) => {
              const Icon = viewport.icon
              return (
                <button
                  key={viewport.id}
                  onClick={() => setActiveViewport(viewport.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    activeViewport === viewport.id
                      ? "bg-blue-500 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="p-8 min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="h-full flex items-center justify-center">
          <div
            className="transition-all duration-300 bg-white rounded-lg shadow-lg p-8 min-h-[200px] flex items-center justify-center relative"
            style={{
              width: currentViewport?.width,
              maxWidth: "100%",
            }}
          >
            {/* Your Result */}
            <div className="relative">
              {renderComponent(className)}
              <div className="absolute -top-8 left-0 text-xs font-medium text-slate-600">Your Result</div>
            </div>

            {/* Target Preview Toggle */}
            {targetClasses.length > 0 && (
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowTarget(!showTarget)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    showTarget ? "bg-green-500 text-white" : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                  }`}
                >
                  {showTarget ? "Hide Target" : "Show Target"}
                </button>
              </div>
            )}

            {/* Target Preview */}
            {showTarget && targetClasses.length > 0 && (
              <div className="absolute inset-0 bg-green-500/10 border-2 border-green-500 border-dashed rounded-lg flex items-center justify-center">
                <div className="relative">
                  {renderComponent(targetClassName)}
                  <div className="absolute -top-8 left-0 text-xs font-medium text-green-600">Target Result</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-slate-700 px-6 py-3 border-t border-slate-600">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Classes applied: {appliedClasses.length}</span>
          <span className="text-green-400">
            Correct: {appliedClasses.filter((cls) => targetClasses.includes(cls)).length}/{targetClasses.length}
          </span>
        </div>
      </div>
    </div>
  )
}
