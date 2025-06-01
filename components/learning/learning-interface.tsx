"use client"

import { useState } from "react"
import { InstructionPanel } from "./instruction-panel"
import { LivePreview } from "./live-preview"
import { CodeInputPanel } from "./code-input-panel"

interface LearningInterfaceProps {
  moduleId: string
  levelId: string
}

export function LearningInterface({ moduleId, levelId }: LearningInterfaceProps) {
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")

  // Mock lesson data - in real app this would come from API/database
  const lesson = {
    title: "Make the button background blue",
    description: "Use the bg-blue-500 class to give the button a blue background.",
    step: 3,
    totalSteps: 5,
    targetClasses: ["bg-blue-500"],
    component: "button",
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
          <InstructionPanel lesson={lesson} appliedClasses={appliedClasses} onNext={() => console.log("Next step")} />
        </div>

        {/* Live Preview */}
        <div className="flex-1 bg-background">
          <LivePreview appliedClasses={appliedClasses} component={lesson.component} />
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
