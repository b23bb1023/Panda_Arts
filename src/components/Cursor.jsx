import { useEffect, useRef } from "react";
import { useCursor } from "../context/CursorContext";

// const ICONS = {
//   view: (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//       <ellipse cx="12" cy="12" rx="10" ry="6" stroke="white" strokeWidth="1.5" />
//       <circle cx="12" cy="12" r="3" fill="white" />
//     </svg>
//   ),
//   play: (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//       <polygon points="6,3 21,12 6,21" fill="white" />
//     </svg>
//   ),
//   drag: (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//       <path d="M12 3v18M3 12h18M7 7l-4 5 4 5M17 7l4 5-4 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   ),
// };
const ICONS = {
  view: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  ),
  play: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <polygon points="6,3 21,12 6,21" fill="currentColor" />
    </svg>
  ),
  drag: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v18M3 12h18M7 7l-4 5 4 5M17 7l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
export default function Cursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const { cursorType } = useCursor();

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.13);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.13);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const isSoon = cursorType === "soon";
  const isDefault = cursorType === "default";
  const icon = ICONS[cursorType];

  return (
    <div ref={cursorRef} className={`cursor cursor--${cursorType}`} aria-hidden>
      <div className="cursor__bubble">
        {isSoon ? (
          <span className="cursor__label">SOON</span>
        ) : icon ? (
          icon
        ) : null}
      </div>
    </div>
  );
}
