import { ArrowLeft, BookOpen, CheckCircle, Clock, LayoutGrid } from "lucide-react"
import Link from "next/link"

export default function ModuleThreeRoadmap() {
  // Module information
  const module = {
    title: "Flexbox Intro: Rows & Columns",
    subtitle: "Arranging Items Neatly - Your First Steps with Flexbox",
    description:
      "Web pages often need items arranged side-by-side or stacked neatly. Flexbox is a powerful CSS tool for this! In this module, you'll learn the basics of using Tailwind's Flexbox utilities to create simple row and column layouts.",
    difficulty: "Beginner",
    lessons: 7,
    estimatedTime: "35-45 minutes",
  }

  // Categories for filtering
  const categories = ["All", "Basics", "Alignment", "Distribution", "Combined"]

  // Lesson data
  const lessons = [
    {
      id: "m3-l1-what-is-flex",
      title: "➡️ Display: Flex",
      subtitle: "Turning a Container into a Flex Row",
      category: "Basics",
      isCompleted: false,
      duration: "5 min",
    },
    {
      id: "m3-l2-flex-direction-column",
      title: "⬇️ Flex Direction: Column",
      subtitle: "Stacking Flex Items Vertically",
      category: "Basics",
      isCompleted: false,
      duration: "5 min",
    },
    {
      id: "m3-l3-justify-content-start-end-center",
      title: "↔️ Justify Content: Main Axis",
      subtitle: "Aligning Items Along the Main Flow (Row)",
      category: "Alignment",
      isCompleted: false,
      duration: "5 min",
    },
    {
      id: "m3-l4-justify-content-space-between-around",
      title: "🌌 Justify: Spacing Items",
      subtitle: "Distributing Space Between Flex Items",
      category: "Distribution",
      isCompleted: false,
      duration: "5 min",
    },
    {
      id: "m3-l5-align-items-start-end-center",
      title: "↕️ Align Items: Cross Axis",
      subtitle: "Aligning Items Across the Flow (Row)",
      category: "Alignment",
      isCompleted: false,
      duration: "7 min",
    },
    {
      id: "m3-l6-flexbox-gap",
      title: "Gap Between Items",
      subtitle: "Adding Consistent Spacing with gap-{number}",
      category: "Distribution",
      isCompleted: false,
      duration: "5 min",
    },
    {
      id: "m3-l7-flexbox-intro-recap",
      title: "🧱 Recap: Simple Navbar Links",
      subtitle: "Combining Basic Flexbox for a Common UI",
      category: "Combined",
      isCompleted: false,
      duration: "10 min",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Back Navigation */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 rounded-[25px] border border-primary/20 py-2 px-4"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </Link>

      {/* Module Header */}
      <div className="mb-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{module.title}</h1>
            <p className="text-xl text-muted-foreground">{module.subtitle}</p>
          </div>
          <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-[25px]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium">{module.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-5 h-5 text-primary" />
              <span className="font-medium">{module.lessons} Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">{module.estimatedTime}</span>
            </div>
          </div>
        </div>
        <p className="text-lg">{module.description}</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`rounded-[25px] px-4 py-2 text-sm font-medium transition-colors ${
              category === "All" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/learn/module-3/${lesson.id}`}>
            <div className="border rounded-[25px] p-6 hover:shadow-md hover:border-primary/50 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{lesson.title}</h3>
                {lesson.isCompleted ? (
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                ) : (
                  <div className="bg-muted p-2 rounded-full text-xs font-medium">{lesson.duration}</div>
                )}
              </div>
              <p className="text-muted-foreground mb-4">{lesson.subtitle}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium px-3 py-1 bg-muted rounded-[25px]">{lesson.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Start Learning CTA */}
      <div className="mt-10 flex justify-center">
        <Link href="/learn/module-3/m3-l1-what-is-flex">
          <button className="bg-primary text-primary-foreground py-3 px-6 rounded-[25px] font-medium text-lg hover:bg-primary/90 transition-colors">
            Start Learning
          </button>
        </Link>
      </div>
    </div>
  )
}
