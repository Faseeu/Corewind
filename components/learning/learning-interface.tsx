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
    // Use a default/fallback lesson structure
    lesson = {
      title: "Lesson Not Found",
      description: "Please check the module and lesson IDs.",
      targetClasses: [],
      component: "div", // Default component
      instruction: "N/A",
      id: "not-found",
      // Add other necessary default properties from your curriculum structure
    }
  }


  const handleClassAdd = (className: string) => {
    if (className && !appliedClasses.includes(className)) {
      setAppliedClasses([...appliedClasses, className])
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
          <LivePreview appliedClasses={appliedClasses} component={lesson!.component} />
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
