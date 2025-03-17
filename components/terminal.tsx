"use client"

import { useState, useEffect, useRef } from "react"
import { commands } from "@/lib/commands"
import { TerminalPrompt } from "./terminal-prompt"
import { TerminalOutput } from "./terminal-output"
import { AboutSection } from "./about-section"
import { ProjectsSection } from "./projects-section"
import { SkillsSection } from "./skills-section"
import { SocialsSection } from "./socials-section"
import { ResumeSection } from "./resume-section"
import { GoalsSection } from "./goals-section"
import { BlogsSection } from "./blogs-section"
import React from "react"

const isCommandKey = (key: string): key is keyof typeof commands => {
  return Object.keys(commands).includes(key)
}

export function Terminal() {
  const [history, setHistory] = useState<Array<{ 
    command: string; 
    output: string | React.JSX.Element
  }>>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentCommand, setCurrentCommand] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase()

    if (!trimmedCommand) return

    setCommandHistory((prev) => [...prev, command])

    let output: string | React.JSX.Element = 'Command not found. Type "help" for available commands.'

    if (trimmedCommand === "help") {
      output = (
        <div className="grid gap-1">
          <div className="text-blue-600 dark:text-blue-400">All available commands:</div>
          {Object.entries(commands).map(([cmd, desc]) => (
            <div key={cmd} className="grid grid-cols-[100px,1fr] gap-4">
              <span className="text-amber-600 dark:text-yellow-400">{cmd}</span>
              <span className="text-cyan-600 dark:text-cyan-400">- {desc}</span>
            </div>
          ))}
        </div>
      )
    } else if (trimmedCommand === "clear") {
      setHistory([])
      return
    } else if (trimmedCommand === "about") {
      output = <AboutSection />
    } else if (trimmedCommand === "projects") {
      output = <ProjectsSection />
    } else if (trimmedCommand === "skills") {
      output = <SkillsSection />
    } else if (trimmedCommand === "socials") {
      output = <SocialsSection />
    } else if (trimmedCommand === "resume") {
      output = <ResumeSection />
    } else if (trimmedCommand === "goals") {
      output = <GoalsSection />
    } else if (trimmedCommand === "blogs") {
      output = <BlogsSection />
    } else if (isCommandKey(trimmedCommand)) {
      output = `Executing ${trimmedCommand} command...`
    }

    setHistory((prev) => [...prev, { command, output }])
    setHistoryIndex(-1)
    setCurrentCommand("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex((prev) => prev + 1)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - historyIndex - 1])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        setHistoryIndex((prev) => prev - 1)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - historyIndex + 1])
      } else {
        setHistoryIndex(-1)
        setCurrentCommand("")
      }
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  return (
    <div className="font-mono text-sm md:text-base">
      <div className="text-emerald-600 dark:text-green-400 mb-4">
        Welcome to my portfolio!
        <br />
        Type <span className="text-amber-600 dark:text-yellow-400">help</span> to get a list of available commands.
        <br />
        Use <span className="text-amber-600 dark:text-yellow-400">↑</span> and{" "}
        <span className="text-amber-600 dark:text-yellow-400">↓</span> to navigate command history.
      </div>

      {history.map((entry, i) => (
        <div key={i} className="mb-2">
          <TerminalPrompt command={entry.command} readonly />
          <TerminalOutput>{entry.output}</TerminalOutput>
        </div>
      ))}

      <TerminalPrompt
        command={currentCommand}
        setCommand={setCurrentCommand}
        onSubmit={handleCommand}
        onKeyDown={handleKeyDown}
      />

      <div ref={bottomRef} />
    </div>
  )
}