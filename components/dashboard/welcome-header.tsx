import { Flame } from "lucide-react"

export function WelcomeHeader() {
  return (
    <div className="text-center space-y-4 animate-fade-in">
      <h1 className="text-4xl font-bold">Welcome back!</h1>
      <div className="flex items-center justify-center space-x-2 text-lg animate-bounce-subtle">
        <span>You're on a</span>
        <span className="font-bold text-primary animate-pulse">5-day</span>
        <span>learning streak!</span>
        <Flame className="w-6 h-6 text-orange-500 animate-float" />
      </div>
    </div>
  )
}
