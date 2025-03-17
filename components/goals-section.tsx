export function GoalsSection() {
  const goals = [
    {
      title: "Master Cloud Architecture",
      description: "Deepen knowledge of AWS, Azure, and GCP to design scalable and resilient cloud solutions.",
    },
    {
      title: "Contribute to Open Source",
      description: "Make meaningful contributions to open-source projects that align with my interests and expertise.",
    },
    {
      title: "Learn Machine Learning",
      description: "Develop skills in machine learning and AI to build intelligent applications.",
    },
    {
      title: "Build a SaaS Product",
      description: "Create and launch a software-as-a-service product that solves a real-world problem.",
    },
    {
      title: "Mentor Junior Developers",
      description: "Share knowledge and help guide the next generation of software developers.",
    },
  ]

  const interests = [
    "Web Development",
    "UI/UX Design",
    "DevOps",
    "Artificial Intelligence",
    "Blockchain Technology",
    "Mobile App Development",
    "Cybersecurity",
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-amber-600 dark:text-yellow-400">Goals & Interests</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Professional Goals</h3>
          <div className="grid gap-3">
            {goals.map((goal, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
                <h4 className="font-medium">{goal.title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Technical Interests</h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Type <span className="text-amber-600 dark:text-yellow-400">blogs</span> to read my thoughts and articles!
      </p>
    </div>
  )
}

