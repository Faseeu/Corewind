interface Lesson {
  id: string
  main_title?: string
  secondary_title?: string
  title?: string
  description?: string
  difficulty_level?: string
  focus_concept?: string
  instruction?: string
}

interface TaskHeaderProps {
  lesson: Lesson
  moduleTitle: string
  lessonNumber: number
}

export function TaskHeader({ lesson, moduleTitle, lessonNumber }: TaskHeaderProps) {
  if (!lesson) return null

  // Support both new and legacy curriculum formats
  const title = lesson.main_title || lesson.title || "Lesson"
  const description = lesson.secondary_title || lesson.description || ""

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="space-y-6">
        {/* Lesson Number */}
        <div className="text-sm font-medium text-slate-500 tracking-wide uppercase">
          {moduleTitle} • Lesson {lessonNumber}
        </div>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-slate-900 leading-tight">{title}</h1>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-slate-600 leading-relaxed max-w-md">{description}</p>

          {/* Task Instruction */}
          {lesson.instruction && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <div className="text-sm font-medium text-blue-800 mb-1">Your Task</div>
              <div className="text-blue-700">{lesson.instruction}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
