import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── AWARDS CONFIG ───────────────────────────────────────────────────────────
// Add, remove, or edit entries here freely.
// `category` supports line breaks — use \n for multiple lines in one cell.
const AWARDS = [
  {
    festival: "Zzzzwards",
    project: "Panda Arts Portfolio",
    category: "1x Best Sleep Site\n1x Portfolio Honors\n1x Dream Developer",
    year: "2025",
  },
  {
    festival: "Nappy Awards",
    project: "Panda Dreamzone",
    category: "AI, Immersive & Sleep Games",
    year: "2025",
  },
  {
    festival: "Claws Awards — Gold",
    project: "Panda × Bamboo Supermarcade",
    category: "Interactive / Experiential",
    year: "2025",
  },
  {
    festival: "Snoogie Award",
    project: "Panda × Bamboo Supermarcade",
    category: "Best Campaign",
    year: "2024",
  },
  {
    festival: "Cannes Pandas — Bronze",
    project: "Panda × Bamboo Supermarcade",
    category: "Outdoor",
    year: "2024",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Awards() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current.querySelectorAll(".award-row"), {
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
      y: 30,
      opacity: 0,
      stagger: 0.06,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="awards" ref={ref}>
      <div className="container">
        <h2 className="section-heading">
          An award<br />winning studio
        </h2>

        <div className="awards-list">
          {/* Column headers */}
          <div className="award-row award-row--head">
            <span />
            <span>Festival</span>
            <span>Project</span>
            <span>Category</span>
            <span>Year</span>
          </div>

          {AWARDS.map((a, i) => (
            <div key={i} className="award-row">
              <span className="award-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="award-festival">{a.festival}</span>
              <span className="award-project">{a.project}</span>
              <span className="award-category">
                {a.category.split("\n").map((line, j) => (
                  <span key={j} className="award-cat-line">{line}</span>
                ))}
              </span>
              <span className="award-year">{a.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
