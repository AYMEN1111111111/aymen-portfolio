// src/components/Navbar.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar({ theme, setTheme, i18n }) {
  const { t } = useTranslation();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const changeLang = (lng) => i18n.changeLanguage(lng);

  return (
    <nav className="container nav">
      <div>
        <div className="name">{t("name")}</div>
        <div className="role">{t("role")}</div>
      </div>

      <div className="header-actions">
        <button className="btn" onClick={toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
        <select className="btn" onChange={(e) => changeLang(e.target.value)} defaultValue={i18n.language}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        <a className="btn" href="mailto:aymen.harrache@gmail.com">Email</a>
      </div>
    </nav>
  );
}
