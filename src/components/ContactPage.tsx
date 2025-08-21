import { Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "luiz@example.com",
    action: "mailto:luiz@example.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    action: null
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "PST (GMT-8)",
    action: null
  }
]

const socialPlatforms = [
  {
    icon: Github,
    name: "GitHub",
    handle: "/luiz",
    url: "https://github.com/luiz",
    color: "text-gray-700"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "/in/luiz",
    url: "https://linkedin.com/in/luiz",
    color: "text-blue-600"
  },
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@luizdev",
    url: "https://instagram.com/luizdev",
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
            Get In <span className="text-vibrant">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or just having a conversation about technology. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
          <p className="text-muted-foreground">
            Here's how you can reach me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-3xl font-bold text-primary mb-4">Social Media</h2>
          <p className="text-muted-foreground">
            Connect with me on these platforms for updates and professional networking.
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
            Ready to work together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:luiz@example.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-vibrant hover:bg-vibrant/90 text-vibrant-foreground rounded-lg font-medium transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
            </a>
            <a
              href="https://linkedin.com/in/luiz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-vibrant text-vibrant hover:bg-vibrant hover:text-vibrant-foreground rounded-lg font-medium transition-colors"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}