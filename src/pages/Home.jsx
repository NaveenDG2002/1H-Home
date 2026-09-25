import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../assets/hero-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
    );

    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: introRef.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      ".service-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: servicesRef.current, start: "top 85%" },
      }
    );
  }, []);

  const handleHoverIn = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.35, ease: "power2.out" });
  };
  const handleHoverOut = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.35, ease: "power2.out" });
  };

  const heroStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 24px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 70%, rgba(10,10,10,0.95) 100%)",
  };

  const grainStyle = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.08,
    mixBlendMode: "overlay",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
  };

  const contentStyle = { position: "relative", zIndex: 2 };

  const eyebrowStyle = {
    color: "#b8a88a",
    letterSpacing: "3px",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    marginBottom: "20px",
  };

  const headlineStyle = {
    fontFamily: "serif",
    fontSize: "clamp(2.5rem, 6vw, 5rem)",
    lineHeight: 1.1,
    color: "#fff",
    maxWidth: "900px",
    margin: 0,
    opacity: 0,
  };

  const subStyle = {
    color: "#ddd",
    fontSize: "1.1rem",
    marginTop: "24px",
    maxWidth: "560px",
    opacity: 0,
  };

  const scrollCueStyle = {
    position: "absolute",
    bottom: "36px",
    color: "#ccc",
    fontSize: "0.8rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    zIndex: 2,
  };

  const introSectionStyle = {
    padding: "120px 24px",
    background: "#141414",
    textAlign: "center",
  };

  const introTextStyle = {
    fontFamily: "serif",
    fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
    lineHeight: 1.5,
    color: "#eee",
    maxWidth: "780px",
    margin: "0 auto",
    opacity: 0,
  };

  const services = [
    { slug: "cloth", label: "Clothing & Apparel" },
    { slug: "cover-front", label: "Cover Fronts" },
    { slug: "hotels", label: "Hotels" },
    { slug: "poster", label: "Posters" },
    { slug: "visiting-card", label: "Visiting Cards" },
  ];

  const servicesGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1px",
    background: "#2a2a2a",
    marginTop: "64px",
  };

  const serviceItemStyle = {
    background: "#141414",
    padding: "48px 24px",
    textAlign: "center",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "serif",
    fontSize: "1.15rem",
    display: "block",
    opacity: 0,
  };

  return (
    <>
      <section style={heroStyle}>
        <div style={overlayStyle} />
        <div style={grainStyle} />
        <div style={contentStyle}>
          <span style={eyebrowStyle}>1H-Home · Est. 2025</span>
          <h1 ref={headlineRef} style={headlineStyle}>
            We turn your brand into a visual story.
          </h1>
          <p ref={subRef} style={subStyle}>
            Video, photo, and graphic editing for apparel, hospitality,
            print, and beyond — crafted with a cinematic eye.
          </p>
        </div>
        <span style={scrollCueStyle}>Scroll ↓</span>
      </section>

      <section style={introSectionStyle}>
        <p ref={introRef} style={introTextStyle}>
          Founded in 2025, 1H-Home is a full-service visual studio — we
          shape brands through video, photography, and graphic design
          across apparel, hospitality, print, and identity work.
        </p>

        <div ref={servicesRef} style={servicesGridStyle}>
          {services.map((s) => (
            <a
              key={s.slug}
              href={`/work/${s.slug}`}
              className="service-item"
              style={serviceItemStyle}
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}