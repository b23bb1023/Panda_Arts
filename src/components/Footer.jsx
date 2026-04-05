import { useCursor } from "../context/CursorContext";

export default function Footer() {
  const { setCursorType } = useCursor();

  const link = (label, href = "#") => (
    <a
      href={href}
      className="footer__link"
      onMouseEnter={() => setCursorType("view")}
      onMouseLeave={() => setCursorType("default")}
    >
      {label}
    </a>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Logo */}
          <a
            href="#"
            className="footer__logo"
            onMouseEnter={() => setCursorType("view")}
            onMouseLeave={() => setCursorType("default")}
          >
            <span className="footer__logo-mark">🐼</span>
            <span>Panda Arts</span>
          </a>

          {/* Nav + Social */}
          <div className="footer__cols">
            <div className="footer__col">
              <p className="footer__col-label">Menu</p>
              <nav className="footer__nav">
                {link("Studio")}
                {link("Contact")}
                {link("Work")}
              </nav>
            </div>

            <div className="footer__col">
              <p className="footer__col-label">Social</p>
              <nav className="footer__nav">
                {link("Instagram", "https://instagram.com")}
                {link("LinkedIn", "https://linkedin.com")}
                {link("Behance", "https://Dreamscape.net")}
              </nav>
            </div>

            <div className="footer__col">
              <p className="footer__col-label">Business enquiries</p>
              {link("hi@pandaarts.co", "mailto:hi@pandaarts.co")}
              <p className="footer__col-label" style={{ marginTop: "24px" }}>Join our dream team</p>
              {link("apply@pandaarts.co", "mailto:apply@pandaarts.co")}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {new Date().getFullYear()} Panda Arts Studio</span>
          <span className="footer__copy">The Best Naps, Always.</span>
        </div>
      </div>
    </footer>
  );
}
