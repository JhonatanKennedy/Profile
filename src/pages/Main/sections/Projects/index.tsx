import { ProjectCard, TProject } from "@/components/ProjectCard";
import { handleLinkClick } from "@/utils/HandleLinkClick";
import { Button, SectionTitle } from "@jhonatankennedy/ui-react";
import "./index.css";

const projects: TProject[] = [
  {
    title: "Meu system design",
    subtitle: "My system design",
    description:
      "Biblioteca de componentes UI multiplataforma desenvolvida em TypeScript, projetada para reutilização entre diferentes frameworks JavaScript. Focada em consistência visual, modularidade, acessibilidade e facilidade de integração. Atualmente, ela é utilizada como base deste portfólio, centralizando os componentes e estilos compartilhados do projeto.",
    image:
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?w=800&h=450&fit=crop&auto=format",
    tech: ["React", "TypeScript", "Lit", "vue", "next.js", "nuxt.js", "scss"],
    githubUrl: "https://github.com/JhonatanKennedy/my-design-system",
    badge: "Web",
    accentColor: "primary",
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
