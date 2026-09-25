import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scrolled ? "16px 48px" : "24px 48px",
    zIndex: 100,
    background: scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(8px)" : "none",
    boxSizing: "border-box",
    transition: "background 0.3s ease, padding 0.3s ease",
  };

  const logoStyle = {
    fontFamily: "serif",
    fontSize: "1.4rem",
    letterSpacing: "2px",
    color: "#fff",
    textDecoration: "none",
  };

  const linksWrapperStyle = {
    display: "flex",
    gap: "36px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.95rem",
    letterSpacing: "0.5px",
    opacity: 0.85,
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        1H-Home
      </Link>
      <div style={linksWrapperStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/work" style={linkStyle}>Work</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}