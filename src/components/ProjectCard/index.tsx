import { useState } from "react";
import { Badge, Button } from "@jhonatankennedy/ui-react";
import { SkillPill } from "../SkillPill";
import { handleLinkClick } from "@/utils/HandleLinkClick";
import "./index.css";

const C = {
  primary: "var(--ds-primary)",
  secondary: "var(--ds-secondary)",
  neutral: "var(--ds-foreground)",
} as const;

const BORDER = `2.5px solid ${C.neutral}`;
const SHADOW = `4px 4px 0px ${C.neutral}`;
const SHADOW_LG = `6px 6px 0px ${C.neutral}`;

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  badge: string;
};

type TProjectCardProps = {
  project: Project;
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
        <div
          style={{
            // backgroundImage: `radial-gradient(circle, ${project.accentColor}55 1.5px, transparent 1.5px)`,
            opacity: hovered ? 0.6 : 0.3,
          }}
          className="project-card-halftone"
        />
        <div className="project-card-badge">
          <Badge variant="primary">{project.badge}</Badge>
        </div>
        <div
          style={{ opacity: hovered ? 1 : 0 }}
          className="project-card-action"
        >
          <div
            // style={{ color: project.accentColor }}
            className="project-card-action-text"
          >
            VIEW!
          </div>
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-card-header">
          <div>
            <h3 className="project-card-title">{project.title}</h3>
            <p
              //   style={{ color: project.accentColor }}
              className="project-card-subtitle"
            >
              {project.subtitle}
            </p>
          </div>
        </div>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tech">
          {project.tech.map((t) => (
            <SkillPill
              key={t}
              // color={project.accentColor}
            >
              {t}
            </SkillPill>
          ))}
        </div>
        <div className="project-card-links">
          <Button
            data-href={project.githubUrl}
            variant="primary"
            onClick={handleLinkClick}
          >
            ⚙ GitHub
          </Button>
          <Button
            data-href={project.liveUrl}
            variant="primary"
            size="sm"
            onClick={handleLinkClick}
          >
            → Ver Projeto
          </Button>
        </div>
      </div>
    </div>
  );
}
