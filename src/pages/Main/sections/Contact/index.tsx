import { Button } from "@jhonatankennedy/ui-react";
import "./index.css";
import { handleLinkClick } from "@/utils/HandleLinkClick";

export function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <div className="contact-title">
          VAMOS
          <br />
          FALAR?
        </div>
        <p className="contact-text">
          Aberto a oportunidades desafiadoras em product companies, scale-ups e
          times que valorizam qualidade e impacto real.
        </p>
        <div className="contact-buttons">
          <Button
            data-href="mailto:jhonatankennedy@live.com"
            variant="primary"
            size="lg"
            onClick={handleLinkClick}
          >
            ✉ Enviar Email
          </Button>
          <Button
            data-href="https://linkedin.com/in/Jhonatankennedy"
            variant="secondary"
            size="lg"
            onClick={handleLinkClick}
          >
            LinkedIn
          </Button>
          <Button
            data-href="https://github.com/JhonatanKennedy"
            variant="ghost"
            size="lg"
            onClick={handleLinkClick}
          >
            Portfolio →
          </Button>
        </div>
      </div>
    </section>
  );
}
