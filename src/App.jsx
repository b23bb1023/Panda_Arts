import { useEffect } from "react";
import { initLenis } from "./lib/lenis";
import { CursorProvider } from "./context/CursorContext";

import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Identity from "./components/Identity";
import Expertise from "./components/Expertise";
import Awards from "./components/Awards";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <CursorProvider>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Identity />
        <Expertise />
        <Awards />
        <Brands />
      </main>
      <Footer />
    </CursorProvider>
  );
}
