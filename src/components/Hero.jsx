import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCursor } from "../context/CursorContext";

export default function Hero() {
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(introRef.current.querySelectorAll(".hero__intro-line"), {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    }).from(
      titleRef.current.querySelectorAll(".hero__title-word"),
      {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <section className="hero" id="studio">
      <div className="hero__inner container">
        {/* Left — studio intro */}
        <div className="hero__intro" ref={introRef}>
          <p className="hero__eyebrow hero__intro-line">The studio</p>
          <p className="hero__desc hero__intro-line">
            We are a global sleep studio forging dreamy experiences by blending
            comfort, technology, and bamboo. Driven to create nap magic for
            pandas and brands through deep relaxation.
          </p>
          <a
            href="#studio"
            className="hero__cta hero__intro-line"
            onMouseEnter={() => setCursorType("view")}
            onMouseLeave={() => setCursorType("default")}
          >
            Learn more →
          </a>
        </div>

        {/* Right — display title */}
        <div className="hero__title-wrap" ref={titleRef}>
          {["Creative", "Sleep", "Studio"].map((word) => (
            <span key={word} className="hero__title-word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
