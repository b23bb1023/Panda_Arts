import Lenis from "lenis";

export function initLenis() {
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
