// src/App.js
import React, { useEffect, useState } from "react";
import "./index.css";
import "./i18n";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState(() =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} setTheme={setTheme} i18n={i18n} />
      <main className="container">
        <AnimatePresence>
          <motion.section key="hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Hero />
          </motion.section>
        </AnimatePresence>

        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Aymen Harrache — Built with React</footer>
    </div>
  );
}
