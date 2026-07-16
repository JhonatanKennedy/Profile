import { useState } from "react";
import { Badge, Button } from "@jhonatankennedy/ui-react";
import { SkillPill } from "../SkillPill";
import { handleLinkClick } from "@/utils/HandleLinkClick";
import "./index.css";

const C = {
  primary: "var(--ds-primary)",
  secondary: "var(--ds-secondary)",
  purple: "var(--ds-accent)",
  ghost: "var(--ds-destructive)",
  success: "var(--ds-success)",
} as const;

const BORDER = `2.5px solid ${"var(--ds-foreground)"}`;
const SHADOW = `4px 4px 0px ${"var(--ds-foreground)"}`;
const SHADOW_LG = `6px 6px 0px ${"var(--ds-foreground)"}`;

export type TProject = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  badge: string;
  accentColor: "primary" | "secondary" | "purple" | "ghost" | "success";
};

type TProjectCardProps = {
  project: TProject;
};

export function ProjectCard({ project }: TProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        border: BORDER,
        boxShadow: hovered ? SHADOW_LG : SHADOW,
        transform: hovered ? "translate(-2px,-2px)" : "translate(0,0)",
      }}
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ borderBottom: BORDER }} className="project-card-image">
        <img
          src={project.image}
          alt={project.title}
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
          className="project-card-img"
        />

        <div className="project-card-badge">
          <Badge variant="primary">{project.badge}</Badge>
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-card-header">
          <div>
            <h3 className="project-card-title">{project.title}</h3>
            <p
              style={{ color: C[project.accentColor] }}
              className="project-card-subtitle"
            >
              {project.subtitle}
            </p>
          </div>
        </div>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tech">
          {project.tech.map((t) => (
            <SkillPill key={t} color={C[project.accentColor]}>
              {t}
            </SkillPill>
          ))}
        </div>
        <div className="project-card-links">
          <Button
            data-href={project.githubUrl}
            variant={project.accentColor}
            onClick={handleLinkClick}
          >
            ⚙ GitHub
          </Button>
          {project.liveUrl ? (
            <Button
              data-href={project.liveUrl}
              variant={project.accentColor}
              size="sm"
              onClick={handleLinkClick}
            >
              → Ver Projeto
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
