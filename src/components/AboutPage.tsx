import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Flutter", "Expo", "iOS", "Android"]
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Docker", "AWS", "Firebase", "Figma", "Jest"]
  }
]

const socialLinks = [
  {
    platform: "Email",
    url: "mailto:alex@example.com",
    icon: Mail,
    handle: "alex@example.com"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/alexjohnson",
    icon: Linkedin,
    handle: "/in/alexjohnson"
  },
  {
    platform: "GitHub",
    url: "https://github.com/alexjohnson",
    icon: Github,
    handle: "/alexjohnson"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/alexjohnson",
    icon: Twitter,
    handle: "@alexjohnson"
  }
]

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            About <span className="text-vibrant">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about my journey, skills, and what drives me as a developer.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions 
                that make a difference. My journey began in computer science, but it was the intersection of 
                technology and human experience that truly captured my interest.
              </p>
              <p>
                I specialize in building modern web applications and mobile apps using cutting-edge technologies. 
                I believe in writing clean, maintainable code and creating user experiences that are both 
                beautiful and functional.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source 
                projects, or sharing knowledge with the developer community through blog posts and mentoring.
              </p>
              <p>
                I'm always excited to work on challenging projects that push the boundaries of what's possible 
                and create meaningful impact for users and businesses alike.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="bg-vibrant hover:bg-vibrant/90 text-vibrant-foreground">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTUwNTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Johnson working"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-vibrant/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="border-border hover:border-vibrant/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:bg-vibrant/10 hover:text-vibrant transition-colors cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Links Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to new opportunities and conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Card 
                key={link.platform} 
                className="group border-border hover:border-vibrant hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <a
                    href={link.url}
                    target={link.platform !== 'Email' ? '_blank' : undefined}
                    rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <div className="w-12 h-12 bg-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vibrant transition-colors">
                      <IconComponent className="h-6 w-6 text-vibrant group-hover:text-vibrant-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold text-primary group-hover:text-vibrant transition-colors mb-1">
                      {link.platform}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.handle}
                    </p>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}