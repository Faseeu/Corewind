"use client"

import { HelpCircle, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Updated Lesson interface to match new curriculum structure
interface Lesson {
  id: string
  // New curriculum properties
  main_title?: string
  secondary_title?: string
  difficulty_level?: string
  focus_concept?: string
  instruction?: string
  explanation?: {
    intro?: string
    class_details?: Array<{
      className: string
      css_equivalent?: string
      description: string
    }>
    key_takeaway?: string
    expert_tip?: string
  }
  // Legacy properties (for backward compatibility)
  title?: string
  description?: string
  learnings?: string[]
  // Common properties
  target_classes?: string[]
  targetClasses?: string[] // Legacy property
  hint?: string
}

interface InstructionPanelProps {
  lesson: Lesson
  appliedClasses: string[]
  onNext: () => void
}

export function InstructionPanel({ lesson, appliedClasses, onNext }: InstructionPanelProps) {
  // Support both new and legacy target classes
  const targetClasses = lesson.target_classes || lesson.targetClasses || []
  const isComplete = targetClasses.every((cls) => appliedClasses.includes(cls))

  // Basic markdown to HTML for **bold** text -> <strong>bold</strong>
  const formatText = (text: string) => {
    if (!text) return ""
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  }

  // Determine if we're using the new curriculum format
  const isNewFormat = !!lesson.main_title

  return (
    <div className="h-full flex flex-col p-6 space-y-4 overflow-y-auto animate-slide-up">
      {/* Titles and Difficulty */}
      <div className="space-y-2 animate-fade-in">
        <h2 className="text-2xl font-bold">{isNewFormat ? lesson.main_title : lesson.title}</h2>
        {isNewFormat && lesson.secondary_title && (
          <p className="text-md text-muted-foreground">{lesson.secondary_title}</p>
        )}
        {!isNewFormat && lesson.description && <p className="text-muted-foreground">{lesson.description}</p>}
        <div className="flex space-x-4 text-sm text-muted-foreground">
          {lesson.difficulty_level && (
            <p>
              Difficulty:{" "}
              <Badge variant="outline" className="font-medium">
                {lesson.difficulty_level.replace(/_/g, " ")}
              </Badge>
            </p>
          )}
        </div>
      </div>

      {/* Focus Concept - New Format */}
      {lesson.focus_concept && (
        <div className="animate-fade-in stagger-1 py-2">
          <h3 className="text-md font-semibold mb-1">Focus:</h3>
          <p className="text-sm text-muted-foreground">{lesson.focus_concept}</p>
        </div>
      )}

      {/* Instruction - New Format or Description - Old Format */}
      <div className="animate-fade-in stagger-2 py-2">
        <h3 className="text-md font-semibold mb-1">Instructions:</h3>
        <p
          className="text-sm text-foreground"
          dangerouslySetInnerHTML={{
            __html: formatText(isNewFormat ? lesson.instruction : lesson.description),
          }}
        ></p>
      </div>

      {/* Key Concepts/Learnings - Old Format */}
      {!isNewFormat && lesson.learnings && lesson.learnings.length > 0 && (
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

      {/* Explanation Section - New Format */}
      {lesson.explanation && (
        <div className="space-y-3 py-3 border-t border-border animate-fade-in stagger-3">
          <h3 className="text-xl font-semibold">Explanation</h3>
          {lesson.explanation.intro && <p className="text-sm text-muted-foreground">{lesson.explanation.intro}</p>}

          {lesson.explanation.class_details && lesson.explanation.class_details.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="text-md font-semibold">Class Details:</h4>
              {lesson.explanation.class_details.map((detail, index) => (
                <Card key={index} className="bg-card-foreground/5 dark:bg-card-foreground/10">
                  <CardContent className="p-3 space-y-1">
                    <p className="font-mono font-semibold text-sm text-primary">{detail.className}</p>
                    {detail.css_equivalent && (
                      <p className="text-xs font-mono text-muted-foreground">
                        CSS: <code>{detail.css_equivalent}</code>
                      </p>
                    )}
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: formatText(detail.description) }}></p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {lesson.explanation.key_takeaway && (
            <div className="pt-2">
              <h4 className="text-md font-semibold">Key Takeaway:</h4>
              <p className="text-sm text-muted-foreground">{lesson.explanation.key_takeaway}</p>
            </div>
          )}

          {lesson.explanation.expert_tip && (
            <div className="pt-2">
              <h4 className="text-md font-semibold">Expert Tip:</h4>
              <p className="text-sm text-muted-foreground italic">{lesson.explanation.expert_tip}</p>
            </div>
          )}
        </div>
      )}

      {/* Hint Button */}
      <div className="pt-2 animate-fade-in stagger-4">
        <button
          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!lesson.hint}
          onClick={() => {
            if (lesson.hint) {
              alert(`Hint: ${lesson.hint}`)
            }
          }}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Stuck? Get a Hint</span>
        </button>
      </div>

      {/* Spacer to push Next button to bottom */}
      <div className="flex-1 min-h-[2rem]" />

      {/* Next Button */}
      <div className="animate-fade-in stagger-5 sticky bottom-0 py-4 bg-card">
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
