import { Button } from "@jhonatankennedy/ui-react";
import "./styles.css";
import { handleLinkClick } from "@/utils/HandleLinkClick";

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
const SHADOW_LG = `6px 6px 0px ${C.neutral}`;
const SHADOW_SM = `2px 2px 0px ${C.neutral}`;

const F = {
  display: "'Bangers', cursive",
  body: "'Comic Neue', sans-serif",
  mono: "'Space Mono', monospace",
} as const;

const navItems = ["Sobre", "Impacto", "Experiência", "Skills", "Contato"];

export function Navigation() {
  const scrollTo = (id: string) => {
    const value = id.toLowerCase().replace("ê", "e").replace("ã", "a");
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        borderBottom: BORDER,
        backgroundColor: C.neutral,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="nav-container">
        <div
          style={{
            fontFamily: F.display,
            letterSpacing: "0.06em",
            color: C.primary,
            WebkitTextStroke: "1px #0d0d0d",
            borderRight: BORDER,
          }}
          className="nav-logo"
        >
          JK.DEV
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                fontFamily: F.display,
                letterSpacing: "0.05em",
                borderLeft: BORDER,
                color: C.paperLight,
                background: "none",
                cursor: "pointer",
                border: "none",
              }}
              className="nav-link"
            >
              {item}
            </button>
          ))}
        </div>
        <Button
          data-href="mailto:jhonatankennedy@live.com"
          color="primary"
          size="sm"
          onClick={handleLinkClick}
        >
          Hire Me ⚡
        </Button>
      </div>
    </nav>
  );
}
