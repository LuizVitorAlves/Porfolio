import { Github, Linkedin, Mail, Palette, Code, Users } from "lucide-react"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface HomePageProps {
  onNavigateToProjects: () => void
}

const companies = [
  {
    name: "Google",
    logo: "https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBsb2dvfGVufDF8fHx8MTc1NTYwNzcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc1NTUzNTE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Apple",
    logo: "https://images.unsplash.com/photo-1680530033206-881e0a7e44b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGxvZ28lMjB0ZWNofGVufDF8fHx8MTc1NTYxOTI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Amazon",
    logo: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBsb2dvfGVufDF8fHx8MTc1NTYxNjcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Netflix",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwbG9nb3xlbnwxfHx8fDE3NTU2MTkyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Spotify",
    logo: "https://images.unsplash.com/photo-1658489958427-325ded050829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG90aWZ5JTIwbG9nb3xlbnwxfHx8fDE3NTU1OTY0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
]

const skills = [
  {
    icon: Palette,
    title: "UX/UI",
    description: "User-centered design and intuitive interfaces",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    icon: Code,
    title: "Software Engineer",
    description: "Full-stack development and system architecture",
    skills: ["React", "TypeScript", "Node.js", "Python"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    description: "Leadership and collaborative problem solving",
    skills: ["Team Leadership", "Communication", "Agile", "Mentoring"]
  }
]

export function HomePage({ onNavigateToProjects }: HomePageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section with Background Image */}
      <section className="relative min-h-screen lg:min-h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1739593552891-a2b8533c09dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU2MTk3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional developer workspace"
            className="w-full h-full object-cover object-right"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex items-center min-h-screen lg:min-h-[80vh]">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Olá, me chamo <span className="text-vibrant">Luiz</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-8">
              Sou um Engenheiro de Software apaixonado por criar soluções digitais inovadoras
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Combino design centrado no usuário com desenvolvimento de software de alta qualidade. 
              Minha missão é transformar ideias em experiências digitais que encantam e resolvem problemas reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onNavigateToProjects}
                className="bg-vibrant hover:bg-vibrant/90 text-vibrant-foreground px-8 py-4 text-lg"
              >
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Minhas Habilidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tenho experiência em diversas áreas, desde design de interfaces até desenvolvimento de software e habilidades interpessoais. 
            Aqui estão algumas das minhas principais competências.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group p-8 bg-card border border-border rounded-xl hover:border-vibrant/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-vibrant/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-vibrant/20 transition-colors">
                  <skill.icon className="h-8 w-8 text-vibrant" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.skills.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full group-hover:bg-vibrant/10 group-hover:text-vibrant transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've had the privilege of working with some of the world's most innovative companies, 
            delivering high-quality solutions that drive business growth.
          </p>
        </div>

        {/* Company Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-20 mx-4 flex items-center justify-center bg-card border border-border rounded-lg hover:border-vibrant/50 hover:shadow-lg transition-all duration-300 group"
              >
                <ImageWithFallback
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-20 max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-20 mx-4 flex items-center justify-center bg-card border border-border rounded-lg hover:border-vibrant/50 hover:shadow-lg transition-all duration-300 group"
              >
                <ImageWithFallback
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-20 max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Connect Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:luiz@example.com"
            className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:border-vibrant hover:shadow-lg transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-vibrant group-hover:scale-110 transition-transform" />
            <span className="text-foreground group-hover:text-vibrant transition-colors">Email</span>
          </a>
          
          <a
            href="https://linkedin.com/in/luiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:border-vibrant hover:shadow-lg transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 text-vibrant group-hover:scale-110 transition-transform" />
            <span className="text-foreground group-hover:text-vibrant transition-colors">LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/luiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:border-vibrant hover:shadow-lg transition-all duration-300 group"
          >
            <Github className="h-5 w-5 text-vibrant group-hover:scale-110 transition-transform" />
            <span className="text-foreground group-hover:text-vibrant transition-colors">GitHub</span>
          </a>
        </div>
      </section>
    </div>
  )
}