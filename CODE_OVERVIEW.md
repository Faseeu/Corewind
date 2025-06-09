# Repository Code Overview

## app/

### dashboard/page.tsx
```tsx
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
```

### globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply rounded-[25px];
  }
}

/* Global button styles with pill shape */
@layer components {
  .btn,
  button:not(.demo-button) {
    @apply rounded-[25px];
  }

  /* Override for demo buttons in live preview */
  .demo-button {
    border-radius: 8px !important;
  }

  /* Smooth transitions for all interactive elements */
  .interactive-element {
    @apply transition-all duration-300 ease-in-out;
  }

  /* Performance optimizations */
  .will-change-transform {
    will-change: transform;
  }

  .will-change-opacity {
    will-change: opacity;
  }

  /* Staggered animations */
  .stagger-1 {
    animation-delay: 0.1s;
  }
  .stagger-2 {
    animation-delay: 0.2s;
  }
  .stagger-3 {
    animation-delay: 0.3s;
  }
  .stagger-4 {
    animation-delay: 0.4s;
  }
  .stagger-5 {
    animation-delay: 0.5s;
  }
  .stagger-6 {
    animation-delay: 0.6s;
  }

  /* Fade in animation */
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .stagger-1,
  .stagger-2,
  .stagger-3,
  .stagger-4,
  .stagger-5,
  .stagger-6 {
    animation: none;
  }

  .transition-all {
    transition: none;
  }
}

/* Performance optimizations for animations */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Animation Utilities */
@layer utilities {
  .animate-float-gentle {
    animation: float-gentle 10s ease-in-out infinite;
  }

  .animate-pulse-success {
    animation: pulse-success 2s infinite;
  }

  .animate-bounce-subtle {
    animation: bounce-subtle 2s infinite;
  }

  .animate-slide-up {
    animation: slide-up 0.5s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  .animate-slide-down {
    animation: slide-down 0.3s ease-out forwards;
  }

  .animate-scale-in {
    animation: scale-in 0.3s ease-out forwards;
    transform-origin: center;
    opacity: 0;
  }

  .animate-shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  .hover-glow:hover {
    box-shadow: 0 0 15px var(--color-primary-300);
  }

  .button-press:active {
    transform: scale(0.97);
  }
}

/* Keyframes */
@keyframes float-gentle {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse-success {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}

@keyframes bounce-subtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-3px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(3px, 0, 0);
  }
}
```

### instant-learning/page.tsx
```tsx
import { InstantLearning } from "@/components/instant-learning/instant-learning"

export default function InstantLearningPage() {
  return <InstantLearning />
}
```

### layout.tsx
```tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { ErrorBoundary } from "@/components/ui/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corewind - Master Tailwind CSS Fast",
  description:
    "Learn the essential 20% of Tailwind CSS through hands-on, interactive exercises that cover 80% of common UI tasks.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-16">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
        </div>
      </body>
    </html>
  )
}
```

### page.tsx
```tsx
import { LinearLandingPage } from "@/components/landing/linear-landing-page"
import { ErrorBoundary } from "@/components/ui/error-boundary"

export default function HomePage() {
  return (
    <ErrorBoundary>
      <LinearLandingPage />
    </ErrorBoundary>
  )
}
```

### roadmap/module-one/page.tsx
```tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, Star, ChevronRight, BookOpen } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { curriculum } from "@/lib/curriculum"

