import { Badge } from "@jhonatankennedy/ui-react";
import "./index.css";

const C = {
  primary: "var(--ds-primary)",
  neutral: "var(--ds-foreground)",
} as const;

const BORDER = `2.5px solid ${C.neutral}`;

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: C.neutral, borderTop: BORDER }}
      className="footer"
    >
      <div className="footer-container">
        <div className="footer-brand">JHONATAN KENNEDY</div>
        <p className="footer-text">
          Software Engineer · Recife, Brasil · jhonatankennedy@live.com
        </p>
        <Badge variant="primary">© 2025</Badge>
      </div>
    </footer>
  );
}
