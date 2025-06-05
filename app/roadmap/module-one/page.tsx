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
