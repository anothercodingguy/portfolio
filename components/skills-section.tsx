export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "Testing", level: 80 },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-amber-600 dark:text-yellow-400">Technical Skills</h2>

      <div className="grid gap-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">{category.category}</h3>
            <div className="grid gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="grid grid-cols-[120px,1fr] gap-2 items-center">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-cyan-600 dark:bg-cyan-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Type <span className="text-amber-600 dark:text-yellow-400">socials</span> to connect with me!
      </p>
    </div>
  )
}

