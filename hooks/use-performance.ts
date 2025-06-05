"use client"

import { useEffect, useRef, useState } from "react"

interface PerformanceMetrics {
  renderTime: number
  componentCount: number
  memoryUsage?: number
}

export function usePerformance(componentName: string) {
  const renderStartTime = useRef<number>(Date.now())
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    componentCount: 0,
  })

  useEffect(() => {
    const renderTime = Date.now() - renderStartTime.current

    setMetrics((prev) => ({
      ...prev,
      renderTime,
      componentCount: prev.componentCount + 1,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || undefined,
    }))

    // Log performance in development
    if (process.env.NODE_ENV === "development") {
      console.log(`${componentName} render time: ${renderTime}ms`)
    }
  }, [componentName])

  return metrics
}
