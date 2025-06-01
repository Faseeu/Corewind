"use client"

import { useState } from "react"
import { Monitor, Tablet, Smartphone } from "lucide-react"

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
}

const viewports = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
]

export function LivePreview({ appliedClasses, component }: LivePreviewProps) {
  const [activeViewport, setActiveViewport] = useState("desktop")

  const currentViewport = viewports.find((v) => v.id === activeViewport)

  const renderComponent = () => {
    const className = appliedClasses.join(" ")

    switch (component) {
      case "button":
        return (
          <button
            className={`${className || "px-4 py-2 border border-gray-300 rounded"} transition-all duration-300 hover:scale-105`}
          >
            Click me
          </button>
        )
      default:
        return (
          <div className={`${className || "p-4 border border-gray-300 rounded"} transition-all duration-300`}>
            Sample Element
          </div>
        )
    }
  }

  return (
    <div className="h-full flex flex-col animate-fade-in">
      {/* Viewport Controls */}
      <div className="border-b border-border p-4">
        <div className="flex items-center space-x-2">
          {viewports.map((viewport, index) => {
            const Icon = viewport.icon
            return (
              <button
                key={viewport.id}
                onClick={() => setActiveViewport(viewport.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105 animate-fade-in stagger-${index + 1} ${
                  activeViewport === viewport.id ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-secondary"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{viewport.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="h-full flex items-center justify-center">
          <div
            className="transition-all duration-500 ease-out bg-white rounded-lg shadow-lg p-8 min-h-[200px] flex items-center justify-center hover:shadow-xl"
            style={{
              width: currentViewport?.width,
              maxWidth: "100%",
            }}
          >
            <div className="animate-scale-in">{renderComponent()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
