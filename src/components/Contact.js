// src/components/Contact.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" style={{marginTop:18}}>
      <div className="section-title">{t("contactTitle")}</div>
      <div className="grid">
        <div className="card">
          <h4>Available for:</h4>
          <p style={{color:"var(--muted)"}}>Remote freelance or full-time roles. Open to opportunities.</p>
          <a className="btn" href="mailto:aymen.harrache@example.com" style={{display:"inline-block", marginTop:12}}>{t("emailCTA")}</a>
        </div>

        <div className="card">
          <h4>Contact</h4>
          <p style={{color:"var(--muted)"}}>Email: harracheaymen@gmail.com</p>
          <p style={{color:"var(--muted)"}}>GitHub: github.com/aymen11111111</p>
        </div>
      </div>
    </section>
  );
}
