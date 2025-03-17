"use client"

import type React from "react"

interface TerminalPromptProps {
  command?: string
  setCommand?: (command: string) => void
  onSubmit?: (command: string) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  readonly?: boolean
}

export function TerminalPrompt({ command = "", setCommand, onSubmit, onKeyDown, readonly }: TerminalPromptProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && onSubmit) {
      onSubmit(command)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-pink-500 dark:text-pink-400">guest@suyash:~$</span>
      {readonly ? (
        <span>{command}</span>
      ) : (
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand?.(e.target.value)}
          onKeyDown={(e) => {
            onKeyDown?.(e)
            handleKeyPress(e)
          }}
          className="bg-transparent outline-none flex-1 text-gray-900 dark:text-white"
          autoFocus
        />
      )}
    </div>
  )
}