export default function ModuleOneRoadmapPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Find module one
  const moduleOne = curriculum.find((module) => module.id === "module-1") || curriculum[0]

  // Group lessons by category
  const categories = {
    all: moduleOne.lessons,
    basics: moduleOne.lessons.filter((lesson) => lesson.category === "basics"),
    layout: moduleOne.lessons.filter((lesson) => lesson.category === "layout"),
    components: moduleOne.lessons.filter((lesson) => lesson.category === "components"),
    advanced: moduleOne.lessons.filter((lesson) => lesson.category === "advanced"),
  }

  const activeLessons = categories[activeTab as keyof typeof categories] || categories.all

  // Calculate completion status (in a real app, this would come from user data)
  const getCompletionStatus = (lessonId: string) => {
    // This is a placeholder. In a real app, you'd check user progress
    const index = moduleOne.lessons.findIndex((l) => l.id === lessonId)
    if (index < 3) return "completed"
    if (index < 5) return "in-progress"
    return "not-started"
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{moduleOne.main_title || moduleOne.title}</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {moduleOne.description || "A comprehensive roadmap to master the fundamentals of Tailwind CSS"}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Estimated: 4-6 hours</span>
              </div>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-[25px] text-sm font-medium transition-colors ${
                activeTab === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {category !== "all" && (
                <span className="ml-2 bg-primary-foreground/20 text-primary-foreground px-2 py-0.5 rounded-full text-xs">
                  {categories[category as keyof typeof categories].length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeLessons.map((lesson, index) => {
            const status = getCompletionStatus(lesson.id)

            return (
              <AnimatedCard
                key={lesson.id}
                className="p-6 hover:shadow-lg hover:border-primary/50 cursor-pointer"
                hover={true}
                clickable={true}
                delay={index * 0.1}
              >
                <Link href={`/learn/module-1/${lesson.id}`} className="block h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          status === "completed"
                            ? "bg-green-500/20"
                            : status === "in-progress"
                              ? "bg-primary/20"
                              : "bg-secondary"
                        }`}
                      >
                        <BookOpen
                          className={`w-5 h-5 ${
                            status === "completed"
                              ? "text-green-500"
                              : status === "in-progress"
                                ? "text-primary"
                                : "text-muted-foreground"
                          }`}
                        />
                      </div>

                      {status === "completed" && <CheckCircle className="w-5 h-5 text-green-500" />}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{lesson.main_title || lesson.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {lesson.description || "Learn essential Tailwind concepts through interactive exercises"}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="text-xs text-muted-foreground">
                        {status === "completed"
                          ? "Completed"
                          : status === "in-progress"
                            ? "In Progress"
                            : "Not Started"}
                      </div>

                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            )
          })}
        </div>

        {/* Start Learning CTA */}
        <div className="mt-12 text-center">
          <Link href="/learn/module-1/level-1">
            <AnimatedButton size="lg" className="rounded-[25px]">
              <div className="flex flex-col items-center">
                <span>Start Learning</span>
                <span className="text-xs opacity-75 font-normal">Begin with the first lesson</span>
              </div>
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
```

### roadmap/module-three/page.tsx
```tsx
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
```

### roadmap/module-two/page.tsx
```tsx
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
```

## components/

### dashboard/continue-learning.tsx
```tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedProgress } from "@/components/ui/animated-progress"
import { AnimatedButton } from "@/components/ui/animated-button"

export function ContinueLearning() {
  return (
    <AnimatedCard className="p-6" delay={100}>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Continue Learning</h2>
          <p className="text-muted-foreground">
            Your Current Focus: <span className="text-foreground font-medium">Spacing & Sizing</span> - Level 3
          </p>
        </div>

        <AnimatedProgress value={37.5} showPercentage={true} color="primary" />

        <Link href="/learn/spacing-sizing/level-3" className="block">
          <AnimatedButton variant="primary" className="w-full">
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4" />
          </AnimatedButton>
        </Link>
      </div>
    </AnimatedCard>
  )
}
```

### dashboard/module-card.tsx
```tsx
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
  const href = isAccessible ? `/roadmap/module-one` : undefined // TODO: Make this dynamic based on module.id

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
```

### dashboard/modules-overview.tsx
```tsx
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
```

### dashboard/todays-tip.tsx
```tsx
import { Lightbulb } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"

export function TodaysTip() {
  return (
    <AnimatedCard className="p-6" delay={300}>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-yellow-500/20 rounded-lg animate-pulse">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Today's Tailwind Tip</h3>
          <p className="text-sm text-muted-foreground">
            Use{" "}
            <code className="bg-secondary px-1 py-0.5 rounded text-xs hover:bg-primary/20 transition-colors">
              space-y-4
            </code>{" "}
            to add consistent vertical spacing between child elements, instead of adding margin to each element
            individually.
          </p>
        </div>
      </div>
    </AnimatedCard>
  )
}
```

### dashboard/welcome-header.tsx
```tsx
import { Flame } from "lucide-react"

export function WelcomeHeader() {
  return (
    <div className="text-center space-y-4 animate-fade-in">
      <h1 className="text-4xl font-bold">Welcome back!</h1>
      <div className="flex items-center justify-center space-x-2 text-lg animate-bounce-subtle">
        <span>You're on a</span>
        <span className="font-bold text-primary animate-pulse">5-day</span>
        <span>learning streak!</span>
        <Flame className="w-6 h-6 text-orange-500 animate-float" />
      </div>
    </div>
  )
}
```

### instant-learning/class-input.tsx
```tsx
"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

interface ClassInputProps {
  currentInput: string
  appliedClasses: string[]
  onClassAdd: (className: string) => void
  onClassRemove: (className: string) => void
}

const commonClasses = [
  "w-32",
  "w-48",
  "w-64",
  "h-32",
  "h-48",
  "h-64",
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "p-4",
  "p-6",
  "p-8",
  "px-4",
  "py-2",
  "px-6",
  "py-4",
  "rounded-[25px]",
  "rounded-lg",
  "rounded-xl",
  "rounded-full",
  "border",
  "border-2",
  "border-4",
  "border-red-500",
  "border-blue-500",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "font-bold",
  "font-semibold",
  "font-medium",
  "text-white",
  "text-black",
  "text-gray-700",
  "text-blue-500",
  "text-center",
  "text-left",
  "text-right",
  "leading-relaxed",
  "flex",
  "space-x-4",
]

export function ClassInput({ appliedClasses, onClassAdd, onClassRemove }: ClassInputProps) {
  const [currentInput, setCurrentInput] = useState("")

  const filteredSuggestions = commonClasses
    .filter((cls) => cls.toLowerCase().includes(currentInput.toLowerCase()) && !appliedClasses.includes(cls))
    .slice(0, 4)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentInput.trim()) {
      onClassAdd(currentInput.trim())
      setCurrentInput("")
    }
  }

  return (
    <div className="w-full">
      <div className="bg-green-100 rounded-[25px] p-6 h-full flex flex-col">
        {/* Applied Classes */}
        <div className="mb-4 flex-1">
          <div className="text-sm font-medium text-green-800 mb-3">Applied Classes</div>
          <div className="flex flex-wrap gap-2 min-h-[60px]">
            {appliedClasses.length === 0 ? (
              <div className="text-sm text-green-600 italic">Start typing below...</div>
            ) : (
              appliedClasses.map((className) => (
                <span
                  key={className}
                  className="inline-flex items-center px-3 py-1 bg-green-200 text-green-800 rounded-[25px] text-sm font-mono group hover:bg-green-300 transition-colors duration-200"
                >
                  {className}
                  <button
                    onClick={() => onClassRemove(className)}
                    className="ml-2 text-green-600 hover:text-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Input Section */}
        <div className="relative">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tailwind classes go here"
            className="w-full bg-white border-2 border-green-300 rounded-[25px] px-4 py-4 text-slate-800 placeholder-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 text-lg font-medium"
          />

          {/* Suggestions */}
          {currentInput && filteredSuggestions.length > 0 && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-green-300 rounded-[25px] shadow-lg z-10 overflow-hidden">
              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    onClassAdd(suggestion)
                    setCurrentInput("")
                  }}
                  className="w-full text-left px-4 py-2 text-slate-700 hover:bg-green-50 transition-colors duration-200 font-mono text-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
```

### instant-learning/component-preview.tsx
```tsx
interface ComponentPreviewProps {
  appliedClasses: string[]
  component: string
  targetClasses: string[]
  isComplete: boolean
}

export function ComponentPreview({ appliedClasses, component, targetClasses, isComplete }: ComponentPreviewProps) {
  const className = appliedClasses.join(" ")

  const renderComponent = () => {
    const baseClasses = "transition-all duration-300 ease-in-out"
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

    switch (component) {
      case "button":
        return (
          <button
            className={
              combinedClasses ||
              `${baseClasses} px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300`
            }
          >
            Click me
          </button>
        )
      case "div":
        return (
          <div
            className={
              combinedClasses ||
              `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
            }
          >
            {className.includes("text") ? (
              <span className="text-sm font-medium">Sample Text</span>
            ) : (
              <span className="text-sm text-slate-500 font-medium">Your Box</span>
            )}
          </div>
        )
      case "text":
        return (
          <div className={combinedClasses || `${baseClasses} text-slate-800 max-w-sm`}>
            <h1 className="text-2xl font-bold mb-3">Sample Heading</h1>
            <p className="text-base leading-relaxed">
              This is a sample paragraph to demonstrate text styling and typography changes.
            </p>
          </div>
        )
      default:
        return (
          <div
            className={
              combinedClasses ||
              `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
            }
          >
            <span className="text-sm text-slate-500 font-medium">Element</span>
          </div>
        )
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Browser-like Preview Window */}
      <div className="bg-slate-200 rounded-2xl flex-1 flex flex-col overflow-hidden shadow-lg">
        {/* Browser Header */}
        <div className="bg-slate-300 px-4 py-3 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>

        {/* Preview Content */}
        <div className="bg-white flex-1 flex items-center justify-center p-12 relative">
          <div className="relative">
            {renderComponent()}

            {/* Success Glow */}
            {isComplete && (
              <div className="absolute inset-0 bg-green-400/20 rounded-lg animate-pulse pointer-events-none" />
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-100 px-4 py-3">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-600">Progress</span>
            <span className={`font-medium ${isComplete ? "text-green-600" : "text-slate-700"}`}>
              {appliedClasses.filter((cls) => targetClasses.includes(cls)).length}/{targetClasses.length}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                isComplete
                  ? "bg-gradient-to-r from-green-400 to-emerald-400"
                  : "bg-gradient-to-r from-blue-400 to-cyan-400"
              }`}
              style={{
                width: `${(appliedClasses.filter((cls) => targetClasses.includes(cls)).length / targetClasses.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
```

### instant-learning/component-stage.tsx
```tsx
"use client"

import { Eye, Target, CheckCircle2 } from "lucide-react"

interface ComponentStageProps {
  appliedClasses: string[]
  component: string
  targetClasses: string[]
  lessonTitle: string
}

export function ComponentStage({ appliedClasses, component, targetClasses, lessonTitle }: ComponentStageProps) {
  const className = appliedClasses.join(" ")
  const correctClasses = appliedClasses.filter((cls) => targetClasses.includes(cls)).length
  const isComplete = targetClasses.every((cls) => appliedClasses.includes(cls))

  const renderComponent = () => {
    const baseClasses = "transition-all duration-300 ease-in-out"
    const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

    switch (component) {
      case "button":
        return (
          <button
            className={
              combinedClasses ||
              `${baseClasses} px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300`
            }
          >
            Click me
          </button>
        )
      case "div":
        return (
          <div
            className={
              combinedClasses ||
              `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
            }
          >
            {className.includes("text") ? (
              <span className="text-sm font-medium">Sample Text</span>
            ) : (
              <span className="text-sm text-slate-500 font-medium">Your Box</span>
            )}
          </div>
        )
      case "text":
        return (
          <div className={combinedClasses || `${baseClasses} text-slate-800 max-w-sm`}>
            <h1 className="text-2xl font-bold mb-3">Sample Heading</h1>
            <p className="text-base leading-relaxed">
              This is a sample paragraph to demonstrate text styling and typography changes.
            </p>
          </div>
        )
      default:
        return (
          <div
            className={
              combinedClasses ||
              `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
            }
          >
            <span className="text-sm text-slate-500 font-medium">Element</span>
          </div>
        )
    }
  }

  return (
    <div className="sticky top-24">
      {/* Stage Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Eye className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Component Preview</h2>
            <p className="text-sm text-slate-400">Watch your changes in real-time</p>
          </div>
        </div>
      </div>

      {/* Main Stage */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Stage Toolbar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-slate-600">preview.html</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <Target className="w-4 h-4 text-slate-500" />
                <span className="text-slate-600 font-medium">
                  {correctClasses}/{targetClasses.length}
                </span>
                {isComplete && <CheckCircle2 className="w-4 h-4 text-green-500" />}
              </div>
            </div>
          </div>
        </div>

        {/* Component Display Area */}
        <div className="p-12 min-h-[400px] bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
          <div className="relative">
            {renderComponent()}

            {/* Completion Glow Effect */}
            {isComplete && (
              <div className="absolute inset-0 bg-green-400/20 rounded-lg animate-pulse pointer-events-none" />
            )}
          </div>
        </div>

        {/* Applied Classes Display */}
        <div className="bg-slate-900 px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-300">Applied Classes</span>
            <span className="text-xs text-slate-500">{appliedClasses.length} classes</span>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[32px]">
            {appliedClasses.length === 0 ? (
              <span className="text-sm text-slate-500 italic">No classes applied yet...</span>
            ) : (
              appliedClasses.map((cls) => (
                <span
                  key={cls}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    targetClasses.includes(cls)
                      ? "bg-green-500/20 text-green-300 border border-green-500/30 shadow-sm"
                      : "bg-slate-700 text-slate-300 border border-slate-600"
                  }`}
                >
                  {cls}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 bg-slate-800/50 backdrop-blur rounded-xl p-4 border border-slate-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Progress</span>
          <span className={`font-medium ${isComplete ? "text-green-400" : "text-slate-300"}`}>
            {isComplete ? "Complete! 🎉" : `${correctClasses}/${targetClasses.length} correct`}
          </span>
        </div>

        <div className="mt-3 w-full bg-slate-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isComplete
                ? "bg-gradient-to-r from-green-400 to-emerald-400"
                : "bg-gradient-to-r from-blue-400 to-cyan-400"
            }`}
            style={{ width: `${(correctClasses / targetClasses.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
```

### instant-learning/continue-button.tsx
```tsx
"use client"

import { ChevronRight } from "lucide-react"

interface ContinueButtonProps {
  isComplete: boolean
  onNext: () => void
}

export function ContinueButton({ isComplete, onNext }: ContinueButtonProps) {
  return (
    <div className="w-full">
      <button
        onClick={onNext}
        disabled={!isComplete}
        className={`w-full py-4 px-6 rounded-[25px] font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
          isComplete
            ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            : "bg-slate-200 text-slate-400 cursor-not-allowed"
        }`}
      >
        <span>Continue</span>
        {isComplete && <ChevronRight className="w-5 h-5" />}
      </button>
    </div>
  )
}
```

### instant-learning/instant-learning.tsx
```tsx
"use client"

import { useState, useEffect } from "react"
import { LearningHeader } from "./learning-header"
import { TaskHeader } from "./task-header"
import { MissionsCard } from "./missions-card"
import { ComponentPreview } from "./component-preview"
import { ClassInput } from "./class-input"
import { ContinueButton } from "./continue-button"
import { SuccessModal } from "./success-modal"
import { curriculum } from "@/lib/curriculum"

interface InstantLearningProps {
  moduleId?: string
  lessonId?: string
}

export function InstantLearning({ moduleId, lessonId }: InstantLearningProps) {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [isPropDrivenMode, setIsPropDrivenMode] = useState(false)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [completedLessons, setCompletedLessons] = useState(0)
  const [streakCount, setStreakCount] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setAppliedClasses([]) // Reset applied classes whenever props change or for initial load.
    if (moduleId && lessonId) {
      setIsPropDrivenMode(true)
      const moduleIndex = curriculum.findIndex(module => module.id === moduleId)
      if (moduleIndex !== -1) {
        const lessonIndex = curriculum[moduleIndex].lessons.findIndex(lesson => lesson.id === lessonId)
        if (lessonIndex !== -1) {
          setCurrentModule(moduleIndex)
          setCurrentLesson(lessonIndex)
        } else {
          console.warn(`Lesson not found for lessonId: ${lessonId} in module ${moduleId}`)
          // Optionally, set to a "not found" state, e.g., setCurrentLesson(-1)
          // For now, it will use the default/previous currentLesson, or 0 if curriculum is small
        }
      } else {
        console.warn(`Module not found for moduleId: ${moduleId}`)
        // Optionally, set to a "not found" state, e.g., setCurrentModule(-1)
      }
    } else {
      setIsPropDrivenMode(false)
      // Default behavior: load the first lesson of the first module
      setCurrentModule(0)
      setCurrentLesson(0)
    }
  }, [moduleId, lessonId, curriculum])

  const currentLessonData = curriculum[currentModule]?.lessons[currentLesson]
  const totalLessons = curriculum.reduce((acc, module) => acc + module.lessons.length, 0)

  const handleClassAdd = (className: string) => {
    if (className && !appliedClasses.includes(className)) {
      setAppliedClasses([...appliedClasses, className])
    }
  }

  const handleClassRemove = (className: string) => {
    setAppliedClasses(appliedClasses.filter((c) => c !== className))
  }

  const checkCompletion = () => {
    if (!currentLessonData) return false

    // Handle both new and legacy curriculum formats
    const targetClasses = currentLessonData.target_classes || currentLessonData.targetClasses || []

    if (!Array.isArray(targetClasses)) {
      console.warn("Target classes is not an array:", targetClasses)
      return false
    }

    return targetClasses.every((cls) => appliedClasses.includes(cls))
  }

  const handleNext = () => {
    if (checkCompletion()) {
      setIsTransitioning(true) // Start transition visual
      setShowSuccess(true) // Show success modal

      if (isPropDrivenMode) {
        console.log("Prop-driven mode: Lesson complete. Navigation would happen here.")
        // In prop-driven mode, we don't automatically advance the lesson within this component's state.
        // The parent component or router would handle navigation to a new lesson/module via props.
        // We still update completed count for this session if desired, though this might need context.
        setCompletedLessons((prev) => prev + 1) // This might need re-evaluation in prop-driven context
        setStreakCount((prev) => prev + 1) // Streaks could still be relevant

        setTimeout(() => {
          setShowSuccess(false)
          setAppliedClasses([]) // Reset classes for the completed lesson
          // setIsTransitioning(false) // Transition ends after modal or potential navigation
        }, 1500) // Time for modal display

        // No internal state update for currentModule/currentLesson
        // Visual transition ending needs to be handled carefully if not auto-advancing.
        // For now, let's assume the parent will cause a re-render with new props,
        // which will trigger useEffect and its own transition logic if any.
        // If we want the transition visual to end here regardless:
        setTimeout(() => {
          setIsTransitioning(false)
        }, 1800) // Slightly after modal closes

      } else {
        // Original logic for non-prop-driven mode
        setCompletedLessons((prev) => prev + 1)
        setStreakCount((prev) => prev + 1)

        setTimeout(() => {
          setShowSuccess(false)
          setAppliedClasses([]) // Reset for the next lesson

          // Move to next lesson
          if (currentLesson < curriculum[currentModule].lessons.length - 1) {
            setCurrentLesson((prev) => prev + 1)
          } else if (currentModule < curriculum.length - 1) {
            setCurrentModule((prev) => prev + 1)
            setCurrentLesson(0)
          }
          // Else, curriculum complete (handled by UI or further logic)

          // End transition after state updates and modal is gone
          setTimeout(() => {
            setIsTransitioning(false)
          }, 300) // Short delay for state to apply and UI to react
        }, 1500) // Time for modal display
      }
    }
  }

  const isComplete = checkCompletion()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <LearningHeader streakCount={streakCount} completedLessons={completedLessons} totalLessons={totalLessons} />

      {/* Main Learning Grid */}
      <div className="pt-20 pb-8">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="container mx-auto px-8 max-w-7xl min-h-[calc(100vh-6rem)]">
            {/* CSS Grid Layout matching wireframe */}
            <div className="grid grid-cols-12 gap-8 h-full">
              {/* Task Header */}
              <div className="col-span-12 md:col-span-5">
                <TaskHeader
                  lesson={currentLessonData}
                  moduleTitle={curriculum[currentModule]?.main_title || curriculum[currentModule]?.title}
                  lessonNumber={completedLessons + 1}
                />
              </div>

              {/* Component Preview */}
              <div className="col-span-12 md:col-span-7 md:row-span-2 min-h-64">
                <ComponentPreview
                  appliedClasses={appliedClasses}
                  component={currentLessonData?.component || "div"}
                  targetClasses={currentLessonData?.target_classes || currentLessonData?.targetClasses || []}
                  isComplete={isComplete}
                />
              </div>

              {/* Missions Card */}
              <div className="col-span-12 md:col-span-5 md:row-start-2">
                <MissionsCard
                  targetClasses={currentLessonData?.target_classes || currentLessonData?.targetClasses || []}
                  appliedClasses={appliedClasses}
                  hint={currentLessonData?.hint}
                />
              </div>

              {/* Continue Button */}
              <div className="col-span-12 md:col-span-5 md:row-start-3 flex items-end">
                <ContinueButton isComplete={isComplete} onNext={handleNext} />
              </div>

              {/* Class Input */}
              <div className="col-span-12 md:col-span-7 md:row-start-3 md:col-start-6 flex items-end">
                <ClassInput
                  currentInput=""
                  appliedClasses={appliedClasses}
                  onClassAdd={handleClassAdd}
                  onClassRemove={handleClassRemove}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        streakCount={streakCount}
        completedLessons={completedLessons}
      />
    </div>
  )
}
```

### instant-learning/learning-header.tsx
```tsx
"use client"

import { Flame, BookOpen } from "lucide-react"

interface LearningHeaderProps {
  streakCount: number
  completedLessons: number
  totalLessons: number
}

export function LearningHeader({ streakCount, completedLessons, totalLessons }: LearningHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-800">Corewind</span>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6">
          {/* Streak */}
          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-slate-800">{streakCount}</span>
            <span className="text-slate-600 text-sm">day streak</span>
          </div>

          {/* Progress */}
          <div className="text-slate-600 text-sm">
            <span className="text-slate-800 font-semibold">{completedLessons}</span>/{totalLessons} lessons
          </div>
        </div>
      </div>
    </header>
  )
}
```

### instant-learning/lesson-content.tsx
```tsx
"use client"

import type React from "react"
import { useState } from "react"
import { ChevronRight, Lightbulb, BookOpen, X, Plus } from "lucide-react"

interface Lesson {
  id: string
  title: string
  description: string
  instruction: string
  targetClasses: string[]
  component: string
  hint?: string
}

interface LessonContentProps {
  lesson: Lesson
  moduleTitle: string
  appliedClasses: string[]
  onClassAdd: (className: string) => void
  onClassRemove: (className: string) => void
  onNext: () => void
  isComplete: boolean
  lessonNumber: number
}

const commonClasses = [
  "w-32",
  "w-48",
  "w-64",
  "h-32",
  "h-48",
  "h-64",
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "p-4",
  "p-6",
  "p-8",
  "px-4",
  "py-2",
  "px-6",
  "py-4",
  "rounded",
  "rounded-lg",
  "rounded-xl",
  "rounded-full",
  "border",
  "border-2",
  "border-4",
  "border-red-500",
  "border-blue-500",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "font-bold",
  "font-semibold",
  "font-medium",
  "text-white",
  "text-black",
  "text-gray-700",
  "text-blue-500",
  "text-center",
  "text-left",
  "text-right",
  "leading-relaxed",
  "flex",
  "space-x-4",
]

export function LessonContent({
  lesson,
  moduleTitle,
  appliedClasses,
  onClassAdd,
  onClassRemove,
  onNext,
  isComplete,
  lessonNumber,
}: LessonContentProps) {
  const [currentInput, setCurrentInput] = useState("")
  const [showHint, setShowHint] = useState(false)

  const filteredSuggestions = commonClasses
    .filter((cls) => cls.toLowerCase().includes(currentInput.toLowerCase()) && !appliedClasses.includes(cls))
    .slice(0, 6)

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentInput.trim()) {
      onClassAdd(currentInput.trim())
      setCurrentInput("")
    }
  }

  if (!lesson) {
    return (
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 text-center border border-green-500/20">
        <div className="text-3xl font-bold text-white mb-4">🎉 Congratulations!</div>
        <div className="text-slate-300 text-lg">You've completed all available lessons!</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Lesson Header */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <BookOpen className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-blue-400 mb-1">
              {moduleTitle} • Lesson {lessonNumber}
            </div>
            <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">{lesson.description}</p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-1">Your Task</div>
                <div className="text-white">{lesson.instruction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Class Management */}
      <div className="bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 overflow-hidden">
        <div className="bg-slate-700/50 px-6 py-4 border-b border-slate-600">
          <h3 className="text-lg font-semibold text-white">Add Tailwind Classes</h3>
          <p className="text-sm text-slate-400 mt-1">Type class names and press Enter to apply them</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Input Section */}
          <div className="relative">
            <div className="relative">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a Tailwind class (e.g., bg-blue-500)..."
                className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 pr-12 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-lg"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Plus className="w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Suggestions */}
            {currentInput && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-700 border border-slate-600 rounded-xl shadow-2xl z-10 overflow-hidden">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      onClassAdd(suggestion)
                      setCurrentInput("")
                    }}
                    className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors duration-200 border-b border-slate-600 last:border-b-0"
                  >
                    <span className="font-mono">{suggestion}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Applied Classes */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-slate-300">Applied Classes</label>
              <span className="text-xs text-slate-500">{appliedClasses.length} applied</span>
            </div>

            <div className="min-h-[100px] bg-slate-700/50 rounded-xl p-4 border border-slate-600">
              {appliedClasses.length === 0 ? (
                <div className="flex items-center justify-center h-20">
                  <div className="text-center">
                    <div className="text-slate-500 text-sm mb-1">No classes applied yet</div>
                    <div className="text-slate-600 text-xs">Start typing above to add classes</div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {appliedClasses.map((className) => (
                    <div
                      key={className}
                      className={`group inline-flex items-center px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                        lesson.targetClasses.includes(className)
                          ? "bg-green-500/20 text-green-300 border border-green-500/30 shadow-sm"
                          : "bg-slate-600 text-slate-300 border border-slate-500 hover:bg-slate-500"
                      }`}
                    >
                      <span>{className}</span>
                      <button
                        onClick={() => onClassRemove(className)}
                        className="ml-3 text-slate-400 hover:text-white transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hint Section */}
      {lesson.hint && (
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl overflow-hidden">
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full p-6 flex items-center justify-between text-left hover:bg-yellow-500/5 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold text-white">Need a hint?</div>
                <div className="text-sm text-slate-400">Click to reveal a helpful tip</div>
              </div>
            </div>
            <ChevronRight
              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${showHint ? "rotate-90" : ""}`}
            />
          </button>

          {showHint && (
            <div className="px-6 pb-6">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <div className="text-yellow-300">{lesson.hint}</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Complete Button */}
      <div className="pt-4">
        <button
          onClick={onNext}
          disabled={!isComplete}
          className={`w-full py-5 px-8 rounded-xl font-semibold text-lg transition-all duration-200 ${
            isComplete
              ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              : "bg-slate-700 text-slate-400 cursor-not-allowed"
          }`}
        >
          <div className="flex items-center justify-center space-x-3">
            <span>{isComplete ? "🎉 Complete Lesson" : "Complete the task to continue"}</span>
            {isComplete && <ChevronRight className="w-6 h-6" />}
          </div>
        </button>
      </div>
    </div>
  )
}
```

### instant-learning/live-preview.tsx
```tsx
"use client"

import { useState } from "react"
import { Monitor, Tablet, Smartphone, Eye } from "lucide-react"

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
  targetClasses: string[]
}

const viewports = [
  { id: "desktop", label: "Desktop", icon: Monitor, width: "100%" },
  { id: "tablet", label: "Tablet", icon: Tablet, width: "768px" },
  { id: "mobile", label: "Mobile", icon: Smartphone, width: "375px" },
]

export function LivePreview({ appliedClasses, component, targetClasses }: LivePreviewProps) {
  const [activeViewport, setActiveViewport] = useState("desktop")
  const [showTarget, setShowTarget] = useState(false)

  const currentViewport = viewports.find((v) => v.id === activeViewport)
  const className = appliedClasses.join(" ")
  const targetClassName = targetClasses.join(" ")

  const renderComponent = (classes: string) => {
    switch (component) {
      case "button":
        return <button className={classes || "px-4 py-2 bg-gray-200 text-gray-800 rounded"}>Click me</button>
      case "div":
        return (
          <div className={classes || "w-32 h-32 bg-gray-200 rounded"}>
            {classes.includes("text") ? "Sample Text" : ""}
          </div>
        )
      case "text":
        return (
          <div className={classes || "text-gray-800"}>
            <h1>Sample Heading</h1>
            <p>This is a sample paragraph to demonstrate text styling.</p>
          </div>
        )
      default:
        return <div className={classes || "w-32 h-32 bg-gray-200 rounded"}>Sample Element</div>
    }
  }

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-600 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-700 px-6 py-4 border-b border-slate-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <span className="font-medium text-white">Live Preview</span>
          </div>

          {/* Viewport Controls */}
          <div className="flex items-center space-x-1">
            {viewports.map((viewport) => {
              const Icon = viewport.icon
              return (
                <button
                  key={viewport.id}
                  onClick={() => setActiveViewport(viewport.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    activeViewport === viewport.id
                      ? "bg-blue-500 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="p-8 min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="h-full flex items-center justify-center">
          <div
            className="transition-all duration-300 bg-white rounded-lg shadow-lg p-8 min-h-[200px] flex items-center justify-center relative"
            style={{
              width: currentViewport?.width,
              maxWidth: "100%",
            }}
          >
            {/* Your Result */}
            <div className="relative">
              {renderComponent(className)}
              <div className="absolute -top-8 left-0 text-xs font-medium text-slate-600">Your Result</div>
            </div>

            {/* Target Preview Toggle */}
            {targetClasses.length > 0 && (
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowTarget(!showTarget)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    showTarget ? "bg-green-500 text-white" : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                  }`}
                >
                  {showTarget ? "Hide Target" : "Show Target"}
                </button>
              </div>
            )}

            {/* Target Preview */}
            {showTarget && targetClasses.length > 0 && (
              <div className="absolute inset-0 bg-green-500/10 border-2 border-green-500 border-dashed rounded-lg flex items-center justify-center">
                <div className="relative">
                  {renderComponent(targetClassName)}
                  <div className="absolute -top-8 left-0 text-xs font-medium text-green-600">Target Result</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-slate-700 px-6 py-3 border-t border-slate-600">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Classes applied: {appliedClasses.length}</span>
          <span className="text-green-400">
            Correct: {appliedClasses.filter((cls) => targetClasses.includes(cls)).length}/{targetClasses.length}
          </span>
        </div>
      </div>
    </div>
  )
}
```

### instant-learning/missions-card.tsx
```tsx
"use client"

import { useState } from "react"
import { CheckCircle2, Circle, Lightbulb, ChevronDown } from "lucide-react"

interface MissionsCardProps {
  targetClasses: string[]
  appliedClasses: string[]
  hint?: string
}

export function MissionsCard({ targetClasses, appliedClasses, hint }: MissionsCardProps) {
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="h-full flex flex-col">
      <div className="bg-slate-100 rounded-2xl p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Missions</h3>
          <div className="text-sm text-slate-600">Complete these tasks to finish the lesson</div>
        </div>

        {/* Mission List */}
        <div className="space-y-3 flex-1">
          {targetClasses.map((className, index) => {
            const isCompleted = appliedClasses.includes(className)
            return (
              <div key={className} className="flex items-center space-x-3">
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
                <div
                  className={`font-mono text-sm transition-colors duration-200 ${
                    isCompleted ? "text-green-700 line-through" : "text-slate-700"
                  }`}
                >
                  Add <span className="bg-slate-200 px-2 py-1 rounded">{className}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Hint Section */}
        {hint && (
          <div className="mt-6 pt-4 border-t border-slate-200">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center justify-between w-full text-left p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Need a hint?</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-yellow-600 transition-transform duration-200 ${showHint ? "rotate-180" : ""}`}
              />
            </button>

            {showHint && (
              <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-sm text-yellow-800">{hint}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
```

### instant-learning/pill-progress.tsx
```tsx
"use client"

import { useEffect, useState } from "react"

interface PillProgressProps {
  progress: number
  completedLessons: number
  totalLessons: number
}

export function PillProgress({ progress, completedLessons, totalLessons }: PillProgressProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 200)
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Your Progress</h2>
          <p className="text-slate-400 text-sm">
            {completedLessons} of {totalLessons} lessons completed
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{Math.round(animatedProgress)}%</div>
          <div className="text-slate-400 text-sm">Complete</div>
        </div>
      </div>

      {/* Pill Progress Bar */}
      <div className="relative">
        <div className="w-full bg-slate-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${animatedProgress}%` }}
          />
        </div>

        {/* Progress Indicator */}
        <div
          className="absolute top-0 h-3 w-6 bg-white rounded-full shadow-lg transition-all duration-500 ease-out"
          style={{ left: `calc(${animatedProgress}% - 12px)` }}
        />
      </div>

      {/* Motivational Text */}
      <div className="mt-4 text-center">
        <p className="text-slate-300 text-sm">
          {progress < 25
            ? "Great start! Keep building your foundation 🌱"
            : progress < 50
              ? "You're making excellent progress! 🚀"
              : progress < 75
                ? "More than halfway there! 💪"
                : progress < 100
                  ? "Almost finished! You're doing amazing! 🎯"
                  : "Congratulations! You're a Tailwind expert! 🏆"}
        </p>
      </div>
    </div>
  )
}
```

### instant-learning/progress-circle.tsx
```tsx
"use client"

import { useEffect, useState } from "react"

interface ProgressCircleProps {
  progress: number
  completedLessons: number
  totalLessons: number
}

export function ProgressCircle({ progress, completedLessons, totalLessons }: ProgressCircleProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 300)
    return () => clearTimeout(timer)
  }, [progress])

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference

  return (
    <div className="relative">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse" />

      {/* Main Circle */}
      <div className="relative bg-slate-800 rounded-full p-6 border-2 border-slate-700">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle cx="50" cy="50" r="45" stroke="rgb(51 65 85)" strokeWidth="8" fill="none" />

          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-3xl font-bold text-white mb-1">{Math.round(animatedProgress)}%</div>
          <div className="text-sm text-slate-400">
            {completedLessons} of {totalLessons}
          </div>
          <div className="text-xs text-slate-500 mt-1">lessons mastered</div>
        </div>
      </div>

      {/* Motivational Text */}
      <div className="text-center mt-4">
        <div className="text-lg font-semibold text-white mb-1">
          {progress < 25
            ? "Just getting started! 🌱"
            : progress < 50
              ? "You're on fire! 🔥"
              : progress < 75
                ? "Unstoppable! ⚡"
                : progress < 100
                  ? "Almost there! 🎯"
                  : "Tailwind Master! 🏆"}
        </div>
        <div className="text-sm text-slate-400">
          {progress < 25
            ? "Every expert was once a beginner"
            : progress < 50
              ? "Your skills are growing rapidly"
              : progress < 75
                ? "You're becoming a Tailwind pro"
                : progress < 100
                  ? "The finish line is in sight"
                  : "You've mastered the essentials!"}
        </div>
      </div>
    </div>
  )
}
```

### instant-learning/success-modal.tsx
```tsx
"use client"

import { Trophy, ArrowRight } from "lucide-react"

interface SuccessModalProps {
  show: boolean
  onClose: () => void
  streakCount: number
  completedLessons: number
}

const celebrations = [
  "Perfect! 🎉",
  "Excellent work! 🚀",
  "Outstanding! ⚡",
  "Well done! 🌟",
  "Fantastic! 🎯",
  "Amazing! 💪",
]

export function SuccessModal({ show, onClose, streakCount, completedLessons }: SuccessModalProps) {
  if (!show) return null

  const celebration = celebrations[Math.floor(Math.random() * celebrations.length)]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl p-8 max-w-sm mx-4 border border-slate-600 shadow-2xl transform transition-all duration-300 scale-100">
        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-xl font-bold text-white mb-2">{celebration}</h2>
          <p className="text-slate-300 text-sm">You're building real Tailwind skills!</p>
        </div>

        {/* Continue Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <span>Next Lesson</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
```

### instant-learning/task-header.tsx
```tsx
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
```

### landing/enhanced-sequential-demo.tsx
```tsx
"use client"

import { useState, useEffect } from "react"
import { SequentialLiveDemo as SequentialLiveDemoComponent } from "./sequential-live-demo"
import { EnhancedTextHighlighter } from "../ui/enhanced-text-highlighter"
import { SvgText } from "../ui/svg-text"
import { useRef, useMemo, useCallback } from "react"
import { Copy, Check, Eye } from "lucide-react"
import type React from "react"

// Enhanced TypeScript interfaces
interface DemoSequence {
  id: string
  name: string
  description: string
  category: "buttons" | "cards" | "forms" | "navigation" | "layouts"
  classes: string[]
  component: "button" | "div" | "form" | "nav" | "input" | "select"
  starter_component_jsx?: string
  children?: string
  attributes?: Record<string, string>
}

interface LivePreviewProps {
  appliedClasses: string[]
  component: string
  starter_component_jsx?: string
  children?: string
  attributes?: Record<string, string>
  targetClasses?: string[]
}

// Custom hook to track typewriter progress
const useTypewriterProgress = (text: string, speed: number, isPlaying: boolean, key: number) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    setProgress(0)
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        currentIndex++
        setProgress(currentIndex)
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, isPlaying, key])

  return progress
}

// Constants
const TYPING_SPEEDS = {
  slow: 60,
  normal: 30,
  fast: 15,
  instant: 1,
} as const

const TRANSITION_DURATION = 300
const AUTO_ADVANCE_DELAY = 2000
const CLICK_DEBOUNCE_DELAY = 300

// Enhanced demo sequences with more variety
const demoSequences: DemoSequence[] = [
  // Buttons
  {
    id: "basic-button",
    name: "Basic Button",
    description: "Building a simple button from scratch",
    category: "buttons",
    classes: ["bg-blue-500", "text-white", "px-6", "py-3", "rounded-lg", "font-medium"],
    component: "button",
    children: "Click me",
  },
  {
    id: "enhanced-button",
    name: "Enhanced Button",
    description: "Adding hover effects and shadows",
    category: "buttons",
    classes: [
      "bg-gradient-to-r",
      "from-purple-500",
      "to-pink-500",
      "text-white",
      "px-8",
      "py-4",
      "rounded-xl",
      "font-semibold",
      "shadow-lg",
      "hover:shadow-xl",
      "hover:scale-105",
      "transition-all",
      "duration-300",
      "active:scale-95",
    ],
    component: "button",
    children: "Gradient Button",
  },
  {
    id: "outline-button",
    name: "Outline Button",
    description: "Creating a minimalist outline style",
    category: "buttons",
    classes: [
      "border-2",
      "border-indigo-500",
      "text-indigo-500",
      "px-6",
      "py-3",
      "rounded-lg",
      "font-medium",
      "hover:bg-indigo-500",
      "hover:text-white",
      "transition-colors",
      "duration-200",
    ],
    component: "button",
    children: "Outline Style",
  },

  // Cards
  {
    id: "basic-card",
    name: "Basic Card",
    description: "Creating a simple card layout",
    category: "cards",
    classes: ["bg-white", "p-6", "rounded-2xl", "shadow-md", "border", "border-gray-100", "max-w-sm"],
    component: "div",
    children: "Card Content",
  },
  {
    id: "feature-card",
    name: "Feature Card",
    description: "Advanced card with hover effects",
    category: "cards",
    classes: [
      "bg-white",
      "p-8",
      "rounded-3xl",
      "shadow-xl",
      "border",
      "border-gray-100",
      "max-w-md",
      "hover:shadow-2xl",
      "hover:-translate-y-2",
      "transition-all",
      "duration-300",
      "cursor-pointer",
      "group",
      "relative",
      "overflow-hidden",
    ],
    component: "div",
    children: "✨ Premium Feature",
  },
  {
    id: "pricing-card",
    name: "Pricing Card",
    description: "Professional pricing card design",
    category: "cards",
    classes: [
      "bg-gradient-to-br",
      "from-blue-50",
      "to-indigo-100",
      "p-8",
      "rounded-2xl",
      "shadow-lg",
      "border-2",
      "border-blue-200",
      "relative",
      "overflow-hidden",
      "transform",
      "hover:scale-105",
      "transition-transform",
      "duration-300",
    ],
    component: "div",
    children: "💎 Pro Plan - $29/mo",
  },

  // Forms
  {
    id: "input-field",
    name: "Input Field",
    description: "Styled form input with focus states",
    category: "forms",
    classes: [
      "w-full",
      "px-4",
      "py-3",
      "border",
      "border-gray-300",
      "rounded-lg",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-blue-500",
      "focus:border-transparent",
      "transition-all",
      "duration-200",
      "placeholder-gray-400",
    ],
    component: "input",
    attributes: { type: "text", placeholder: "Enter your email..." },
  },
  {
    id: "select-dropdown",
    name: "Select Dropdown",
    description: "Custom styled select element",
    category: "forms",
    classes: [
      "w-full",
      "px-4",
      "py-3",
      "border",
      "border-gray-300",
      "rounded-lg",
      "bg-white",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-green-500",
      "focus:border-transparent",
      "appearance-none",
      "cursor-pointer",
      "transition-all",
      "duration-200",
    ],
    component: "select",
    children: "<option>Choose an option...</option><option>Option 1</option><option>Option 2</option>",
  },

  // Navigation
  {
    id: "nav-link",
    name: "Navigation Link",
    description: "Styled navigation with hover effects",
    category: "navigation",
    classes: [
      "px-4",
      "py-2",
      "text-gray-700",
      "font-medium",
      "hover:text-blue-600",
      "hover:bg-blue-50",
      "rounded-md",
      "transition-colors",
      "duration-200",
      "relative",
      "after:absolute",
      "after:bottom-0",
      "after:left-0",
      "after:w-0",
      "after:h-0.5",
      "after:bg-blue-600",
      "after:transition-all",
      "after:duration-300",
      "hover:after:w-full",
    ],
    component: "nav",
    children: "About Us",
  },

  // Layouts
  {
    id: "hero-section",
    name: "Hero Section",
    description: "Full-width hero section with gradients",
    category: "layouts",
    classes: [
      "w-full",
      "min-h-96",
      "bg-gradient-to-r",
      "from-violet-600",
      "to-purple-600",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "text-center",
      "p-8",
      "relative",
      "overflow-hidden",
    ],
    component: "div",
    children: "🚀 Welcome to the Future",
  },
]

// Enhanced LivePreview component styled like the instant learning page
const LivePreview: React.FC<LivePreviewProps> = ({
  appliedClasses,
  component,
  starter_component_jsx,
  children,
  attributes = {},
  targetClasses = [],
}) => {
  const [showTarget, setShowTarget] = useState(false)
  const Tag = component as keyof JSX.IntrinsicElements
  const className = appliedClasses.join(" ")
  const targetClassName = targetClasses.join(" ")

  const renderComponent = (classes: string) => {
    return (
      <Tag className={classes} {...attributes} dangerouslySetInnerHTML={children ? { __html: children } : undefined} />
    )
  }

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-600 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-700 px-6 py-4 border-b border-slate-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <span className="font-medium text-white">Live Preview</span>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="p-8 min-h-[400px] bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="h-full flex items-center justify-center">
          <div
            className="transition-all duration-300 bg-white rounded-lg shadow-lg p-8 min-h-[200px] flex items-center justify-center relative"
            style={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {/* Your Result */}
            <div className="relative">
              {renderComponent(className)}
              <div className="absolute -top-8 left-0 text-xs font-medium text-slate-600">Your Result</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-slate-700 px-6 py-3 border-t border-slate-600">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Classes applied: {appliedClasses.length}</span>
        </div>
      </div>
    </div>
  )
}

// Enhanced Typewriter component
const TypewriterComponent: React.FC<{
  text: string
  speed: number
  onProgress: (length: number) => void
  isPlaying: boolean
  className?: string
}> = ({ text, speed, onProgress, isPlaying, className = "" }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isPlaying) return

    if (currentIndex < text.length) {
      intervalRef.current = setTimeout(() => {
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex)
        setDisplayText(text.slice(0, newIndex))
        onProgress(newIndex)
      }, speed)
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [currentIndex, text, speed, isPlaying, onProgress])

  useEffect(() => {
    setCurrentIndex(0)
    setDisplayText("")
  }, [text])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-green-300">_</span>
    </span>
  )
}

// Main component with all enhancements
export function EnhancedSequentialLiveDemo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <EnhancedTextHighlighter
            text={
              <SvgText className="text-3xl font-bold">
                Learn by
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Doing
              </SvgText>
            }
            highlightColor="bg-blue-100"
            className="mb-2"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our interactive demos let you experiment with Tailwind CSS classes in real-time. Watch as your components
            transform with each class you add.
          </p>
        </div>

        <div
          className={`transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SequentialLiveDemoComponent />
        </div>
      </div>
    </section>
  )
}

// SequentialLiveDemo component remains largely the same, but ensure it uses the new LivePreview
// and other supporting components correctly.
// For brevity, I'm not re-listing the entire SequentialLiveDemo component here,
// but it's part of this file in the actual codebase.
export function SequentialLiveDemo() {
  const [currentSequence, setCurrentSequence] = useState(0)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [typingProgress, setTypingProgress] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState<keyof typeof TYPING_SPEEDS>("normal")
  const [showSettings, setShowSettings] = useState(false)
  const [typewriterKey, setTypewriterKey] = useState(0)
  const [copied, setCopied] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [clickCount, setClickCount] = useState(0)

  const currentDemo = demoSequences[currentSequence]
  const fullClassString = currentDemo.classes.join(" ")

  // Track typewriter progress using custom hook
  const typewriterProgress = useTypewriterProgress(
    fullClassString,
    TYPING_SPEEDS[typingSpeed],
    isPlaying,
    typewriterKey,
  )

  // Filter sequences by category
  const filteredSequences = useMemo(() => {
    if (selectedCategory === "all") return demoSequences
    return demoSequences.filter((seq) => seq.category === selectedCategory)
  }, [selectedCategory])

  const categories = useMemo(() => {
    const cats = ["all", ...Array.from(new Set(demoSequences.map((seq) => seq.category)))]
    return cats
  }, [])

  // Memoize class positions for syntax highlighting
  const classPositions = useMemo(() => {
    const positions: Array<{ class: string; start: number; end: number }> = []
    let currentPos = 0

    currentDemo.classes.forEach((cls) => {
      const start = currentPos
      const end = currentPos + cls.length
      positions.push({ class: cls, start, end })
      currentPos = end + 1
    })

    return positions
  }, [currentDemo.classes])

  // Reset when sequence changes
  useEffect(() => {
    setAppliedClasses([])
    setTypingProgress(0)
    setTypewriterKey((prev) => prev + 1) // Force typewriter to restart
  }, [currentSequence])

  // Update applied classes based on typing progress
  useEffect(() => {
    const validClasses = classPositions.filter(({ end }) => typewriterProgress >= end).map(({ class: cls }) => cls)

    setAppliedClasses(validClasses)
    setTypingProgress(typewriterProgress)
  }, [typewriterProgress, classPositions])

  // Auto-advance sequences
  useEffect(() => {
    if (!isPlaying || isTransitioning) return

    if (typewriterProgress >= fullClassString.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSequence((prev) => (prev + 1) % filteredSequences.length)
          setIsTransitioning(false)
        }, TRANSITION_DURATION)
      }, AUTO_ADVANCE_DELAY)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [typewriterProgress, fullClassString.length, isPlaying, isTransitioning, filteredSequences.length])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    }
  }, [])

  // Enhanced click handler
  const handleContainerClick = useCallback(() => {
    setClickCount((prev) => {
      const newCount = prev + 1

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }

      clickTimeoutRef.current = setTimeout(() => {
        if (newCount === 1) {
          setIsPlaying((prev) => !prev)
        } else if (newCount >= 2) {
          setCurrentSequence(0)
          setAppliedClasses([])
          setTypingProgress(0)
          setIsPlaying(true)
        }
        setClickCount(0)
      }, CLICK_DEBOUNCE_DELAY)

      return newCount
    })
  }, [])

  const handleSequenceChange = useCallback((index: number) => {
    setCurrentSequence(index)
    setIsPlaying(true)
    setClickCount(0)
    setTypewriterKey((prev) => prev + 1) // Force typewriter restart
  }, [])

  const handleTypewriterProgress = useCallback((currentLength: number) => {
    // This function is no longer needed since we're using the custom hook
    // but keeping it for backward compatibility
  }, [])

  const handlePrevious = useCallback(() => {
    const prevIndex = currentSequence > 0 ? currentSequence - 1 : filteredSequences.length - 1
    handleSequenceChange(prevIndex)
  }, [currentSequence, filteredSequences.length, handleSequenceChange])

  const handleNext = useCallback(() => {
    const nextIndex = (currentSequence + 1) % filteredSequences.length
    handleSequenceChange(nextIndex)
  }, [currentSequence, filteredSequences.length, handleSequenceChange])

  const handleCopyClasses = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(fullClassString)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy classes:", error)
    }
  }, [fullClassString])

  const handleReset = useCallback(() => {
    setCurrentSequence(0)
    setAppliedClasses([])
    setTypingProgress(0)
    setIsPlaying(true)
    setTypewriterKey((prev) => prev + 1) // Force typewriter restart
  }, [])

  const progressPercentage = Math.min((typingProgress / fullClassString.length) * 100, 100)

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
      {/* Live Preview */}
      <div
        className={`transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl ${
          isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"
        }`}
        onClick={handleContainerClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleContainerClick()
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${isPlaying ? "Pause" : "Play"} demo`}
      >
        <LivePreview
          appliedClasses={appliedClasses}
          component={currentDemo.component}
          starter_component_jsx={currentDemo.starter_component_jsx}
          children={currentDemo.children}
          attributes={currentDemo.attributes}
        />
      </div>

      {/* Code Window */}
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            {/* Removed file name display as requested */}
          </div>
          <button
            onClick={handleCopyClasses}
            className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors text-sm"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="p-6 min-h-[120px] flex items-center">
          <div className="font-mono text-sm text-green-400 w-full leading-relaxed">
            {isPlaying ? (
              <TypewriterComponent
                key={typewriterKey}
                text={fullClassString}
                speed={TYPING_SPEEDS[typingSpeed]}
                onProgress={handleTypewriterProgress}
                isPlaying={isPlaying}
                className="break-all"
              />
            ) : (
              <span className="break-all">
                {fullClassString.slice(0, typingProgress)}
                <span className="animate-pulse text-green-300">_</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

### landing/final-cta-section.tsx
```tsx
"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-cyan-500/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build with Joy & Confidence?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The frustration of complex CSS ends here. Your clear, interactive path to mastering Tailwind CSS and
              crafting beautiful, responsive UIs starts now. The foundational modules are completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/instant-learning">
                <AnimatedButton size="lg" className="text-lg px-8 py-4 rounded-[25px]">
                  <div className="flex flex-col items-center">
                    <span>Get Started</span>
                    <span className="text-xs opacity-75 font-normal">No sign up required</span>
                  </div>
                </AnimatedButton>
              </Link>
              <Link href="/curriculum">
                <AnimatedButton variant="secondary" size="lg" className="text-lg px-8 py-4 rounded-[25px]">
                  <BookOpen className="w-5 h-5" />
                  View All Learning Paths
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### landing/footer.tsx
```tsx
"use client"

import Link from "next/link"
import { Heart, Github, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">Corewind</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Master Tailwind CSS through interactive, hands-on lessons designed for real-world application.
              </p>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>© {currentYear} Corewind. Built with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and Tailwind CSS.</span>
              </div>
            </div>

            {/* Learning */}
            <div>
              <h3 className="font-semibold mb-4">Learning</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/learn" className="hover:text-foreground transition-colors">
                    Start Learning
                  </Link>
                </li>
                <li>
                  <Link href="/curriculum" className="hover:text-foreground transition-colors">
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

### landing/how-it-works-section.tsx
```tsx
"use client"

import { Target, Code, Brain } from "lucide-react"

const steps = [
  {
    icon: Target,
    title: "Choose Your Lesson",
    description: "Pick a focused lesson from our structured learning paths.",
    number: "01",
  },
  {
    icon: Code,
    title: "Apply & See",
    description: "Type Tailwind classes and watch your component update live.",
    number: "02",
  },
  {
    icon: Brain,
    title: "Understand & Master",
    description: "Get clear explanations and expert tips to solidify your learning.",
    number: "03",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to Tailwind Mastery</h2>
            <p className="text-xl text-muted-foreground">in 3 Simple Steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className={`text-center relative animate-fade-in stagger-${index + 1}`}>
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-1/2 z-0" />
                  )}

                  <div className="relative z-10 bg-background">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>

                    {/* Icon */}
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
```

### landing/linear-features-section.tsx
```tsx
"use client"

import { Sparkles, Target, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Learn by Doing",
    description: "No more passive watching. Build real components and see your code come alive instantly.",
  },
  {
    icon: Target,
    title: "Focused Learning",
    description: "Master the essential 20% of Tailwind that covers 80% of real-world use cases.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "See your changes immediately. Build muscle memory through hands-on practice.",
  },
  {
    icon: Heart,
    title: "Built with Care",
    description: "Every lesson is crafted with love, from beginner-friendly to expert insights.",
  },
]

export function LinearFeaturesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Corewind Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A learning experience designed around how your brain actually learns and retains new skills.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`text-center group animate-fade-in stagger-${index + 1}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
```

### landing/linear-hero-section.tsx
```tsx
"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { EnhancedSequentialLiveDemo } from "./enhanced-sequential-demo"
import { AuroraText } from "@/components/ui/aurora-text"
import { OptimizedFloatingElements } from "./optimized-floating-elements"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { StaggeredContainer } from "@/components/ui/staggered-container"

export function LinearHeroSection() {
  return (
    <ErrorBoundary>
      <section className="relative min-h-screen bg-background">
        {/* Optimized background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

        {/* Optimized floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <OptimizedFloatingElements />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Header Content */}
            <div className="text-center mb-20 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 border border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Interactive Tailwind CSS Learning
              </div>

              {/* Main Headline with AuroraText */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
                Tailwind.{" "}
                <AuroraText colors={["#3b82f6", "#1d4ed8", "#06b6d4", "#0891b2"]} speed={1.5} className="inline-block">
                  Reimagined.
                </AuroraText>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
                Stop passively watching, start actively building. Our unique, hands-on lessons transform Tailwind CSS
                from complex to intuitive, guiding you to UI mastery, one click at a time.
              </p>

              {/* Value Props with Staggered Animation */}
              <StaggeredContainer
                delay={150}
                className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-muted-foreground"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Learn by doing, not watching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Instant visual feedback</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Master the essential 20%</span>
                </div>
              </StaggeredContainer>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <Link href="/learn">
                  <AnimatedButton size="lg" className="text-lg px-8 py-4 electric-blue-glow will-change-transform">
                    Start Learning for Free
                    <ArrowRight className="w-5 h-5" />
                  </AnimatedButton>
                </Link>
                <Link href="/curriculum">
                  <AnimatedButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                    View Curriculum
                  </AnimatedButton>
                </Link>
              </div>
            </div>

            {/* Live Demo Section */}
            <div className="animate-fade-in stagger-2">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">See It in Action</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Watch as Tailwind classes are applied one by one, building beautiful components in real-time. This is
                  exactly how you'll learn.
                </p>
              </div>

              <ErrorBoundary
                fallback={<div className="text-center text-muted-foreground">Demo temporarily unavailable</div>}
              >
                <EnhancedSequentialLiveDemo />
              </ErrorBoundary>
            </div>

            {/* Social Proof */}
            <div className="mt-24 text-center animate-fade-in stagger-3">
              <p className="text-sm text-muted-foreground mb-8">Trusted by developers learning Tailwind CSS</p>
              <StaggeredContainer delay={100} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Lessons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Interactive Exercises</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Free to Start</div>
                </div>
              </StaggeredContainer>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
```

### landing/linear-landing-page.tsx
```tsx
"use client"

import { LinearHeroSection } from "./linear-hero-section"
import { MinimalistFounderStory } from "./minimalist-founder-story"
import { LinearFeaturesSection } from "./linear-features-section"
import { HowItWorksSection } from "./how-it-works-section"
import { TestimonialsSection } from "./testimonials-section"
import { FinalCTASection } from "./final-cta-section"
import { Footer } from "./footer"

export function LinearLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <LinearHeroSection />
      <MinimalistFounderStory />
      <LinearFeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
```

### landing/minimalist-founder-story.tsx
```tsx
"use client"

import { EnhancedTextHighlighter } from "@/components/ui/enhanced-text-highlighter"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { StaggeredContainer } from "@/components/ui/staggered-container"

const storyParagraphs = [
  {
    id: "discovery",
    content: (
      <>
        I started as a{" "}
        <EnhancedTextHighlighter variant="primary" delay={200}>
          'vibe coder'
        </EnhancedTextHighlighter>{" "}
        — someone who loved seeing things change on screen but hit walls when building anything specific. The beautiful
        designs in my head just wouldn't translate to reality.
      </>
    ),
  },
  {
    id: "struggle",
    content: (
      <>
        Learning Tailwind felt like navigating a maze. Long courses I'd never finish, overwhelming documentation, and
        constant tab-switching led to{" "}
        <EnhancedTextHighlighter variant="primary" delay={300}>
          more social media scrolling than actual learning
        </EnhancedTextHighlighter>
        . That initial spark to really master it started fading.
      </>
    ),
  },
  {
    id: "insight",
    content: (
      <>
        Then I discovered the science behind effective skill acquisition:{" "}
        <EnhancedTextHighlighter variant="primary" delay={400}>
          Active Recall and Deliberate Practice
        </EnhancedTextHighlighter>
        . It's not about consuming information — it's about actively using it, testing yourself, and getting immediate
        feedback. That's when real understanding sticks.
      </>
    ),
  },
  {
    id: "solution",
    content: (
      <>
        What if I could combine this learning science with everything I wished I had for Tailwind?{" "}
        <EnhancedTextHighlighter variant="primary" delay={300}>
          One place for focused, hands-on exercises
        </EnhancedTextHighlighter>
        . Instant visual feedback. No tab-switching chaos. A way to build muscle memory for classes, making the
        important stuff stick without the grind.
      </>
    ),
  },
  {
    id: "realization",
    content: (
      <>
        I built Corewind first for myself, and{" "}
        <EnhancedTextHighlighter variant="primary" delay={200}>
          it worked
        </EnhancedTextHighlighter>
        . That feeling of classes clicking into place was incredible. Now I'm sharing it with you, hoping it makes your
        Tailwind journey as clear and enjoyable as it should be.{" "}
        <EnhancedTextHighlighter variant="primary" delay={600}>
          Welcome aboard.
        </EnhancedTextHighlighter>
      </>
    ),
  },
]

export function MinimalistFounderStory() {
  return (
    <ErrorBoundary>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                The Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Corewind Exists</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The journey from frustration to solution — and why it might be exactly what you need.
              </p>
            </div>

            {/* Story Content with Staggered Animation */}
            <StaggeredContainer delay={150} className="space-y-16">
              {storyParagraphs.map((paragraph) => (
                <div key={paragraph.id}>
                  <p className="text-xl md:text-2xl leading-[1.7] text-foreground font-light tracking-wide max-w-4xl mx-auto">
                    {paragraph.content}
                  </p>
                </div>
              ))}
            </StaggeredContainer>

            {/* Closing Statement */}
            <div className="mt-24 text-center animate-fade-in stagger-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl"></div>
                <div className="relative p-12">
                  <div className="w-1 h-20 bg-primary mx-auto mb-8 rounded-full"></div>
                  <p className="text-2xl md:text-3xl font-light text-foreground leading-[1.6] max-w-4xl mx-auto tracking-wide">
                    Built from frustration, refined through experience, and shared with the hope that your Tailwind
                    journey becomes everything mine wasn't — until now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
```

### landing/optimized-floating-elements.tsx
```tsx
"use client"

import { memo, useMemo } from "react"

const floatingClasses = [
  "bg-blue-500",
  "text-white",
  "px-4",
  "py-2",
  "rounded-lg",
  "shadow-md",
  "hover:bg-blue-600",
  "transition-all",
  "flex",
  "items-center",
  "justify-center",
  "space-x-2",
  "w-full",
  "max-w-md",
  "mx-auto",
  "font-medium",
  "border",
  "border-blue-400",
  "transform",
  "hover:scale-105",
  "duration-300",
]

export const OptimizedFloatingElements = memo(() => {
  const elements = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        // Reduced from 25 to 15 for better performance
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 4,
        class: floatingClasses[Math.floor(Math.random() * floatingClasses.length)],
      })),
    [],
  )

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-xs font-mono text-muted-foreground/15 animate-float-gentle will-change-transform"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.class}
        </div>
      ))}
    </>
  )
})

OptimizedFloatingElements.displayName = "OptimizedFloatingElements"
```

### landing/sequential-live-demo.tsx
```tsx
"use client"

import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react"
// import { LivePreview } from "@/components/learning/live-preview" // Removed

interface DemoSequence {
  name: string
  description: string
  classes: string[]
  component: string
  starter_component_jsx?: string
}

const demoSequences: DemoSequence[] = [
  {
    name: "Basic Button",
    description: "Building a simple button from scratch",
    classes: ["bg-blue-500", "text-white", "px-6", "py-3", "rounded-lg", "font-medium"],
    component: "button",
  },
  {
    name: "Enhanced Button",
    description: "Adding hover effects and shadows",
    classes: [
      "bg-emerald-500",
      "text-white",
      "px-8",
      "py-4",
      "rounded-xl",
      "font-semibold",
      "shadow-lg",
      "hover:bg-emerald-600",
      "transition-all",
      "duration-300",
    ],
    component: "button",
  },
  {
    name: "Card Component",
    description: "Creating a modern card layout",
    classes: ["bg-white", "p-6", "rounded-2xl", "shadow-xl", "border", "border-gray-100", "max-w-sm"],
    component: "div",
  },
]

// Simple dynamic element renderer
interface DynamicElementProps {
  appliedClasses: string[]
  componentType: string
  children: React.ReactNode
}

const DynamicElement = memo<DynamicElementProps>(({ appliedClasses, componentType, children }) => {
  const className = appliedClasses.join(" ")
  const baseClasses = "transition-all duration-300 ease-in-out" // Default transition
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses

  switch (componentType) {
    case "button":
      return (
        <button
          className={
            combinedClasses ||
            `${baseClasses} px-6 py-3 bg-slate-200 text-slate-800 rounded-lg font-medium hover:bg-slate-300`
          }
        >
          {children}
        </button>
      )
    case "div":
      return (
        <div
          className={
            combinedClasses ||
            `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
          }
        >
          {children}
        </div>
      )
    default:
      return (
        <div
          className={
            combinedClasses ||
            `${baseClasses} w-40 h-40 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300`
          }
        >
          Element: {children}
        </div>
      )
  }
})
DynamicElement.displayName = "DynamicElement"

// Typewriter and OptimizedTypewriter component are removed.

export const SequentialLiveDemo = memo(() => {
  const [currentSequence, setCurrentSequence] = useState(0)
  const [appliedClasses, setAppliedClasses] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [typingProgress, setTypingProgress] = useState(0)

  const timeoutRef = useRef<NodeJS.Timeout>()
  const clickTimeoutRef = useRef<NodeJS.Timeout>()
  const [clickCount, setClickCount] = useState(0)

  const currentDemo = useMemo(() => demoSequences[currentSequence], [currentSequence])
  const fullClassString = useMemo(() => currentDemo.classes.join(" "), [currentDemo.classes])

  // Memoize class positions for better performance
  const classPositions = useMemo(() => {
    const positions: Array<{ class: string; start: number; end: number }> = []
    let currentPos = 0

    currentDemo.classes.forEach((cls) => {
      const start = currentPos
      const end = currentPos + cls.length
      positions.push({ class: cls, start, end })
      currentPos = end + 1 // +1 for the space
    })

    return positions
  }, [currentDemo.classes])

  // Reset when sequence changes
  useEffect(() => {
    setAppliedClasses([])
    setTypingProgress(0) // Reset progress when sequence changes
  }, [currentSequence])

  // Effect to simulate typing when Typewriter is removed
  useEffect(() => {
    let progressInterval: NodeJS.Timeout | undefined
    if (isPlaying && typingProgress < fullClassString.length) {
      progressInterval = setInterval(() => {
        setTypingProgress((prev) => {
          const nextProgress = prev + 1 // Simulate one character at a time
          if (nextProgress >= fullClassString.length) {
            clearInterval(progressInterval)
            return fullClassString.length
          }
          return nextProgress
        })
      }, 50) // Adjust speed as needed, e.g., 50ms per character
    } else if (progressInterval) { // Clear interval if not playing or typing complete
      clearInterval(progressInterval)
    }
    return () => clearInterval(progressInterval)
  }, [isPlaying, fullClassString, typingProgress]) // Rerun if isPlaying, fullClassString, or typingProgress changes

  // Optimized class matching using memoized positions
  useEffect(() => {
    const validClasses = classPositions.filter(({ end }) => typingProgress >= end).map(({ class: cls }) => cls)

    setAppliedClasses(validClasses)
  }, [typingProgress, classPositions])

  // Auto-advance sequences
  useEffect(() => {
    if (!isPlaying || isTransitioning) return

    if (typingProgress >= fullClassString.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentSequence((prev) => (prev + 1) % demoSequences.length)
          setIsTransitioning(false)
        }, 300)
      }, 1000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [typingProgress, fullClassString.length, isPlaying, isTransitioning])

  // Handle single/double click
  const handleContainerClick = useCallback(() => {
    setClickCount((prev) => prev + 1)

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current)
    }

    clickTimeoutRef.current = setTimeout(() => {
      if (clickCount === 1) {
        setIsPlaying(!isPlaying)
      } else if (clickCount >= 2) {
        setCurrentSequence(0)
        setAppliedClasses([])
        setTypingProgress(0)
        setIsPlaying(true)
      }
      setClickCount(0)
    }, 250)
  }, [clickCount, isPlaying])

  const handleSequenceChange = useCallback((index: number) => {
    setCurrentSequence(index)
    setIsPlaying(true)
  }, [])

  // Optimized progress handler - no longer needed as child callback
  // const handleTypewriterProgress = useCallback((currentLength: number) => {
  //   setTypingProgress(currentLength)
  // }, [])

  const progressPercentage = useMemo(
    () => Math.min((typingProgress / fullClassString.length) * 100, 100),
    [typingProgress, fullClassString.length],
  )

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Demo Info */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-foreground">{currentDemo.name}</h3>
        <p className="text-sm text-muted-foreground">{currentDemo.description}</p>
      </div>

      {/* Interactive Instructions */}
      <div className="text-center text-xs text-muted-foreground">
        <p>Click to {isPlaying ? "pause" : "play"} • Double-click to reset</p>
      </div>

      {/* Sequence Selector */}
      <div className="flex justify-center space-x-2">
        {demoSequences.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSequenceChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSequence ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Live Preview - Redesigned to match the image */}
      <div
        className={`transition-all duration-300 cursor-pointer ${isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
        onClick={handleContainerClick}
      >
        <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
          {/* Header bar with colored dots */}
          <div className="bg-[#e2e8f0] px-4 py-3 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-[#ff6b6b] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffd93d] rounded-full"></div>
              <div className="w-3 h-3 bg-[#6bff8b] rounded-full"></div>
            </div>
          </div>

          {/* Content area */}
          <div className="bg-white p-8 flex items-center justify-center min-h-[200px]">
            <DynamicElement
              appliedClasses={appliedClasses}
              componentType={currentDemo.component}
            >
              {currentDemo.starter_component_jsx || (currentDemo.component === "button" ? "Click Me" : "Your Box")}
            </DynamicElement>
          </div>

          {/* Progress footer */}
          <div className="bg-[#f1f5f9] px-6 py-4 flex items-center justify-between">
            <span className="text-[#64748b] font-medium">Progress</span>
            <span className="text-[#64748b] font-medium">
              {appliedClasses.length}/{currentDemo.classes.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="bg-[#e2e8f0] h-2">
            <div
              className="bg-primary h-2 transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Code Window */}
      <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-slate-300">tailwind-classes.txt</span>
          </div>
          <div className="text-xs text-slate-400">
            {appliedClasses.length}/{currentDemo.classes.length} classes applied
          </div>
        </div>

        <div className="p-4 min-h-[80px] flex items-center">
          <div className="font-mono text-sm text-green-400 w-full">
            <span className="break-all">
              {fullClassString.slice(0, typingProgress)}
              {/* Show cursor if playing and not yet complete, or if paused */}
              {(isPlaying && typingProgress < fullClassString.length) || !isPlaying ? (
                <span className="animate-pulse">_</span>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

SequentialLiveDemo.displayName = "SequentialLiveDemo"
```

### landing/testimonials-section.tsx
```tsx
"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content:
      "Corewind finally made Tailwind click for me! The interactive lessons are a game-changer. I went from confused to confident.",
    author: "A. Learner",
    role: "Frontend Developer",
  },
  {
    content:
      "I actually look forward to practicing Tailwind now. The explanations are so clear, and seeing instant results is addictive!",
    author: "Future Fan",
    role: "UI Designer",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Learners Like You</h2>
            <p className="text-xl text-muted-foreground">Real feedback from real developers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-300 animate-fade-in stagger-${index + 1}`}
              >
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-6" />
                  <blockquote className="text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

### layout/header.tsx
```tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu, X, ChevronDown } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModuleDropdownOpen, setIsModuleDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isLandingPage = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Corewind</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/learn" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Learn
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Dashboard
          </Link>

          {/* Module Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsModuleDropdownOpen(!isModuleDropdownOpen)}
            >
              Roadmaps <ChevronDown className="w-4 h-4" />
            </button>

            {isModuleDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
                <Link
                  href="/roadmap/module-one"
                  className="block px-4 py-2 hover:bg-muted transition-colors"
                  onClick={() => setIsModuleDropdownOpen(false)}
                >
                  Module 1: Core Concepts
                </Link>
                <Link
                  href="/roadmap/module-two"
                  className="block px-4 py-2 hover:bg-muted transition-colors"
                  onClick={() => setIsModuleDropdownOpen(false)}
                >
                  Module 2: Typography
                </Link>
                <Link
                  href="/roadmap/module-three"
                  className="block px-4 py-2 hover:bg-muted transition-colors"
                  onClick={() => setIsModuleDropdownOpen(false)}
                >
                  Module 3: Flexbox
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/instant-learning">
            <AnimatedButton size="sm" className="rounded-[25px]">
              <div className="flex flex-col items-center text-xs">
                <span>Get Started</span>
                <span className="text-[10px] opacity-75 font-normal">No sign up required</span>
              </div>
            </AnimatedButton>
          </Link>
          <button className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-[25px] hover:bg-primary hover:text-primary-foreground transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-[25px] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/learn"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/dashboard"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>

            {/* Mobile Roadmap Links */}
            <div className="pl-4 space-y-2 border-l-2 border-border/50">
              <p className="text-sm font-medium text-foreground">Roadmaps</p>
              <Link
                href="/roadmap/module-one"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Module 1: Core Concepts
              </Link>
              <Link
                href="/roadmap/module-two"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Module 2: Typography
              </Link>
              <Link
                href="/roadmap/module-three"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Module 3: Flexbox
              </Link>
            </div>

            <div className="pt-4 space-y-2">
              <Link href="/instant-learning" onClick={() => setIsMenuOpen(false)}>
                <AnimatedButton size="sm" className="w-full rounded-[25px]">
                  <div className="flex flex-col items-center text-xs">
                    <span>Get Started</span>
                    <span className="text-[10px] opacity-75 font-normal">No sign up required</span>
                  </div>
                </AnimatedButton>
              </Link>
              <button
                className="w-full px-4 py-2 text-sm font-medium text-primary border border-primary rounded-[25px] hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
```

### ui/animated-button.tsx
```tsx
"use client"

import type React from "react"
import { useState } from "react"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  success?: boolean
  children: React.ReactNode
}

export function AnimatedButton({
  variant = "primary",
  size = "md",
  loading = false,
  success = false,
  children,
  className = "",
  onClick,
  ...props
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = "relative overflow-hidden font-medium transition-all duration-200 button-press rounded-[25px]"

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover-glow",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    onClick?.(e)
  }

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${success ? "animate-pulse-success" : ""}
        ${isPressed ? "scale-95" : ""}
        ${loading ? "cursor-not-allowed opacity-70" : ""}
        ${className}
      `}
      onClick={handleClick}
      disabled={loading || props.disabled}
      {...props}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 overflow-hidden rounded-inherit">
        <span className="absolute inset-0 bg-white/20 transform scale-0 rounded-full transition-transform duration-300 group-active:scale-100" />
      </span>

      {/* Content */}
      <span className="relative flex items-center justify-center space-x-2">
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </span>
    </button>
  )
}
```

### ui/animated-card.tsx
```tsx
"use client"

import type React from "react"
import { useState } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  clickable?: boolean
  delay?: number
}

export function AnimatedCard({
  children,
  className = "",
  hover = true,
  clickable = false,
  delay = 0,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`
        card-base animate-fade-in
        ${hover ? "hover-lift" : ""}
        ${clickable ? "cursor-pointer" : ""}
        ${isHovered && hover ? "border-primary/50" : ""}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
```

### ui/animated-path-text.tsx
```tsx
"use client"

import { type RefObject, useEffect, useRef } from "react"
import { useScroll, type UseScrollOptions, useTransform } from "motion/react"

type PreserveAspectRatioAlign =
  | "none"
  | "xMinYMin"
  | "xMidYMin"
  | "xMaxYMin"
  | "xMinYMid"
  | "xMidYMid"
  | "xMaxYMid"
  | "xMinYMax"
  | "xMidYMax"
  | "xMaxYMax"

type PreserveAspectRatioMeetOrSlice = "meet" | "slice"

type PreserveAspectRatio =
  | PreserveAspectRatioAlign
  | `${Exclude<PreserveAspectRatioAlign, "none">} ${PreserveAspectRatioMeetOrSlice}`

interface AnimatedPathTextProps {
  // Path properties
  path: string
  pathId?: string
  pathClassName?: string
  preserveAspectRatio?: PreserveAspectRatio
  showPath?: boolean

  // SVG properties
  width?: string | number
  height?: string | number
  viewBox?: string
  svgClassName?: string

  // Text properties
  text: string
  textClassName?: string
  textAnchor?: "start" | "middle" | "end"

  // Animation properties
  animationType?: "auto" | "scroll"

  // Animation properties if animationType is auto
  duration?: number
  repeatCount?: number | "indefinite"
  easingFunction?: {
    calcMode?: string
    keyTimes?: string
    keySplines?: string
  }

  // Scroll animation properties if animationType is scroll
  scrollContainer?: RefObject<HTMLElement>
  scrollOffset?: UseScrollOptions["offset"]
  scrollTransformValues?: [number, number]
}

const AnimatedPathText = ({
  // Path defaults
  path,
  pathId,
  pathClassName,
  preserveAspectRatio = "xMidYMid meet",
  showPath = false,

  // SVG defaults
  width = "100%",
  height = "100%",
  viewBox = "0 0 100 100",
  svgClassName,

  // Text defaults
  text,
  textClassName,
  textAnchor = "start",

  // Animation type
  animationType = "auto",

  // Animation defaults
  duration = 4,
  repeatCount = "indefinite",

  easingFunction = {},

  // Scroll animation defaults
  scrollContainer,
  scrollOffset = ["start end", "end end"],
  scrollTransformValues = [0, 100],
}: AnimatedPathTextProps) => {
  const container = useRef<HTMLDivElement>(null)
  const textPathRefs = useRef<SVGTextPathElement[]>([])

  // naive id for the path. you should rather use yours :)
  const id = pathId || `animated-path-${Math.random().toString(36).substring(7)}`

  const { scrollYProgress } = useScroll({
    container: scrollContainer || container,
    offset: scrollOffset,
  })

  const t = useTransform(scrollYProgress, [0, 1], scrollTransformValues)

  useEffect(() => {
    // Re-initialize scroll handler when container ref changes
    const handleChange = (e: number) => {
      textPathRefs.current.forEach((textPath) => {
        if (textPath) {
          textPath.setAttribute("startOffset", `${t.get()}%`)
        }
      })
    }

    scrollYProgress.on("change", handleChange)

    return () => {
      scrollYProgress.clearListeners()
    }
  }, [scrollYProgress, t])

  const animationProps =
    animationType === "auto"
      ? {
          from: "0%",
          to: "100%",
          begin: "0s",
          dur: `${duration}s`,
          repeatCount: repeatCount,
          ...(easingFunction && easingFunction),
        }
      : null

  return (
    <svg
      className={svgClassName}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
    >
      <path id={id} className={pathClassName} d={path} stroke={showPath ? "currentColor" : "none"} fill="none" />

      {/* First text element */}
      <text textAnchor={textAnchor} fill="currentColor">
        <textPath
          className={textClassName}
          href={`#${id}`}
          startOffset={"0%"}
          ref={(ref) => {
            if (ref) textPathRefs.current[0] = ref
          }}
        >
          {animationType === "auto" && <animate attributeName="startOffset" {...animationProps} />}
          {text}
        </textPath>
      </text>

      {/* Second text element (offset to hide the jump) */}
      {animationType === "auto" && (
        <text textAnchor={textAnchor} fill="currentColor">
          <textPath
            className={textClassName}
            href={`#${id}`}
            startOffset={"-100%"}
            ref={(ref) => {
              if (ref) textPathRefs.current[1] = ref
            }}
          >
            {animationType === "auto" && (
              <animate attributeName="startOffset" {...animationProps} from="-100%" to="0%" />
            )}
            {text}
          </textPath>
        </text>
      )}
    </svg>
  )
}

export default AnimatedPathText
```

### ui/animated-progress.tsx
```tsx
"use client"

import { useEffect, useState } from "react"

interface AnimatedProgressProps {
  value: number
  max?: number
  className?: string
  showPercentage?: boolean
  color?: "primary" | "success" | "warning"
}

export function AnimatedProgress({
  value,
  max = 100,
  className = "",
  showPercentage = false,
  color = "primary",
}: AnimatedProgressProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value)
    }, 100)

    return () => clearTimeout(timer)
  }, [value])

  const percentage = Math.min((animatedValue / max) * 100, 100)

  const colorClasses = {
    primary: "bg-primary",
    success: "bg-green-500",
    warning: "bg-yellow-500",
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {showPercentage && (
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span className="font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="progress-bar relative overflow-hidden">
        <div
          className={`progress-fill animate-progress ${colorClasses[color]} relative`}
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}
```

### ui/aurora-text.tsx
```tsx
"use client"

import type React from "react"
import { memo } from "react"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"], // Enhanced gradient with purple, teal, green, amber, and red
    speed = 1,
  }: AuroraTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    }

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    )
  },
)

AuroraText.displayName = "AuroraText"
```

### ui/button.tsx
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### ui/card.tsx
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

### ui/enhanced-text-highlighter.tsx
```tsx
"use client"

import React, { useState, useEffect, useRef } from "react"
import { SvgText } from "@/components/ui/svg-text"

interface EnhancedTextHighlighterProps {
  text: string | React.ReactNode
  highlightColor?: string
  textColor?: string
  className?: string
  animationDuration?: number
  delay?: number
  onAnimationComplete?: () => void
  highlightWidth?: string
  highlightHeight?: string
  highlightOffset?: string
  highlightRadius?: string
  highlightOpacity?: string
  animated?: boolean
  children?: React.ReactNode
}

export function EnhancedTextHighlighter({
  text,
  highlightColor = "bg-primary/20",
  textColor = "text-foreground",
  className = "",
  animationDuration = 1000,
  delay = 0,
  onAnimationComplete,
  highlightWidth = "100%",
  highlightHeight = "0.6em",
  highlightOffset = "0.1em",
  highlightRadius = "0.25em",
  highlightOpacity = "0.7",
  animated = true,
  children,
}: EnhancedTextHighlighterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)

      if (animated) {
        const animationTimer = setTimeout(() => {
          setIsAnimated(true)
          if (onAnimationComplete) onAnimationComplete()
        }, animationDuration)

        return () => clearTimeout(animationTimer)
      } else {
        setIsAnimated(true)
        if (onAnimationComplete) onAnimationComplete()
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, animationDuration, onAnimationComplete, animated])

  // Check if text is a React element or string
  const isReactElement = React.isValidElement(text)
  const containsSvg = typeof text === "string" && text.includes("<svg")

  return (
    <span
      ref={containerRef}
      className={`relative inline-block ${textColor} ${className}`}
      style={{ whiteSpace: "pre-wrap" }}
    >
      {/* Highlight background */}
      <span
        className={`absolute ${highlightColor} ${animated ? "transition-all duration-700 ease-out" : ""}`}
        style={{
          left: 0,
          bottom: highlightOffset,
          height: highlightHeight,
          width: isVisible ? highlightWidth : "0%",
          borderRadius: highlightRadius,
          opacity: isAnimated ? highlightOpacity : "0",
          zIndex: -1,
          transformOrigin: "left",
        }}
      />

      {/* Text content */}
      {isReactElement ? text : containsSvg ? <SvgText>{text}</SvgText> : <span>{text}</span>}

      {children}
    </span>
  )
}
```

### ui/error-boundary.tsx
```tsx
"use client"

