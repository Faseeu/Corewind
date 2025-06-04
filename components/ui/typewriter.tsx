"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { motion, type Variants } from "motion/react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  text: string | string[]
  speed?: number
  initialDelay?: number
  waitTime?: number
  deleteSpeed?: number
  loop?: boolean
  className?: string
  showCursor?: boolean
  hideCursorOnType?: boolean
  cursorChar?: string | React.ReactNode
  cursorAnimationVariants?: {
    initial: Variants["initial"]
    animate: Variants["animate"]
  }
  cursorClassName?: string
  onProgress?: (currentLength: number) => void
}

const Typewriter = ({
  text,
  speed = 25, // Faster default speed
  initialDelay = 0,
  waitTime = 1500, // Reduced wait time
  deleteSpeed = 20, // Faster delete speed
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
  onProgress,
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  },
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // Use refs to avoid triggering re-renders
  const progressRef = useRef(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const texts = Array.isArray(text) ? text : [text]
  const currentText = texts[currentTextIndex]

  // Separate effect for progress reporting to avoid render-time updates
  useEffect(() => {
    if (onProgress && progressRef.current !== displayText.length) {
      progressRef.current = displayText.length
      // Use setTimeout to avoid updating during render
      const timer = setTimeout(() => {
        onProgress(displayText.length)
      }, 0)
      return () => clearTimeout(timer)
    }
  }, [displayText.length, onProgress])

  useEffect(() => {
    const typeNextCharacter = () => {
      if (isDeleting) {
        if (displayText === "") {
          setIsDeleting(false)
          if (currentTextIndex === texts.length - 1 && !loop) {
            return
          }
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setCurrentIndex(0)
          timeoutRef.current = setTimeout(typeNextCharacter, waitTime)
        } else {
          setDisplayText((prev) => prev.slice(0, -1))
          timeoutRef.current = setTimeout(typeNextCharacter, deleteSpeed)
        }
      } else {
        if (currentIndex < currentText.length) {
          setDisplayText((prev) => prev + currentText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
          timeoutRef.current = setTimeout(typeNextCharacter, speed)
        } else if (texts.length > 1) {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true)
            typeNextCharacter()
          }, waitTime)
        }
      }
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Start typing with initial delay only at the beginning
    if (currentIndex === 0 && !isDeleting && displayText === "") {
      timeoutRef.current = setTimeout(typeNextCharacter, initialDelay)
    } else {
      timeoutRef.current = setTimeout(typeNextCharacter, 0)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [
    currentIndex,
    displayText,
    isDeleting,
    currentTextIndex,
    speed,
    deleteSpeed,
    waitTime,
    texts,
    currentText,
    loop,
    initialDelay,
  ])

  return (
    <div className={`inline whitespace-pre-wrap tracking-tight ${className}`}>
      <span>{displayText}</span>
      {showCursor && (
        <motion.span
          variants={cursorAnimationVariants}
          className={cn(
            cursorClassName,
            hideCursorOnType && (currentIndex < currentText.length || isDeleting) ? "hidden" : "",
          )}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  )
}

export default Typewriter
