import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { projects, type Project } from "./ProjectsPage"

interface ProjectDetailPageProps {
  projectId: string
  onBack: () => void
}

export function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  const project: Project | undefined = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Project Not Found</h1>
          <Button onClick={onBack}>Back to Projects</Button>
        </div>
      </div>
    )
  }

  // Mock additional project details
  const projectDetails = {
    duration: "3 months",
    team: "2 developers, 1 designer",
    role: "Full-Stack Developer",
    challenges: [
      "Implementing real-time synchronization across multiple devices",
      "Optimizing performance for large datasets",
      "Creating responsive design that works on all screen sizes",
      "Integrating third-party payment processing securely"
    ],
    features: [
      "User authentication and authorization",
      "Real-time data updates",
      "Responsive design",
      "Payment processing",
      "Admin dashboard",
      "API integration",
      "Performance optimization",
      "Security implementation"
    ],
    learnings: [
      "Advanced React patterns and hooks",
      "Database optimization techniques",
      "Modern authentication strategies",
      "Performance monitoring and optimization"
    ]
  }

  return (
    <div className="min-h-screen bg-background py-8">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Button
          variant="outline"
          onClick={onBack}
          className="border-vibrant text-vibrant hover:bg-vibrant hover:text-vibrant-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </div>

      {/* Project Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Info */}
          <div className="order-1 lg:order-2">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-vibrant/10 text-vibrant rounded-full">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              {project.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 text-vibrant" />
                <span className="text-sm">{projectDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="h-4 w-4 text-vibrant" />
                <span className="text-sm">{projectDetails.team}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Tag className="h-4 w-4 text-vibrant" />
                <span className="text-sm">{projectDetails.role}</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="font-semibold text-primary mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button
                  className="bg-vibrant hover:bg-vibrant/90 text-vibrant-foreground"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Project
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="border-vibrant text-vibrant hover:bg-vibrant hover:text-vibrant-foreground"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Key Features */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
              <ul className="space-y-2">
                {projectDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-vibrant rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Challenges Solved</h3>
              <ul className="space-y-3">
                {projectDetails.challenges.map((challenge, index) => (
                  <li key={index} className="text-muted-foreground text-sm">
                    {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What I Learned */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">What I Learned</h3>
              <ul className="space-y-2">
                {projectDetails.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-vibrant rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{learning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
