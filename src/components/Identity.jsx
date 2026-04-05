// ─── MARQUEE ROWS CONFIG ─────────────────────────────────────────────────────
// You can change `text` in each row to anything you like.
// They can be completely different — yes, each row is independent.
// `speed` is seconds per full loop (higher = slower). `reverse` flips direction.
const ROWS = [
  {
    text:    "Panda Sleep Studio",   // ← change row 1 text here
    speed:   24,
    reverse: false,
  },
  {
    text:    "Creative Nap Technology",  // ← change row 2 text here
    speed:   28,
    reverse: true,
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const PandaLogo = () => (
  <span className="identity-logo" aria-hidden>🐼</span>
);

function IdentityRow({ text, reverse, speed }) {
  // DOM-duplicate the content so the seamless loop works
  const items = Array.from({ length: 8 });
  return (
    <div className="identity-row-outer">
      <div
        className="identity-row-inner"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: `${speed}s`,
        }}
      >
        {[...items, ...items].map((_, i) => (
          <span key={i} className="identity-item">
            <span className="identity-text">{text}</span>
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
      {ROWS.map((row, i) => (
        <IdentityRow key={i} {...row} />
      ))}
    </section>
  );
}
