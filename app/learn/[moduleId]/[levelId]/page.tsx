import { LearningInterface } from "@/components/learning/learning-interface"
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
    <div className="min-h-screen bg-background">
      <ErrorBoundary>
        <LearningInterface moduleId={params.moduleId} lessonId={params.levelId} />
      </ErrorBoundary>
    </div>
  )
}
