// import { LearningInterface } from "@/components/learning/learning-interface" // Component is missing
import { ErrorBoundary } from "@/components/ui/error-boundary"

interface LearningPageProps {
  params: {
    moduleId: string
    levelId: string // This will be used as lessonId
  }
}

export default function LearningPage({ params }: LearningPageProps) {
  // Pass both moduleId and levelId (as lessonId) to LearningInterface
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <ErrorBoundary>
        {/* <LearningInterface moduleId={params.moduleId} lessonId={params.levelId} /> */}
        <div className="text-center p-8">
          <h1 className="text-2xl font-semibold text-destructive mb-4">
            Learning Module Unavailable
          </h1>
          <p className="text-muted-foreground">
            The learning interface component is currently unavailable.
            Module ID: {params.moduleId}, Lesson ID: {params.levelId}
          </p>
        </div>
      </ErrorBoundary>
    </div>
  )
}
