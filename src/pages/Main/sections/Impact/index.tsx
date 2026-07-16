import { Card, SectionTitle } from "@jhonatankennedy/ui-react";
import "./styles.css";

const INK = "#0D0D0D";
const YELLOW = "#FCD12A";
const BLUE = "#0057FF";
const RED = "#FF2D2D";
const GREEN = "#22C55E";

export function Impact() {
  return (
    <section id="impacto" className="impact-section">
      <div className="impact-container">
        <SectionTitle title="Impacto em Números" />
        <div className="impact-grid-top">
          <Card accent={YELLOW}>
            <div className="card">
              <span>75%</span>
              <span>Redução no tempo de build</span>
            </div>
          </Card>

          <Card accent={BLUE}>
            <div className="card">
              <span>21%</span>
              <span>Redução no tempo de build</span>
            </div>
          </Card>

          <Card accent={GREEN}>
            <div className="card">
              <span>&lt;1min</span>
              <span>Fluxo crítico (era 15min)</span>
            </div>
          </Card>

          <Card accent={RED}>
            <div className="card">
              <span>5 anos</span>
              <span>Experiência em produção</span>
            </div>
          </Card>
        </div>
        <div className="impact-grid-bottom">
          <Card accent={GREEN}>
            <div className="card">
              <span>1.46s</span>
              <span>LCP em dashboards analíticos</span>
            </div>
          </Card>

          <Card accent={RED}>
            <div className="card">
              <span>56%</span>
              <span>Cobertura de testes em legado</span>
            </div>
          </Card>

          <Card accent={YELLOW}>
            <div className="card">
              <span>0</span>
              <span>Bugs em prod. no 1º ano do app</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
