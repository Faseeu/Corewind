"use client"

import { ChevronRight } from "lucide-react"

interface ContinueButtonProps {
  isComplete: boolean
  onNext: () => void
}

export function ContinueButton({ isComplete, onNext }: ContinueButtonProps) {
  return (
    <div className="w-full">
      <button
        onClick={onNext}
        disabled={!isComplete}
        className={`w-full py-4 px-6 rounded-[25px] font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
          isComplete
            ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            : "bg-slate-200 text-slate-400 cursor-not-allowed"
        }`}
      >
        <span>Continue</span>
        {isComplete && <ChevronRight className="w-5 h-5" />}
      </button>
    </div>
  )
}
