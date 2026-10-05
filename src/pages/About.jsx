import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../assets/hero-bg.jpg";
import founderPhoto from "../assets/founder.jpg";
// If your founder photo is a transparent PNG, rename the import to founder.png

gsap.registerPlugin(ScrollTrigger);

// ✏️ Edit your founder details here
const founder = {
  name: "Pudam Perera",
  role: "Founder & Lead Editor",
  photo: founderPhoto,
  bio: [
    "I started 1H-Home in 2025 with a simple idea: every brand has a story worth telling well. As an editor myself, I work on every project hands-on, from the first cut to the final export.",
    "Whether it's a clothing campaign, a hotel showcase, a poster, or a visiting card, I treat each piece like a small film: considered, polished, and made to be remembered.",
  ],
  // value = number to count up to, suffix = text after it
  stats: [
    { value: 2025, suffix: "", label: "Studio founded" },
    { value: 5, suffix: "", label: "Work categories" },
    { value: 50, suffix: "+", label: "Projects delivered" },
  ],
  skills: ["Video Editing", "Photo Retouching", "Graphic Design", "Color Grading"],
};

export default function About() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);
  const founderRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      // ---------- Founder section ----------
      // Main entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: { trigger: founderRef.current, start: "top 70%" },
      });
      tl.fromTo(
        ".founder-photo-wrap",
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" }
      )
        .fromTo(
          ".founder-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          0.2
        )
        .fromTo(
          ".founder-name-word",
          { yPercent: 110 },
          { yPercent: 0, duration: 1, stagger: 0.12, ease: "power4.out" },
          0.4
        )
        .fromTo(
          ".founder-fade",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power2.out" },
          0.7
        )
        .fromTo(
          ".founder-badge-outer",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
          1.2
        );

      // Photo parallax while scrolling through the section
      gsap.fromTo(
        ".founder-photo-img",
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Big outlined background word drifts sideways
      gsap.fromTo(
        ".founder-bgword",
        { xPercent: -6 },
        {
          xPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Stat counters
      gsap.utils.toArray(".founder-stat-num").forEach((el) => {
        const target = Number(el.dataset.value);
        const suffix = el.dataset.suffix || "";
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(counter.v) + suffix;
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

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
    });

    return () => ctx.revert();
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

  // --- Founder spotlight (two-column) ---
  const founderSectionStyle = {
    padding: "120px 24px",
    background:
      "radial-gradient(ellipse at 20% 60%, rgba(184,168,138,0.10), transparent 60%), #141414",
    position: "relative",
    overflow: "hidden",
  };

  const founderBgWordStyle = {
    position: "absolute",
    top: "6%",
    left: 0,
    fontFamily: "serif",
    fontWeight: 700,
    fontSize: "clamp(5rem, 17vw, 15rem)",
    lineHeight: 1,
    letterSpacing: "0.04em",
    color: "transparent",
    WebkitTextStroke: "1px rgba(184,168,138,0.16)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    userSelect: "none",
  };

  const founderContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  };

  const founderPhotoColStyle = {
    position: "relative",
  };

  const founderGlowStyle = {
    position: "absolute",
    left: "50%",
    top: "55%",
    width: "90%",
    aspectRatio: "1 / 1",
    background:
      "radial-gradient(circle, rgba(184,168,138,0.32) 0%, rgba(184,168,138,0) 65%)",
    filter: "blur(10px)",
    pointerEvents: "none",
  };

  const founderPhotoWrapStyle = {
    position: "relative",
    width: "100%",
    height: "clamp(440px, 72vh, 700px)",
    overflow: "hidden",
    // fades the bottom edge into the background instead of a hard box
    WebkitMaskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
    maskImage: "linear-gradient(to bottom, #000 80%, transparent 100%)",
  };

  const founderImgStyle = {
    position: "absolute",
    left: 0,
    top: "-6%",
    width: "100%",
    height: "112%",
    objectFit: "cover",
    objectPosition: "center top",
    display: "block",
  };

  const founderBadgeOuterStyle = {
    position: "absolute",
    left: "6%",
    bottom: "12%",
    zIndex: 3,
  };

  const founderBadgeStyle = {
    padding: "14px 20px",
    background: "rgba(20,20,20,0.65)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(184,168,138,0.35)",
    borderRadius: "12px",
    color: "#fff",
    fontSize: "0.8rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textAlign: "left",
  };

  const founderBadgeSubStyle = {
    display: "block",
    color: "#b8a88a",
    fontSize: "0.7rem",
    marginTop: "4px",
  };

  const founderEyebrowRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "28px",
  };

  const founderEyebrowLineStyle = {
    display: "block",
    width: "48px",
    height: "1px",
    background: "#b8a88a",
    transformOrigin: "left center",
  };

  const founderNameStyle = {
    fontFamily: "serif",
    fontSize: "clamp(2.4rem, 5vw, 4rem)",
    lineHeight: 1.1,
    color: "#fff",
    margin: "0 0 14px",
  };

  const founderNameMaskStyle = {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "top",
    paddingBottom: "0.12em",
    marginRight: "0.25em",
  };

  const founderRoleStyle = {
    display: "block",
    color: "#b8a88a",
    letterSpacing: "3px",
    fontSize: "0.85rem",
    textTransform: "uppercase",
  };

  const founderDividerStyle = {
    width: "64px",
    height: "1px",
    background: "#b8a88a",
    margin: "32px 0",
  };

  const founderBioStyle = {
    color: "#ccc",
    fontSize: "1.05rem",
    lineHeight: 1.9,
    margin: "0 0 18px",
    maxWidth: "560px",
  };

  const founderStatsRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    margin: "40px 0 36px",
    paddingTop: "32px",
    borderTop: "1px solid #2a2a2a",
  };

  const founderStatNumStyle = {
    fontFamily: "serif",
    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
    color: "#fff",
    lineHeight: 1,
  };

  const founderStatLabelStyle = {
    display: "block",
    color: "#999",
    fontSize: "0.75rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginTop: "10px",
  };

  const founderChipsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "40px",
  };

  const founderBtnRowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
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

  const valuesSectionStyle = {
    ...missionSectionStyle,
    background: "#0a0a0a",
  };

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

      {/* ---------- Founder ---------- */}
      <section style={founderSectionStyle} ref={founderRef}>
        <span className="founder-bgword" style={founderBgWordStyle}>
          FOUNDER
        </span>

        <div style={founderContainerStyle} className="founder-grid">
          {/* Left: portrait */}
          <div style={founderPhotoColStyle}>
            <div className="founder-glow" style={founderGlowStyle} />
            <div className="founder-photo-wrap" style={founderPhotoWrapStyle}>
              <img
                className="founder-photo-img"
                src={founder.photo}
                alt={founder.name}
                style={founderImgStyle}
              />
            </div>
            <div className="founder-badge-outer" style={founderBadgeOuterStyle}>
              <div className="founder-badge" style={founderBadgeStyle}>
                Est. 2025
                <span style={founderBadgeSubStyle}>{founder.role}</span>
              </div>
            </div>
          </div>

          {/* Right: details */}
          <div>
            <div style={founderEyebrowRowStyle}>
              <span className="founder-line" style={founderEyebrowLineStyle} />
              <span style={{ ...eyebrowStyle, marginBottom: 0 }}>
                Meet the Founder
              </span>
            </div>

            <h2 style={founderNameStyle}>
              {founder.name.split(" ").map((word, i) => (
                <span key={i} style={founderNameMaskStyle}>
                  <span
                    className="founder-name-word"
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h2>

            <span className="founder-fade" style={founderRoleStyle}>
              {founder.role}
            </span>

            <div className="founder-fade" style={founderDividerStyle} />

            {founder.bio.map((para, i) => (
              <p key={i} className="founder-fade" style={founderBioStyle}>
                {para}
              </p>
            ))}

            <div className="founder-fade" style={founderStatsRowStyle}>
              {founder.stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="founder-stat-num"
                    data-value={s.value}
                    data-suffix={s.suffix}
                    style={founderStatNumStyle}
                  >
                    {s.value}
                    {s.suffix}
                  </div>
                  <span style={founderStatLabelStyle}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="founder-fade" style={founderChipsStyle}>
              {founder.skills.map((skill) => (
                <span key={skill} className="founder-chip">
                  {skill}
                </span>
              ))}
            </div>

            <div className="founder-fade" style={founderBtnRowStyle}>
              <Link to="/contact" className="founder-btn founder-btn-solid">
                Work with me
              </Link>
              <a
                href="https://wa.me/94702004343"
                target="_blank"
                rel="noreferrer"
                className="founder-btn founder-btn-ghost"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={valuesSectionStyle}>
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
        <Link
          to="/contact"
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
        </Link>
      </section>

      <style>{`
        .founder-grid {
          display: grid;
          grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
          gap: clamp(40px, 6vw, 96px);
          align-items: center;
        }

        .founder-glow {
          animation: founderPulse 5s ease-in-out infinite;
        }
        @keyframes founderPulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 1;   transform: translate(-50%, -50%) scale(1.12); }
        }

        .founder-badge {
          animation: founderFloat 6s ease-in-out infinite;
        }
        @keyframes founderFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }

        .founder-chip {
          padding: 8px 16px;
          border: 1px solid #333;
          border-radius: 999px;
          color: #ccc;
          font-size: 0.8rem;
          letter-spacing: 1px;
          transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .founder-chip:hover {
          border-color: #b8a88a;
          color: #b8a88a;
          transform: translateY(-3px);
        }

        .founder-btn {
          display: inline-block;
          padding: 16px 36px;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
        .founder-btn-solid {
          background: #b8a88a;
          color: #0a0a0a;
          border: 1px solid #b8a88a;
        }
        .founder-btn-solid:hover {
          background: transparent;
          color: #b8a88a;
        }
        .founder-btn-ghost {
          border: 1px solid #444;
          color: #eee;
        }
        .founder-btn-ghost:hover {
          border-color: #b8a88a;
          color: #b8a88a;
        }

        @media (max-width: 860px) {
          .founder-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </>
  );
}