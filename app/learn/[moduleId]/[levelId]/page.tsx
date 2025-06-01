import { LearningInterface } from "@/components/learning/learning-interface"

interface LearningPageProps {
  params: {
    moduleId: string
    levelId: string
  }
}

export default function LearningPage({ params }: LearningPageProps) {
  return <LearningInterface moduleId={params.moduleId} levelId={params.levelId} />
}
