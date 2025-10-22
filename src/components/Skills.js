// src/components/Skills.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const skills = ["React / React Native", "Node.js / Express", "Python / ML (CatBoost)", "Flask / Docker", "MongoDB / SQL", "Git & CI/CD"];
  return (
    <section style={{marginTop:18}}>
      <div className="section-title">{t("skillsTitle")}</div>
      <div className="grid">
        {skills.map((s) => (
          <div key={s} className="card">{s}</div>
        ))}
      </div>
    </section>
  );
}
