import { InstantLearning } from "@/components/instant-learning/instant-learning";

interface LearningPageProps {
  params: {
    moduleId: string;
    levelId: string; // This will be used as lessonId
  };
}

export default function LearningPage({ params }: LearningPageProps) {
  return (
    <div className="min-h-screen bg-background"> {/* Or decide to remove this wrapper */}
      <InstantLearning moduleId={params.moduleId} lessonId={params.levelId} />
    </div>
  );
}
