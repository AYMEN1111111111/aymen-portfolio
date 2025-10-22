// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: "Aymen Harrache",
      role: "Software Engineer | AI & Full-Stack Developer",
      heroTitle: "I build systems that turn data into action",
      heroDesc: "I design and ship AI-powered full-stack apps in healthcare, travel and local marketplaces.",
      seeProjects: "See Projects",
      contact: "Contact",
      aboutTitle: "About me",
      aboutBody: "Master's in Software Engineering. I build production APIs, mobile apps and ML systems. I love clean code and shipped products.",
      skillsTitle: "Top skills",
      projectsTitle: "Selected Projects",
      contactTitle: "Get in touch",
      emailCTA: "Email me",
      project_tbibna: "Tbibna — Medical Appointment App",
      project_heartapi: "Heart Risk Predictor API",
      project_touraliz: "Touraliz Voyage — Booking Platform",
      project_monitor: "Patient Monitoring (Prototype)",
      view: "View",
      code: "Code",
    },
  },
  fr: {
    translation: {
      name: "Aymen Harrache",
      role: "Ingénieur Logiciel | IA & Développement Full-Stack",
      heroTitle: "Je crée des systèmes qui transforment les données en actions",
      heroDesc: "Je conçois et déploie des applications full-stack pilotées par l'IA dans la santé, le voyage et les marketplaces locales.",
      seeProjects: "Voir les projets",
      contact: "Contact",
      aboutTitle: "À propos",
      aboutBody: "Master en génie logiciel. Je construis des API de production, des applications mobiles et des systèmes ML. J'aime le code propre et les produits livrés.",
      skillsTitle: "Compétences principales",
      projectsTitle: "Projets sélectionnés",
      contactTitle: "Contactez-moi",
      emailCTA: "Envoyez un email",
      project_tbibna: "Tbibna — Application de rendez-vous médicaux",
      project_heartapi: "API de prédiction du risque cardiaque",
      project_touraliz: "Touraliz Voyage — Plateforme de réservation",
      project_monitor: "Surveillance des patients (Prototype)",
      view: "Voir",
      code: "Code",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
