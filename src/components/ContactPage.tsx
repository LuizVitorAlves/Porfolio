import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "l.v.alvesjr@gmail.com",
    action: "mailto:l.v.alvesjr@gmail.com"
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (21) 96952-1570",
    action: "tel:+5521969521570"
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rio de Janeiro - RJ",
    action: null
  }
]

const socialPlatforms = [
  {
    icon: Github,
    name: "GitHub",
    handle: "/LuizVitorAlves",
    url: "https://github.com/LuizVitorAlves/",
    color: "text-gray-700"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "/in/luizvitoralves",
    url: "https://www.linkedin.com/in/luizvitoralves/",
    color: "text-blue-600"
  },
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@VitorAlv7",
    url: "https://www.instagram.com/vitoralv7/",
    color: "text-pink-500"
  }
]

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Entre em <span className="text-vibrant">contato</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estou sempre aberto pra trocar ideia sobre novas oportunidades, projetos criativos ou só bater um papo sobre tecnologia.
            Se quiser, é só me chamar por qualquer um dos canais aqui embaixo
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Informações de contato</h2>
          <p className="text-muted-foreground">
            Esses são os jeitos mais fáceis de falar comigo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info) => {
            const IconComponent = info.icon
            const content = (
              <Card className="group border-border hover:border-vibrant hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vibrant transition-colors">
                    <IconComponent className="h-6 w-6 text-vibrant group-hover:text-vibrant-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2 group-hover:text-vibrant transition-colors">
                    {info.label}
                  </h3>
                  <p className="text-muted-foreground">
                    {info.value}
                  </p>
                </CardContent>
              </Card>
            )

            return info.action ? (
              <a key={info.label} href={info.action} className="block cursor-pointer">
                {content}
              </a>
            ) : (
              <div key={info.label}>
                {content}
              </div>
            )
          })}
        </div>
      </section>

      {/* Social Media */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Mídias sociais</h2>
          <p className="text-muted-foreground">
            Me acompanha por aqui pra novidades e pra gente se conectar profissionalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="border-border hover:border-vibrant hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-vibrant/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vibrant transition-colors">
                      <IconComponent className="h-8 w-8 text-vibrant group-hover:text-vibrant-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-vibrant transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {platform.handle}
                    </p>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-vibrant/10 to-vibrant/5 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Bora trabalhar juntos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seja um projeto na cabeça, vontade de colaborar ou só mandar um alô, vou curtir trocar ideia contigo. Bora criar algo incrível juntos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:l.v.alvesjr@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-vibrant hover:bg-vibrant/90 text-vibrant-foreground rounded-lg font-medium transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Me envie um email
            </a>
            <a
              href="https://www.linkedin.com/in/luizvitoralves/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-vibrant text-vibrant hover:bg-vibrant hover:text-vibrant-foreground rounded-lg font-medium transition-colors"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}