"use client";
import { LinearLandingPage } from "@/components/landing/linear-landing-page"
import { ErrorBoundary } from "@/components/ui/error-boundary"

export default function HomePage() {
  return (
    <ErrorBoundary>
      <LinearLandingPage />
    </ErrorBoundary>
  )
}
