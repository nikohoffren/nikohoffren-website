import React, { useContext, useState } from "react";
import { LanguageContext } from "src/LanguageContext";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function Home() {
    const { language } = useContext(LanguageContext);
    const cvUrl = "/nikohoffren-cv.pdf";
    const [inProp, setInProp] = useState(false);

    React.useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <div className={`mx-auto container px-4 sm:px-6 lg:px-8 mt-8`}>
            <section>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-5xl font-semibold mb-2">
                            {language === "en"
                                ? "I'm Niko Hoffrén"
                                : "Olen Niko Hoffrén"}
                        </h1>
                        <h2 className="text-xl font-semibold mb-4 mt-4">
                            {language === "en"
                                ? "Software developer"
                                : "Ohjelmistokehittäjä"}
                        </h2>

                        <Link to="/contact">
                            <button className="btn btn-primary btn-ghost btn-shine">
                                {language === "en"
                                    ? "HIRE ME"
                                    : "PALKKAA MINUT"}
                            </button>
                        </Link>

                        <div className="mt-4 text-base space-y-4">
                            <p>
                                {language === "en"
                                    ? "Welcome to my website! I'm a software developer from Kuopio, Finland. In my spare time, I like to spend time with my son, play video games, and code something interesting."
                                    : "Tervetuloa kotisivuilleni! Olen ohjelmistokehittäjä Kuopiosta. Vapaa-aikanani tykkään viettää aikaa poikani kanssa, pelata videopelejä sekä koodata jotain mielenkiintoista."}
                            </p>
                            <p>
                                {language === "en"
                                    ? "The page you are currently reading has been created using Vite and React with TypeScript. In addition, I have developed, among other things, various projects which you can find in the "
                                    : "Sivu jota luet tällä hetkellä on luotu Viten avulla käyttäen Reactia TypeScriptin kera. Lisäksi olen tehnyt lukuisasti muita projekteja joista lisätietoja löydät "}
                                <Link
                                    className="underline text-blue-600 hover:text-red-600"
                                    to="/projects"
                                >
                                    {language === "en"
                                        ? "Projects"
                                        : "Projektit"}
                                </Link>
                                {language === "en" ? "-section." : "-osiosta."}
                            </p>
                            <p>
                                {language === "en"
                                    ? "Since 2019, I have been working as a music producer, as well as an audio mixer and mastering engineer. I also have nearly eight years of experience in the logistics industry, where I have held managerial positions."
                                    : "Vuodesta 2019 olen työskennellyt musiikkituottajana sekä myös audiomiksaajana ja masteroijana. Minulla on myös lähes kahdeksan vuoden kokemus logistiikka-alalta, joissa olen toiminut myös esimiestehtävissä."}
                            </p>
                        </div>
                        <h4 className="mt-4 text-lg font-semibold">
                            {language === "en"
                                ? "You can download my CV here:"
                                : "Lataa CV:ni tästä linkistä:"}
                        </h4>
                        <a
                            href={cvUrl}
                            download
                            className={`mt-2 inline-block px-1 py-3 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-sm uppercase tracking-widest`}
                        >
                            {language === "en" ? "Download CV" : "Lataa CV"}
                        </a>
                    </div>
                    <div>
                        <CSSTransition
                            in={inProp}
                            timeout={500}
                            classNames="slide"
                        >
                            <img
                                src="NH-photo3.JPG.png"
                                alt="Niko Hoffrén"
                                className="w-full h-auto"
                            />
                        </CSSTransition>
                    </div>
                </div>
            </section>
        </div>
    );
}
