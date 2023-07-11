import React, { useState, useMemo, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import './tailwind.css'
import { LanguageContext } from "./components/LanguageContext";

function App() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?? "dark"
    );
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

    const bgClass = theme === "dark" ? 'bg-gray-700' : 'bg-white';
    const textClass = theme === "dark" ? 'text-white' : 'text-black';

    return (
        <div className={`${bgClass} ${textClass} min-h-screen`}>
            <LanguageContext.Provider value={value}>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </LanguageContext.Provider>
        </div>
    );
}

export default App;
