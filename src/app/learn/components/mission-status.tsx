"use client"

import { CheckCircle, Circle } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Progress } from "@/src/components/ui/progress"

interface MissionStatusProps {
  targetClasses: string[]
  appliedClasses: string[]
  targetClassesToRemove?: string[]
}

export function MissionStatus({ targetClasses, appliedClasses, targetClassesToRemove = [] }: MissionStatusProps) {
  // Calculate completion status
  const completedClasses = targetClasses.filter((cls) => appliedClasses.includes(cls))
  const completionPercentage =
    targetClasses.length > 0 ? Math.round((completedClasses.length / targetClasses.length) * 100) : 0

  // Check if classes that need to be removed are actually removed
  const removedClasses = targetClassesToRemove.filter((cls) => !appliedClasses.includes(cls))
  const removalPercentage =
    targetClassesToRemove.length > 0 ? Math.round((removedClasses.length / targetClassesToRemove.length) * 100) : 100 // If nothing to remove, consider it 100% complete

  // Overall completion is the average of both tasks
  const overallCompletion =
    targetClassesToRemove.length > 0 ? Math.round((completionPercentage + removalPercentage) / 2) : completionPercentage

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Mission Status</h3>
          <span className="text-sm font-medium">{overallCompletion}% Complete</span>
        </div>

        <Progress value={overallCompletion} className="h-2" />

        {/* Classes to Add */}
        {targetClasses.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Classes to Add:</h4>
            <div className="space-y-2">
              {targetClasses.map((cls) => {
                const isCompleted = appliedClasses.includes(cls)
                return (
                  <div key={cls} className="flex items-center space-x-2">
                    {isCompleted ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <code className={`text-sm font-mono ${isCompleted ? "line-through text-green-600" : ""}`}>
                      {cls}
                    </code>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Classes to Remove */}
        {targetClassesToRemove.length > 0 && (
          <div className="space-y-2 mt-4">
            <h4 className="text-sm font-medium">Classes to Remove:</h4>
            <div className="space-y-2">
              {targetClassesToRemove.map((cls) => {
                const isRemoved = !appliedClasses.includes(cls)
                return (
                  <div key={cls} className="flex items-center space-x-2">
                    {isRemoved ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <code className={`text-sm font-mono ${isRemoved ? "line-through text-green-600" : ""}`}>{cls}</code>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
