import Link from "next/link"
import { type LucideIcon, Lock, CheckCircle } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedProgress } from "@/components/ui/animated-progress"

interface Module {
  id: string
  title: string
  description: string
  icon: LucideIcon
  status: "completed" | "in-progress" | "locked"
  progress: number
  levels: number
}

interface ModuleCardProps {
  module: Module
  delay?: number
}

export function ModuleCard({ module, delay = 0 }: ModuleCardProps) {
  const { id, title, description, icon: Icon, status, progress, levels } = module

  const isAccessible = status !== "locked"
  const CardWrapper = isAccessible ? Link : "div"
  const href = isAccessible ? `/roadmap/${id}` : undefined;

  return (
    <CardWrapper href={href}>
      <AnimatedCard
        className={`p-6 ${
          isAccessible ? "hover:shadow-lg hover:border-primary/50 cursor-pointer" : "opacity-60 cursor-not-allowed"
        }`}
        hover={isAccessible}
        clickable={isAccessible}
        delay={delay}
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div
              className={`p-3 rounded-lg transition-all duration-300 ${
                status === "completed"
                  ? "bg-green-500/20 animate-pulse-success"
                  : status === "in-progress"
                    ? "bg-primary/20"
                    : "bg-secondary"
              }`}
            >
              <Icon
                className={`w-6 h-6 transition-all duration-300 ${
                  status === "completed"
                    ? "text-green-500"
                    : status === "in-progress"
                      ? "text-primary"
                      : "text-muted-foreground"
                }`}
              />
            </div>

            <div className="flex items-center">
              {status === "completed" && <CheckCircle className="w-5 h-5 text-green-500 animate-bounce-subtle" />}
              {status === "locked" && <Lock className="w-4 h-4 text-muted-foreground" />}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {status !== "locked" && (
            <AnimatedProgress
              value={progress}
              color={status === "completed" ? "success" : "primary"}
              className="mt-4"
            />
          )}
        </div>
      </AnimatedCard>
    </CardWrapper>
  )
}
