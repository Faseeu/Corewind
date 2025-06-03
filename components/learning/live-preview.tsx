"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Tablet, Smartphone } from "lucide-react"

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
  starter_html_structure?: string // Legacy format
  starter_component_jsx?: string // New format
  target_classes_applied_to_selector?: string // New prop for specific targeting
}

const viewports = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
]

export function LivePreview({
  appliedClasses,
  component,
  starter_html_structure,
  starter_component_jsx,
  target_classes_applied_to_selector,
}: LivePreviewProps) {
  const [activeViewport, setActiveViewport] = useState("desktop")
  const currentViewport = viewports.find((v) => v.id === activeViewport)
  const contentHostRef = useRef<HTMLDivElement>(null) // Ref for the div wrapping renderComponent output

  useEffect(() => {
    const hostElement = contentHostRef.current
    if (!hostElement || !hostElement.children[0]) {
      return // No content to apply classes to
    }

    const baseTransitionClasses = "transition-all duration-300"
    const newClassName = appliedClasses.join(" ")
    const fullClassName = `${baseTransitionClasses} ${newClassName}`.trim()

    const renderedOutputElement = hostElement.children[0] as HTMLElement

    // Handle new format with starter_component_jsx
    if (starter_component_jsx) {
      let targetElement: HTMLElement | null = renderedOutputElement // Default to the wrapper

      if (target_classes_applied_to_selector) {
        const selected = renderedOutputElement.querySelector(target_classes_applied_to_selector)
        if (selected instanceof HTMLElement) {
          targetElement = selected
        } else {
          console.warn(
            `LivePreview: Selector "${target_classes_applied_to_selector}" did not find a valid HTMLElement. Applying classes to wrapper.`,
          )
          // If selector fails, classes are applied to the 'renderedOutputElement' (the direct div from dangerouslySetInnerHTML)
        }
      }
      // Apply classes to the determined targetElement
      if (targetElement) {
        targetElement.className = fullClassName
      }
    }
    // Handle legacy format with starter_html_structure
    else if (starter_html_structure) {
      // For legacy format, classes are applied to the wrapper
      renderedOutputElement.className = fullClassName
    }
    // For fallback components (neither starter_component_jsx nor starter_html_structure),
    // classes are applied via props in renderComponent.
  }, [appliedClasses, starter_component_jsx, starter_html_structure, target_classes_applied_to_selector, component])

  const renderComponent = () => {
    // New format: starter_component_jsx
    if (starter_component_jsx) {
      // Return raw HTML; useEffect will handle class application on its wrapper or specified child.
      return <div dangerouslySetInnerHTML={{ __html: starter_component_jsx }} />
    }

    // Legacy format: starter_html_structure
    if (starter_html_structure) {
      return <div dangerouslySetInnerHTML={{ __html: starter_html_structure }} />
    }

    // Fallback logic: These components receive the full class string via props.
    const baseTransitionClasses = "transition-all duration-300"
    const newClassName = appliedClasses.join(" ")
    const fullClassName = `${baseTransitionClasses} ${newClassName}`.trim()

    switch (component) {
      case "button":
        return (
          <button className={`${fullClassName || "px-4 py-2 border border-gray-300 rounded"} hover:scale-105`}>
            Click me
          </button>
        )
      case "p":
        return <p className={`${fullClassName || "text-base"}`}>This is a sample paragraph.</p>
      default:
        return <div className={`${fullClassName || "p-4 border border-gray-300 rounded"}`}>Preview Element</div>
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
            {/* This is the div where the ref is attached */}
            <div ref={contentHostRef} className="animate-scale-in w-full h-full flex items-center justify-center">
              {renderComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
