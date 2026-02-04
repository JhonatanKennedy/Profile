import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Acqio",
    role: "Engenheiro de Software",
    period: "Agosto 2022 – Presente",
    location: "Recife, Pernambuco",
    highlights: [
      "Desenvolvimento e manutenção de aplicações web e mobile com React, React Native (Expo) e TypeScript",
      "Atuação com NestJS e Node.js, criando e mantendo um BFF",
      "Implementação de Storybook para padronização e documentação de componentes reutilizáveis",
      "Refatoração e modernização de partes do código, reduzindo a complexidade e melhorando a escalabilidade",
      "Aplicação de DDD no frontend, estruturando melhor os domínios da aplicação",
      "Criação de testes unitários com Jest para garantir qualidade e estabilidade"
    ],
    current: true
  },
  {
    company: "Comeia",
    role: "Engenheiro Frontend",
    period: "Dezembro 2021 – Agosto 2022",
    location: "Caruaru, Pernambuco",
    highlights: [
      "Criação e manutenção de design system utilizando Storybook",
      "Desenvolvimento com Vue.js de features para aplicação da empresa",
      "Elaboração de testes unitários com Jest e E2E com Cypress"
    ],
    current: false
  },
  {
    company: "Vagalume",
    role: "Estagiário Fullstack",
    period: "Agosto 2021 – Dezembro 2021",
    location: "Recife, Pernambuco",
    highlights: [
      "Atuação na modernização de um aplicativo legado, reduzindo a complexidade",
      "Colaboração no implemento de novas features e melhoria da experiência do usuário",
      "Desenvolvimento de novas funcionalidades para aplicações web e APIs no backend",
      "Operação no backend com Node.js para criar e otimizar endpoints RESTful"
    ],
    current: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trajetória em empresas de tecnologia, sempre focando em entregar 
            soluções de qualidade e código limpo.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-border" />
              )}
              
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 ${
                exp.current 
                  ? "bg-primary border-primary shadow-glow" 
                  : "bg-background border-primary/50"
              }`}>
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                )}
              </div>

              {/* Content Card */}
              <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-medium">{exp.role}</p>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      Atual
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
