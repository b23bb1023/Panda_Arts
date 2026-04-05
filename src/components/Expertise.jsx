import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COLS = [
  {
    title: "Technology",
    items: [
      "Spatial Napping (AR, VR, XR)",
      "AI Snooze & Experiences",
      "Web Development",
      "WebGL Dreamscapes",
      "Bamboo3 / Blockchain",
      "Game Development",
      "Rapid Prototyping",
    ],
  },
  {
    title: "Design",
    items: [
      "Creative Direction",
      "Nap Art Direction",
      "User Experience Design",
      "User Interface Design",
      "Panda Brand Identity",
      "Dream Systems",
      "Concept Design",
    ],
  },
  {
    title: "Motion & CGI",
    items: [
      "2D & 3D Animation",
      "2D & 3D Illustration",
      "Concept Art",
      "FZZZ (FOOH)",
      "Character Design",
      "Motion Identity",
    ],
  },
];

export default function Expertise() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current.querySelectorAll(".expertise-col"), {
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="expertise" ref={ref}>
      <div className="container">
        <h2 className="section-heading">Expertise &amp; Capabilities</h2>
        <div className="expertise-grid">
          {COLS.map((col) => (
            <div key={col.title} className="expertise-col">
              <h3 className="expertise-col__title">{col.title}</h3>
              <ul className="expertise-col__list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
