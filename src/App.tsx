import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import Gear from "./pages/Gear";
import Portfolio from "./pages/Portfolio";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import "./index.css";
import { LanguageContext } from "./LanguageContext";

function App() {
    const [language, setLanguage] = useState("en");

    const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

    return (
        <>
            <LanguageContext.Provider value={value}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/gear" element={<Gear />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
                <Footer />
            </LanguageContext.Provider>
        </>
    );
}

export default App;
