import { SkillPill } from "@/components/SkillPill";
import "./index.css";

const C = {
  primary: "#fcd12a",
  secondary: "#0057ff",
  accent: "#d946ef",
  destructive: "#ff2d2d",
  success: "#22c55e",
  neutral: "#0d0d0d",
  paperLight: "#fefce8",
  paperDark: "#1a1208",
} as const;

const BORDER = `2.5px solid ${C.neutral}`;
const SHADOW = `4px 4px 0px ${C.neutral}`;

const F = {
  display: "'Bangers', cursive",
  body: "'Comic Neue', sans-serif",
  mono: "'Space Mono', monospace",
} as const;

const skillColors: Record<string, string> = {
  Linguagens: C.primary,
  Frontend: C.secondary,
  Backend: C.accent,
  "Qualidade & DevOps": C.success,
};

const skills = {
  Linguagens: ["TypeScript", "JavaScript", "Kotlin", "Python", "Go", "Java"],
  Frontend: [
    "React",
    "React Native",
    "Next.js",
    "Vue.js",
    "Storybook",
    "Microfrontends",
  ],
  Backend: [
    "Node.js",
    "NestJS",
    "Express",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "BFFs",
    "Microservices",
  ],
  "Qualidade & DevOps": [
    "Docker",
    "Git",
    "GitHub Actions",
    "Jest",
    "Testing Library",
    "Cypress",
    "Core Web Vitals",
    "CI/CD",
  ],
};

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: C.paperDark,
        borderTop: BORDER,
        borderBottom: BORDER,
      }}
      className="skills-section"
    >
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Habilidades</h2>
          <div className="skills-title-line" />
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-card">
              <div
                style={{
                  color: skillColors[category],
                  borderBottom: `2px solid ${skillColors[category]}`,
                }}
                className="skills-category-title"
              >
                {category}
              </div>
              <div className="skills-pills">
                {items.map((skill) => (
                  <SkillPill key={skill} color={skillColors[category]}>
                    {skill}
                  </SkillPill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
