import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedCard } from "@/src/components/ui/animated-card"
import { AnimatedProgress } from "@/src/components/ui/animated-progress"
import { AnimatedButton } from "@/src/components/ui/animated-button"

export function ContinueLearning() {
  return (
    <AnimatedCard className="p-6" delay={100}>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Continue Learning</h2>
          <p className="text-muted-foreground">
            Your Current Focus: <span className="text-foreground font-medium">Spacing & Sizing</span> - Level 3
          </p>
        </div>

        <AnimatedProgress value={37.5} showPercentage={true} color="primary" />

        <Link href="/learn/spacing-sizing/level-3" className="block">
          <AnimatedButton variant="primary" className="w-full">
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4" />
          </AnimatedButton>
        </Link>
      </div>
    </AnimatedCard>
  )
}
