import { ArrowLeft, BookOpen, CheckCircle, Clock, LayoutGrid } from "lucide-react"
import Link from "next/link"

export default function ModuleTwoRoadmap() {
  // Module information
  const module = {
    title: "Typography & Text Styling",
    subtitle: "Making Words Look Great - Font Size, Weight, Color & Alignment",
    description:
      "Text is a huge part of any website! In this module, you'll learn how to control the appearance of your text using Tailwind CSS – from changing its size and boldness to setting colors and aligning it perfectly on the page.",
    difficulty: "Beginner",
    lessons: 8,
    estimatedTime: "45-60 minutes",
  }

  // Categories for filtering
  const categories = ["All", "Font Properties", "Text Layout", "Advanced Styling"]

  // Lesson data
  const lessons = [
    {
      id: "m2-l1-font-size",
      title: "🅰️ Font Size",
      subtitle: "Controlling Text Size with text-{size}",
      category: "Font Properties",
      isCompleted: true,
      duration: "5 min",
    },
    {
      id: "m2-l2-font-weight",
      title: "🏋️ Font Weight (Boldness)",
      subtitle: "Making Text Bolder with font-{weight}",
      category: "Font Properties",
      isCompleted: true,
      duration: "5 min",
    },
    {
      id: "m2-l3-text-color",
      title: "🎨 Text Color",
      subtitle: "Changing Text Color with text-{color}-{shade}",
      category: "Font Properties",
      isCompleted: false,
      duration: "5 min",
    },
    {
      id: "m2-l4-text-alignment",
      title: "सेंटर Text Alignment",
      subtitle: "Aligning Text with text-{alignment}",
      category: "Text Layout",
      isCompleted: false,
      duration: "7 min",
    },
    {
      id: "m2-l5-line-height",
      title: "↕️ Line Height (Leading)",
      subtitle: "Controlling Space Between Lines",
      category: "Text Layout",
      isCompleted: false,
      duration: "7 min",
    },
    {
      id: "m2-l6-letter-spacing",
      title: "↔️ Letter Spacing (Tracking)",
      subtitle: "Adjusting Space Between Characters",
      category: "Text Layout",
      isCompleted: false,
      duration: "5 min",
    },
    {
      id: "m2-l7-text-decoration-transform",
      title: "💅 Text Styles: Decoration & Transform",
      subtitle: "Underlines, Strikethroughs, and Text Casing",
      category: "Advanced Styling",
      isCompleted: false,
      duration: "8 min",
    },
    {
      id: "m2-l8-typography-recap",
      title: "📝 Typography Recap: Styled Link",
      subtitle: "Combining Typographic Utilities",
      category: "Advanced Styling",
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
          <Link key={lesson.id} href={`/learn/module-2/${lesson.id}`}>
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
        <Link href="/learn/module-2/m2-l1-font-size">
          <button className="bg-primary text-primary-foreground py-3 px-6 rounded-[25px] font-medium text-lg hover:bg-primary/90 transition-colors">
            Start Learning
          </button>
        </Link>
      </div>
    </div>
  )
}
