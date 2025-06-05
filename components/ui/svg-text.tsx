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
