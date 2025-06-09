import Link from "next/link"
import { curriculum } from "@/lib/curriculum"
import { AnimatedCard } from "@/components/ui/animated-card"
import { BookOpen, ChevronRight, LayoutGrid, FileText } from "lucide-react" // Added FileText for description icon

export default function RoadmapOverviewPage() {
  if (!curriculum || curriculum.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-8">Learning Roadmaps</h1>
        <p className="text-muted-foreground">No roadmaps available yet. Please check back later!</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl"> {/* Increased py and max-width */}
      <div className="text-center mb-12"> {/* Centered title and optional subtitle */}
        <h1 className="text-4xl font-bold tracking-tight mb-3">Explore Our Learning Roadmaps</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose a module to start your journey. Each roadmap is designed to guide you through key concepts with interactive lessons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
        {curriculum.map((module, index) => (
          <Link href={`/roadmap/${module.id}`} key={module.id} className="block group">
            <AnimatedCard
              hover={true}
              clickable={true}
              delay={index * 0.05}
              className="h-full flex flex-col p-0 overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300" // Ensure full height and padding control
            >
              <div className="p-6 flex-grow"> {/* Main content area */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="w-7 h-7" /> {/* Slightly larger icon */}
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                    {module.difficulty || "Beginner"}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {module.main_title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {module.secondary_title || module.description}
                </p>
              </div>

              <div className="border-t border-border bg-muted/30 p-4"> {/* Footer for stats */}
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>{module.lessons.length} lessons</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary group-hover:underline">
                    View Roadmap <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </Link>
        ))}
      </div>
    </div>
  )
}
