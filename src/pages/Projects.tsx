import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Projects() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    const cvUrl = "/nikohoffren-cv.pdf";

    return (
        <>
            <section className="bio">
                <div className="extra-margin-top" />

                <h1>{language === "en" ? "PROJECTS" : "PROJEKTIT"}</h1>

                <div className="small-extra-margin" />

                <div className="container">
                    <p>
                        {language === "en"
                            ? "Find all of my projects on "
                            : "Löydät kaikki projektini "}{" "}
                        <a
                            href="https://www.github.com/nikohoffren"
                            className="red-text"
                            target="_blank"
                        >
                            {language === "en" ? "Github" : "Githubista"}
                        </a>
                        .
                    </p>
                    <p>
                        {language === "en"
                            ? "Be sure to also check out my "
                            : "Tutustu myös "}{" "}
                        <a
                            href="https://www.freecodecamp.org/nikohoffren"
                            className="red-text"
                            target="_blank"
                        >
                            freeCodeCamp
                        </a>{" "}
                        {language === "en" ? "account." : "tiliini."}
                    </p>
                    <p>
                        {language === "en"
                            ? "You can also find all of my music production related info on "
                            : "Löydät myös kaikki musiikkituotantooni liittyvät tiedot täältä: "}{" "}
                        <a
                            href="https://nikohoffrenmusic.netlify.app"
                            className="red-text"
                            target="_blank"
                        >
                            nikohoffrenmusic.netlify.app
                        </a>{" "}
                    </p>
                    <p>
                        {language === "en" ? "Download my CV " : "Lataa CV:ni "}{" "}
                        <a
                            href={cvUrl}
                            download
                            className="red-text"
                            target="_blank"
                        >
                            {language === "en" ? "here" : "täältä"}
                        </a>
                        .
                    </p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="portfolio-col">
                            <a
                                href="https://kuopionjulkinenliikenne.live"
                                target="_blank"
                            >
                                <img src="vilkku-logo.png" alt="Vilkku logo" />
                                <h3 className="red-text">
                                    {language === "en"
                                        ? "KUOPIO PUBLIC TRANSPORT - Website"
                                        : "KUOPION JULKINEN LIIKENNE (KUOPIO PUBLIC TRANSPORT) - Verkkosivusto"}
                                </h3>
                                <p className="red-text">
                                    {language === "en"
                                        ? "Website for all the Kuopio/Siilinjärvi region Vilkku busses, Vilkku bicycles and Biketaxis current locations, stops and routes. Made with JavaScript + Netlify functions."
                                        : "Verkkosivusto josta käyttäjä näkee kaikki Kuopion sekä Siilinjärven alueen Vilkku bussien, Vilkku fillarien sekä Biketaxien sijainnit, pysäkit sekä reitit. Työkalut: JavaScript + Netlify Functions."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/kuopio-public-transport"
                                    target="_blank"
                                    className="portfolio-col-link"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="arial red-text">
                                    kuopionjulkinenliikenne.live
                                    <br />
                                    2023
                                </p>
                            </a>
                        </div>

                        <div className="portfolio-col">
                            <a
                                href="https://www.hunajaholisti.fi"
                                target="_blank"
                            >
                                <img
                                    src="HHlahja.jpg"
                                    alt="Bottle of delicious honey from Hunajaholistin Hunaja"
                                />
                                <h3 className="red-text">
                                    {language === "en"
                                        ? "HONEYHOLIC'S HONEY - Website"
                                        : "HUNAJAHOLISTIN HUNAJA - Verkkosivusto"}
                                </h3>
                                <p className="red-text">
                                    {language === "en"
                                        ? "This is a Finnish commercial website for selling honey-products. Made with React, Vite and TypeScript."
                                        : "Suomalainen hunajanmyyntisivusto. Työkalut: React, Vite ja TypeScript."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/hunajaholisti-homepage"
                                    target="_blank"
                                    className="portfolio-col-link"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="arial red-text">
                                    hunajaholisti.fi
                                    <br />
                                    {language === "en"
                                        ? "2021 - present"
                                        : "2021 - nykyhetki"}
                                </p>
                            </a>
                        </div>

                        <div className="portfolio-col">
                            <a
                                href="https://github.com/nikohoffren/stolen-or-not-app"
                                target="_blank"
                            >
                                <img src="stolen-gear-logo.jpeg" alt="StolenOrNot? app logo" />
                                <h3 className="red-text">
                                    {language === "en"
                                        ? "StolenOrNot? (Flutter App)"
                                        : "StolenOrNot? (Flutter Mobiilisovellus)"}
                                </h3>
                                <p className="red-text">
                                    {language === "en"
                                        ? "This Flutter application is built to help people keep track of their valuable devices and protect them from theft. It allows users to register their devices, such as computers, cars, musical instruments, and more by entering a name and a unique serial number for each device. If a device gets stolen, users can mark it as such in the app. That way, if someone is selling the device in question, people will be able to check whether the device is already registered to someone in the app."
                                        : "Tämä Flutter-sovellus on rakennettu auttamaan ihmisiä pitämään kirjaa arvokkaista laitteistaan ja suojaamaan niitä varkauksilta. Se mahdollistaa käyttäjille laitteiden, kuten tietokoneiden, autojen, musiikki-instrumenttien ja muiden, rekisteröimisen syöttämällä nimen ja ainutlaatuisen sarjanumeron jokaiselle laitteelle. Jos laite varastetaan, käyttäjät voivat merkitä sen sovelluksessa varastetuksi. Tällä tavoin, jos joku yrittää myydä kyseistä laitetta, ihmiset voivat tarkistaa, onko laite jo rekisteröity sovelluksessa jollekin."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/stolen-or-not-app"
                                    target="_blank"
                                    className="portfolio-col-link"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="arial red-text">2023</p>
                            </a>
                        </div>

                        <div className="portfolio-col">
                            <a
                                href="https://github.com/nikohoffren/kiss-css"
                                target="_blank"
                            >
                                <img
                                    src="kiss-css-logo.jpg"
                                    alt="KISS CSS logo"
                                />
                                <h3 className="red-text">
                                    {language === "en"
                                        ? "KISS CSS Framework"
                                        : "KISS CSS Kehys"}
                                </h3>
                                <p className="red-text">
                                    {language === "en"
                                        ? "KISS (Keep It Simple Stylesheets) is a simple, lightweight CSS framework designed for ease of use. It provides a collection of reusable CSS classes and components to quickly style your web projects. Published as npm-package. The website and detailed documentation are still in the production phase."
                                        : "KISS (Keep It Simple Stylesheets) on yksinkertainen ja kevyt CSS-kehys, joka on suunniteltu helppokäyttöisyyttä ajatellen. Se tarjoaa kokoelman uudelleenkäytettäviä CSS-luokkia ja komponentteja, joiden avulla voit nopeasti tyylittää verkkoprojektejasi. Julkaistu npm-pakettina. Web-sivusto ja tarkempi dokumentaatio on vielä tuotantovaiheessa."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/kiss-css"
                                    target="_blank"
                                    className="portfolio-col-link"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="arial red-text">2023</p>
                            </a>
                        </div>

                        <div className="portfolio-col">
                            <a
                                href="https://github.com/nikohoffren/smart-meeting-scheduler"
                                target="_blank"
                            >
                                <img
                                    src="smart-meeting-scheduler-logo.jpg"
                                    alt="KISS CSS logo"
                                />
                                <h3 className="red-text">
                                    {language === "en"
                                        ? "Smart Meeting Scheduler Chrome Extension"
                                        : "Smart Meeting Scheduler Chrome -laajennus"}
                                </h3>
                                <p className="red-text">
                                    {language === "en"
                                        ? "The Smart Meeting Scheduler Chrome Extension is a powerful tool designed to simplify and streamline the process of scheduling meetings using Google Calendar. It automatically finds the best meeting times that work for all attendees, eliminating the need for back-and-forth emails and reducing scheduling conflicts. Written mostly in JavaScript."
                                        : "Smart Meeting Scheduler Chrome -laajennus on tehokas työkalu, joka on suunniteltu helpottamaan ja tehostamaan kokousten ajanvaraamisprosessia käyttäen Google-kalenteria. Se etsii automaattisesti parhaat kokousajat, jotka sopivat kaikille osallistujille, poistaen tarpeen lähettää edestakaisia sähköposteja ja vähentäen aikatauluristiriitoja. Koodattu pääosin JavaScriptillä."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/smart-meeting-scheduler"
                                    target="_blank"
                                    className="portfolio-col-link"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="arial red-text">2023</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="small-margin-bottom" />
            </section>
        </>
    );
}
