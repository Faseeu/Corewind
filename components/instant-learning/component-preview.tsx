import { memo } from 'react';

interface ComponentPreviewProps {
  appliedClasses: string[]
  component: string
  targetClasses: string[]
  isComplete: boolean
}

function ComponentPreviewOriginal({ appliedClasses, component, targetClasses, isComplete }: ComponentPreviewProps) {
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

export const ComponentPreview = memo(ComponentPreviewOriginal);
ComponentPreview.displayName = "ComponentPreview";
