import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="mailto:jhonatankennedy@live.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">jhonatankennedy@live.com</p>
                  </div>
                </a>

                <a
                  href="tel:+5581982039478"
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="text-foreground font-medium">+55 81 98203-9478</p>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-foreground font-medium">Cumaru, Pernambuco - Brasil</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="outline" size="lg" className="flex-1 gap-2 group" asChild>
                  <a href="https://github.com/JhonatanKennedy" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex-1 gap-2 group" asChild>
                  <a href="https://linkedin.com/in/Jhonatankennedy" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full gap-2 bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
                asChild
              >
                <a href="https://linkedin.com/in/Jhonatankennedy" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
