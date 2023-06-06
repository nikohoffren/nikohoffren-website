import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Footer() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <section className="footer">
                <div className="icons">
                    <a
                        href="https://www.facebook.com/nikohoffrenmusic"
                        target="{blank}"
                    >
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/nikohoffren"
                        target="{blank}"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCwGsJfqeCbZePUcrOvc-F2w"
                        target="{blank}"
                    >
                        <i className="fa fa-youtube"></i>
                    </a>
                    <a
                        href="https://open.spotify.com/artist/1iFr4SJkrSmlBYJMJ1Idqp?si=cu26iw_wT9OD_8a7dsRrlQ"
                        target="{blank}"
                    >
                        <i className="fa fa-spotify"></i>
                    </a>
                    <a
                        href="https://www.soundcloud.com/nikohoffren"
                        target="{blank}"
                    >
                        <i className="fa fa-soundcloud"></i>
                    </a>
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
                </div>

                <p className="white">
                    {language === "en"
                        ? "Personal: niko.hoffren@gmail.com"
                        : "Henkilökohtainen: niko.hoffren@gmail.com"}
                    <br />
                    {language === "en"
                        ? "Music: nikohoffrenmusic@gmail.com"
                        : "Musiikki: nikohoffrenmusic@gmail.com"}
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
                    </p>
                </div>
            </section>
        </>
    );
}
