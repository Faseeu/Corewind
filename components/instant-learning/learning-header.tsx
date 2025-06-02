"use client"

import { Flame, BookOpen } from "lucide-react"

interface LearningHeaderProps {
  streakCount: number
  completedLessons: number
  totalLessons: number
}

export function LearningHeader({ streakCount, completedLessons, totalLessons }: LearningHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">Corewind</span>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6">
          {/* Streak */}
          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-slate-800">{streakCount}</span>
            <span className="text-slate-600 text-sm">day streak</span>
          </div>

          {/* Progress */}
          <div className="text-slate-600 text-sm">
            <span className="text-slate-800 font-semibold">{completedLessons}</span>/{totalLessons} lessons
          </div>
        </div>
      </div>
    </header>
  )
}
