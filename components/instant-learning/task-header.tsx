import { memo } from 'react';

interface Lesson {
  id: string
  title: string
  description: string
  instruction: string
  targetClasses: string[]
  component: string
  hint?: string
}

interface TaskHeaderProps {
  lesson: Lesson | undefined
  moduleTitle: string
  lessonNumber: number
}

function TaskHeaderOriginal({ lesson, moduleTitle, lessonNumber }: TaskHeaderProps) {
  if (!lesson) return null

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="space-y-6">
        {/* Lesson Number */}
        <div className="text-sm font-medium text-slate-500 tracking-wide uppercase">
          {moduleTitle} • Lesson {lessonNumber}
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-slate-900 leading-tight">{lesson.title}</h1>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-slate-600 leading-relaxed max-w-md">{lesson.description}</p>

          {/* Task Instruction */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <div className="text-sm font-medium text-blue-800 mb-1">Your Task</div>
            <div className="text-blue-700">{lesson.instruction}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TaskHeader = memo(TaskHeaderOriginal);
TaskHeader.displayName = "TaskHeader";
