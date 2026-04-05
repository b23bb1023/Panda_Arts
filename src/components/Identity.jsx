// 4 horizontal marquee rows — alternating directions
// Content duplicated in DOM to ensure seamless infinite loop

const ROW_TEXT = "Panda Sleep Studio";

const PandaLogo = () => (
  <span className="identity-logo" aria-hidden>🐼</span>
);

function IdentityRow({ reverse, speed }) {
  const items = Array.from({ length: 6 });
  return (
    <div className="identity-row-outer">
      <div
        className="identity-row-inner"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: `${speed}s`,
        }}
      >
        {/* Duplicated content for seamless loop */}
        {[...items, ...items].map((_, i) => (
          <span key={i} className="identity-item">
            <span className="identity-text">{ROW_TEXT}</span>
            <PandaLogo />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Identity() {
  return (
    <section className="identity">
      <IdentityRow reverse={false} speed={24} />
      <IdentityRow reverse={true}  speed={28} />
      <IdentityRow reverse={false} speed={22} />
      <IdentityRow reverse={true}  speed={26} />
    </section>
  );
}
