import "./index.css";

const C = {
  primary: "#fcd12a",
  neutral: "#0d0d0d",
} as const;

const BORDER = `2.5px solid ${C.neutral}`;
const SHADOW_SM = `2px 2px 0px ${C.neutral}`;

export function SkillPill({
  children,
  color = C.primary,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        border: BORDER,
        backgroundColor: color,
        boxShadow: SHADOW_SM,
      }}
      className="skill-pill"
    >
      {children}
    </span>
  );
}
