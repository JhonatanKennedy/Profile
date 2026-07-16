import { TimelineEntry, TTimeLineEntryProps } from "@/components/TimeLineEntry";
import { Badge, SectionTitle } from "@jhonatankennedy/ui-react";
import "./index.css";

const C = {
  primary: "var(--ds-primary)",
  secondary: "var(--ds-secondary)",
  accent: "var(--ds-accent)",
  destructive: "var(--ds-destructive)",
  success: "var(--ds-success)",
  neutral: "var(--ds-foreground)",
  paperLight: "var(--ds-background)",
  paperDark: "var(--ds-sidebar)",
} as const;

const BORDER = `2.5px solid ${C.neutral}`;
const SHADOW_LG = `6px 6px 0px ${C.neutral}`;

const F = {
  display: "'Bangers', cursive",
  body: "'Comic Neue', sans-serif",
  mono: "'Space Mono', monospace",
} as const;

const experience: TTimeLineEntryProps[] = [
  {
    company: "Acqio",
    role: "Software Engineer",
    period: "08/2022 — 05/2026",
    location: "Recife, PE",
    accentColor: "primary",
    bullets: [
      "Reduzi o tempo de build local em 75% e o bundle de produção em 21% (5 MB), migrando de Webpack para Vite e removendo ~9 MB de código morto.",
      "Implementei arquitetura MVVM em app React Native (Expo) do zero em 6 meses — zero bugs em produção nos 12 meses seguintes.",
      "Desenvolvi e mantive APIs REST, BFFs e microservices com Node.js e Kotlin, integrando PostgreSQL e MongoDB.",
      "Dashboards analíticos em React + Material UI (13+ gráficos): LCP 1.46 s, CLS 0.01, INP 153 ms.",
      "Estruturei testes automatizados com Jest e Testing Library, elevando cobertura de módulos legados para 56%.",
      "Apliquei DDD no frontend e BFFs, modernizando o processo de pre-push e reduzindo custos na Azure DevOps.",
    ],
  },
  {
    company: "Comeia",
    role: "Engenheiro Front End",
    period: "12/2021 — 08/2022",
    location: "Caruaru, PE",
    accentColor: "secondary",
    bullets: [
      "Selecionado entre os 5 desenvolvedores de maior destaque da equipe para atuar em aplicação estratégica do cliente.",
      "Desenvolvi e mantive apps web com React e Vue.js, evoluindo o Design System com Storybook para maior consistência visual.",
      "Estruturei testes unitários com Jest e e2e com Cypress, fortalecendo o processo de entrega.",
      "Atuei diretamente com o cliente na definição de requisitos e validação de soluções técnicas.",
    ],
  },
  {
    company: "Vagalume",
    role: "Estagiário Full Stack",
    period: "08/2021 — 12/2021",
    location: "Recife, PE",
    accentColor: "purple",
    bullets: [
      "Reestruturei fluxo crítico end-to-end, reduzindo tempo de processamento de ~15 min para menos de 1 min via otimização de queries e regras de negócio.",
      "Desenvolvi funcionalidades para plataforma de Hotspot Social e WiFi Analytics.",
      "Stack full stack com Vue.js e LoopBack (Node.js), APIs REST e integrações com PostgreSQL e MongoDB.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="experience-section">
      <div className="experience-container">
        <SectionTitle title="Experiência" />
        <div className="experience-list">
          {experience.map((exp) => (
            <TimelineEntry key={exp.company} {...exp} />
          ))}
        </div>

        <div className="education-wrapper">
          <SectionTitle title="Educação" />
          <div
            style={{
              border: BORDER,
              boxShadow: SHADOW_LG,
              backgroundColor: C.primary,
            }}
            className="education-card"
          >
            <div className="education-content">
              <div>
                <h3 className="education-title">
                  Universidade Federal de Pernambuco
                </h3>
                <p className="education-subtitle">
                  Engenharia da Computação — Bacharelado
                </p>
              </div>
              <div className="education-meta">
                <Badge variant="neutral">Conclusão: Dez 2025</Badge>
                <span className="education-location">Recife, PE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
