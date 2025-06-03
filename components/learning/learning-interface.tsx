"use client"

import { useState } from "react"
import { InstructionPanel } from "./instruction-panel"
import { LivePreview } from "./live-preview"
import { CodeInputPanel } from "./code-input-panel"

import { curriculum } from "@/lib/curriculum" // Adjust path if necessary

interface LearningInterfaceProps {
  moduleId: string
  lessonId: string
}

export function LearningInterface({ moduleId, lessonId }: LearningInterfaceProps) {
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")

  // Find the module and lesson
  const module = curriculum.find((m) => m.id === moduleId)
  let lesson = module?.lessons.find((l) => l.id === lessonId)

  if (!lesson) {
    console.warn(`Lesson not found for moduleId: ${moduleId}, lessonId: ${lessonId}`)
    // Use a default/fallback lesson structure that works with both formats
    lesson = {
      id: "not-found",
      main_title: "Lesson Not Found",
      title: "Lesson Not Found",
      secondary_title: "The requested lesson could not be loaded.",
      description: "Please check the URL or navigate from the dashboard.",
      difficulty_level: "unknown",
      focus_concept: "N/A",
      instruction: "Please check the URL or navigate from the dashboard.",
      starter_component_jsx: "<div>Content not found.</div>",
      target_classes: [],
      targetClasses: [],
      explanation: {
        intro: "This lesson could not be loaded.",
        class_details: [],
        key_takeaway: "Please verify the lesson ID.",
        expert_tip: "If the problem persists, contact support.",
      },
      hint: "",
    }
  }

  const handleClassAdd = (className: string) => {
    if (className) {
      // Ensure className is not empty
      let updatedClasses = [...appliedClasses]

      // Check if the current lesson exists and has target_classes_to_remove
      if (lesson && lesson.target_classes_to_remove && Array.isArray(lesson.target_classes_to_remove)) {
        updatedClasses = updatedClasses.filter((ac) => !lesson.target_classes_to_remove.includes(ac))
      }

      // Add the new class if it's not already included
      if (!updatedClasses.includes(className)) {
        updatedClasses.push(className)
      }

      setAppliedClasses(updatedClasses)
    }
    setCurrentInput("")
  }

  const handleClassRemove = (className: string) => {
    setAppliedClasses(appliedClasses.filter((c) => c !== className))
  }

  const handleReset = () => {
    setAppliedClasses([])
    setCurrentInput("")
  }

  return (
    <div className="h-screen pt-16 flex">
      {/* Mobile: Stack vertically, Desktop: Three columns */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Instruction Panel */}
        <div className="lg:w-80 lg:min-w-80 border-r border-border bg-card">
          <InstructionPanel lesson={lesson!} appliedClasses={appliedClasses} onNext={() => console.log("Next step")} />
        </div>

        {/* Live Preview */}
        <div className="flex-1 bg-background">
          <LivePreview
            appliedClasses={appliedClasses}
            component={lesson!.component || "div"}
            starter_html_structure={lesson!.starter_html_structure}
            starter_component_jsx={lesson!.starter_component_jsx}
            target_classes_applied_to_selector={lesson!.target_classes_applied_to_selector}
          />
        </div>

        {/* Code Input Panel */}
        <div className="lg:w-80 lg:min-w-80 border-l border-border bg-card">
          <CodeInputPanel
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
            appliedClasses={appliedClasses}
            onClassAdd={handleClassAdd}
            onClassRemove={handleClassRemove}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  )
}
