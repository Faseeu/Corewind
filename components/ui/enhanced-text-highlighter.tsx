"use client"

import React, { useState, useEffect, useRef } from "react"
import { SvgText } from "@/components/ui/svg-text"

interface EnhancedTextHighlighterProps {
  text: string | React.ReactNode
  highlightColor?: string
  textColor?: string
  className?: string
  animationDuration?: number
  delay?: number
  onAnimationComplete?: () => void
  highlightWidth?: string
  highlightHeight?: string
  highlightOffset?: string
  highlightRadius?: string
  highlightOpacity?: string
  animated?: boolean
  children?: React.ReactNode
}

export function EnhancedTextHighlighter({
  text,
  highlightColor = "bg-primary/20",
  textColor = "text-foreground",
  className = "",
  animationDuration = 1000,
  delay = 0,
  onAnimationComplete,
  highlightWidth = "100%",
  highlightHeight = "0.6em",
  highlightOffset = "0.1em",
  highlightRadius = "0.25em",
  highlightOpacity = "0.7",
  animated = true,
  children,
}: EnhancedTextHighlighterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)

      if (animated) {
        const animationTimer = setTimeout(() => {
          setIsAnimated(true)
          if (onAnimationComplete) onAnimationComplete()
        }, animationDuration)

        return () => clearTimeout(animationTimer)
      } else {
        setIsAnimated(true)
        if (onAnimationComplete) onAnimationComplete()
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, animationDuration, onAnimationComplete, animated])

  // Check if text is a React element or string
  const isReactElement = React.isValidElement(text)
  const containsSvg = typeof text === "string" && text.includes("<svg")

  return (
    <span
      ref={containerRef}
      className={`relative inline-block ${textColor} ${className}`}
      style={{ whiteSpace: "pre-wrap" }}
    >
      {/* Highlight background */}
      <span
        className={`absolute ${highlightColor} ${animated ? "transition-all duration-700 ease-out" : ""}`}
        style={{
          left: 0,
          bottom: highlightOffset,
          height: highlightHeight,
          width: isVisible ? highlightWidth : "0%",
          borderRadius: highlightRadius,
          opacity: isAnimated ? highlightOpacity : "0",
          zIndex: -1,
          transformOrigin: "left",
        }}
      />

      {/* Text content */}
      {isReactElement ? text : containsSvg ? <SvgText>{text}</SvgText> : <span>{text}</span>}

      {children}
    </span>
  )
}
