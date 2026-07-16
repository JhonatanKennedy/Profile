import { Badge, Card } from "@jhonatankennedy/ui-react";

import "./index.css";

const C = {
  primary: "var(--ds-primary)",
  secondary: "var(--ds-secondary)",
  neutral: "var(--ds-foreground)",
  purple: "var(--ds-info)",
  danger: "var(--ds-destructive)",
  success: "var(--ds-success)",
  paperLight: "var(--ds-background)",
  paperDark: "var(--ds-sidebar)",
} as const;

const BORDER = `2px solid ${C.neutral}`;
const SHADOW_SM = `2px 2px 0px ${C.neutral}`;

export type TTimeLineEntryProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  //TODO fix this later
  accentColor:
    | "primary"
    | "secondary"
    | "neutral"
    | "purple"
    | "danger"
    | "success";
};

export function TimelineEntry({
  company,
  role,
  period,
  location,
  bullets,
  accentColor,
}: TTimeLineEntryProps) {
  return (
    <div className="timeline-entry">
      <div
        style={{
          backgroundColor: "var(--ds-foreground)",
          border: BORDER,
        }}
        className="timeline-line"
      />

      <div
        style={{
          //TODO
          backgroundColor: C[accentColor],
          border: BORDER,
          boxShadow: SHADOW_SM,
        }}
        className="timeline-dot"
      />
      <Card className="timeline-card">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-company">{company}</h3>
            <div className="timeline-role-wrapper">
              <span
                style={{
                  //TODO
                  color: C[accentColor],
                }}
                className="timeline-role"
              >
                {role}
              </span>
            </div>
          </div>
          <div className="timeline-meta">
            <Badge variant={accentColor}>{period}</Badge>
            <span className="timeline-location">{location}</span>
          </div>
        </div>
        <ul className="timeline-bullets">
          {bullets.map((b, i) => (
            <li key={i} className="timeline-bullet">
              <span
                //TODO
                style={{ color: C[accentColor] }}
                className="timeline-bullet-arrow"
              >
                ▶
              </span>
              <span className="timeline-bullet-text">{b}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
