import React, { useState, useMemo, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import "./index.css";
import { LanguageContext } from "./LanguageContext";

function App() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ?? "light"
    );
    const [language, setLanguage] = useState("en");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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

    return (
        <>
            <LanguageContext.Provider value={value}>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
                <Footer />
            </LanguageContext.Provider>
        </>
    );
}

export default App;
