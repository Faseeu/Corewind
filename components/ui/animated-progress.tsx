"use client"

import { useEffect, useState } from "react"

interface AnimatedProgressProps {
  value: number
  max?: number
  className?: string
  showPercentage?: boolean
  color?: "primary" | "success" | "warning"
}

export function AnimatedProgress({
  value,
  max = 100,
  className = "",
  showPercentage = false,
  color = "primary",
}: AnimatedProgressProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value)
    }, 100)

    return () => clearTimeout(timer)
  }, [value])

  const percentage = Math.min((animatedValue / max) * 100, 100)

  const colorClasses = {
    primary: "bg-primary",
    success: "bg-green-500",
    warning: "bg-yellow-500",
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {showPercentage && (
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span className="font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="progress-bar relative overflow-hidden">
        <div
          className={`progress-fill animate-progress ${colorClasses[color]} relative`}
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}
