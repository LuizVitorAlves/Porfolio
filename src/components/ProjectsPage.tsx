import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: string
}

interface ProjectsPageProps {
  onProjectClick: (projectId: string) => void
}

const projects: Project[] = [
  {
    id: 'minishell',
    title: 'Minishell',
    description: 'Um shell minimalista desenvolvido em C, replicando funcionalidades básicas do Bash. Inclui suporte a execução de comandos, pipes, redirecionamentos, variáveis de ambiente e tratamento de sinais. Conta com builtins como cd, echo, pwd, export, unset, env e exit.',
    image: 'https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU1NTI1OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['C', 'Unix', 'POSIX', 'Makefile', 'Valgrind'],
    githubUrl: 'https://github.com/LuizVitorAlves/MiniShell',
    category: 'Programação de Sistemas'
  },
  {
    id: 'task-manager-app',
    title: 'Task Manager Mobile App',
    description: 'A cross-platform mobile app built with React Native. Features real-time synchronization, offline support, and intuitive drag-and-drop interface.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1NTQzMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    liveUrl: 'https://taskmanager-app.com',
    githubUrl: 'https://github.com/alexjohnson/taskmanager',
    category: 'Mobile Development'
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts built with D3.js and React.',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU1NTIyMDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    liveUrl: 'https://analytics-demo.com',
    githubUrl: 'https://github.com/alexjohnson/analytics',
    category: 'Data Visualization'
  }
]

export function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getVisibleProjects = () => {
    const result = []
    for (let i = 0; i < Math.min(3, projects.length); i++) {
      const index = (currentIndex + i) % projects.length
      result.push({ ...projects[index], displayIndex: i })
    }
    return result
  }

  return (
    <div className="min-h-screen bg-background py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Meus <span className="text-vibrant">Projetos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aqui está uma coleção de projetos em que trabalhei, que vão desde UX e desenvolvimento web até programação de baixo nível e ferramentas de visualização de dados.
            Cada projeto trouxe desafios únicos e foi uma grande oportunidade de aprendizado.
          </p>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="border-vibrant text-vibrant hover:bg-vibrant hover:text-vibrant-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="border-vibrant text-vibrant hover:bg-vibrant hover:text-vibrant-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleProjects().map((project) => (
              <Card 
                key={`${project.id}-${project.displayIndex}`}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-vibrant/50 cursor-pointer"
                onClick={() => onProjectClick(project.id)}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-vibrant/10 text-vibrant rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-vibrant transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-vibrant text-vibrant hover:bg-vibrant hover:text-vibrant-foreground"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.liveUrl, '_blank')
                        }}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.githubUrl, '_blank')
                        }}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-vibrant w-8'
                    : 'bg-border hover:bg-vibrant/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export { projects }
export type { Project }