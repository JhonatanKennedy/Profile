import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    institution: "Universidade Federal de Pernambuco",
    degree: "Engenharia da Computação",
    type: "Bacharelado",
    period: "Concluído em Dezembro 2025",
    current: false,
  },
  {
    institution: "Escola Técnica Estadual José Humberto de Moura Cavalcante",
    degree: "Sistemas e WEB",
    type: "Técnico",
    period: "Janeiro 2011 - Dezembro 2013",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Formação <span className="text-gradient">Acadêmica</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Base sólida em Engenharia da Computação com formação técnica em
            desenvolvimento web.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="group relative p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              {edu.current && (
                <div className="absolute inset-0 rounded-xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
              )}

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground leading-tight">
                      {edu.institution}
                    </h3>
                    {edu.current && (
                      <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        Em curso
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium mt-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.type}</p>
                  <div className="flex items-center gap-1.5 mt-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16 text-center">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Idiomas
          </h3>
          <div className="flex justify-center gap-6">
            <div className="px-6 py-3 rounded-lg bg-background border border-border">
              <p className="font-medium text-foreground">Português</p>
              <p className="text-sm text-primary">Nativo</p>
            </div>
            <div className="px-6 py-3 rounded-lg bg-background border border-border">
              <p className="font-medium text-foreground">Inglês</p>
              <p className="text-sm text-primary">Avançado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
