"use client"

import { useEffect, useState } from "react"

interface ProgressCircleProps {
  progress: number
  completedLessons: number
  totalLessons: number
}

export function ProgressCircle({ progress, completedLessons, totalLessons }: ProgressCircleProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 300)
    return () => clearTimeout(timer)
  }, [progress])

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference

  return (
    <div className="relative">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse" />

      {/* Main Circle */}
      <div className="relative bg-slate-800 rounded-full p-6 border-2 border-slate-700">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle cx="50" cy="50" r="45" stroke="rgb(51 65 85)" strokeWidth="8" fill="none" />

          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-bold text-white mb-1">{Math.round(animatedProgress)}%</div>
          <div className="text-sm text-slate-400">
            {completedLessons} of {totalLessons}
          </div>
          <div className="text-xs text-slate-500 mt-1">lessons mastered</div>
        </div>
      </div>

      {/* Motivational Text */}
      <div className="text-center mt-4">
        <div className="text-lg font-semibold text-white mb-1">
          {progress < 25
            ? "Just getting started! 🌱"
            : progress < 50
              ? "You're on fire! 🔥"
              : progress < 75
                ? "Unstoppable! ⚡"
                : progress < 100
                  ? "Almost there! 🎯"
                  : "Tailwind Master! 🏆"}
        </div>
        <div className="text-sm text-slate-400">
          {progress < 25
            ? "Every expert was once a beginner"
            : progress < 50
              ? "Your skills are growing rapidly"
              : progress < 75
                ? "You're becoming a Tailwind pro"
                : progress < 100
                  ? "The finish line is in sight"
                  : "You've mastered the essentials!"}
        </div>
      </div>
    </div>
  )
}
