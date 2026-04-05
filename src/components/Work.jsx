import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../context/CursorContext";

gsap.registerPlugin(ScrollTrigger);

const TAGS = [
  "DIGITAL","EXPERIENTIAL","MOTION","SPATIAL","VR",
  "GEN-AI","AR","GAMING","DREAM-FASHION","IMMERSIVE","BRAND",
];

// ─── PROJECT DATA ────────────────────────────────────────────────────────────
// shape    : "portrait" (4/5) or "landscape" (4/3)
// summary  : text shown in the info box below the card.
//            null = no info box rendered for that card (Cards 1 & 4 are tall,
//            they fill the full column height so no box is needed).
// poster   : static thumbnail — shown at rest. Replace with "/your-file.jpg"
// video    : plays on hover. Replace with "/your-file.mp4"
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: ["Panda", "× Bamboo"],
    cat: "Natural Experience",
    soon: false,
    shape: "portrait",
    poster: "/Public/Panda1.jpg",
    video: "/Public/Panda_v1.webm",
    summary: "Takes the natural route of sleeping science to induce oneness with the environment.",
  },
  {
    title: ["Panda Sleep Delivery", "Pillow of Naps"],
    cat: "Campaign",
    soon: false,
    shape: "landscape",
    poster: "/Public/Panda2.webp",
    video: "/Public/Panda_v1.webm",
    summary: "A campaign exploring the science of deep rest — blending comfort-forward brand storytelling with experiential activations across digital and physical spaces.",
  },
  {
    title: ["Snooze", "App"],
    cat: "Brand Identity, App",
    soon: true,
    shape: "landscape",
    poster: "/Public/Panda3.webp",
    video: "/Public/Panda_v1.webm",
    summary: "A complete brand identity and mobile app for the art of the nap — from visual language and motion system to a full-stack sleep-tracking experience.",
  },
  {
    title: ["Panda", "Dreamzone"],
    cat: "VR Experience",
    soon: false,
    shape: "portrait",
    poster: "/Public/Panda4.jpg",
    video: "/Public/Panda_v1.webm",
    summary: null,
  },
];

// ─── ARROW SVG (upward, used in info boxes) ──────────────────────────────────
const ArrowUp = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M7 12V2M2 7l5-5 5 5" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── INFO BOX ─────────────────────────────────────────────────────────────────
// Renders in the empty space below the landscape card in each column.
// flex: 1 in CSS makes it stretch to fill whatever height remains.
function WorkInfoBox({ project }) {
  return (
    <div className="work-info-box">
      {/* Top label — project name + upward arrow pointing to the card above */}
      <div className="work-info-box__label">
        <span className="work-info-box__arrow"><ArrowUp /></span>
        <span className="work-info-box__project-name">
          {project.title.join(" ")}
        </span>
        <span className="work-info-box__cat">{project.cat}</span>
      </div>

      {/* Summary text */}
      <p className="work-info-box__summary">{project.summary}</p>

      {/* Bottom detail row */}
      <div className="work-info-box__footer">
        {project.soon && (
          <span className="work-info-box__soon">Coming soon</span>
        )}
      </div>
    </div>
  );
}

// ─── SINGLE CARD ─────────────────────────────────────────────────────────────
function WorkCard({ p }) {
  const videoRef = useRef(null);
  const { setCursorType } = useCursor();

  const handleEnter = () => {
    setCursorType(p.soon ? "soon" : "play");
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  const handleLeave = () => {
    setCursorType("default");
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <div
      className={`work-card work-card--${p.shape}${p.soon ? " work-card--soon" : ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="work-card__media">
        {/* Poster — always visible, sits underneath the video */}
        <img
          className="work-card__poster"
          src={p.poster}
          alt={p.title.join(" ")}
        />
        {/* Video — fades in on hover, fades out on leave */}
        <video
          ref={videoRef}
          className="work-card__video"
          src={p.video}
          preload="none"
          muted
          playsInline
          loop
        />
      </div>
      <div className="work-card__info">
        <h3 className="work-card__title">
          {p.title.map((line, j) => <span key={j}>{line}</span>)}
        </h3>
        <div className="work-card__meta">
          <span className="work-card__cat">{p.cat}</span>
          {p.soon && <span className="work-card__coming">Coming soon</span>}
        </div>
      </div>
    </div>
  );
}

// ─── SECTION ─────────────────────────────────────────────────────────────────
export default function Work() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate both cards AND info boxes with the same scroll-triggered entrance
    const animItems = sectionRef.current.querySelectorAll(
      ".work-card, .work-info-box"
    );
    gsap.from(animItems, {
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Column layout — controls which card and info box live in which column.
  // Left col : portrait card (0) → landscape card (2) → info box for card (2)
  // Right col: landscape card (1) → info box for card (1) → portrait card (3)
  const [p0, p1, p2, p3] = PROJECTS;

  return (
    <section className="work" ref={sectionRef} id="work">
      <div className="container">

        {/* ── Rounded outer panel ─────────────────────────────────── */}
        <div className="work__panel">

          {/* Header */}
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

          {/* Two-column grid — each column is a flex column */}
          <div className="work__grid">

            {/* Left column */}
            <div className="work__col">
              <WorkCard p={p0} />
              <WorkCard p={p2} />
              {p2.summary && <WorkInfoBox project={p2} />}
            </div>

            {/* Right column */}
            <div className="work__col">
              <WorkCard p={p1} />
              {p1.summary && <WorkInfoBox project={p1} />}
              <WorkCard p={p3} />
            </div>

          </div>
        </div>
        {/* ── End panel ───────────────────────────────────────────── */}

      </div>
    </section>
  );
}
