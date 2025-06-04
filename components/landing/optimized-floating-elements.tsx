"use client"

import { memo, useMemo } from "react"

const floatingClasses = [
  "bg-blue-500",
  "text-white",
  "px-4",
  "py-2",
  "rounded-lg",
  "shadow-md",
  "hover:bg-blue-600",
  "transition-all",
  "flex",
  "items-center",
  "justify-center",
  "space-x-2",
  "w-full",
  "max-w-md",
  "mx-auto",
  "font-medium",
  "border",
  "border-blue-400",
  "transform",
  "hover:scale-105",
  "duration-300",
]

export const OptimizedFloatingElements = memo(() => {
  const elements = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        // Reduced from 25 to 15 for better performance
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 4,
        class: floatingClasses[Math.floor(Math.random() * floatingClasses.length)],
      })),
    [],
  )

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-xs font-mono text-muted-foreground/15 animate-float-gentle will-change-transform"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.class}
        </div>
      ))}
    </>
  )
})

OptimizedFloatingElements.displayName = "OptimizedFloatingElements"
