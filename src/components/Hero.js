// src/components/Hero.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero card">
      <h1>{t("heroTitle")}</h1>
      <p className="lead">{t("heroDesc")}</p>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <a href="#projects" className="btn">{t("seeProjects")}</a>
        <a href="#contact" className="btn" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>{t("contact")}</a>
      </div>

      <div className="stats">
        <div className="stat"><div style={{fontWeight:700}}>1+</div><div style={{color:"var(--muted)"}}>Years coding</div></div>
        <div className="stat"><div style={{fontWeight:700}}>2+</div><div style={{color:"var(--muted)"}}>Projects shipped</div></div>
        <div className="stat"><div style={{fontWeight:700}}>1</div><div style={{color:"var(--muted)"}}>AI Models</div></div>
      </div>
    </section>
  );
}
