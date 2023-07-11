import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

interface LanguageSelectorProps {
    setLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ setLanguage }) => {
    const { language } = useContext(LanguageContext);

    const handleClick = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <div className="language-selector flex items-center space-x-2">
            <button
                onClick={() => handleClick("fi")}
                className={language === "fi" ? "active" : ""}
            >
                <img
                    src="./Flag_of_Finland.svg.png"
                    alt="Finnish Flag"
                    className="language-flag h-6 w-auto hover:scale-110"
                />
            </button>
            <button
                onClick={() => handleClick("en")}
                className={language === "en" ? "active" : ""}
            >
                <img
                    src="./Flag_of_the_United_Kingdom_(1-2).svg.png"
                    alt="British Flag"
                    className="language-flag h-6 w-10 hover:scale-110"
                />
            </button>
        </div>
    );
};

export default LanguageSelector;
