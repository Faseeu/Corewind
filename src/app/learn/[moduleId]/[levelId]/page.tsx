import { LearningInterface } from "../../components/learning-interface"

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
      <LearningInterface moduleId={params.moduleId} lessonId={params.levelId} />
    </div>
  )
}
