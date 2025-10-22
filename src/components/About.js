// src/components/About.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section style={{marginTop:18}}>
      <div className="section-title">{t("aboutTitle")}</div>
      <div className="grid">
        <div className="card">
          <p>{t("aboutBody")}</p>
        </div>
        <div className="card">
          <h4>Quick facts</h4>
          <ul style={{color:"var(--muted)", marginTop:8}}>
            <li>Master's — Software Engineering</li>
            <li>Languages: JavaScript, Python</li>
            <li>Tools: Docker, GitHub Actions, MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
