import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../context/CursorContext";

gsap.registerPlugin(ScrollTrigger);

const TAGS = [
  "DIGITAL","EXPERIENTIAL","MOTION","SPATIAL","VR",
  "GEN-AI","AR","GAMING","DREAM-FASHION","IMMERSIVE","BRAND",
];

const PROJECTS = [
  {
    title: ["Panda", "× Bamboo"],
    cat: "AR Experience",
    gif: "https://media.giphy.com/media/ewzF6uunnPn6L5amuW/giphy.gif",
    soon: false,
  },
  {
    title: ["Panda Delivery", "Summer of Naps"],
    cat: "Campaign",
    gif: "https://media.giphy.com/media/ewzF6uunnPn6L5amuW/giphy.gif",
    soon: false,
  },
  {
    title: ["Snooze", "App"],
    cat: "Brand Identity, App",
    gif: "https://media.giphy.com/media/ewzF6uunnPn6L5amuW/giphy.gif",
    soon: true,
  },
  {
    title: ["Panda", "Dreamzone"],
    cat: "VR Experience",
    gif: "https://media.giphy.com/media/ewzF6uunnPn6L5amuW/giphy.gif",
    soon: false,
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".work-card");
    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="work" ref={sectionRef} id="work">
      <div className="container">
        {/* Header row */}
        <div className="work__header">
          <span className="work__label">work</span>
          <div className="work__header-center">
            <h2 className="work__heading">Selected Work</h2>
            <span className="work__year">(22–25)</span>
          </div>
        </div>

        {/* Filter tags */}
        <div className="work__tags">
          {TAGS.map((t) => (
            <span key={t} className="work__tag">{t}</span>
          ))}
        </div>

        {/* 2×2 grid */}
        <div className="work__grid">
          {PROJECTS.map((p, i) => (
            <a
              key={i}
              href="#"
              className={`work-card${p.soon ? " work-card--soon" : ""}`}
              onMouseEnter={() => setCursorType(p.soon ? "soon" : "play")}
              onMouseLeave={() => setCursorType("default")}
            >
              <div className="work-card__media">
                <img src={p.gif} alt={p.title.join(" ")} />
              </div>
              <div className="work-card__info">
                <h3 className="work-card__title">
                  {p.title.map((line, j) => (
                    <span key={j}>{line}</span>
                  ))}
                </h3>
                <div className="work-card__meta">
                  <span className="work-card__cat">{p.cat}</span>
                  {p.soon && <span className="work-card__coming">Coming soon</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
