import { Link } from "react-router-dom";

import clothCover from "../assets/work/clothcover.jpg";
import coverFrontCover from "../assets/work/cover-frontcover.jpg";
import hotelsCover from "../assets/work/hotelscover.jpg";
import posterCover from "../assets/work/postercover.jpg";
import visitingCardCover from "../assets/work/visiting-cardcover.jpg";

export default function Gallery() {
  const categories = [
    { slug: "cloth", label: "Clothing & Apparel", cover: clothCover },
    { slug: "cover-front", label: "Cover Fronts", cover: coverFrontCover },
    { slug: "hotels", label: "Hotels", cover: hotelsCover },
    { slug: "poster", label: "Posters", cover: posterCover },
    { slug: "visiting-card", label: "Visiting Cards", cover: visitingCardCover },
  ];

  const pageStyle = {
    background: "#141414",
    minHeight: "100vh",
    padding: "140px 24px 100px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "72px",
  };

  const eyebrowStyle = {
    color: "#b8a88a",
    letterSpacing: "3px",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    marginBottom: "16px",
  };

  const titleStyle = {
    fontFamily: "serif",
    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
    color: "#fff",
    margin: 0,
  };

  const subStyle = {
    color: "#999",
    fontSize: "1rem",
    marginTop: "16px",
    maxWidth: "560px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    position: "relative",
    height: "360px",
    borderRadius: "6px",
    overflow: "hidden",
    textDecoration: "none",
    display: "block",
    cursor: "pointer",
  };

  const cardImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.5s ease",
  };

  const cardOverlayStyle = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.75) 100%)",
  };

  const cardLabelStyle = {
    position: "absolute",
    bottom: "28px",
    left: "28px",
    right: "28px",
  };

  const cardTitleStyle = {
    fontFamily: "serif",
    fontSize: "1.4rem",
    color: "#fff",
    margin: 0,
  };

  const cardCueStyle = {
    color: "#b8a88a",
    fontSize: "0.8rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginTop: "8px",
    display: "inline-block",
  };

  const handleHoverIn = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.08)";
  };
  const handleHoverOut = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1)";
  };

  return (
    <section style={pageStyle}>
      <div style={headerStyle}>
        <span style={eyebrowStyle}>Our Work</span>
        <h1 style={titleStyle}>Explore by Category</h1>
        <p style={subStyle}>
          A look into the visual stories we've crafted across apparel,
          hospitality, print, and identity design.
        </p>
      </div>

      <div style={gridStyle}>
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/work/${c.slug}`}
            style={cardStyle}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
          >
            <img src={c.cover} alt={c.label} style={cardImgStyle} />
            <div style={cardOverlayStyle} />
            <div style={cardLabelStyle}>
              <p style={cardTitleStyle}>{c.label}</p>
              <span style={cardCueStyle}>View Work →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}