import React, { useState, useMemo, useEffect, useRef } from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import "./tailwind.css";
import { LanguageContext } from "./common/components/LanguageContext";
import { SectionRefContext } from "../src/common/components/SectionRefContext";

function App() {
  const skillsSectionRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const [language, setLanguage] = useState("en");

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

  const bgClass = theme === "dark" ? "bg-color-dark" : "bg-color-light";
  const textClass = theme === "dark" ? "font-color-light" : "font-color-dark";

  return (
    <div className={`${bgClass} ${textClass} min-h-screen`}>
      <LanguageContext.Provider value={value}>
        <SectionRefContext.Provider value={skillsSectionRef}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </SectionRefContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
