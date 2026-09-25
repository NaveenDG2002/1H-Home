import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../assets/hero-bg.jpg";
// If you have a separate contact hero image, swap the import above, e.g.:
// import heroBg from "../assets/contact-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const introRef = useRef(null);
  const contactsRef = useRef(null);
  const formRef = useRef(null);

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
      ".contact-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: contactsRef.current, start: "top 85%" },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: formRef.current, start: "top 85%" },
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
    height: "70vh",
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

  const introSectionStyle = {
    padding: "80px 24px 0",
    background: "#141414",
    textAlign: "center",
  };

  const introTextStyle = {
    fontFamily: "serif",
    fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
    lineHeight: 1.5,
    color: "#eee",
    maxWidth: "700px",
    margin: "0 auto",
    opacity: 0,
  };

  const contacts = [
    {
      label: "WhatsApp",
      value: "+94 78 381 4220",
      href: "https://wa.me/94783814220",
      icon: "💬",
    },
    {
      label: "Email",
      value: "sansana296@gmail.com",
      href: "mailto:sansana296@gmail.com",
      icon: "✉",
    },
    {
      label: "LinkedIn",
      value: "1H-Home",
      href: "#", // TODO: add your LinkedIn profile URL
      icon: "in",
    },
    {
      label: "Instagram",
      value: "@1h_home",
      href: "https://www.instagram.com/1h_home/",
      icon: "◎",
    },
  ];

  const contactsSectionStyle = {
    padding: "80px 24px 120px",
    background: "#141414",
  };

  const contactsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1px",
    background: "#2a2a2a",
    maxWidth: "1100px",
    margin: "64px auto 0",
  };

  const contactItemStyle = {
    background: "#0a0a0a",
    padding: "48px 24px",
    textAlign: "center",
    color: "#fff",
    textDecoration: "none",
    display: "block",
    opacity: 0,
  };

  const contactIconStyle = {
    fontSize: "1.6rem",
    color: "#b8a88a",
    marginBottom: "16px",
    fontFamily: "serif",
  };

  const contactLabelStyle = {
    fontFamily: "serif",
    fontSize: "1.1rem",
    color: "#fff",
    marginBottom: "8px",
  };

  const contactValueStyle = {
    color: "#999",
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
  };

  const formSectionStyle = {
    padding: "0 24px 140px",
    background: "#141414",
    display: "flex",
    justifyContent: "center",
  };

  const formStyle = {
    width: "100%",
    maxWidth: "560px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    opacity: 0,
  };

  const inputStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #3a3a3a",
    color: "#fff",
    fontSize: "1rem",
    padding: "14px 4px",
    outline: "none",
    fontFamily: "inherit",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "120px",
  };

  const submitStyle = {
    marginTop: "12px",
    alignSelf: "flex-start",
    padding: "16px 40px",
    border: "1px solid #b8a88a",
    background: "transparent",
    color: "#b8a88a",
    fontSize: "0.85rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "inherit",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const name = formEl.name.value;
    const email = formEl.email.value;
    const message = formEl.message.value;
    window.location.href = `mailto:sansana296@gmail.com?subject=Project Inquiry from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(
      email
    )}`;
  };

  return (
    <>
      <section style={heroStyle}>
        <div style={overlayStyle} />
        <div style={grainStyle} />
        <div style={contentStyle}>
          <span style={eyebrowStyle}>1H-Home · Contact</span>
          <h1 ref={headlineRef} style={headlineStyle}>
            Let's build your story.
          </h1>
          <p ref={subRef} style={subStyle}>
            Have a project in mind? Reach out and let's talk about how we
            can bring it to life.
          </p>
        </div>
      </section>

      <section style={introSectionStyle}>
        <p ref={introRef} style={introTextStyle}>
          Reach us directly, or drop your details below and we'll get back
          to you shortly.
        </p>
      </section>

      <section style={contactsSectionStyle} ref={contactsRef}>
        <div style={contactsGridStyle}>
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="contact-item"
              style={contactItemStyle}
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
            >
              <div style={contactIconStyle}>{c.icon}</div>
              <div style={contactLabelStyle}>{c.label}</div>
              <div style={contactValueStyle}>{c.value}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={formSectionStyle}>
        <form ref={formRef} style={formStyle} onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            style={textareaStyle}
            name="message"
            placeholder="Tell us about your project"
            required
          />
          <button
            type="submit"
            style={submitStyle}
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
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}