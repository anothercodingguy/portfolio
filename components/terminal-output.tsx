import type React from "react"

interface TerminalOutputProps {
  children: React.ReactNode
}

export function TerminalOutput({ children }: TerminalOutputProps) {
  return <div className="ml-4 mt-1 text-gray-800 dark:text-gray-200">{children}</div>
}

