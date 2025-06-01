"use client"

import { Trophy, ArrowRight } from "lucide-react"

interface SuccessModalProps {
  show: boolean
  onClose: () => void
  streakCount: number
  completedLessons: number
}

const celebrations = [
  "Perfect! 🎉",
  "Excellent work! 🚀",
  "Outstanding! ⚡",
  "Well done! 🌟",
  "Fantastic! 🎯",
  "Amazing! 💪",
]

export function SuccessModal({ show, onClose, streakCount, completedLessons }: SuccessModalProps) {
  if (!show) return null

  const celebration = celebrations[Math.floor(Math.random() * celebrations.length)]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl p-8 max-w-sm mx-4 border border-slate-600 shadow-2xl transform transition-all duration-300 scale-100">
        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-xl font-bold text-white mb-2">{celebration}</h2>
          <p className="text-slate-300 text-sm">You're building real Tailwind skills!</p>
        </div>

        {/* Continue Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>Next Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
