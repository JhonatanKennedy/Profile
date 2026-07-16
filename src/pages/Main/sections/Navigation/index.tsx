import { Button, useTheme } from "@jhonatankennedy/ui-react";
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

const navItems = ["Sobre", "Impacto", "Experiência", "Skills", "Contato"];

export function Navigation() {
  const { isDark, setTheme } = useTheme();
  const scrollTo = (id: string) => {
    const value = id.toLowerCase().replace("ê", "e").replace("ã", "a");
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };
  const handleChangeTheme = () => {
    if (isDark) {
      setTheme("light");
      return;
    }
    setTheme("dark");
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
            WebkitTextStroke: "1px var(--ds-foreground)",
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
        <div className="nav-utils">
          <Button color="secondary" size="sm" onClick={handleChangeTheme}>
            {isDark ? "☀" : "☾"}
          </Button>
          <Button
            data-href="mailto:jhonatankennedy@live.com"
            color="primary"
            size="sm"
            onClick={handleLinkClick}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
