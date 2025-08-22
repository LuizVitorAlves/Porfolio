import { Github, Linkedin, Mail, Palette, Code, Users } from "lucide-react"
import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import banner from "./Images/banner.png";
import ftrio from "./Images/42.png";
import ufrj from "./Images/UFRJ.png";
import apitoo from "./Images/Logo original branco.png";
import loglynx from "./Images/logoLogLynx.png";
import ejcm from "./Images/ejcm.png";
import lalves from "./Images/lalves.png";

interface HomePageProps {
  onNavigateToProjects: () => void
}

const companies = [
  {
    name: "42 Rio",
    logo: ftrio
  },
  {
    name: "UFRJ",
    logo: ufrj
  },
  {
    name: "Apitoo",
    logo: apitoo
  },
  {
    name: "Loglynx",
    logo: loglynx
  },
  {
    name: "EJCM",
    logo: ejcm
  },
  {
    name: "Lalves",
    logo: lalves
  }
]

const skills = [
  {
    icon: Palette,
    title: "UX/UI",
    description: "Design centrado no usuário e interfaces intuitivas",
    skills: ["Figma", "Design Thinking", "Prototipação", "User Research"]
  },
  {
    icon: Code,
    title: "Engenharia de Software",
    description: "Desenvolvimento Full Stack e arquitetura de sistemas",
    skills: ["React", "TypeScript", "Node.js", "Python", "C/C++", "Banco de dados"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    description: "Capacidades pessoais que facilitam conexões, resolução de conflitos e crescimento profissional.",
    skills: ["Liderança", "Comunicação", "Agilidade", "Colaboração"]
  }
]

export function HomePage({ onNavigateToProjects }: HomePageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section with Background Image */}
      <section className="relative min-h-screen lg:min-h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={banner}
            alt="Banner"
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
            Alguns dos meus projetos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi com criatividade, lógica e uma boa dose de curiosidade.
          </p>
        </div>

        {/* Company Logos Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-28 mx-4 flex items-center justify-center bg-card border border-border rounded-lg hover:border-vibrant/50 hover:shadow-lg transition-all duration-300 group"
              >
                <ImageWithFallback
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-32 max-h-20 object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-28 mx-4 flex items-center justify-center bg-card border border-border rounded-lg hover:border-vibrant/50 hover:shadow-lg transition-all duration-300 group"
              >
                <ImageWithFallback
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-32 max-h-20 object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
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
            Vamos nos conectar!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a trocar ideias sobre novas oportunidades, projetos criativos, tecnologia ou até mesmo um café.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:l.v.alvesjr@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:border-vibrant hover:shadow-lg transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-vibrant group-hover:scale-110 transition-transform" />
            <span className="text-foreground group-hover:text-vibrant transition-colors">Email</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/luizvitoralves/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:border-vibrant hover:shadow-lg transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 text-vibrant group-hover:scale-110 transition-transform" />
            <span className="text-foreground group-hover:text-vibrant transition-colors">LinkedIn</span>
          </a>
          
          <a
            href="https://github.com/LuizVitorAlves/"
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