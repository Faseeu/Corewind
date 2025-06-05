import type React from "react"
import { memo } from "react"
import { EnhancedTextHighlighter } from "@/components/ui/enhanced-text-highlighter"
import { SvgText } from "@/components/ui/svg-text"

// Memoized components for better performance
export const MemoizedTextHighlighter = memo(EnhancedTextHighlighter)
export const MemoizedSvgText = memo(SvgText)

// Component factory for reusable instances
class ComponentRegistry {
  private static instance: ComponentRegistry
  private componentCache = new Map<string, React.ComponentType<any>>()

  static getInstance(): ComponentRegistry {
    if (!ComponentRegistry.instance) {
      ComponentRegistry.instance = new ComponentRegistry()
    }
    return ComponentRegistry.instance
  }

  getComponent<T = any>(key: string, factory: () => React.ComponentType<T>): React.ComponentType<T> {
    if (!this.componentCache.has(key)) {
      this.componentCache.set(key, factory())
    }
    return this.componentCache.get(key) as React.ComponentType<T>
  }

  clearCache(): void {
    this.componentCache.clear()
  }
}

export const componentRegistry = ComponentRegistry.getInstance()

// Pre-registered optimized components
export const OptimizedTextHighlighter = componentRegistry.getComponent("text-highlighter", () =>
  memo(EnhancedTextHighlighter),
)

export const OptimizedSvgText = componentRegistry.getComponent("svg-text", () => memo(SvgText))
