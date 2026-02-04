import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Disponível para novos projetos
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Jhonatan</span>{" "}
              <span className="text-gradient">Kennedy</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Engenheiro de Software
            </p>
          </div>
          {/* Description */}
          <p
            className="max-w-2xl text-muted-foreground text-lg md:text-xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            +3 anos criando experiências digitais excepcionais com{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-primary font-medium">Vue</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span> e{" "}
            <span className="text-primary font-medium">React Native</span> e{" "}
            atuando no backend com{" "}
            <span className="text-primary font-medium">Node.js</span>,{" "}
            <span className="text-primary font-medium">NestJS</span> e{" "}
            <span className="text-primary font-medium">Spring boot</span>
          </p>

          {/* Social Links */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="outline" size="lg" className="gap-2 group" asChild>
              <a
                href="https://github.com/JhonatanKennedy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 group" asChild>
              <a
                href="https://linkedin.com/in/Jhonatankennedy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:jhonatankennedy@live.com">
                <Mail className="w-5 h-5" />
                Contato
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 md:gap-16 pt-12 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">3+</p>
              <p className="text-sm text-muted-foreground mt-1">
                Anos de Experiência
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">3</p>
              <p className="text-sm text-muted-foreground mt-1">Empresas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient">
                UFPE
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Eng. Computação
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("skills")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm">Ver mais</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
