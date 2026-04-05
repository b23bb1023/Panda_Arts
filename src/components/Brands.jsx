import { useCursor } from "../context/CursorContext";

const BRANDS = [
  "PANDERADE",
  "SNOOZE",
  "NOODASH",
  "BAMBOO",
  "GRIZZLE",
  "OGILVYO",
  "PANDA-COLA",
  "SNOOZE & SNOOZE",
];

export default function Brands() {
  const { setCursorType } = useCursor();

  return (
    <section className="brands">
      <div className="container">
        <h2 className="section-heading">
          Trusted by the world's<br />leading pandas
        </h2>

        <div className="brands-grid">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="brand-item"
              onMouseEnter={() => setCursorType("drag")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span className="brand-name">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
