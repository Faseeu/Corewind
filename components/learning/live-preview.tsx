"use client"

import { useState } from "react"
import { Monitor, Tablet, Smartphone } from "lucide-react"

import { useEffect, useRef, useState } from "react" // Added useRef and useEffect
import { Monitor, Tablet, Smartphone } from "lucide-react"

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
  starter_html_structure?: string; // Added new optional prop
}

const viewports = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
]

export function LivePreview({ appliedClasses, component, starter_html_structure }: LivePreviewProps) {
  const [activeViewport, setActiveViewport] = useState("desktop")
  const currentViewport = viewports.find((v) => v.id === activeViewport)

  const renderComponent = () => {
    const className = appliedClasses.join(" ")
    const baseTransitionClasses = "transition-all duration-300" // Common transition

    if (starter_html_structure) {
      // Apply classes to the wrapper div. The starter_html_structure's root element will receive these.
      // Base transition classes can be added here if desired for the wrapper.
      return (
        <div
          className={`${className} ${baseTransitionClasses}`}
          dangerouslySetInnerHTML={{ __html: starter_html_structure }}
        />
      );
    }

    // Fallback to existing switch logic if starter_html_structure is not provided
    switch (component) {
      case "button":
        return (
          <button
            className={`${className || "px-4 py-2 border border-gray-300 rounded"} ${baseTransitionClasses} hover:scale-105`}
          >
            Click me
          </button>
        );
      case "p":
        return (
          <p
            className={`${className || "text-base"} ${baseTransitionClasses}`}
          >
            This is a sample paragraph.
          </p>
        );
      default:
        return (
          <div className={`${className || "p-4 border border-gray-300 rounded"} ${baseTransitionClasses}`}>
            Preview Element
          </div>
        );
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
