import { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Auto-imports every image AND video inside src/assets/work/<any-folder>/
// Add more files to a category folder later and they'll appear automatically —
// no code changes needed.
const modules = import.meta.glob(
  "../assets/work/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,mp4,webm,mov,MP4,WEBM,MOV}",
  { eager: true, import: "default" }
);

const videoExtensions = ["mp4", "webm", "mov"];
const isVideo = (path) => {
  const ext = path.split(".").pop().toLowerCase();
  return videoExtensions.includes(ext);
};

const categoryLabels = {
  cloth: "Clothing & Apparel",
  "cover-front": "Cover Fronts",
  hotels: "Hotels",
  poster: "Posters",
  "visiting-card": "Visiting Cards",
};

export default function CategoryPage() {
  const { slug } = useParams();
  const [selected, setSelected] = useState(null);

  const images = Object.entries(modules)
    .filter(([path]) => path.includes(`/work/${slug}/`))
    .map(([path, src]) => ({ path, src }));

  const label = categoryLabels[slug] || slug;

  // ---------- styles ----------
  const pageStyle = {
    background: "#141414",
    minHeight: "100vh",
    padding: "140px 24px 100px",
  };

  const headerStyle = { textAlign: "center", marginBottom: "56px" };

  const backLinkStyle = {
    color: "#b8a88a",
    fontSize: "0.85rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "24px",
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
    fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
    color: "#fff",
    margin: 0,
  };

  const countStyle = { color: "#777", fontSize: "0.9rem", marginTop: "12px" };

  const gridStyle = {
    columnCount: 3,
    columnGap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const itemStyle = {
    breakInside: "avoid",
    marginBottom: "20px",
    borderRadius: "6px",
    overflow: "hidden",
    cursor: "pointer",
    display: "block",
    position: "relative",
  };

  const playBadgeStyle = {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "rgba(10,10,10,0.65)",
    color: "#fff",
    fontSize: "0.85rem",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  };

  const imgStyle = {
    width: "100%",
    display: "block",
    transition: "transform 0.4s ease, filter 0.4s ease",
  };

  const emptyStateStyle = {
    textAlign: "center",
    color: "#777",
    fontSize: "1rem",
    marginTop: "40px",
  };

  const lightboxStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(10,10,10,0.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "40px 24px",
    cursor: "zoom-out",
  };

  const lightboxImgStyle = {
    maxWidth: "100%",
    maxHeight: "90vh",
    borderRadius: "4px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "28px",
    right: "36px",
    color: "#fff",
    fontSize: "1.8rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  return (
    <section style={pageStyle}>
      <div style={headerStyle}>
        <Link to="/work" style={backLinkStyle}>
          ← Back to Work
        </Link>
        <div style={eyebrowStyle}>Category</div>
        <h1 style={titleStyle}>{label}</h1>
        <p style={countStyle}>
          {images.length} {images.length === 1 ? "piece" : "pieces"}
        </p>
      </div>

      {images.length === 0 ? (
        <p style={emptyStateStyle}>
          No images added to this category yet — check back soon.
        </p>
      ) : (
        <div style={gridStyle}>
          {images.map((img) => {
            const video = isVideo(img.path);
            return (
              <div
                key={img.path}
                style={itemStyle}
                onClick={() => setSelected(img)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget.querySelector("img, video");
                  if (el) el.style.filter = "brightness(1.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget.querySelector("img, video");
                  if (el) el.style.filter = "brightness(1)";
                }}
              >
                {video ? (
                  <video
                    src={img.src}
                    style={imgStyle}
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={img.src} alt={label} style={imgStyle} />
                )}
                {video && <span style={playBadgeStyle}>▶</span>}
              </div>
            );
          })}
        </div>
      )}

      {selected && (
        <div style={lightboxStyle} onClick={() => setSelected(null)}>
          <button style={closeBtnStyle} onClick={() => setSelected(null)}>
            ✕
          </button>
          {isVideo(selected.path) ? (
            <video
              src={selected.src}
              style={lightboxImgStyle}
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img src={selected.src} alt={label} style={lightboxImgStyle} />
          )}
        </div>
      )}
    </section>
  );
}