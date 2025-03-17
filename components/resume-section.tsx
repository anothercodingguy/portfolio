export function ResumeSection() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building scalable web applications. Implemented modern React patterns and improved performance by 40%.",
    },
    {
      role: "Full Stack Developer",
      company: "WebSolutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with design team to implement responsive UI/UX.",
    },
    {
      role: "Junior Developer",
      company: "StartupHub",
      period: "2016 - 2018",
      description:
        "Assisted in developing web applications using JavaScript and PHP. Participated in code reviews and implemented bug fixes.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering with focus on web technologies and distributed systems.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Coursework included data structures, algorithms, and web development.",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-amber-600 dark:text-yellow-400">Professional Experience</h2>

      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-blue-600 dark:text-blue-400">Work Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 pb-2">
              <div className="flex justify-between">
                <h4 className="font-medium">{exp.role}</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">{exp.company}</div>
              <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-blue-600 dark:text-blue-400">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 pb-2">
              <div className="flex justify-between">
                <h4 className="font-medium">{edu.degree}</h4>
                <span className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400">{edu.institution}</div>
              <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Type <span className="text-amber-600 dark:text-yellow-400">goals</span> to learn about my aspirations!
      </p>
    </div>
  )
}