import type React from "react"
import { Component, type ReactNode } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Component Error:", error, errorInfo)
    this.setState({ errorInfo })
    this.props.onError?.(error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg max-w-md mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h3 className="text-red-800 font-semibold">Something went wrong</h3>
          </div>
          <p className="text-red-600 text-sm mb-4">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="mb-4">
              <summary className="text-xs text-red-700 cursor-pointer">Error Details</summary>
              <pre className="text-xs text-red-600 mt-2 overflow-auto">
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={this.handleReset}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
```

### ui/staggered-container.tsx
```tsx
"use client"

import React, { memo } from "react"

interface StaggeredContainerProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const StaggeredContainer = memo(({ children, delay = 100, className = "" }: StaggeredContainerProps) => {
  return (
    <div className={`stagger-container ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * delay}ms` }}>
          {child}
        </div>
      ))}
    </div>
  )
})

StaggeredContainer.displayName = "StaggeredContainer"
```

### ui/svg-text.tsx
```tsx
"use client"

import type React from "react"
import { memo, useMemo } from "react"

interface SvgTextProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const SvgTextComponent: React.FC<SvgTextProps> = ({ children, className = "", style = {} }) => {
  const processedContent = useMemo(() => {
    if (typeof children === "string") {
      // Check if the string contains SVG
      if (children.includes("<svg")) {
        return <span dangerouslySetInnerHTML={{ __html: children }} />
      }
      return children
    }
    return children
  }, [children])

