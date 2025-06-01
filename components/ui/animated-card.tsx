"use client"

import type React from "react"
import { useState } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  clickable?: boolean
  delay?: number
}

export function AnimatedCard({
  children,
  className = "",
  hover = true,
  clickable = false,
  delay = 0,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        card-base animate-fade-in
        ${hover ? "hover-lift" : ""}
        ${clickable ? "cursor-pointer" : ""}
        ${isHovered && hover ? "border-primary/50" : ""}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
