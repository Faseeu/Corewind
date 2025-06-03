"use client"

import type React from "react"
import { type ElementType, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import { motion, type Transition, type UseInViewOptions } from "motion/react"
import { cn } from "@/lib/utils"

type HighlightDirection = "ltr" | "rtl" | "ttb" | "btt"
type HighlightVariant = "primary" | "secondary" | "accent" | "warning" | "success" | "info" | "custom"

const highlightVariants = {
  primary: "hsl(199, 89%, 85%)",
  secondary: "hsl(217, 32%, 80%)",
  accent: "hsl(280, 90%, 85%)",
  warning: "hsl(38, 92%, 85%)",
  success: "hsl(142, 76%, 85%)",
  info: "hsl(200, 90%, 85%)",
  custom: "hsl(25, 90%, 80%)",
}

type EnhancedTextHighlighterProps = {
  children: React.ReactNode
  as?: ElementType
  triggerType?: "hover" | "ref" | "inView" | "auto"
  transition?: Transition
  useInViewOptions?: UseInViewOptions
  className?: string
  variant?: HighlightVariant
  customColor?: string
  direction?: HighlightDirection
  delay?: number
} & React.HTMLAttributes<HTMLElement>

export type EnhancedTextHighlighterRef = {
  animate: (direction?: HighlightDirection) => void
  reset: () => void
}

export const EnhancedTextHighlighter = forwardRef<EnhancedTextHighlighterRef, EnhancedTextHighlighterProps>(
  (
    {
      children,
      as = "span",
      triggerType = "inView",
      transition = { type: "spring", duration: 1.2, delay: 0, bounce: 0 },
      useInViewOptions = {
        once: true,
        initial: false,
        amount: 0.3,
      },
      className,
      variant = "primary",
      customColor,
      direction = "ltr",
      delay = 0,
      ...props
    },
    ref,
  ) => {
    const componentRef = useRef<HTMLDivElement>(null)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [currentDirection, setCurrentDirection] = useState<HighlightDirection>(direction)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
      setCurrentDirection(direction)
    }, [direction])

    useEffect(() => {
      if (triggerType === "inView") {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => setIsInView(true), delay)
            }
          },
          {
            rootMargin: useInViewOptions?.rootMargin,
            threshold: useInViewOptions?.threshold,
            root: useInViewOptions?.root,
          },
        )

        if (componentRef.current) {
          observer.observe(componentRef.current)
        }

        return () => {
          if (componentRef.current) {
            observer.unobserve(componentRef.current)
          }
          observer.disconnect()
        }
      }
    }, [triggerType, useInViewOptions, delay])

    const shouldAnimate =
      triggerType === "hover"
        ? isHovered
        : triggerType === "inView"
          ? isInView
          : triggerType === "ref"
            ? isAnimating
            : triggerType === "auto"
              ? true
              : false

    useImperativeHandle(ref, () => ({
      animate: (animationDirection?: HighlightDirection) => {
        if (animationDirection) {
          setCurrentDirection(animationDirection)
        }
        setIsAnimating(true)
      },
      reset: () => setIsAnimating(false),
    }))

    const ElementTag = as || "span"

    const getBackgroundSize = (animated: boolean) => {
      switch (currentDirection) {
        case "ltr":
          return animated ? "100% 100%" : "0% 100%"
        case "rtl":
          return animated ? "100% 100%" : "0% 100%"
        case "ttb":
          return animated ? "100% 100%" : "100% 0%"
        case "btt":
          return animated ? "100% 100%" : "100% 0%"
        default:
          return animated ? "100% 100%" : "0% 100%"
      }
    }

    const getBackgroundPosition = () => {
      switch (currentDirection) {
        case "ltr":
          return "0% 0%"
        case "rtl":
          return "100% 0%"
        case "ttb":
          return "0% 0%"
        case "btt":
          return "0% 100%"
        default:
          return "0% 0%"
      }
    }

    const animatedSize = useMemo(() => getBackgroundSize(shouldAnimate), [shouldAnimate, currentDirection])
    const initialSize = useMemo(() => getBackgroundSize(false), [currentDirection])
    const backgroundPosition = useMemo(() => getBackgroundPosition(), [currentDirection])

    const highlightColor = customColor || highlightVariants[variant]

    const highlightStyle = {
      backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: backgroundPosition,
      backgroundSize: animatedSize,
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone",
    } as React.CSSProperties

    return (
      <ElementTag
        ref={componentRef}
        onMouseEnter={() => triggerType === "hover" && setIsHovered(true)}
        onMouseLeave={() => triggerType === "hover" && setIsHovered(false)}
        {...props}
      >
        <motion.span
          className={cn("inline", className)}
          style={highlightStyle}
          animate={{
            backgroundSize: animatedSize,
          }}
          initial={{
            backgroundSize: initialSize,
          }}
          transition={{
            ...transition,
            delay: transition.delay || 0 + delay / 1000,
          }}
        >
          {children}
        </motion.span>
      </ElementTag>
    )
  },
)

EnhancedTextHighlighter.displayName = "EnhancedTextHighlighter"

export default EnhancedTextHighlighter
