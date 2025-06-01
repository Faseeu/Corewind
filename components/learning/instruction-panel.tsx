"use client"

import { HelpCircle, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedProgress } from "@/components/ui/animated-progress"

interface Lesson {
  title: string
  description: string
  step: number
  totalSteps: number
  targetClasses: string[]
}

interface InstructionPanelProps {
  lesson: Lesson
  appliedClasses: string[]
  onNext: () => void
}

export function InstructionPanel({ lesson, appliedClasses, onNext }: InstructionPanelProps) {
  const isComplete = lesson.targetClasses.every((cls) => appliedClasses.includes(cls))

  return (
    <div className="h-full flex flex-col p-6 space-y-6 animate-slide-up">
      {/* Current Task */}
      <div className="space-y-4 animate-fade-in">
        <h2 className="text-2xl font-semibold">{lesson.title}</h2>
        <p className="text-muted-foreground">{lesson.description}</p>
      </div>

      {/* Progress */}
      <div className="animate-fade-in stagger-1">
        <AnimatedProgress value={(lesson.step / lesson.totalSteps) * 100} showPercentage={false} color="primary" />
        <div className="flex justify-between text-sm mt-2">
          <span>Progress</span>
          <span>
            Step {lesson.step} of {lesson.totalSteps}
          </span>
        </div>
      </div>

      {/* Hint Button */}
      <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 animate-fade-in stagger-2">
        <HelpCircle className="w-4 h-4" />
        <span>Stuck? Get a Hint</span>
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Next Button */}
      <div className="animate-fade-in stagger-3">
        <AnimatedButton
          variant="primary"
          onClick={onNext}
          disabled={!isComplete}
          success={isComplete}
          className="w-full"
        >
          <span>{isComplete ? "Next Step" : "Complete Task"}</span>
          <ArrowRight className="w-4 h-4" />
        </AnimatedButton>
      </div>
    </div>
  )
}
