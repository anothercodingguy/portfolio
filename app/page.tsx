"use client"
import { Terminal } from "@/components/terminal"
import { AsciiHeader } from "@/components/ascii-header"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1a1b26] text-gray-900 dark:text-white p-4 md:p-8 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-[#1f2335] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md">
          {/* Terminal window buttons */}
          <div className="bg-gray-50 dark:bg-[#1a1b26] p-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              <div className="ml-2 text-sm text-gray-500 dark:text-gray-400">suyash@portfolio:~$</div>
            </div>
            <ThemeToggle />
          </div>

          <div className="p-4">
            <AsciiHeader />
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  )
}

