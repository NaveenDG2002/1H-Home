import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your email provider (Mailchimp, Formspree, etc.)
    setSubscribed(true);
    setEmail("");
  };

  const services = [
    { slug: "cloth", label: "Clothing & Apparel" },
    { slug: "cover-front", label: "Cover Fronts" },
    { slug: "hotels", label: "Hotels" },
    { slug: "poster", label: "Posters" },
    { slug: "visiting-card", label: "Visiting Cards" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const socials = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "WhatsApp", href: "https://wa.me/" },
  ];

  // ---------- styles ----------
  const footerStyle = {
    background: "#0f0f0f",
    color: "#ddd",
    borderTop: "1px solid #2a2a2a",
    padding: "80px 24px 32px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const topGridStyle = {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr 1fr 1.2fr",
    gap: "48px",
    paddingBottom: "56px",
  };

  const brandNameStyle = {
    fontFamily: "serif",
    fontSize: "1.6rem",
    color: "#fff",
    margin: 0,
  };

  const brandTagStyle = {
    color: "#999",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    marginTop: "16px",
    maxWidth: "320px",
  };

  const headingStyle = {
    color: "#b8a88a",
    fontSize: "0.8rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "20px",
    fontWeight: 500,
  };

  const linkListStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const linkStyle = {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.25s ease",
  };

  const contactItemStyle = {
    color: "#ccc",
    fontSize: "0.95rem",
    marginBottom: "12px",
    lineHeight: 1.6,
  };

  const formStyle = {
    display: "flex",
    marginTop: "8px",
    border: "1px solid #333",
    borderRadius: "4px",
    overflow: "hidden",
  };

  const inputStyle = {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    padding: "12px 14px",
    color: "#fff",
    fontSize: "0.9rem",
  };

  const subscribeBtnStyle = {
    background: "#b8a88a",
    color: "#141414",
    border: "none",
    padding: "0 18px",
    fontSize: "0.85rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: 600,
  };

  const socialRowStyle = {
    display: "flex",
    gap: "16px",
    marginTop: "24px",
    flexWrap: "wrap",
  };

  const socialLinkStyle = {
    color: "#999",
    textDecoration: "none",
    fontSize: "0.85rem",
    border: "1px solid #333",
    borderRadius: "999px",
    padding: "6px 16px",
    transition: "all 0.25s ease",
  };

  const dividerStyle = {
    borderTop: "1px solid #222",
    paddingTop: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  };

  const bottomTextStyle = {
    color: "#777",
    fontSize: "0.82rem",
  };

  const bottomLinksStyle = {
    display: "flex",
    gap: "24px",
  };

  const bottomLinkStyle = {
    color: "#777",
    textDecoration: "none",
    fontSize: "0.82rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={topGridStyle} className="footer-grid">
          {/* Brand */}
          <div>
            <p style={brandNameStyle}>1H-Home</p>
            <p style={brandTagStyle}>
              A full-service visual studio shaping brands through video,
              photography, and graphic design — across apparel, hospitality,
              print, and identity work.
            </p>
            <div style={socialRowStyle}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialLinkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#b8a88a";
                    e.currentTarget.style.borderColor = "#b8a88a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#999";
                    e.currentTarget.style.borderColor = "#333";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={headingStyle}>Explore</p>
            <ul style={linkListStyle}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#b8a88a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={headingStyle}>Services</p>
            <ul style={linkListStyle}>
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/work/${s.slug}`}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#b8a88a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <p style={headingStyle}>Get in Touch</p>
            <p style={contactItemStyle}>hello@1h-home.com</p>
            <p style={contactItemStyle}>+94 7X XXX XXXX</p>
            <p style={contactItemStyle}>Negombo, Sri Lanka</p>

            <p style={{ ...headingStyle, marginTop: "28px" }}>Newsletter</p>
            {subscribed ? (
              <p style={{ color: "#b8a88a", fontSize: "0.9rem" }}>
                Thanks — you're on the list.
              </p>
            ) : (
              <form style={formStyle} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                />
                <button type="submit" style={subscribeBtnStyle}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={dividerStyle}>
          <p style={bottomTextStyle}>
            © {year} 1H-Home. All rights reserved.
          </p>
          <div style={bottomLinksStyle}>
            <a href="/privacy" style={bottomLinkStyle}>
              Privacy Policy
            </a>
            <a href="/terms" style={bottomLinkStyle}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}