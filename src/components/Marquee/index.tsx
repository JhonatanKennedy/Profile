import "./index.css";

type TMarqueeProps = {
  text: string;
};
export function Marquee({ text }: TMarqueeProps) {
  return (
    <div className="marquee-bar">
      <div className="marquee-text">{text}</div>
    </div>
  );
}
