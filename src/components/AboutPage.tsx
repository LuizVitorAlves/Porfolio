import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import perfil from "./Images/Perfil.jpeg";
import curriculo from './documentos/Luiz Vitor Alves-ES.pdf';

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "C / C++", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "UX/UI",
    technologies: ["Design Thinking", "Prototipação", "Research", "Figma", "Análise"]
  },
  {
    category: "Ferramentas e outros",
    technologies: ["Git", "Docker", "AWS", "Notion", "Automação"]
  }
]

const socialLinks = [
  {
    platform: "Email",
    url: "mailto:l.v.alvesjr@gmail.com",
    icon: Mail,
    handle: "l.v.alvesjr@gmail.com"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/luizvitoralves/",
    icon: Linkedin,
    handle: "/in/luizvitoralves"
  },
  {
    platform: "GitHub",
    url: "https://github.com/LuizVitorAlves/",
    icon: Github,
    handle: "/LuizVitorAlves"
  }
]

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Sobre <span className="text-vibrant">Mim</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra mais sobre minha trajetória, minhas skills e o que me motiva.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Minha história</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou engenheiro de software com formação em matemática, design e ciência da computação, sempre em busca de desafios que me façam evoluir. Minha trajetória começou na matemática na UFRJ, passou por UX/UI e design de produto, e hoje estou mergulhado em desenvolvimento, com os projetos práticos como os da 42 Rio.
              </p>
              <p>
                Adoro criar soluções digitais que equilibrem engenharia sólida com design centrado no usuário. Seja um web app moderno, um sistema que resolve problemas reais ou uma experiência intuitiva, meu objetivo é produzir código limpo, sustentável e que faça sentido.
              </p>
              <p>
                Quando não estou codando, provavelmente estou explorando novas tecnologias, aprendendo algo que me desafie ou compartilhando conhecimento com outras pessoas, porque tecnologia faz mais sentido quando é coletiva.
              </p>
              <p>
                Estou empolgado com projetos que conectem inovação, pessoas e impacto, e sempre pronto para o próximo grande desafio.
              </p>
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-vibrant hover:bg-vibrant/90 text-vibrant-foreground">
                <a href={curriculo} download className="inline-flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                Download currículo
                </a>
              </Button>
          </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={perfil}
                  alt="Luiz Vitor Alves"
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
          <h2 className="text-3xl font-bold text-primary mb-4">Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essas são as tecnologias e ferramentas que uso pra transformar ideias em realidade.
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
          <h2 className="text-3xl font-bold text-primary mb-4">Vamos nos conectar!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique à vontade pra me chamar por aqui, estou sempre aberto a trocar ideias e ter novas chances de parceria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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