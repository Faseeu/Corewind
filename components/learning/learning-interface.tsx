"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Play, BookOpen } from "lucide-react"

interface Lesson {
  id: string
  title: string
  description: string
  completed: boolean
  duration: string
  difficulty: "beginner" | "intermediate" | "advanced"
}

interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  progress: number
}

interface LearningInterfaceProps {
  modules: Module[]
  currentModuleId?: string
  onLessonStart?: (moduleId: string, lessonId: string) => void
  onModuleSelect?: (moduleId: string) => void
}

export function LearningInterface({ modules, currentModuleId, onLessonStart, onModuleSelect }: LearningInterfaceProps) {
  const [selectedModule, setSelectedModule] = useState<string>(currentModuleId || modules[0]?.id || "")

  const currentModule = modules.find((m) => m.id === selectedModule)

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModule(moduleId)
    onModuleSelect?.(moduleId)
  }

  const handleLessonStart = (lessonId: string) => {
    if (selectedModule) {
      onLessonStart?.(selectedModule, lessonId)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Module Sidebar */}
      <div className="lg:w-1/3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Learning Modules
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedModule === module.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleModuleSelect(module.id)}
              >
                <h3 className="font-medium text-sm">{module.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{module.description}</p>
                <div className="mt-2">
                  <Progress value={module.progress} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">{module.progress}% complete</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Lesson Content */}
      <div className="lg:w-2/3">
        {currentModule ? (
          <Card>
            <CardHeader>
              <CardTitle>{currentModule.title}</CardTitle>
              <p className="text-gray-600">{currentModule.description}</p>
              <div className="mt-4">
                <Progress value={currentModule.progress} className="h-3" />
                <p className="text-sm text-gray-500 mt-2">
                  {currentModule.progress}% complete • {currentModule.lessons.length} lessons
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentModule.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Circle className="h-5 w-5 text-gray-400" />
                      )}
                      <div>
                        <h4 className="font-medium">{lesson.title}</h4>
                        <p className="text-sm text-gray-600">{lesson.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className={getDifficultyColor(lesson.difficulty)}>
                            {lesson.difficulty}
                          </Badge>
                          <span className="text-xs text-gray-500">{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" onClick={() => handleLessonStart(lesson.id)} className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      {lesson.completed ? "Review" : "Start"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="flex items-center justify-center h-64">
              <p className="text-gray-500">Select a module to view lessons</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
