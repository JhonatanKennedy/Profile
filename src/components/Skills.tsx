import {
  Code2,
  Smartphone,
  Database,
  TestTube,
  Layers,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Vue.js, TypeScript, JavaScript",
    level: "Avançado",
    years: "3-4 anos",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Expo",
    level: "Avançado",
    years: "2+ anos",
  },
  {
    icon: Database,
    title: "Backend",
    description: "Node.js, NestJS, Spring Boot, APIs RESTful, Kotlin",
    level: "Intermediário",
    years: "2+ anos",
  },
  {
    icon: TestTube,
    title: "Testes",
    description: "Jest, Cypress, Testes Unitários e E2E",
    level: "Avançado",
    years: "2+ anos",
  },
  {
    icon: Layers,
    title: "Arquitetura",
    description: "DDD, Microfrontends, Design System, Storybook, Clean Arch",
    level: "Avançado",
    years: "2+ anos",
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    description: "Git, Git actions, Docker, CI/CD",
    level: "Intermediário",
    years: "2+ anos",
  },
];

const technologies = [
  "ReactJS",
  "React Native",
  "TypeScript",
  "JavaScript",
  "VueJS",
  "Node.js",
  "NestJS",
  "Spring Boot",
  "Jest",
  "Cypress",
  "Storybook",
  "Docker",
  "Git",
  "Expo",
  "Microfrontends",
  "Python",
  "Kotlin",
  "Go",
  "Java",
  "C",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissional full-stack com experiência em desenvolvimento web e
            mobile, criação de APIs e aplicação de boas práticas de arquitetura,
            sempre com foco em performance, escalabilidade e experiência do
            usuário.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {skill.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {skill.level}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {skill.years}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Tecnologias & Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-muted/50 text-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
