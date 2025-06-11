"use client";
import { WelcomeHeader } from "@/components/dashboard/welcome-header"
import { ContinueLearning } from "@/components/dashboard/continue-learning"
import { ModulesOverview } from "@/components/dashboard/modules-overview"
import { TodaysTip } from "@/components/dashboard/todays-tip"
import { ErrorBoundary } from "@/components/ui/error-boundary"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <ErrorBoundary>
        <div className="space-y-8">
          <WelcomeHeader />
          <ContinueLearning />
          <ModulesOverview />
          <TodaysTip />
        </div>
      </ErrorBoundary>
    </div>
  )
}
