import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../assets/hero-bg.jpg";
// If you have a separate about hero image, swap the import above, e.g.:
// import heroBg from "../assets/about-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);
  const ctaRef = useRef(null);

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
      missionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: missionRef.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      ".value-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: valuesRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      storyRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: storyRef.current, start: "top 80%" },
      }
    );

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ctaRef.current, start: "top 90%" },
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
    height: "80vh",
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
      "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.8) 70%, rgba(10,10,10,0.97) 100%)",
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
    fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
    lineHeight: 1.15,
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

  const missionSectionStyle = {
    padding: "120px 24px",
    background: "#141414",
    textAlign: "center",
  };

  const missionTextStyle = {
    fontFamily: "serif",
    fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
    lineHeight: 1.5,
    color: "#eee",
    maxWidth: "780px",
    margin: "0 auto",
    opacity: 0,
  };

  const storySectionStyle = {
    padding: "100px 24px",
    background: "#0a0a0a",
    display: "flex",
    justifyContent: "center",
  };

  const storyTextStyle = {
    color: "#ccc",
    fontSize: "1.05rem",
    lineHeight: 1.9,
    maxWidth: "720px",
    opacity: 0,
  };

  const storyHeadingStyle = {
    fontFamily: "serif",
    color: "#b8a88a",
    fontSize: "0.85rem",
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "24px",
    display: "block",
  };

  const values = [
    {
      title: "Craft",
      desc: "Every frame, edit, and layout is shaped with intention — nothing shipped by default.",
    },
    {
      title: "Story",
      desc: "We look past the brief for the story underneath, then build the visuals around it.",
    },
    {
      title: "Detail",
      desc: "Color, pacing, typography, texture — the small decisions are where the work lives.",
    },
    {
      title: "Collaboration",
      desc: "Your brand, your voice. We shape the visual language around what you're building.",
    },
  ];

  const valuesGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1px",
    background: "#2a2a2a",
    marginTop: "64px",
  };

  const valueItemStyle = {
    background: "#141414",
    padding: "48px 28px",
    textAlign: "left",
    color: "#fff",
    opacity: 0,
  };

  const valueTitleStyle = {
    fontFamily: "serif",
    fontSize: "1.2rem",
    color: "#b8a88a",
    marginBottom: "12px",
  };

  const valueDescStyle = {
    color: "#bbb",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    margin: 0,
  };

  const ctaSectionStyle = {
    padding: "100px 24px",
    background: "#141414",
    textAlign: "center",
  };

  const ctaHeadingStyle = {
    fontFamily: "serif",
    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
    color: "#fff",
    marginBottom: "28px",
    opacity: 0,
  };

  const ctaButtonStyle = {
    display: "inline-block",
    padding: "16px 40px",
    border: "1px solid #b8a88a",
    color: "#b8a88a",
    textDecoration: "none",
    fontSize: "0.85rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    transition: "background 0.3s ease, color 0.3s ease",
  };

  return (
    <>
      <section style={heroStyle}>
        <div style={overlayStyle} />
        <div style={grainStyle} />
        <div style={contentStyle}>
          <span style={eyebrowStyle}>1H-Home · About</span>
          <h1 ref={headlineRef} style={headlineStyle}>
            The story behind the frame.
          </h1>
          <p ref={subRef} style={subStyle}>
            We're a visual studio built on craft, curiosity, and a refusal
            to ship anything ordinary.
          </p>
        </div>
      </section>

      <section style={missionSectionStyle}>
        <p ref={missionRef} style={missionTextStyle}>
          1H-Home exists to turn brands into visual stories — through video,
          photography, and design that feels considered, not templated.
        </p>
      </section>

      <section style={storySectionStyle}>
        <div ref={storyRef} style={storyTextStyle}>
          <span style={storyHeadingStyle}>Our Story</span>
          Founded in 2025, 1H-Home started as a small studio with a simple
          belief: brands deserve visuals that feel cinematic, not generic.
          What began with apparel and print work has grown into a
          full-service creative practice spanning hospitality, identity,
          and campaign work — built one honest frame at a time.
        </div>
      </section>

      <section style={missionSectionStyle}>
        <div ref={valuesRef} style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span style={eyebrowStyle}>What We Stand For</span>
          <div style={valuesGridStyle}>
            {values.map((v) => (
              <div
                key={v.title}
                className="value-item"
                style={valueItemStyle}
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
              >
                <h3 style={valueTitleStyle}>{v.title}</h3>
                <p style={valueDescStyle}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <h2 ref={ctaRef} style={ctaHeadingStyle}>
          Let's build your story next.
        </h2>
        <a
          href="/contact"
          style={ctaButtonStyle}
          onMouseEnter={(e) =>
            gsap.to(e.currentTarget, {
              backgroundColor: "#b8a88a",
              color: "#0a0a0a",
              duration: 0.3,
            })
          }
          onMouseLeave={(e) =>
            gsap.to(e.currentTarget, {
              backgroundColor: "transparent",
              color: "#b8a88a",
              duration: 0.3,
            })
          }
        >
          Get In Touch
        </a>
      </section>
    </>
  );
}