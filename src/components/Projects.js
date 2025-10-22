// src/components/Projects.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    { id: "tbibna", title: t("project_tbibna"), subtitle: "React Native · Node.js · MongoDB", desc: "Booking app for Algerian doctors (search by specialty, ratings, reminders).", demo: "#", code: "#" },
    { id: "heartapi", title: t("project_heartapi"), subtitle: "Flask · CatBoost · Docker", desc: "Predicts cardiac risk with anomaly detection and explainability.", demo: "#", code: "#" },
    { id: "touraliz", title: t("project_touraliz"), subtitle: "React · Node.js · Payments", desc: "Flight & hotel booking platform with admin dashboard.", demo: "#", code: "#" },
    { id: "monitor", title: t("project_monitor"), subtitle: "IoT · ML · Mobile", desc: "Prototype for patient monitoring and alerts.", demo: "#", code: "#" },
  ];

  return (
    <section id="projects" style={{marginTop:18}}>
      <div className="section-title">{t("projectsTitle")}</div>
      <div className="grid">
        {projects.map((p) => (
          <div key={p.id} className="card">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
              <div>
                <strong>{p.title}</strong>
                <div style={{color:"var(--muted)", fontSize:13}}>{p.subtitle}</div>
              </div>
              <div style={{color:"var(--muted)", fontSize:12}}>• live</div>
            </div>

            <p style={{marginTop:10, color:"var(--muted)"}}>{p.desc}</p>

            <div className="project-tags">
              <span className="btn" style={{padding:"6px 10px"}}>{t("view")}</span>
              <span className="btn" style={{padding:"6px 10px"}}>{t("code")}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
