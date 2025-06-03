"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react"

interface ExplanationPanelProps {
  explanation: any
  hint?: string
}

export function ExplanationPanel({ explanation, hint }: ExplanationPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // Format markdown-style bold text
  const formatText = (text: string) => {
    if (!text) return ""
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  }

  if (!explanation) return null

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Collapsible Explanation Section */}
      <Card className="border-primary/20">
        <div
          className="p-4 flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className="text-lg font-semibold text-primary">Explanation</h3>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-primary" />
          ) : (
            <ChevronDown className="h-5 w-5 text-primary" />
          )}
        </div>

        {isExpanded && (
          <CardContent className="pt-0 pb-4 px-4 space-y-4">
            {/* Introduction */}
            {explanation.intro && (
              <div>
                <p className="text-sm">{explanation.intro}</p>
              </div>
            )}

            {/* Class Details */}
            {explanation.class_details && explanation.class_details.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Class Details:</h4>
                {explanation.class_details.map((detail: any, index: number) => (
                  <Card key={index} className="bg-card-foreground/5">
                    <CardContent className="p-3 space-y-1">
                      <p className="font-mono font-semibold text-sm text-primary">{detail.className}</p>
                      {detail.css_equivalent && (
                        <p className="text-xs font-mono text-muted-foreground">
                          CSS: <code>{detail.css_equivalent}</code>
                        </p>
                      )}
                      <p className="text-sm" dangerouslySetInnerHTML={{ __html: formatText(detail.description) }}></p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Key Takeaway */}
            {explanation.key_takeaway && (
              <div>
                <h4 className="text-sm font-semibold">Key Takeaway:</h4>
                <p className="text-sm">{explanation.key_takeaway}</p>
              </div>
            )}

            {/* Expert Tip */}
            {explanation.expert_tip && (
              <div>
                <h4 className="text-sm font-semibold">Expert Tip:</h4>
                <p className="text-sm italic">{explanation.expert_tip}</p>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Hint Section */}
      {hint && (
        <Card className="border-yellow-500/20">
          <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => setShowHint(!showHint)}>
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              <h3 className="text-sm font-semibold">Need a hint?</h3>
            </div>
            {showHint ? (
              <ChevronUp className="h-5 w-5 text-yellow-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-yellow-500" />
            )}
          </div>

          {showHint && (
            <CardContent className="pt-0 pb-4 px-4">
              <p className="text-sm">{hint}</p>
            </CardContent>
          )}
        </Card>
      )}
    </div>
  )
}
