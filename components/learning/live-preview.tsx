"use client"

import { useEffect, useState } from "react"
import { SvgText } from "@/components/ui/svg-text"
import React from "react"

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
  starter_component_jsx?: string
}

export function LivePreview({ appliedClasses, component, starter_component_jsx = "Your Box" }: LivePreviewProps) {
  const [renderedComponent, setRenderedComponent] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const classString = appliedClasses.join(" ")

    // Check if starter_component_jsx contains SVG or HTML
    const containsHtml = /<[a-z][\s\S]*>/i.test(starter_component_jsx)

    if (containsHtml) {
      // If it contains HTML/SVG, wrap it in SvgText
      setRenderedComponent(
        React.createElement(
          component,
          { className: classString },
          React.createElement(SvgText, {}, starter_component_jsx),
        ),
      )
    } else {
      // Otherwise, render as regular text
      setRenderedComponent(React.createElement(component, { className: classString }, starter_component_jsx))
    }
  }, [appliedClasses, component, starter_component_jsx])

  return <div className="flex items-center justify-center w-full h-full">{renderedComponent}</div>
}
