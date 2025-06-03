"use client"

import { useState, useEffect } from "react"
import { LivePreview } from "./live-preview"
import { CodeInputPanel } from "./code-input-panel"
import { LessonDetails } from "./lesson-details"
import { ExplanationPanel } from "./explanation-panel"
import { MissionStatus } from "./mission-status"
import { AnimatedButton } from "@/components/ui/animated-button" // Removed src
import { ArrowRight } from "lucide-react"
import { curriculum } from "@/lib/curriculum" // Removed src

interface LearningInterfaceProps {
  moduleId: string
  lessonId: string
}

export function LearningInterface({ moduleId, lessonId }: LearningInterfaceProps) {
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Find the module and lesson
  const module = curriculum.find((m) => m.id === moduleId)
  const lesson = module?.lessons.find((l) => l.id === lessonId)

  useEffect(() => {
    // Debug logging
    console.log("Module ID:", moduleId)
    console.log("Lesson ID:", lessonId)
    console.log("Found module:", module)
    console.log("Found lesson:", lesson)

    // Set initial classes if specified in the lesson
    if (lesson?.starter_component_jsx) {
      // Extract classes from starter_component_jsx if needed
      const match = lesson.starter_component_jsx.match(/class="([^"]*)"/)
      if (match && match[1]) {
        const initialClasses = match[1].split(" ").filter(Boolean)
        setAppliedClasses(initialClasses)
      }
    }

    setIsLoading(false)
  }, [moduleId, lessonId, lesson, module])

  if (isLoading) {
    return <div className="p-8">Loading lesson...</div>
  }

  if (!lesson || !module) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
        <p>Could not find the requested lesson. Please check the URL or return to the dashboard.</p>
      </div>
    )
  }

  // Determine target classes (support both new and legacy formats)
  const targetClasses = lesson.target_classes || lesson.targetClasses || []
  const targetClassesToRemove = lesson.target_classes_to_remove || []

  // Check if all required classes are applied and all classes to remove are removed
  const isComplete =
    targetClasses.every((cls) => appliedClasses.includes(cls)) &&
    targetClassesToRemove.every((cls) => !appliedClasses.includes(cls))

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

  const handleNext = () => {
    console.log("Next lesson")
    // Here you would implement navigation to the next lesson
  }

  return (
    <div className="min-h-screen pt-16 flex">
      {/* Mobile: Stack vertically, Desktop: Three columns */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Panel - Lesson Details and Mission Status */}
        <div className="lg:w-80 lg:min-w-80 border-r border-border bg-card overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Lesson Details */}
            <LessonDetails lesson={lesson} moduleTitle={module?.main_title || module?.title || "Module"} />

            {/* Mission Status */}
            <MissionStatus
              targetClasses={targetClasses}
              appliedClasses={appliedClasses}
              targetClassesToRemove={targetClassesToRemove}
            />

            {/* Explanation Panel */}
            <ExplanationPanel explanation={lesson.explanation} hint={lesson.hint} />

            {/* Next Button */}
            <div className="pt-4 sticky bottom-6">
              <AnimatedButton
                variant="primary"
                onClick={handleNext}
                disabled={!isComplete}
                success={isComplete}
                className="w-full"
              >
                <span>{isComplete ? "Next Lesson" : "Complete the Task"}</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="flex-1 bg-background">
          <LivePreview
            appliedClasses={appliedClasses}
            component={lesson.component || "div"}
            starter_html_structure={lesson.starter_html_structure}
            starter_component_jsx={lesson.starter_component_jsx}
            target_classes_applied_to_selector={lesson.target_classes_applied_to_selector}
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
