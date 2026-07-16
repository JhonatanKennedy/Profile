import { Badge, Button } from "@jhonatankennedy/ui-react";
import "./styles.css";
import { handleLinkClick } from "@/utils/HandleLinkClick";

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
const SHADOW = `4px 4px 0px ${C.neutral}`;
const SHADOW_LG = `6px 6px 0px ${C.neutral}`;
const SHADOW_SM = `2px 2px 0px ${C.neutral}`;

const F = {
  display: "'Bangers', cursive",
  body: "'Comic Neue', sans-serif",
  mono: "'Space Mono', monospace",
} as const;

const info = [
  {
    label: "Localização",
    value: "Recife, Pernambuco, Brasil",
    icon: "📍",
  },
  {
    label: "Email",
    value: "jhonatankennedy@live.com",
    icon: "✉",
  },
  { label: "Telefone", value: "+55 81 98203-9478", icon: "📞" },
  {
    label: "GitHub",
    value: "github.com/JhonatanKennedy",
    icon: "⚙",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/Jhonatankennedy",
    icon: "🔗",
  },
  {
    label: "Portfolio",
    value: "jhonatankennedy.github.io/Profile",
    icon: "🌐",
  },
  {
    label: "Idiomas",
    value: "Português (Nativo) • Inglês (Avançado)",
    icon: "💬",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      style={{ backgroundColor: C.neutral, borderBottom: BORDER }}
      className="about-section"
    >
      <div className="about-container">
        <div className="about-grid">
          <div>
            <div className="about-badges">
              <Badge variant="primary">Full Stack</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="purple">Node.js</Badge>
              <Badge variant="success">TypeScript</Badge>
            </div>
            <div
              style={{
                fontFamily: F.display,
                letterSpacing: "0.04em",
                lineHeight: 0.92,
                WebkitTextStroke: "2px var(--ds-primary)",
                color: C.paperLight,
              }}
              className="about-title-line1"
            >
              JHONATAN
            </div>
            <div
              style={{
                fontFamily: F.display,
                letterSpacing: "0.04em",
                lineHeight: 0.92,
                color: C.primary,
                WebkitTextStroke: "2px var(--ds-primary)",
                textShadow: `4px 4px 0 ${C.neutral}`,
              }}
              className="about-title-line2"
            >
              KENNEDY
            </div>
            <p
              style={{
                fontFamily: F.body,
                fontWeight: 400,
                color: "var(--ds-muted-foreground)",
              }}
              className="about-paragraph"
            >
              Software Engineer com quase{" "}
              <strong style={{ color: C.primary }}>
                5 anos de experiência
              </strong>{" "}
              em React, React Native, TypeScript e Node.js. Especializado em
              arquitetura, performance e qualidade — com histórico de reduzir
              builds em <strong style={{ color: C.primary }}>75%</strong> e
              processos críticos de 15 min para{" "}
              <strong style={{ color: C.primary }}>menos de 1 min</strong>.
            </p>
            <div className="about-buttons">
              <Button
                data-href="https://linkedin.com/in/Jhonatankennedy"
                variant="secondary"
                size="md"
                onClick={handleLinkClick}
              >
                LinkedIn
              </Button>
              <Button
                data-href="https://github.com/JhonatanKennedy"
                variant="primary"
                size="md"
                onClick={handleLinkClick}
              >
                GitHub
              </Button>
              <Button
                data-href="mailto:jhonatankennedy@live.com"
                variant="primary"
                size="md"
                onClick={handleLinkClick}
              >
                Email ✉
              </Button>
            </div>
          </div>
          <div>
            <div
              style={{
                border: BORDER,
                boxShadow: SHADOW_LG,
                backgroundColor: C.paperLight,
              }}
              className="about-card"
            >
              <div
                style={{
                  fontFamily: F.display,
                  letterSpacing: "0.05em",
                  borderBottom: BORDER,
                }}
                className="about-card-title"
              >
                FICHA TÉCNICA
              </div>
              {info.map(({ label, value, icon }) => (
                <div
                  key={label}
                  style={{ borderBottom: "1.5px solid color-mix(in srgb, var(--ds-foreground) 10%, transparent)" }}
                  className="about-info-row"
                >
                  <span className="about-info-icon">{icon}</span>
                  <div>
                    <div
                      style={{ fontFamily: F.mono }}
                      className="about-info-label"
                    >
                      {label}
                    </div>
                    <div
                      style={{ fontFamily: F.mono }}
                      className="about-info-value"
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
