"use client"

import { useState } from "react"
import { LearningHeader } from "./learning-header"
import { TaskHeader } from "./task-header"
import { MissionsCard } from "./missions-card"
import { ComponentPreview } from "./component-preview"
import { ClassInput } from "./class-input"
import { ContinueButton } from "./continue-button"
import { SuccessModal } from "./success-modal"
import { curriculum } from "@/lib/curriculum"

export function InstantLearning() {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [completedLessons, setCompletedLessons] = useState(0)
  const [streakCount, setStreakCount] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
      console.warn("targetClasses is not an array:", targetClasses)
      return false
    }

    return targetClasses.every((cls) => appliedClasses.includes(cls))
  }

  const handleNext = () => {
    if (checkCompletion()) {
      setIsTransitioning(true)
      setCompletedLessons((prev) => prev + 1)
      setStreakCount((prev) => prev + 1)
      setShowSuccess(true)

      setTimeout(() => {
        setShowSuccess(false)
        setAppliedClasses([])

        // Move to next lesson
        if (currentLesson < curriculum[currentModule].lessons.length - 1) {
          setCurrentLesson((prev) => prev + 1)
        } else if (currentModule < curriculum.length - 1) {
          setCurrentModule((prev) => prev + 1)
          setCurrentLesson(0)
        }

        setTimeout(() => {
          setIsTransitioning(false)
        }, 300)
      }, 1500)
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
