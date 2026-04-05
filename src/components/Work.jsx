import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCursor } from "../context/CursorContext";

// ─── TO USE YOUR LOCAL BACKGROUND IMAGE ─────────────────────────────────────
// 1. Drop your image into the `public/` folder (same level as src/)
// 2. Change the value below to your filename, e.g. "/my-bg-photo.jpg"
// 3. Set BG_OPACITY between 0 (invisible) and 1 (fully visible). 0.65 = 65%
const HERO_BG_SRC = "/Panda_hero.png"; // e.g. "/hero-bg.jpg"  ← put your filename here
const BG_OPACITY  = 0.85;
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    // Animate intro lines with opacity + y (no overflow clip needed)
    tl.from(introRef.current.querySelectorAll(".hero__intro-line"), {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    }).from(
      titleRef.current.querySelectorAll(".hero__title-word"),
      {
        opacity: 0,
        y: 40,        // smaller y — no overflow clip so we keep it subtle
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section className="hero" id="studio">
      {/* Background image — only renders when HERO_BG_SRC is set */}
      {HERO_BG_SRC && (
        <div className="hero__bg" aria-hidden>
          <img src={HERO_BG_SRC} alt="" style={{ opacity: BG_OPACITY }} />
        </div>
      )}

      <div className="hero__inner container">
        {/* Left — studio intro */}
        <div className="hero__intro" ref={introRef}>
          <p className="hero__eyebrow hero__intro-line" style={{ color: '#000000', textShadow: '0 1px 4px rgb(255, 255, 255)' }} >The studio</p>
          <p className="hero__desc hero__intro-line" style={{ color: '#000000' , textShadow: '0 2px 6px rgba(255,255,255,0.7)'}}>
            We are a global sleep studio forging dreamy experiences by blending
            comfort, technology, and bamboo. Driven to create nap magic for
            pandas and brands through deep relaxation.
          </p>
          {/* ↓ href changed to #work so it scrolls to the Selected Work section */}
          <a
            href="#work"
            className="hero__cta hero__intro-line"
            onMouseEnter={() => setCursorType("view")}
            onMouseLeave={() => setCursorType("default")}
            style={{ color: '#000000' , textShadow: '0 2px 6px rgba(255,255,255,0.7)'}}
          >
            Learn more →
          </a>
        </div>

        {/* Right — display title (overflow: visible so letters don't clip) */}
        <div className="hero__title-wrap" ref={titleRef}>
          {["Panda", "Sleep", "Studio"].map((word) => (
            <span key={word} className="hero__title-word" style={{ color: '#ec9353' }}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
