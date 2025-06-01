import { Lightbulb } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"

export function TodaysTip() {
  return (
    <AnimatedCard className="p-6" delay={300}>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-yellow-500/20 rounded-lg animate-pulse">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Today's Tailwind Tip</h3>
          <p className="text-sm text-muted-foreground">
            Use{" "}
            <code className="bg-secondary px-1 py-0.5 rounded text-xs hover:bg-primary/20 transition-colors">
              space-y-4
            </code>{" "}
            to add consistent vertical spacing between child elements, instead of adding margin to each element
            individually.
          </p>
        </div>
      </div>
    </AnimatedCard>
  )
}
