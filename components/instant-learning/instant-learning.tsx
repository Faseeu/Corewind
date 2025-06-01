"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { LearningHeader } from "./learning-header"
import { TaskHeader } from "./task-header"
import { MissionsCard } from "./missions-card"
import { ComponentPreview } from "./component-preview"
import { ClassInput } from "./class-input"
import { ContinueButton } from "./continue-button"
// import { SuccessModal } from "./success-modal" // Commented out for dynamic import
import confetti from 'canvas-confetti';
import dynamic from 'next/dynamic';

// Dynamically import SuccessModal
const SuccessModal = dynamic(() =>
  import('./success-modal').then(mod => mod.SuccessModal),
  { ssr: false }
);

// Define types for curriculum data
interface Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  targetClasses: string[];
  component: string;
  hint?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

type CurriculumData = Module[];

export function InstantLearning() {
  const [curriculumData, setCurriculumData] = useState<CurriculumData>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [completedLessons, setCompletedLessons] = useState(0)
  const [streakCount, setStreakCount] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const fetchCurriculum = async () => {
      try {
        const response = await fetch('/api/curriculum');
        if (!response.ok) {
          throw new Error(`Failed to fetch curriculum: ${response.statusText}`);
        }
        const data = await response.json();
        setCurriculumData(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
        setCurriculumData([]); // Clear data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurriculum();
  }, []); // Empty dependency array ensures this runs only once on mount

  const currentLessonData = curriculumData[currentModule]?.lessons[currentLesson]

  const totalLessons = useMemo(() => {
    return curriculumData.reduce((acc, module) => acc + module.lessons.length, 0);
  }, [curriculumData]);

  const handleClassAdd = useCallback((className: string) => {
    if (className && !appliedClasses.includes(className)) {
      setAppliedClasses(prevAppliedClasses => [...prevAppliedClasses, className]);
    }
  }, []); // Depends on setAppliedClasses which is stable

  const handleClassRemove = useCallback((className: string) => {
    setAppliedClasses(prevAppliedClasses => prevAppliedClasses.filter((c) => c !== className));
  }, []); // Depends on setAppliedClasses which is stable

  const checkCompletion = useCallback(() => {
    if (!currentLessonData || !currentLessonData.targetClasses) return false;
    return currentLessonData.targetClasses.every((cls) => appliedClasses.includes(cls));
  }, [currentLessonData, appliedClasses]);

  const triggerSideCannonsAnimation = () => { // This function does not depend on component state, so it's stable
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 }, // left side
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 }, // right side
        colors: colors,
      });

      if (typeof window !== 'undefined') { // Ensure requestAnimationFrame is called in browser
        requestAnimationFrame(frame);
      }
    };
    if (typeof window !== 'undefined') { // Ensure initial call is in browser
       frame();
    }
  };

  const handleNext = useCallback(() => {
    if (checkCompletion() && curriculumData.length > 0) {
      setIsTransitioning(true);
      setCompletedLessons(prev => prev + 1);
      setStreakCount(prev => prev + 1);
      setShowSuccess(true);
      triggerSideCannonsAnimation(); // Stable function

      setTimeout(() => {
        setShowSuccess(false);
        setAppliedClasses([]); // Stable setter

        if (currentLesson < curriculumData[currentModule].lessons.length - 1) {
          setCurrentLesson(prev => prev + 1); // Stable setter
        } else if (currentModule < curriculumData.length - 1) {
          setCurrentModule(prev => prev + 1); // Stable setter
          setCurrentLesson(0); // Stable setter
        }

        setTimeout(() => {
          setIsTransitioning(false); // Stable setter
        }, 300);
      }, 1500);
    }
  }, [
    checkCompletion,
    curriculumData,
    currentModule,
    currentLesson,
    // State setters (setAppliedClasses, setCurrentLesson, etc.) are stable
    // triggerSideCannonsAnimation is stable as it doesn't depend on component state
  ]);

  const isComplete = checkCompletion() // This will use the memoized checkCompletion

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <p className="text-xl text-slate-700">Loading curriculum...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
        <p className="text-xl text-red-600">Error loading curriculum:</p>
        <p className="text-md text-red-500 mt-2">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!curriculumData || curriculumData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <p className="text-xl text-slate-700">No curriculum data found.</p>
      </div>
    );
  }

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
                  moduleTitle={curriculumData[currentModule]?.title}
                  lessonNumber={completedLessons + 1}
                />
              </div>

              {/* Component Preview */}
              <div className="col-span-12 md:col-span-7 md:row-span-2 min-h-64">
                <ComponentPreview
                  appliedClasses={appliedClasses}
                  component={currentLessonData?.component || "div"}
                  targetClasses={currentLessonData?.targetClasses || []}
                  isComplete={isComplete}
                />
              </div>

              {/* Missions Card */}
              <div className="col-span-12 md:col-span-5 md:row-start-2">
                <MissionsCard
                  targetClasses={currentLessonData?.targetClasses || []}
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
