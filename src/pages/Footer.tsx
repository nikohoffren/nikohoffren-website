import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Footer() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <section className="footer">
                <div className="icons">
                    <a
                        href="https://www.linkedin.com/in/nikohoffren"
                        target="{blank}"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://www.github.com/nikohoffren"
                        target="{blank}"
                    >
                        <i className="fa fa-github"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/nikohoffren"
                        target="{blank}"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a
                        href="https://www.twitter.com/nikohoffren"
                        target="{blank}"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>

                <p className="white">Email: niko.hoffren@gmail.com</p>
                <p className="white">
                    {language === "en" ? "My music: " : "Musiikkini: "}
                    <a
                        href="https://nikohoffrenmusic.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nikohoffrenmusic-link"
                    >
                        nikohoffrenmusic.netlify.app
                    </a>
                </p>

                <div className="center">
                    <p className="arial white">
                        {language === "en"
                            ? "Copyright © 2020-2023 Niko Hoffrén"
                            : "Tekijänoikeus © 2020-2023 Niko Hoffrén"}
                        <br />
                        {language === "en" ? "Coded with React " : "React "}
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/react.svg"
                                className="logos"
                                alt="React logo"
                            />
                        </a>{" "}
                        + Vite
                        <a
                            href="https://vitejs.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/vite.svg"
                                className="logos"
                                alt="Vite logo"
                            />
                        </a>
                        + TypeScript JSX
                        {language === "en"
                            ? ". Hosted by Netlify"
                            : " + Netlify"}
                        <a
                            href="https://www.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/netlify.png"
                                className="logos"
                                alt="Netlify logo"
                            />
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}
