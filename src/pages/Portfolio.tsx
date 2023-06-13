import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Portfolio() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    const cvUrl = "/nikohoffren-cv.pdf";

    return (
        <>
            <section className="bio">
                <div className="extra-margin-top" />

                <h1>PORTFOLIO</h1>

                <div className="small-extra-margin" />

                <div className="container small-margin-bottom">

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
                <hr />
                <br />
                <div className="container">
                    <p>
                        {language === "en"
                            ? "PROGRAMMING LANGUAGES AND FRAMEWORKS:"
                            : "OHJELMOINTIKIELET JA RAJAPINNAT:"}
                    </p>
                    <p>
                        <div className="container-left-align">
                            <ul>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>PHP</li>
                                <li>SQL (MySQL, MariaDB)</li>
                                <li>Java</li>
                                <li>Dart (Flutter)</li>
                                <li>Ruby (on Rails)</li>
                            </ul>
                        </div>
                    </p>
                    <p>
                        {language === "en"
                            ? "LINKEDIN SKILLS ASSESSMENT BADGES:"
                            : "LINKEDIN OSAAMISEN ARVIOINTIMERKIT:"}
                    </p>
                    <p>
                        <div className="container-left-align">
                            <ul>
                                <li>GNU/Linux</li>
                                <li>Bash</li>
                                <li>Node.js</li>
                                <li>REST APIs</li>
                                <li>JSON</li>
                                <li>JavaScript</li>
                                <li>Cascading Style Sheets (CSS)</li>
                                <li>React.js</li>
                                <li>PHP</li>
                                <li>Ruby on Rails</li>
                                <li>Eclipse IDE</li>
                                <li>Object-Oriented Programming (OOP)</li>
                                <li>WordPress</li>
                                <li>Google Cloud Platform (GCP)</li>
                                <li>Search Engine Optimization (SEO)</li>
                                <li>Microsoft PowerPoint</li>
                                <li>Pro Tools</li>
                            </ul>
                        </div>
                    </p>

                    <div className="row">
                        <div className="portfolio-col">
                            <a
                                href="https://kuopionjulkinenliikenne.live"
                                target="_blank"
                            >
                                <img src="vilkku-logo.png" alt="Vilkku logo" />
                                <h3 className="red-text">
                                    {language === "en"
                                        ? "KUOPIO PUBLIC TRANSPORT"
                                        : "KUOPION JULKINEN LIIKENNE (KUOPIO PUBLIC TRANSPORT)"}
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
                                        ? "HONEYHOLIC'S HONEY"
                                        : "HUNAJAHOLISTIN HUNAJA"}
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
                                        ? "The Smart Meeting Scheduler Chrome Extension is a powerful tool designed to simplify and streamline the process of scheduling meetings using Google Calendar. It automatically finds the best meeting times that work for all attendees, eliminating the need for back-and-forth emails and reducing scheduling conflicts. Written mostly in JavaScript. (Currently in development)"
                                        : "Smart Meeting Scheduler Chrome -laajennus on tehokas työkalu, joka on suunniteltu helpottamaan ja tehostamaan kokousten ajanvaraamisprosessia käyttäen Google-kalenteria. Se etsii automaattisesti parhaat kokousajat, jotka sopivat kaikille osallistujille, poistaen tarpeen lähettää edestakaisia sähköposteja ja vähentäen aikatauluristiriitoja. Koodattu pääosin JavaScriptillä. (Vielä tuotantovaiheessa)"}
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

                <br />
                <hr />

                <div className="container">
                    <h3>
                        {language === "en"
                            ? "WORKING HISTORY/EDUCATION"
                            : "TYÖHISTORIA/KOULUTUS"}
                    </h3>
                    <p>
                        {language === "en"
                            ? "In total I have +15 years of work experience in areas like business sales consultanting, logistics industry and earlier education from the field of Business Administration in Customer service and Marketing. You can find my complete working history and education info in my"
                            : "Kokonaisuudessaan minulla on yli 15 vuoden työkokemus eri aloilta, kuten yritysmyyntineuvottelijana toimimisesta, logistiikka-alalta sekä aiemmin hankitusta koulutuksesta liiketalouden alalta asiakaspalvelussa ja markkinoinnissa. Löydät koko työhistoriani sekä tietoa koulutuksestani"}{" "}
                        <a
                            href="https://www.linkedin.com/in/nikohoffren/details/experience/"
                            target="_blank"
                            className="red-text"
                        >
                            {language === "en"
                                ? "LinkedIn"
                                : "LinkedIn-profiilistani"}
                            .
                        </a>
                    </p>
                </div>

                <br />
                <hr />
                <br />

                <div className="container">
                    <h3>{language === "en" ? "LANGUAGES" : "KIELET"}</h3>
                    <p>
                        {language === "en"
                            ? "ENGLISH - Full professional proficiency"
                            : "ENGLANTI - Täysi ammatillinen sujuvuus"}
                    </p>
                    <p>
                        {language === "en"
                            ? "FINNISH - Native or bilingual proficiency"
                            : "SUOMI - Äidinkieli tai kaksikielinen sujuvuus"}
                    </p>
                    <p>
                        {language === "en"
                            ? "SWEDISH - Elementary proficiency"
                            : "RUOTSI - Perustason sujuvuus"}
                    </p>
                </div>

                <br />
                <hr />
                <br />
                <br />
            </section>
        </>
    );
}
