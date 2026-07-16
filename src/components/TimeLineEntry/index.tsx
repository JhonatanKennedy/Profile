import { Badge, Card } from "@jhonatankennedy/ui-react";

import "./index.css";

const C = {
  primary: "#fcd12a",
  secondary: "#0057ff",
  neutral: "#0d0d0d",
  purple: "#8b5cf6",
  danger: "#ff2d2d",
  success: "#22c55e",
  paperLight: "#fefce8",
  paperDark: "#1a1208",
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
          backgroundColor: "black",
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