  return (
    <span className={`inline-flex items-center gap-1 ${className}`} style={style}>
      {processedContent}
    </span>
  )
}

export const SvgText = memo(SvgTextComponent)
```

### ui/switch.tsx
```tsx
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

### ui/toast.tsx
```tsx
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

### ui/toaster.tsx
```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

### ui/use-mobile.tsx
```tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
```

### ui/use-toast.ts
```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```

## hooks/

### use-toast.ts
```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```

## lib/

### curriculum/module1.ts
```ts
export const curriculumModule1 = [
  {
    id: "module-1-box-basics", // Shorter main ID
    main_title: "📦 Box Basics", // Concise main title with emoji
    secondary_title: "Your First Steps in Web Styling - Understanding Space & Color", // Existing title as secondary
    difficulty: "Absolute Beginner",
    description:
      "Welcome to web styling! 🖼️ Let's learn how to give simple shapes (boxes) size, color, and spacing. Think of it like digital drawing and coloring, no experience needed!",
    lessons: [
      {
        id: "m1-l1-width", // Shorter lesson ID
        main_title: "📏 Setting Width",
        secondary_title: "Sizing Your First Box - Understanding Width",
        difficulty_level: "absolute_beginner",
        focus_concept:
          "Understanding 'width' as a dimension and how Tailwind's w-{number} controls it. Introduction to Tailwind's unit system.",
        instruction:
          "Web pages use **pixels (px)** for size. Let's make this box **128 pixels wide**. In Tailwind, add the class `w-32` to do this. (The gray background and initial height are already set up for you 👍).",
        starter_component_jsx: '<div class="h-16 bg-slate-200"></div>',
        target_classes: ["w-32"],
        explanation: {
          intro:
            "Imagine your screen is a grid of tiny lights 💡 – these are pixels! '128 pixels wide' means it spans 128 of these dots horizontally.",
          class_details: [
            {
              className: "w-32",
              css_equivalent: "width: 8rem; /* 128px */",
              description:
                "Makes the box 128px wide. Tailwind's magic rule for these numbers: **Tailwind Number * 4 = Pixels (px)**. So, `w-32` is `32 * 4px = 128px`.",
            },
          ],
          key_takeaway: "`w-{number}` controls width. Pixel width = Tailwind Number * 4.",
          expert_tip:
            "Exact pixel sizes are a start, but soon we'll explore responsive sizes that adapt to different screens! 📱💻",
        },
        hint: "To get 128 pixels wide: `128 / 4 = ?`. Use this number in your `w-` class.",
      },
      {
        id: "m1-l2-height",
        main_title: "📐 Setting Height",
        secondary_title: "Sizing Your First Box - Understanding Height",
        difficulty_level: "absolute_beginner",
        focus_concept: "Understanding 'height' and how Tailwind's h-{number} controls it.",
        instruction:
          "Our box is already 128px wide (`w-32`) and gray. Now, let's make it **128 pixels tall** by adding `h-32`.",
        starter_component_jsx: '<div class="w-32 bg-slate-200"></div>',
        target_classes: ["h-32"],
        explanation: {
          intro: "Height measures top-to-bottom, also in pixels. Let's make our box a perfect square!",
          class_details: [
            {
              className: "h-32",
              css_equivalent: "height: 8rem; /* 128px */",
              description:
                "Makes the box 128px tall. Same rule: **Tailwind Number * 4 = Pixels (px)**. So, `h-32` means `32 * 4px = 128px`.",
            },
          ],
          key_takeaway: "`h-{number}` controls height, using the same 'Multiply by 4' rule.",
          expert_tip:
            "Sometimes height is set by content (`h-auto`) or fills available space (`h-full`). More on these later!",
        },
        hint: "Same logic as width! For 128 pixels tall, what `h-` class uses the 'Multiply by 4' rule?",
      },
      {
        id: "m1-l3-background-color",
        main_title: "🎨 Background Color",
        secondary_title: "Adding Color - Backgrounds & Shades",
        difficulty_level: "absolute_beginner",
        focus_concept: "bg-{color}-{shade} and understanding color shades.",
        instruction: "Our box is now a 128px square (`w-32 h-32`). Let's give it a blue background! Add `bg-blue-500`.",
        starter_component_jsx: '<div class="w-32 h-32"></div>',
        target_classes: ["bg-blue-500"],
        explanation: {
          intro: "Color makes web pages pop! ✨ `bg-` classes change the background color.",
          class_details: [
            {
              className: "bg-blue-500",
              css_equivalent: "background-color: #3b82f6; /* Approx. */",
              description:
                "Sets a blue background. Tailwind colors have shade numbers like `100` (light) to `900` (dark). `500` is a nice, balanced mid-tone.",
            },
          ],
          key_takeaway:
            "`bg-{colorName}-{shadeNumber}` sets background color. Lower shades = lighter, higher shades = darker.",
          expert_tip: "Check Tailwind's official docs for the full, beautiful color palette! 🌈",
        },
        hint: "Class starts with `bg-`, then color name, then `-`, then shade (e.g., 500).",
      },
      {
        id: "m1-l4-padding-all",
        main_title: "🛋️ Uniform Padding",
        secondary_title: "Breathing Room Inside - All Sides",
        difficulty_level: "absolute_beginner",
        focus_concept: "Conceptual understanding of padding and p-{number} for all sides.",
        instruction:
          "Our blue box (`w-32 h-32 bg-blue-500`) has text. It's a bit cramped! **Padding** adds 'cushioning' *inside*. Add 16 pixels of padding on all sides with `p-4`.",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center text-sm font-medium">TEXT</div>',
        target_classes: ["p-4"],
        explanation: {
          intro:
            "Padding is like the empty space inside a photo frame, around the photo. 🖼️ It gives content 'breathing room'.",
          class_details: [
            {
              className: "p-4",
              css_equivalent: "padding: 1rem; /* 16px */",
              description:
                "Adds 16px padding to all four sides (top, right, bottom, left). Rule: **Tailwind Number * 4 = Pixels (px)**, so `p-4` means `4 * 4px = 16px`.",
            },
          ],
          key_takeaway: "`p-{number}` adds space *inside* an element. Pixel amount = Tailwind Number * 4.",
          expert_tip: "Good padding is key to readable text and clean design. Don't skimp on it!",
        },
        hint: "For 16px padding (all sides), what `p-` class uses the 'Multiply by 4' rule?",
      },
      {
        id: "m1-l5-padding-xy",
        main_title: "↔️↕️ Axis Padding",
        secondary_title: "Targeted Inner Space - Padding X & Y Axes",
        difficulty_level: "easy",
        focus_concept: "Applying horizontal (px-{number}) and vertical (py-{number}) padding.",
        instruction:
          "Our blue box has uniform `p-4`. Let's change it: 32px padding horizontally (add `px-8`), and 16px vertically (add `py-4`). You'll need to *remove* the old `p-4` class first!",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center text-sm font-medium p-4">TEXT</div>',
        target_classes_to_remove: ["p-4"],
        target_classes: ["px-8", "py-4"],
        explanation: {
          intro:
            "Often, you want different padding for horizontal (↔️ left/right) and vertical (↕️ top/bottom) directions.",
          class_details: [
            {
              className: "px-8",
              css_equivalent: "padding-left: 2rem; padding-right: 2rem; /* 32px each */",
              description: "Applies `32px` padding left/right. 'x' = horizontal. (`8 * 4px = 32px`).",
            },
            {
              className: "py-4",
              css_equivalent: "padding-top: 1rem; padding-bottom: 1rem; /* 16px each */",
              description: "Applies `16px` padding top/bottom. 'y' = vertical. (`4 * 4px = 16px`).",
            },
          ],
          key_takeaway: "`px-{number}` for left/right padding; `py-{number}` for top/bottom. Great for buttons!",
          expert_tip: "If you need totally different padding on all four sides, we have utilities for that too!",
        },
        hint: "Remove `p-4`. Add two new classes: `px-` for horizontal, `py-` for vertical.",
      },
      {
        id: "m1-l6-padding-sides",
        main_title: "🎯 Single-Side Padding",
        secondary_title: "Pinpoint Inner Space - Specific Sides",
        difficulty_level: "easy",
        focus_concept: "Applying padding to individual sides: pt, pr, pb, pl.",
        instruction:
          "Our blue box has `px-8 py-4`. For max control, let's set padding for each side: 8px top (`pt-2`), 16px right (`pr-4`), 24px bottom (`pb-6`), and 32px left (`pl-8`). Remove `px-8` and `py-4` first.",
        starter_component_jsx:
          '<div class="w-32 h-32 bg-blue-500 text-white flex items-center justify-center text-xs font-medium px-8 py-4">TEXT</div>',
        target_classes_to_remove: ["px-8", "py-4"],
        target_classes: ["pt-2", "pr-4", "pb-6", "pl-8"],
        explanation: {
          intro: "For ultimate control, target padding on each side: Top (t), Right (r), Bottom (b), Left (l).",
          class_details: [
            { className: "pt-2", description: "Padding Top: `2*4px=8px`." },
            { className: "pr-4", description: "Padding Right: `4*4px=16px`." },
            { className: "pb-6", description: "Padding Bottom: `6*4px=24px`." },
            { className: "pl-8", description: "Padding Left: `8*4px=32px`." },
          ],
          key_takeaway: "Use `pt-`, `pr-`, `pb-`, `pl-` for specific side padding.",
          expert_tip:
            "While powerful, use symmetrical padding (`p-`, `px-`, `py-`) when possible for consistency. These are for unique cases.",
        },
        hint: "Remove `px-` & `py-`. Add four new classes: `pt-`, `pr-`, `pb-`, `pl-`.",
      },
      {
        id: "m1-l7-margin-all",
        main_title: "🌌 Uniform Margin",
        secondary_title: "Creating Outer Space - All Sides",
        difficulty_level: "easy",
        focus_concept: "Adding margin on all sides using m-{number} for space around an element.",
        instruction:
          "See the blue box and the gray box? They're touching! **Margin** is space *outside* a box. On the blue box (`w-24 h-24 bg-blue-500`), add a 16px margin on all sides with `m-4`. This will push it away.",
        starter_component_jsx:
          '<div class="flex items-center p-1 bg-slate-100"><div class="w-24 h-24 bg-slate-300"></div><div class="w-24 h-24 bg-blue-500"></div></div>',
        target_classes_applied_to_selector: ".bg-blue-500", // Target the blue box
        target_classes: ["m-4"], // Add m-4 to the blue box (its existing classes are fine)
        explanation: {
          intro:
            "Margin is like an invisible force field 🛡️ around an element, pushing other elements away. It's space *outside* its border.",
          class_details: [
            {
              className: "m-4",
              css_equivalent: "margin: 1rem; /* 16px */",
              description: "Adds `16px` margin to all four sides of the blue box. (`4 * 4px = 16px`).",
            },
          ],
          key_takeaway: "`m-{number}` creates uniform external spacing. Margin is outside, padding is inside!",
          expert_tip:
            "CSS has 'margin collapsing' for vertical margins, which can be tricky. Flexbox/Grid `gap` utilities often give more predictable spacing between items.",
        },
        hint: "`m-` for margin (outer space). `m-4` on the blue box will create space.",
      },
      {
        id: "m1-l8-margin-xy",
        main_title: "↔️↕️ Axis Margin",
        secondary_title: "Targeted Outer Space - Margin X & Y Axes",
        difficulty_level: "easy",
        focus_concept: "Applying horizontal (mx-{number}) and vertical (my-{number}) margin.",
        instruction:
          "On the blue box (`w-24 h-24 bg-blue-500`), let's set axis margins: 32px horizontally (add `mx-8`), and 8px vertically (add `my-2`).",
        starter_component_jsx:
          '<div class="flex flex-col items-center p-1 bg-slate-100"><div class="w-full h-4 bg-slate-300"></div><div class="flex items-center"><div class="w-4 h-24 bg-slate-300"></div><div class="w-24 h-24 bg-blue-500"></div><div class="w-4 h-24 bg-slate-300"></div></div><div class="w-full h-4 bg-slate-300"></div></div>',
        target_classes_applied_to_selector: ".bg-blue-500",
        target_classes: ["mx-8", "my-2"],
        explanation: {
          intro: "Just like padding, `mx-*` (horizontal ↔️) and `my-*` (vertical ↕️) apply margins along axes.",
          class_details: [
            { className: "mx-8", description: "`32px` margin left/right. (`8*4px=32px`)." },
            { className: "my-2", description: "`8px` margin top/bottom. (`2*4px=8px`)." },
          ],
          key_takeaway:
            "`mx-{number}` for horizontal, `my-{number}` for vertical margins. `mx-auto` is special for centering block items horizontally!",
          expert_tip:
            "`mx-auto` on a block element with a defined width will center it horizontally within its parent.",
        },
        hint: "Use `mx-` for left/right and `my-` for top/bottom margin on the blue box.",
      },
      {
        id: "m1-l9-borders",
        main_title: "🖼️ Adding Borders",
        secondary_title: "Defining the Edge - Border Width & Color",
        difficulty_level: "easy",
        focus_concept: "Applying borders using border-{width} and border-{color}-{shade}.",
        instruction:
          "Take a box (`w-32 h-32 bg-slate-100`). Give it a 2px wide solid red border. Add `border-2` for width and `border-red-500` for color.",
        starter_component_jsx: '<div class="w-32 h-32 bg-slate-100"></div>',
        target_classes: ["border-2", "border-red-500"], // Existing classes on starter are fine
        explanation: {
          intro: "Borders visually outline an element, sitting between its padding and margin. 📏",
          class_details: [
            {
              className: "border-2",
              css_equivalent: "border-width: 2px;",
              description: "Sets border width to 2px on all sides. Tailwind assumes `border-style: solid;`.",
            },
            {
              className: "border-red-500",
              css_equivalent: "border-color: #ef4444; /* Approx. */",
              description: "Sets border color using the same color/shade system as backgrounds.",
            },
          ],
          key_takeaway:
            "For a visible border, you need width (e.g., `border`, `border-2`) AND color (e.g., `border-slate-500`).",
          expert_tip:
            "You can add borders to individual sides: `border-t-2` (top), `border-b-4` (bottom), etc. Great for separators!",
        },
        hint: "Combine a border width (like `border-2`) and a border color (like `border-red-500`).",
      },
      {
        id: "m1-l10-border-radius",
        main_title: "✨ Rounded Corners",
        secondary_title: "Softening Edges - Border Radius",
        difficulty_level: "easy",
        focus_concept: "Rounding corners with rounded-{size/name}.",
        instruction:
          "Our box now has a red border (`w-32 h-32 bg-slate-100 border-2 border-red-500`). Let's make its corners nicely rounded. Add `rounded-lg`.",
        starter_component_jsx: '<div class="w-32 h-32 bg-slate-100 border-2 border-red-500"></div>',
        target_classes: ["rounded-lg"], // Add to existing classes
        explanation: {
          intro: "`border-radius` controls how 'round' an element's corners are, giving a softer look. 😊",
          class_details: [
            {
              className: "rounded-lg",
              css_equivalent: "border-radius: 0.5rem;",
              description:
                "Applies a 'large' border radius. Sizes: `rounded-sm` (small), `rounded` (default), `rounded-md` (medium), `rounded-lg` (large), up to `rounded-3xl`, and `rounded-full` (circle/oval).",
            },
          ],
          key_takeaway: "`rounded-{size}` applies border radius. `rounded-full` is fun for avatars! 👨‍💻",
          expert_tip: "Round individual corners like `rounded-tl-xl` (top-left extra large) for unique shapes.",
        },
        hint: "`rounded-lg` gives a nice, noticeable rounding. Try `rounded-full` to see an extreme!",
      },
      {
        id: "m1-l11-card-shell-recap",
        main_title: "🧱 Building a Card Shell",
        secondary_title: "Recap - Combining Box Model Properties",
        difficulty_level: "intermediate",
        focus_concept: "Combining multiple box model properties to create a common UI element shell.",
        instruction:
          "Let's build a basic 'card' shell by combining what we've learned! Add classes to make it: 256px wide (`w-64`), white background (`bg-white`), 16px all-sides padding (`p-4`), a light gray 1px border (`border border-slate-200`), medium rounded corners (`rounded-md`), and a subtle shadow (`shadow-md` - bonus!).",
        starter_component_jsx: '<div class=""></div>',
        target_classes: ["w-64", "bg-white", "p-4", "border", "border-slate-200", "rounded-md", "shadow-md"],
        explanation: {
          intro: "This lesson combines width, background, padding, border, and rounding to make a simple card. 🃏",
          class_details: [
            {
              className: "shadow-md",
              description: "(Bonus! 🎉) Adds a subtle `box-shadow` for a 'lifted' look. Shadows add depth!",
            },
          ],
          key_takeaway:
            "Real UIs are built by combining these fundamental properties. This card shell is a common pattern.",
          expert_tip:
            "Think in layers: base (size/bg), inner space (padding), edge (border/radius), effects (shadows). Consistency is key! 🔑",
        },
        hint: "Apply classes for: width, background, padding, border (both width & color!), rounding, and the shadow.",
      },
    ],
  },
]
```

