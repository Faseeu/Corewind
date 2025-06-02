import { LearningInterface } from "@/components/learning/learning-interface"

interface LearningPageProps {
  params: {
    moduleId: string
    lessonId: string // Renamed from levelId
  }
}

export default function LearningPage({ params }: LearningPageProps) {
  // Pass lessonId to LearningInterface
  return <LearningInterface moduleId={params.moduleId} lessonId={params.lessonId} />
}
