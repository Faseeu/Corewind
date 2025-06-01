"use client"

import type React from "react"
import { useState } from "react"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  success?: boolean
  children: React.ReactNode
}

export function AnimatedButton({
  variant = "primary",
  size = "md",
  loading = false,
  success = false,
  children,
  className = "",
  onClick,
  ...props
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = "relative overflow-hidden font-medium transition-all duration-200 button-press"

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover-glow",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-lg",
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    onClick?.(e)
  }

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${success ? "animate-pulse-success" : ""}
        ${isPressed ? "scale-95" : ""}
        ${loading ? "cursor-not-allowed opacity-70" : ""}
        ${className}
      `}
      onClick={handleClick}
      disabled={loading || props.disabled}
      {...props}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 overflow-hidden rounded-inherit">
        <span className="absolute inset-0 bg-white/20 transform scale-0 rounded-full transition-transform duration-300 group-active:scale-100" />
      </span>

      {/* Content */}
      <span className="relative flex items-center justify-center space-x-2">
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </span>
    </button>
  )
}
