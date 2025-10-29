// src/components/Projects.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// import images for Touraliz (example)
import tour1 from "../assets/projects/touraliz/1.jpg";
import tour2 from "../assets/projects/touraliz/2.jpg";
import tour3 from "../assets/projects/touraliz/3.jpg";
import tour4 from "../assets/projects/touraliz/4.jpg";

export default function Projects() {
  const { t } = useTranslation();

  // Projects data (add other projects similarly)
  const projects = [
    {
      id: "touraliz",
      title: t("project_touraliz") || "Touraliz Voyage",
      subtitle: "React · Node.js · Payments",
      desc: "Flight & hotel booking platform with admin dashboard.",
      demo: "#",
      code: "#",
      images: [tour1, tour2, tour3, tour4],
    },
    // keep other projects if you want
  ];

  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  const openGallery = (project) => {
    // lightbox expects slides as objects { src, alt? }
    const s = project.images.map((img, idx) => ({ src: img, alt: `${project.title} screenshot ${idx + 1}` }));
    setSlides(s);
    setOpen(true);
  };

  return (
    <section id="projects" style={{ marginTop: 18 }}>
      <div className="section-title">{t("projectsTitle")}</div>
      <div className="grid">
        {projects.map((p) => (
          <div key={p.id} className="card" style={{ cursor: "pointer" }} onClick={() => openGallery(p)}>
            {/* show first image as preview */}
            {p.images && p.images.length > 0 && (
              <div style={{ height: 160, overflow: "hidden", borderRadius: 8 }}>
                <img src={p.images[0]} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}

            <div style={{ marginTop: 10 }}>
              <strong>{p.title}</strong>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>{p.subtitle}</div>
              <p style={{ marginTop: 10, color: "var(--muted)" }}>{p.desc}</p>

              <div className="project-tags" style={{ marginTop: 8 }}>
                <span className="btn" style={{ padding: "6px 10px" }}>Live</span>
                <span className="btn" style={{ padding: "6px 10px" }}>Code</span>
                <span style={{ marginLeft: 8, color: "var(--muted)", fontSize: 12 }}>Click to open gallery</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Thumbnails]}
        thumbnails={{ vignette: true }}
      />
    </section>
  );
}
