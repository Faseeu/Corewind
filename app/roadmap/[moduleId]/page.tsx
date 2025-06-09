"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, ChevronRight, Clock, LayoutGrid } from "lucide-react" // Added LayoutGrid for lesson count
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { curriculum } from "@/lib/curriculum"

interface ModulePageProps {
  params: {
    moduleId: string
  }
}

export default function ModuleRoadmapPage({ params }: ModulePageProps) {
  const { moduleId } = params
  const moduleData = curriculum.find((module) => module.id === moduleId)

  if (!moduleData) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Module Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn&apos;t find the module titled &quot;{moduleId}&quot;. Please check the URL or go back.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center text-primary hover:text-primary/80 rounded-[25px] border border-primary/20 py-2 px-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  const firstLessonId = moduleData.lessons.length > 0 ? moduleData.lessons[0].id : null

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 rounded-[25px] border border-border py-2 px-4 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{moduleData.main_title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {moduleData.secondary_title || moduleData.description}
              </p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl">{moduleData.description}</p>
        </div>

        {/* Module Metadata */}
        <div className="mb-10 bg-muted/50 p-6 rounded-[25px] flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-md">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-semibold">Difficulty:</span>
              <span className="text-muted-foreground">{moduleData.difficulty || "Not specified"}</span>
            </div>
            <div className="flex items-center gap-2 text-md">
              <LayoutGrid className="w-5 h-5 text-primary" />
              <span className="font-semibold">Lessons:</span>
              <span className="text-muted-foreground">{moduleData.lessons.length}</span>
            </div>
            {/* Add other metadata here if available in moduleData, e.g. estimated time, tags */}
        </div>


        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleData.lessons.map((lesson, index) => (
            <AnimatedCard
              key={lesson.id}
              className="p-0 overflow-hidden hover:shadow-xl hover:border-primary/60" // Adjusted padding and hover effect
              hover={true}
              clickable={true}
              delay={index * 0.05} // Slightly faster animation
            >
              <Link href={`/learn/${moduleId}/${lesson.id}`} className="block h-full">
                <div className="flex flex-col h-full">
                  <div className="p-6"> {/* Content padding */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10"> {/* Consistent icon background */}
                        <BookOpen className="w-6 h-6 text-primary" /> {/* Slightly larger icon */}
                      </div>
                      {/* Removed completion status icon */}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{lesson.main_title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {/* line-clamp to limit description length */}
                        {lesson.secondary_title || lesson.focus_concept || "No description available."}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-border p-4 bg-muted/30"> {/* Footer section for button */}
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-primary font-medium">View Lesson</span>
                        <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* Start Learning CTA */}
        {firstLessonId && (
          <div className="mt-12 text-center">
            <Link href={`/learn/${moduleId}/${firstLessonId}`}>
              <AnimatedButton size="lg" className="rounded-[25px] shadow-lg hover:shadow-primary/30">
                <div className="flex flex-col items-center px-4 py-1">
                  <span>Start Learning Module</span>
                  <span className="text-xs opacity-80 font-normal">
                    Begin with &quot;{moduleData.lessons[0].main_title}&quot;
                  </span>
                </div>
              </AnimatedButton>
            </Link>
          </div>
        )}
        {!firstLessonId && moduleData.lessons.length === 0 && (
            <div className="mt-12 text-center">
                <p className="text-muted-foreground">No lessons available in this module yet.</p>
            </div>
        )}
      </div>
    </div>
  )
}
