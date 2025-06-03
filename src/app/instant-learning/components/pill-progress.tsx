"use client"

import { useEffect, useState } from "react"

interface PillProgressProps {
  progress: number
  completedLessons: number
  totalLessons: number
}

export function PillProgress({ progress, completedLessons, totalLessons }: PillProgressProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 200)
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Your Progress</h2>
          <p className="text-slate-400 text-sm">
            {completedLessons} of {totalLessons} lessons completed
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{Math.round(animatedProgress)}%</div>
          <div className="text-slate-400 text-sm">Complete</div>
        </div>
      </div>

      {/* Pill Progress Bar */}
      <div className="relative">
        <div className="w-full bg-slate-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${animatedProgress}%` }}
          />
        </div>

        {/* Progress Indicator */}
        <div
          className="absolute top-0 h-3 w-6 bg-white rounded-full shadow-lg transition-all duration-500 ease-out"
          style={{ left: `calc(${animatedProgress}% - 12px)` }}
        />
      </div>

      {/* Motivational Text */}
      <div className="mt-4 text-center">
        <p className="text-slate-300 text-sm">
          {progress < 25
            ? "Great start! Keep building your foundation 🌱"
            : progress < 50
              ? "You're making excellent progress! 🚀"
              : progress < 75
                ? "More than halfway there! 💪"
                : progress < 100
                  ? "Almost finished! You're doing amazing! 🎯"
                  : "Congratulations! You're a Tailwind expert! 🏆"}
        </p>
      </div>
    </div>
  )
}