### curriculum/module2.ts
```ts
export const curriculumModule2 = [
  {
    id: "module-2-typography-text",
    main_title: "✍️ Typography & Text Styling",
    secondary_title: "Making Words Look Great - Font Size, Weight, Color & Alignment",
    difficulty: "Beginner", // Overall difficulty for this module
    description:
      "Text is a huge part of any website! 📄 In this module, you'll learn how to control the appearance of your text using Tailwind CSS – from changing its size and boldness to setting colors and aligning it perfectly on the page.",
    lessons: [
      {
        id: "m2-l1-font-size",
        main_title: "🅰️ Font Size",
        secondary_title: "Controlling Text Size with `text-{size}`",
        difficulty_level: "absolute_beginner",
        focus_concept: "Using `text-{size}` utilities (e.g., `text-lg`, `text-xl`, `text-2xl`) to change font size.",
        instruction:
          "This text is a bit small. Let's make it larger! Add the class `text-xl` to make it 'extra large'. (It's inside a sized, colored box for context).",
        starter_component_jsx: '<div class="w-64 p-4 bg-slate-100"><p class="">Hello Tailwind!</p></div>', // Target is the <p> tag
        target_classes_applied_to_selector: "p", // Apply to the <p> tag within the starter
        target_classes: ["text-xl"],
        explanation: {
          intro:
            "Font size determines how big or small your text appears. Tailwind gives you easy classes to control this!",
          class_details: [
            {
              className: "text-xl",
              css_equivalent:
                "font-size: 1.25rem; /* Typically 20px */ line-height: 1.75rem; /* Tailwind also sets a matching line-height */",
              description:
                "Sets the font size to 'extra large'. Tailwind has a scale from `text-xs` (extra small) up to `text-9xl` (massive!). `text-base` is the default normal size (usually 16px).",
            },
          ],
          key_takeaway:
            "`text-{sizeName}` (e.g., `text-sm`, `text-lg`, `text-4xl`) changes font size. Tailwind also thoughtfully adjusts line height for readability.",
          expert_tip:
            "Consistent font scaling is key to good UI. Pick a few sizes from Tailwind's scale and use them consistently for headings, paragraphs, etc.",
        },
        hint: "Look for a `text-` class that means 'extra large'. `xl` is a common abbreviation!",
      },
      {
        id: "m2-l2-font-weight",
        main_title: "🏋️ Font Weight (Boldness)",
        secondary_title: "Making Text Bolder with `font-{weight}`",
        difficulty_level: "absolute_beginner",
        focus_concept: "Using `font-{weight}` utilities (e.g., `font-semibold`, `font-bold`) to control text boldness.",
        instruction:
          "Our 'Hello Tailwind!' text is now `text-xl`. Let's make it stand out more by making it **bold**. Add the class `font-bold`.",
        starter_component_jsx: '<div class="w-64 p-4 bg-slate-100"><p class="text-xl">Hello Tailwind!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["font-bold"],
        explanation: {
          intro:
            "Font weight controls how thick or thin the characters in your text appear. 'Bold' is a common font weight.",
          class_details: [
            {
              className: "font-bold",
              css_equivalent: "font-weight: 700;",
              description:
                "Makes the text bold (typically a weight of 700). Tailwind offers various weights like `font-thin` (100), `font-light` (300), `font-normal` (400 - default for paragraphs), `font-medium` (500), `font-semibold` (600), `font-bold` (700), `font-extrabold` (800), and `font-black` (900).",
            },
          ],
          key_takeaway: "`font-{weightName}` (e.g., `font-medium`, `font-bold`) controls the boldness of text.",
          expert_tip:
            "Use bold text sparingly for emphasis, like headings or important words. Too much bold text can be hard to read.",
        },
        hint: "The class to make text bold starts with `font-` and uses a common word for 'bold'.",
      },
      {
        id: "m2-l3-text-color",
        main_title: "🎨 Text Color",
        secondary_title: "Changing Text Color with `text-{color}-{shade}`",
        difficulty_level: "absolute_beginner",
        focus_concept: "Using `text-{color}-{shade}` utilities to change the color of text.",
        instruction:
          "Our text is `text-xl font-bold`. Now, let's change its color to a nice indigo. Add the class `text-indigo-600`.",
        starter_component_jsx:
          '<div class="w-64 p-4 bg-slate-100"><p class="text-xl font-bold">Hello Tailwind!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["text-indigo-600"],
        explanation: {
          intro:
            "You can color your text just like you color backgrounds! 🌈 This uses Tailwind's same great color palette.",
          class_details: [
            {
              className: "text-indigo-600",
              css_equivalent: "color: #4f46e5; /* Approx. indigo-600 */",
              description:
                "Sets the text color to a shade of indigo. The `text-{color}-{shade}` pattern is just like `bg-{color}-{shade}` but for text. `600` is a rich, fairly dark shade.",
            },
          ],
          key_takeaway:
            "`text-{colorName}-{shadeNumber}` changes text color. Remember, lower shade numbers are lighter, higher are darker.",
          expert_tip:
            "Ensure good contrast between your text color and background color for readability. Tools can help check WCAG accessibility contrast ratios.",
        },
        hint: "For text color, the class starts with `text-`, then the color name, then a hyphen, then the shade number.",
      },
      {
        id: "m2-l4-text-alignment",
        main_title: " सेंटर Text Alignment", // Hindi for Center - just for fun, can be English
        secondary_title: "Aligning Text with `text-{alignment}`",
        difficulty_level: "easy",
        focus_concept: "Using `text-left`, `text-center`, `text-right`, `text-justify` for text alignment.",
        instruction:
          "Our text (`text-xl font-bold text-indigo-600`) is currently aligned to the left by default. Let's **center it** within its box. Add the class `text-center`.",
        starter_component_jsx:
          '<div class="w-64 p-4 bg-slate-100"><p class="text-xl font-bold text-indigo-600">Hello Tailwind!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["text-center"],
        explanation: {
          intro:
            "Text alignment controls how text lines up within its container: left, center, right, or justified (like a newspaper column).",
          class_details: [
            {
              className: "text-center",
              css_equivalent: "text-align: center;",
              description: "Aligns the text to the center of its parent block-level container.",
            },
          ],
          key_takeaway:
            "`text-left` (default for LTR languages), `text-center`, `text-right`, and `text-justify` control text alignment.",
          expert_tip:
            "Centered text is good for short headings or special callouts. For longer paragraphs, `text-left` (or `text-right` for RTL languages) is usually more readable. `text-justify` can sometimes create awkward spacing between words.",
        },
        hint: "The class to center text is quite literal: `text-` followed by the word for 'center'.",
      },
      {
        id: "m2-l5-line-height",
        main_title: "↕️ Line Height (Leading)",
        secondary_title: "Controlling Space Between Lines with `leading-{name/number}`",
        difficulty_level: "easy",
        focus_concept: "Using `leading-{name/number}` utilities to adjust line height for better readability.",
        instruction:
          "We have a paragraph here. The default line height is okay, but let's make it a bit more spacious for easier reading. Add `leading-relaxed` to the paragraph.",
        starter_component_jsx:
          '<div class="w-96 p-4 bg-slate-100"><p class="text-base text-gray-700">This is a paragraph with multiple lines of text to demonstrate the effect of line height, also known as leading. Proper line height significantly improves the readability of longer text passages.</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["leading-relaxed"],
        explanation: {
          intro:
            "Line height (or 'leading' in typography terms) is the vertical distance between lines of text. Proper leading is crucial for readability. 📖",
          class_details: [
            {
              className: "leading-relaxed",
              css_equivalent: "line-height: 1.625;",
              description:
                "Applies a relaxed line height, which is `1.625` times the font size. Tailwind offers named leadings (`leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`) and numbered ones (`leading-3` to `leading-10` which correspond to fixed `rem` values).",
            },
          ],
          key_takeaway:
            "`leading-{name/number}` controls the space between lines of text. Named options are often good starting points.",
          expert_tip:
            "For body text, a line height of around 1.5 to 1.7 is generally considered comfortable. Too tight or too loose can hinder readability.",
        },
        hint: "Look for a `leading-` class that suggests a comfortable, 'relaxed' spacing.",
      },
      {
        id: "m2-l6-letter-spacing",
        main_title: "↔️ Letter Spacing (Tracking)",
        secondary_title: "Adjusting Space Between Characters with `tracking-{name}`",
        difficulty_level: "easy",
        focus_concept: "Using `tracking-{name}` utilities to adjust the spacing between letters.",
        instruction:
          "This heading text could use a little more 'air' between the letters for a stylish look. Add `tracking-tight` to make the letter spacing slightly tighter. (It already has size, weight and color).",
        starter_component_jsx:
          '<div class="w-auto p-4 bg-slate-100"><h1 class="text-3xl font-bold text-purple-700">STYLISH HEADING</h1></div>',
        target_classes_applied_to_selector: "h1",
        target_classes: ["tracking-tight"],
        explanation: {
          intro:
            "Letter spacing (or 'tracking') adjusts the horizontal space between characters in a block of text. It can be used for stylistic effect or to improve readability in some cases.",
          class_details: [
            {
              className: "tracking-tight",
              css_equivalent: "letter-spacing: -0.025em;",
              description:
                "Makes the letter spacing slightly tighter than normal. Tailwind offers `tracking-tighter`, `tracking-tight`, `tracking-normal` (default), `tracking-wide`, `tracking-wider`, `tracking-widest`.",
            },
          ],
          key_takeaway: "`tracking-{name}` controls the space between letters. Use subtly for effect.",
          expert_tip:
            "Tighter tracking is often used for large display headings for a compact look. Wider tracking can sometimes improve readability of uppercase text or small text, but use with caution as too much can make words fall apart.",
        },
        hint: "To make letter spacing tighter, use a `tracking-` class with a word that means 'tight'.",
      },
      {
        id: "m2-l7-text-decoration-transform",
        main_title: "💅 Text Styles: Decoration & Transform",
        secondary_title: "Underlines, Strikethroughs, and Text Casing",
        difficulty_level: "easy",
        focus_concept: "Using `underline`, `line-through`, `uppercase`, `lowercase`, `capitalize`.",
        instruction:
          "Let's style this 'Special Offer!' text. Make it **underlined** by adding `underline` and also transform it to **ALL CAPS** by adding `uppercase`.",
        starter_component_jsx:
          '<div class="p-4 bg-slate-100"><p class="text-xl font-semibold text-red-600">Special Offer!</p></div>',
        target_classes_applied_to_selector: "p",
        target_classes: ["underline", "uppercase"],
        explanation: {
          intro: "You can add decorations like underlines or change the casing of text for emphasis or style.",
          class_details: [
            {
              className: "underline",
              css_equivalent: "text-decoration-line: underline;",
              description: "Adds an underline to the text.",
            },
            {
              className: "uppercase",
              css_equivalent: "text-transform: uppercase;",
              description: "Transforms all characters in the text to uppercase.",
            },
          ],
          key_takeaway:
            "`underline`, `line-through` (strikethrough), `no-underline` for decorations. `uppercase`, `lowercase`, `capitalize` for text casing.",
          expert_tip:
            "Overuse of `uppercase` can make text harder to read. `capitalize` is good for titles where you want each word to start with a capital letter.",
        },
        hint: "The classes are very direct: one for 'underline' and one for 'uppercase'.",
      },
      {
        id: "m2-l8-typography-recap",
        main_title: "📝 Typography Recap: Styled Link",
        secondary_title: "Combining Typographic Utilities",
        difficulty_level: "intermediate",
        focus_concept: "Applying multiple typography utilities to style a common element like a link.",
        instruction:
          "Let's style this link to make it look more appealing. Add classes to make it: `text-lg`, `font-medium`, `text-blue-600`, and `hover:underline` (so it underlines only on hover).",
        starter_component_jsx: '<div class="p-4 bg-slate-100"><a href="#" class="">Visit Our Site</a></div>',
        target_classes_applied_to_selector: "a",
        target_classes: ["text-lg", "font-medium", "text-blue-600", "hover:underline"],
        explanation: {
          intro:
            "Now let's combine several typography utilities to style a common web element: a hyperlink (<a> tag). Good link styling improves usability! 🔗",
          class_details: [
            // Individual classes already explained. Focus on combination.
            {
              className: "hover:underline",
              description:
                "This is a state variant! It applies `underline` only when the mouse pointer is hovering over the link. We'll learn more about states like `hover:` soon.",
            },
          ],
          key_takeaway:
            "Multiple typography classes are often combined to achieve the desired look for text elements. State variants like `hover:` add interactivity.",
          expert_tip:
            "For links, ensure they are visually distinct from normal text (e.g., different color and/or underline) and have a clear hover state so users know they are interactive.",
        },
        hint: "You'll need classes for size, weight, color, and the special hover underline effect.",
      },
    ],
  },
]
```

