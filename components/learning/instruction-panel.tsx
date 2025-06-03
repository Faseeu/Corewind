"use client"

import { HelpCircle, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" // Added Card components

// Updated Lesson interface to match new curriculum structure
interface Lesson {
  id: string; // Keep id for keying if needed, though not directly displayed in this panel
  main_title: string;
  secondary_title?: string;
  difficulty_level?: string;
  focus_concept?: string;
  instruction: string;
  target_classes: string[]; // Still needed for isComplete logic
  explanation?: {
    intro?: string;
    class_details?: Array<{
      className: string;
      css_equivalent?: string;
      description: string;
    }>;
    key_takeaway?: string;
    expert_tip?: string;
  };
  hint?: string;
  // Removed: title, description (old ones), learnings (old array)
  // target_classes_to_remove and target_classes_applied_to_selector are not directly used in this panel
}

interface InstructionPanelProps {
  lesson: Lesson
  appliedClasses: string[]
  onNext: () => void
}

export function InstructionPanel({ lesson, appliedClasses, onNext }: InstructionPanelProps) {
  // Ensure target_classes is always an array, even if undefined in lesson data (though it shouldn't be)
  const targetClasses = lesson.target_classes || [];
  const isComplete = targetClasses.every((cls) => appliedClasses.includes(cls));

  // Basic markdown to HTML for **bold** text -> <strong>bold</strong>
  // A more robust solution would use a library like 'marked' or 'react-markdown'
  const formatInstruction = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className="h-full flex flex-col p-6 space-y-4 overflow-y-auto animate-slide-up">
      {/* Titles and Difficulty */}
      <div className="space-y-2 animate-fade-in">
        <h2 className="text-2xl font-bold">{lesson.main_title}</h2>
        {lesson.secondary_title && (
          <p className="text-md text-muted-foreground">{lesson.secondary_title}</p>
        )}
        <div className="flex space-x-4 text-sm text-muted-foreground">
          {lesson.difficulty_level && (
            <p>Difficulty: <Badge variant="outline" className="font-medium">{lesson.difficulty_level.replace(/_/g, ' ')}</Badge></p>
          )}
        </div>
      </div>

      {/* Focus Concept */}
      {lesson.focus_concept && (
        <div className="animate-fade-in stagger-1 py-2">
          <h3 className="text-md font-semibold mb-1">Focus:</h3>
          <p className="text-sm text-muted-foreground">{lesson.focus_concept}</p>
        </div>
      )}

      {/* Instruction */}
      <div className="animate-fade-in stagger-2 py-2">
        <h3 className="text-md font-semibold mb-1">Instructions:</h3>
        {/* Using dangerouslySetInnerHTML for very basic bold formatting.
            Consider a safer markdown renderer if instructions become complex. */}
        <p className="text-sm text-foreground" dangerouslySetInnerHTML={{ __html: formatInstruction(lesson.instruction) }}></p>
      </div>

      {/* Explanation Section */}
      {lesson.explanation && (
        <div className="space-y-3 py-3 border-t border-border animate-fade-in stagger-3">
          <h3 className="text-xl font-semibold">Explanation</h3>
          {lesson.explanation.intro && (
            <p className="text-sm text-muted-foreground">{lesson.explanation.intro}</p>
          )}

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
                    <p className="text-sm">{detail.description}</p>
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
              alert(`Hint: ${lesson.hint}`);
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
      <div className="animate-fade-in stagger-5 sticky bottom-0 py-4 bg-card"> {/* Added sticky positioning */}
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
