// src/components/Projects.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// ✅ Import Touraliz gallery images
import tour1 from "../assets/projects/touraliz/1.jpg";
import tour2 from "../assets/projects/touraliz/2.jpg";
import tour3 from "../assets/projects/touraliz/3.jpg";
import tour4 from "../assets/projects/touraliz/4.jpg";

export default function Projects() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  const projects = [
    {
      id: "tbibna",
      title: t("project_tbibna"),
      subtitle: "React Native · Node.js · MongoDB",
      desc: "Booking app for Algerian doctors (search by specialty, ratings, reminders).",
      demo: "#",
      code: "#",
    },
    {
      id: "heartapi",
      title: t("project_heartapi"),
      subtitle: "Flask · CatBoost · Docker",
      desc: "Predicts cardiac risk with anomaly detection and explainability.",
      demo: "#",
      code: "#",
    },
    {
      id: "touraliz",
      title: t("project_touraliz"),
      subtitle: "React · Node.js · Payments",
      desc: "Flight & hotel booking platform with admin dashboard.",
      demo: "#",
      code: "https://github.com/AYMEN1111111111/TouDZbooKing",
      images: [tour1, tour2, tour3, tour4], // ✅ Gallery here
    },
    {
      id: "monitor",
      title: t("project_monitor"),
      subtitle: "IoT · ML · Mobile",
      desc: "Prototype for patient monitoring and alerts.",
      demo: "#",
      code: "#",
    },
  ];

  const openGallery = (p) => {
    if (!p.images) return;
    const slides = p.images.map(img => ({ src: img }));
    setSlides(slides);
    setOpen(true);
  };

  return (
    <section id="projects" style={{ marginTop: 18 }}>
      <div className="section-title">{t("projectsTitle")}</div>
      <div className="grid">
        {projects.map((p) => (
          <div key={p.id} className="card">
            {p.images && (
              <img
                src={p.images[0]}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 10,
                }}
              />
            )}

            <strong>{p.title}</strong>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>{p.subtitle}</div>

            <p style={{ marginTop: 10, color: "var(--muted)" }}>{p.desc}</p>

            <div className="project-tags">
              {/* ✅ Open gallery only on Touraliz */}
              <span
                className="btn"
                style={{ padding: "6px 10px", cursor: "pointer" }}
                onClick={() => openGallery(p)}
              >
                {t("view")}
              </span>

              <span className="btn"
  style={{ padding: "6px 10px", cursor: "pointer" }}
  onClick={(e) => {
    e.stopPropagation(); // prevents opening gallery
    if (p.code && p.code !== "#") window.open(p.code, "_blank");
  }}
>
  {t("code")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Lightbox Gallery */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Thumbnails]}
      />
    </section>
  );
}
