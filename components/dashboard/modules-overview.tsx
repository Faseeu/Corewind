import { ModuleCard } from "./module-card"
import { Ruler, Layout, Smartphone, Palette, Grid, Zap } from "lucide-react"

const modules = [
  {
    id: "spacing-sizing",
    title: "Spacing & Sizing",
    description: "Master padding, margin, width, and height utilities",
    icon: Ruler,
    status: "in-progress" as const,
    progress: 37.5,
    levels: 8,
  },
  {
    id: "flexbox-fundamentals",
    title: "Flexbox Fundamentals",
    description: "Learn flexible layouts with Flexbox utilities",
    icon: Layout,
    status: "locked" as const,
    progress: 0,
    levels: 6,
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Build mobile-first responsive interfaces",
    icon: Smartphone,
    status: "locked" as const,
    progress: 0,
    levels: 7,
  },
  {
    id: "colors-typography",
    title: "Colors & Typography",
    description: "Style text and apply beautiful color schemes",
    icon: Palette,
    status: "locked" as const,
    progress: 0,
    levels: 5,
  },
  {
    id: "grid-layouts",
    title: "Grid Layouts",
    description: "Create complex layouts with CSS Grid",
    icon: Grid,
    status: "locked" as const,
    progress: 0,
    levels: 6,
  },
  {
    id: "advanced-techniques",
    title: "Advanced Techniques",
    description: "Animations, transforms, and custom utilities",
    icon: Zap,
    status: "locked" as const,
    progress: 0,
    levels: 8,
  },
]

export function ModulesOverview() {
  return (
    <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <h2 className="text-2xl font-semibold">Your Learning Path</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <ModuleCard key={module.id} module={module} delay={index * 100} />
        ))}
      </div>
    </div>
  )
}
