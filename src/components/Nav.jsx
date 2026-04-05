import { useState, useEffect } from "react";
import { useCursor } from "../context/CursorContext";
import WorkDrawer from "./WorkDrawer";
import ContactDrawer from "./ContactDrawer";

export default function Nav() {
  const [workOpen, setWorkOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setCursorType } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = workOpen || contactOpen ? "hidden" : "";
  }, [workOpen, contactOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <a
          href="#"
          className="nav__logo"
          onMouseEnter={() => setCursorType("view")}
          onMouseLeave={() => setCursorType("default")}
        >
          <span className="nav__logo-mark">🐼</span>
          <span>Panda Arts</span>
        </a>

        <div className="nav__links">
          <a
            href="#studio"
            className="nav__link"
            onMouseEnter={() => setCursorType("view")}
            onMouseLeave={() => setCursorType("default")}
          >
            Studio
          </a>
          <button
            className="nav__link"
            onClick={() => { setContactOpen(true); setWorkOpen(false); }}
            onMouseEnter={() => setCursorType("view")}
            onMouseLeave={() => setCursorType("default")}
          >
            Contact
          </button>
          <button
            className="nav__link nav__link--cta"
            onClick={() => { setWorkOpen(true); setContactOpen(false); }}
            onMouseEnter={() => setCursorType("view")}
            onMouseLeave={() => setCursorType("default")}
          >
            Work
          </button>
        </div>
      </nav>

      <WorkDrawer open={workOpen} onClose={() => setWorkOpen(false)} />
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
