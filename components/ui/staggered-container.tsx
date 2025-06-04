"use client"

import React, { memo } from "react"

interface StaggeredContainerProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const StaggeredContainer = memo(({ children, delay = 100, className = "" }: StaggeredContainerProps) => {
  return (
    <div className={`stagger-container ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * delay}ms` }}>
          {child}
        </div>
      ))}
    </div>
  )
})

StaggeredContainer.displayName = "StaggeredContainer"
