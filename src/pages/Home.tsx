import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";
import "../dark-theme.css";
import { Link } from "react-router-dom";
// import Typing from "react-typing-effect";

export default function Home() {
    const { language } = useContext(LanguageContext);
    const cvUrl = "/nikohoffren-cv.pdf";

    return (
        <>
            <div className="container"></div>
            <section>
                <div className="bio-info">
                    <div className="header2-hero">
                        <div className="header2-info">
                            <h1>
                                {language === "en"
                                    ? "I'm Niko Hoffrén"
                                    : "Olen Niko Hoffrén"}
                            </h1>
                            <h2>
                                {/* <Typing
                                    cursorClassName="red-text"
                                    speed={30}
                                    eraseSpeed={30}
                                    text={[
                                        language === "en"
                                            ? "Software developer & music producer"
                                            : "Ohjelmistokehittäjä ja musiikintuottaja",
                                    ]}
                                /> */}
                                {[
                                    language === "en"
                                        ? "Software developer"
                                        : "Ohjelmistokehittäjä",
                                ]}
                            </h2>
                            <div className="medium-margin-bottom">
                                <Link className="hire-me-button" to="/contact">
                                    {language === "en" ? "HIRE ME" : "PALKKAA MINUT"}
                                </Link>
                            </div>

                            {/* mobile profile image */}
                            <img
                                src="NHphoto3.png"
                                alt="Niko Hoffrén"
                                id="NHPhoto"
                                className="mobileNHPhoto hidden"
                            />

                            <div className="hyphens">
                                <p>
                                    {language === "en"
                                        ? "Welcome to my website! I'm software developer from Kuopio, Finland. In my spare time i like to spend time with my son, play video games and code something interesting."
                                        : "Tervetuloa kotisivuilleni! Olen ohjelmistokehittäjä Kuopiosta, Suomesta. Vapaa-aikanani tykkään viettää aikaa poikani kanssa, pelata videopelejä sekä koodata jotain mielenkiintoista."}
                                </p>

                                <p>
                                    {language === "en" ? (
                                        <>
                                            The page you are currently reading
                                            has been created using Vite and
                                            React with TypeScript. In addition,
                                            I have developed, among other
                                            things, various projects which you
                                            can find in the{" "}
                                            <Link
                                                className="projects-link"
                                                to="/projects"
                                            >
                                                Projects
                                            </Link>
                                            -section.
                                        </>
                                    ) : (
                                        <>
                                            Sivu jota luet tällä hetkellä on
                                            luotu Viten avulla käyttäen Reactia
                                            TypeScriptin kera. Lisäksi olen
                                            tehnyt lukuisasti muita projekteja joista lisätietoja löydät{" "}
                                            <Link
                                                className="projects-link"
                                                to="/projects"
                                            >
                                                Projektit
                                            </Link>
                                            -osiosta.
                                        </>
                                    )}
                                </p>

                                <p>
                                    {language === "en"
                                        ? "In total I have +15 years of work experience in areas like business sales consultanting, logistics industry and earlier education from the field of Business Administration in Customer service and Marketing."
                                        : "Kokonaisuudessaan minulla on yli 15 vuoden työkokemus eri aloilta, kuten yritysmyyntineuvottelijana toimimisesta, logistiikka-alalta sekä aiemmin hankitusta koulutuksesta liiketalouden alalta asiakaspalvelussa ja markkinoinnissa."}
                                </p>
                            </div>
                            <br />
                            <h4>
                                {language === "en"
                                    ? "You can download my CV here:"
                                    : "Lataa CV:ni tästä linkistä:"}
                            </h4>
                            <a
                                href={cvUrl}
                                download
                                className="cv-download-button"
                            >
                                {language === "en" ? "Download CV" : "Lataa CV"}
                            </a>
                            <br />
                        </div>

                        <div className="header2-img-box">
                            <img
                                src="NH-photo3.JPG.png"
                                alt="Niko Hoffrén"
                                className="front-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
