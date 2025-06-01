"use client"

import React from "react"

import { useEffect, useState } from "react"
import { CheckCircle, X } from "lucide-react"

interface SuccessFeedbackProps {
  show: boolean
  message: string
  type?: "success" | "error"
  onClose?: () => void
  autoClose?: boolean
  duration?: number
}

export function SuccessFeedback({
  show,
  message,
  type = "success",
  onClose,
  autoClose = true,
  duration = 3000,
}: SuccessFeedbackProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      if (autoClose) {
        const timer = setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => onClose?.(), 300)
        }, duration)
        return () => clearTimeout(timer)
      }
    } else {
      setIsVisible(false)
    }
  }, [show, autoClose, duration, onClose])

  if (!show) return null

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"
  const icon = type === "success" ? CheckCircle : X

  return (
    <div
      className={`
        fixed top-20 right-4 z-50 flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg text-white
        ${bgColor}
        ${isVisible ? "animate-slide-down" : "animate-slide-up"}
        transition-all duration-300
      `}
    >
      {React.createElement(icon, { className: "w-5 h-5" })}
      <span className="font-medium">{message}</span>
      {onClose && (
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(() => onClose(), 300)
          }}
          className="ml-2 hover:bg-white/20 rounded p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