### curriculum/module3.ts
```ts
export const curriculumModule3 = [
  {
    id: "module-3-flexbox-intro",
    main_title: "↔️ Flexbox Intro: Rows & Columns",
    secondary_title: "Arranging Items Neatly - Your First Steps with Flexbox",
    difficulty: "Beginner", // Overall difficulty for this introductory Flexbox module
    description:
      "Web pages often need items arranged side-by-side or stacked neatly. Flexbox is a powerful CSS tool for this! Ordnung In this module, you'll learn the basics of using Tailwind's Flexbox utilities to create simple row and column layouts.",
    lessons: [
      {
        id: "m3-l1-what-is-flex",
        main_title: "➡️ Display: Flex",
        secondary_title: "Turning a Container into a Flex Row",
        difficulty_level: "absolute_beginner", // Introducing a brand new layout concept
        focus_concept:
          "Understanding `display: flex` and how the `flex` utility arranges direct children in a row by default.",
        instruction:
          "Look at the three colored boxes below. They are stacked because `div` elements are 'block' by default. To arrange them **side-by-side in a row**, add the class `flex` to their **gray parent container**.",
        starter_component_jsx: `
          <div class="p-4 bg-slate-200 rounded"> {/* This is the PARENT container */}
            <div class="w-20 h-20 bg-red-400 text-white flex items-center justify-center m-1">1</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center m-1">2</div>
            <div class="w-20 h-20 bg-blue-400 text-white flex items-center justify-center m-1">3</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200", // Target the gray parent div
        target_classes: ["flex"],
        explanation: {
          intro:
            "Flexbox is a layout mode that makes it easy to arrange items within a container. Think of it like a smart way to line up your building blocks! 🧱",
          class_details: [
            {
              className: "flex",
              css_equivalent: "display: flex;",
              description:
                "This magical class transforms the gray container into a 'flex container'. By default, a flex container arranges its direct children (the colored boxes) in a single horizontal row from left to right.",
            },
          ],
          key_takeaway: "Adding `flex` to a parent element makes its direct children line up horizontally in a row.",
          expert_tip:
            "Flexbox primarily deals with layout in one dimension at a time – either as a row or as a column. For two-dimensional layouts (rows AND columns simultaneously), CSS Grid is often used (we'll cover that later!).",
        },
        hint: "The class you need is simply `flex`. Apply it to the gray div that holds the colored boxes.",
      },
      {
        id: "m3-l2-flex-direction-column",
        main_title: "⬇️ Flex Direction: Column",
        secondary_title: "Stacking Flex Items Vertically",
        difficulty_level: "easy",
        focus_concept: "Using `flex-col` to change the main axis of a flex container to vertical.",
        instruction:
          "Our three boxes are now in a row thanks to `flex` on their parent. To stack them **vertically in a column** instead, add the class `flex-col` to the gray parent container.",
        starter_component_jsx: `
          <div class="flex p-4 bg-slate-200 rounded"> {/* Parent already has flex */}
            <div class="w-20 h-20 bg-red-400 text-white flex items-center justify-center m-1">1</div>
            <div class="w-20 h-20 bg-green-400 text-white flex items-center justify-center m-1">2</div>
            <div class="w-20 h-20 bg-blue-400 text-white flex items-center justify-center m-1">3</div>
          </div>`,
        target_classes_applied_to_selector: ".bg-slate-200",
        target_classes: ["flex-col"], // User adds this, starter already has "flex"
        explanation: {
          intro:
            "While `flex` defaults to a row, you can easily change the direction! This is called changing the 'main axis'.",
          class_details: [
            {
              className: "flex-col",
              css_equivalent: "flex-direction: column;",
              description:
                "This tells the flex container to arrange its children vertically, from top to bottom. `col` is short for 'column'.",
            },
          ],
          key_takeaway:
            "`flex-col` makes flex items stack vertically. `flex-row` (which is the default if you just use `flex`) makes them go horizontally.",
          expert_tip: "You can also reverse the order with `flex-row-reverse` or `flex-col-reverse`!",
        },
        hint: "To make flex items arrange in a column, add `flex-col` to the parent that already has `flex`.",
      },
      {
        id: "m3-l3-justify-content-start-end-center",
        main_title: "↔️ Justify Content: Main Axis",
        secondary_title: "Aligning Items Along the Main Flow (Row)",
        difficulty_level: "easy",
