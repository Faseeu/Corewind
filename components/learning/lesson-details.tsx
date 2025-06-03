"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface LessonDetailsProps {
  lesson: any
  moduleTitle: string
}

export function LessonDetails({ lesson, moduleTitle }: LessonDetailsProps) {
  console.log("LessonDetails rendering with:", { lesson, moduleTitle })

  // Format markdown-style bold text
  const formatText = (text: string) => {
    if (!text) return ""
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  }

  return (
    <div className="space-y-6">
      {/* Module and Lesson Titles */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-xs font-normal">
            {moduleTitle}
          </Badge>
          {lesson.difficulty_level && (
            <Badge variant="secondary" className="text-xs font-normal">
              {lesson.difficulty_level.replace(/_/g, " ")}
            </Badge>
          )}
        </div>

        <h1 className="text-3xl font-bold">{lesson.main_title || lesson.title}</h1>

        {lesson.secondary_title && <h2 className="text-xl text-muted-foreground">{lesson.secondary_title}</h2>}

        {lesson.description && <p className="text-muted-foreground">{lesson.description}</p>}
      </div>

      {/* Focus Concept */}
      {lesson.focus_concept && (
        <Card className="bg-primary/5 border-primary/20">
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-1">Focus Concept:</h3>
            <p className="text-sm">{lesson.focus_concept}</p>
          </div>
        </Card>
      )}

      {/* Instruction */}
      {lesson.instruction && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Your Task:</h3>
          <Card className="bg-blue-500/5 border-blue-500/20">
            <div className="p-4">
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: formatText(lesson.instruction) }}></p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
