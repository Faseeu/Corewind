"use client"

import { HelpCircle, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedProgress } from "@/components/ui/animated-progress"

import { Badge } from "@/components/ui/badge" // For displaying learnings

interface Lesson {
  title: string
  description: string
  targetClasses: string[]
  learnings?: string[]; // Added
  hint?: string; // Added
  // Removed step and totalSteps
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

      {/* Key Concepts/Learnings */}
      {lesson.learnings && lesson.learnings.length > 0 && (
        <div className="space-y-2 animate-fade-in stagger-1">
          <h3 className="text-lg font-semibold">Key Concepts:</h3>
          <div className="flex flex-wrap gap-2">
            {lesson.learnings.map((learning, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {learning}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Hint Button */}
      <button
        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 animate-fade-in stagger-2 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!lesson.hint}
        onClick={() => {
          if (lesson.hint) {
            // Basic alert for now, a proper UI toggle can be a follow-up
            alert(`Hint: ${lesson.hint}`);
          }
        }}
      >
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
