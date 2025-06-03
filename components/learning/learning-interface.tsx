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
    // Use a default/fallback lesson structure aligned with new curriculumModule1
    lesson = {
      id: "not-found",
      main_title: "Lesson Not Found",
      secondary_title: "The requested lesson could not be loaded.",
      difficulty_level: "unknown",
      focus_concept: "N/A",
      instruction: "Please check the URL or navigate from the dashboard.",
      starter_component_jsx: "<div>Content not found.</div>",
      target_classes: [],
      explanation: {
        intro: "This lesson could not be loaded.",
        class_details: [],
        key_takeaway: "Please verify the lesson ID.",
        expert_tip: "If the problem persists, contact support."
      },
      hint: "",
      target_classes_to_remove: [],
      target_classes_applied_to_selector: undefined,
      // Obsolete fields (title, description, component, learnings (old array), starter_html_structure) are removed
      // by not being included here. The actual lesson object from curriculum.ts will define the true shape.
      // This fallback is just for when a lesson isn't found.
    }
  }


  const handleClassAdd = (className: string) => {
    if (className) { // Ensure className is not empty
      let updatedClasses = [...appliedClasses];

      // Check if the current lesson exists and has target_classes_to_remove
      if (lesson && lesson.target_classes_to_remove && Array.isArray(lesson.target_classes_to_remove)) {
        updatedClasses = updatedClasses.filter(
          (ac) => !lesson.target_classes_to_remove.includes(ac)
        );
      }

      // Add the new class if it's not already included
      if (!updatedClasses.includes(className)) {
        updatedClasses.push(className);
      }

      setAppliedClasses(updatedClasses);
    }
    setCurrentInput("");
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
            // component prop is likely obsolete if starter_component_jsx is always present in new curriculum
            // However, keeping it for now if LivePreview still uses it as a fallback.
            // Based on new curriculum, 'component' field is not present at the lesson level.
            // LivePreview will need to adapt if starter_component_jsx is the sole source of structure.
            // For now, let's pass an empty string or a default for 'component' if it's truly gone.
            // Assuming 'lesson.component' might be undefined for new lessons.
            component={lesson!.component || "div"} // Provide a fallback if component is removed from new lessons
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
