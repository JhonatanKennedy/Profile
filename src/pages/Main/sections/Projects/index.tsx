import { ProjectCard } from "@/components/ProjectCard";
import { handleLinkClick } from "@/utils/HandleLinkClick";
import { Button, SectionTitle } from "@jhonatankennedy/ui-react";
import "./index.css";

const C = {
  primary: "#fcd12a",
  secondary: "#0057ff",
  accent: "#d946ef",
} as const;

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  badge: string;
  accentColor: string;
};

const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    subtitle: "Web App · SaaS",
    description:
      "Dashboard analítico com 13+ gráficos interativos, métricas em tempo real e performance de ponta: LCP 1.46 s, CLS 0.01, INP 153 ms. Arquitetura baseada em BFF com Node.js e consumo de APIs REST.",
    image:
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?w=800&h=450&fit=crop&auto=format",
    tech: ["React", "TypeScript", "Material UI", "Node.js", "PostgreSQL"],
    liveUrl: "https://jhonatankennedy.github.io/Profile",
    githubUrl: "https://github.com/JhonatanKennedy",
    badge: "Web",
    accentColor: C.primary,
  },
  {
    title: "Mobile Fintech App",
    subtitle: "React Native · Expo",
    description:
      "Aplicativo mobile desenvolvido do zero com arquitetura MVVM em 6 meses. Zero bugs em produção nos 12 meses após o lançamento. Integrações com APIs REST, PostgreSQL e MongoDB.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop&auto=format",
    tech: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://jhonatankennedy.github.io/Profile",
    githubUrl: "https://github.com/JhonatanKennedy",
    badge: "Mobile",
    accentColor: C.secondary,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <SectionTitle title="Projetos" />
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <div className="projects-footer">
          <Button
            data-href="https://github.com/JhonatanKennedy"
            variant="primary"
            size="md"
            onClick={handleLinkClick}
          >
            Ver todos no GitHub →
          </Button>
        </div>
      </div>
    </section>
  );
}
