import React, { useState, useMemo, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import "./tailwind.css";
import { LanguageContext } from "./common/components/LanguageContext";
import { SectionRefContext } from "./common/components/SectionRefContext";
import PageTransition from "./common/components/PageTransition";

function App() {
  const skillsSectionRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Scroll Progress Bar
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.querySelector(
        ".scroll-progress"
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    // Section Animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".section-animate").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = theme === "dark" ? "bg-color-dark" : "bg-color-light";
  const textClass = theme === "dark" ? "font-color-light" : "font-color-dark";

  return (
    <div className={`${bgClass} ${textClass} min-h-screen`}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress"></div>

      <LanguageContext.Provider value={value}>
        <SectionRefContext.Provider value={skillsSectionRef}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <div className="page-content">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <PageTransition>
                      <Projects />
                    </PageTransition>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  }
                />
              </Routes>
            </AnimatePresence>
          </div>
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </SectionRefContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
