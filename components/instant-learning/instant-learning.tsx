"use client"

import { useState, useEffect, useRef } from "react"
import { LearningHeader } from "./learning-header"
import { TaskHeader } from "./task-header"
import { MissionsCard } from "./missions-card"
import { ComponentPreview } from "./component-preview"
import { ClassInput } from "./class-input"
import { ContinueButton } from "./continue-button"
import { SuccessModal } from "./success-modal"
import { curriculum } from "@/lib/curriculum"

interface InstantLearningProps {
  moduleId?: string
  lessonId?: string
}

export function InstantLearning({ moduleId, lessonId }: InstantLearningProps) {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [isPropDrivenMode, setIsPropDrivenMode] = useState(false)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [completedLessons, setCompletedLessons] = useState(0)
  const [streakCount, setStreakCount] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true // Set to true when component mounts or re-renders
    return () => {
      isMountedRef.current = false // Set to false when component unmounts
    }
  }, []) // Empty dependency array ensures this runs only on mount and unmount

  useEffect(() => {
    setAppliedClasses([]) // Reset applied classes whenever props change or for initial load.
    if (moduleId && lessonId) {
      setIsPropDrivenMode(true)
      const moduleIndex = curriculum.findIndex(module => module.id === moduleId)
      if (moduleIndex !== -1) {
        const lessonIndex = curriculum[moduleIndex].lessons.findIndex(lesson => lesson.id === lessonId)
        if (lessonIndex !== -1) {
          setCurrentModule(moduleIndex)
          setCurrentLesson(lessonIndex)
        } else {
          console.warn(`Lesson not found for lessonId: ${lessonId} in module ${moduleId}`)
          // Optionally, set to a "not found" state, e.g., setCurrentLesson(-1)
          // For now, it will use the default/previous currentLesson, or 0 if curriculum is small
        }
      } else {
        console.warn(`Module not found for moduleId: ${moduleId}`)
        // Optionally, set to a "not found" state, e.g., setCurrentModule(-1)
      }
    } else {
      setIsPropDrivenMode(false)
      // Default behavior: load the first lesson of the first module
      setCurrentModule(0)
      setCurrentLesson(0)
    }
  }, [moduleId, lessonId, curriculum])

  const currentLessonData = curriculum[currentModule]?.lessons[currentLesson]
  const totalLessons = curriculum.reduce((acc, module) => acc + module.lessons.length, 0)

  const handleClassAdd = (className: string) => {
    if (className && !appliedClasses.includes(className)) {
      setAppliedClasses([...appliedClasses, className])
    }
  }

  const handleClassRemove = (className: string) => {
    setAppliedClasses(appliedClasses.filter((c) => c !== className))
  }

  const checkCompletion = () => {
    if (!currentLessonData) return false

    // Handle both new and legacy curriculum formats
    const targetClasses = currentLessonData.target_classes || currentLessonData.targetClasses || []

    if (!Array.isArray(targetClasses)) {
      console.warn("Target classes is not an array:", targetClasses)
      return false
    }

    return targetClasses.every((cls) => appliedClasses.includes(cls))
  }

  const handleNext = () => {
    if (checkCompletion()) {
      setIsTransitioning(true) // Start transition visual
      setShowSuccess(true) // Show success modal

      if (isPropDrivenMode) {
        console.log("Prop-driven mode: Lesson complete. Navigation would happen here.")
        // In prop-driven mode, we don't automatically advance the lesson within this component's state.
        // The parent component or router would handle navigation to a new lesson/module via props.
        // We still update completed count for this session if desired, though this might need context.
        setCompletedLessons((prev) => prev + 1) // This might need re-evaluation in prop-driven context
        setStreakCount((prev) => prev + 1) // Streaks could still be relevant

        setTimeout(() => {
          if (isMountedRef.current) {
            setShowSuccess(false)
            setAppliedClasses([]) // Reset classes for the completed lesson
          }
          // setIsTransitioning(false) // Transition ends after modal or potential navigation
        }, 1500) // Time for modal display

        // No internal state update for currentModule/currentLesson
        // Visual transition ending needs to be handled carefully if not auto-advancing.
        // For now, let's assume the parent will cause a re-render with new props,
        // which will trigger useEffect and its own transition logic if any.
        // If we want the transition visual to end here regardless:
        setTimeout(() => {
          if (isMountedRef.current) {
            setIsTransitioning(false)
          }
        }, 1800) // Slightly after modal closes

      } else {
        // Original logic for non-prop-driven mode
        setCompletedLessons((prev) => prev + 1)
        setStreakCount((prev) => prev + 1)

        setTimeout(() => {
          if (isMountedRef.current) {
            setShowSuccess(false)
            setAppliedClasses([]) // Reset for the next lesson

            // Move to next lesson
            if (currentLesson < curriculum[currentModule].lessons.length - 1) {
              setCurrentLesson((prev) => prev + 1)
            } else if (currentModule < curriculum.length - 1) {
              setCurrentModule((prev) => prev + 1)
              setCurrentLesson(0)
            }
            // Else, curriculum complete (handled by UI or further logic)
          }

          // End transition after state updates and modal is gone
          setTimeout(() => {
            if (isMountedRef.current) {
              setIsTransitioning(false)
            }
          }, 300) // Short delay for state to apply and UI to react
        }, 1500) // Time for modal display
      }
    }
  }

  const isComplete = checkCompletion()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <LearningHeader streakCount={streakCount} completedLessons={completedLessons} totalLessons={totalLessons} />

      {/* Main Learning Grid */}
      <div className="pt-20 pb-8">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="container mx-auto px-8 max-w-7xl min-h-[calc(100vh-6rem)]">
            {/* CSS Grid Layout matching wireframe */}
            <div className="grid grid-cols-12 gap-8 h-full">
              {/* Task Header */}
              <div className="col-span-12 md:col-span-5">
                <TaskHeader
                  lesson={currentLessonData}
                  moduleTitle={curriculum[currentModule]?.main_title || curriculum[currentModule]?.title}
                  lessonNumber={completedLessons + 1}
                />
              </div>

              {/* Component Preview */}
              <div className="col-span-12 md:col-span-7 md:row-span-2 min-h-64">
                <ComponentPreview
                  appliedClasses={appliedClasses}
                  component={currentLessonData?.component || "div"}
                  targetClasses={currentLessonData?.target_classes || currentLessonData?.targetClasses || []}
                  isComplete={isComplete}
                />
              </div>

              {/* Missions Card */}
              <div className="col-span-12 md:col-span-5 md:row-start-2">
                <MissionsCard
                  targetClasses={currentLessonData?.target_classes || currentLessonData?.targetClasses || []}
                  appliedClasses={appliedClasses}
                  hint={currentLessonData?.hint}
                />
              </div>

              {/* Continue Button */}
              <div className="col-span-12 md:col-span-5 md:row-start-3 flex items-end">
                <ContinueButton isComplete={isComplete} onNext={handleNext} />
              </div>

              {/* Class Input */}
              <div className="col-span-12 md:col-span-7 md:row-start-3 md:col-start-6 flex items-end">
                <ClassInput
                  currentInput=""
                  appliedClasses={appliedClasses}
                  onClassAdd={handleClassAdd}
                  onClassRemove={handleClassRemove}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        streakCount={streakCount}
        completedLessons={completedLessons}
      />
    </div>
  )
}
