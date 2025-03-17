import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function SocialsSection() {
  const socials = [
    {
      platform: "GitHub",
      username: "suyash-dev",
      url: "https://github.com/suyash-dev",
      icon: Github,
    },
    {
      platform: "LinkedIn",
      username: "suyashdev",
      url: "https://linkedin.com/in/suyashdev",
      icon: Linkedin,
    },
    {
      platform: "Twitter",
      username: "@suyash_dev",
      url: "https://twitter.com/suyash_dev",
      icon: Twitter,
    },
    {
      platform: "Email",
      username: "hello@suyash.dev",
      url: "mailto:hello@suyash.dev",
      icon: Mail,
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-amber-600 dark:text-yellow-400">Connect With Me</h2>

      <div className="grid gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <social.icon className="h-5 w-5" />
            <span className="font-medium">{social.platform}:</span>
            <span>{social.username}</span>
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        Type <span className="text-amber-600 dark:text-yellow-400">resume</span> to see my professional experience!
      </p>
    </div>
  )
}

