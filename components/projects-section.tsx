export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment processing and inventory management.",
      tech: "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      tech: "React, Redux, Node.js, Socket.io, MongoDB",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather visualization dashboard with historical data and forecasting.",
      tech: "Vue.js, D3.js, Express, Weather API",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "This terminal-style portfolio website showcasing my work and skills.",
      tech: "Next.js, TypeScript, Tailwind CSS",
      link: "#",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-amber-600 dark:text-yellow-400">My Projects</h2>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-md p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <h3 className="font-bold text-blue-600 dark:text-blue-400">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{project.description}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-semibold">Tech:</span> {project.tech}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Type <span className="text-amber-600 dark:text-yellow-400">skills</span> to see my technical expertise!
      </p>
    </div>
  )
}

