export function BlogsSection() {
  const blogs = [
    {
      title: "The Future of Web Development: What to Expect in 2025",
      date: "March 10, 2025",
      summary:
        "Exploring upcoming trends in web development including WebAssembly, Edge Computing, and AI-driven interfaces.",
      tags: ["Web Development", "Future Tech", "Trends"],
    },
    {
      title: "Optimizing React Performance: Advanced Techniques",
      date: "February 22, 2025",
      summary:
        "Deep dive into React optimization strategies including memoization, code splitting, and state management approaches.",
      tags: ["React", "Performance", "JavaScript"],
    },
    {
      title: "Building Accessible Web Applications: A Comprehensive Guide",
      date: "January 15, 2025",
      summary:
        "Learn how to create web applications that are accessible to all users, including those with disabilities.",
      tags: ["Accessibility", "UI/UX", "HTML"],
    },
    {
      title: "From Monolith to Microservices: Our Journey",
      date: "December 5, 2024",
      summary:
        "A case study on how our team successfully migrated a large monolithic application to a microservices architecture.",
      tags: ["Architecture", "Microservices", "DevOps"],
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-amber-600 dark:text-yellow-400">Blog Posts</h2>

      <div className="grid gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
            <h3 className="font-bold text-blue-600 dark:text-blue-400">{blog.title}</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{blog.date}</div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{blog.summary}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {blog.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Type <span className="text-amber-600 dark:text-yellow-400">about</span> to go back to my introduction!
      </p>
    </div>
  )
}

