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
                <div className="container">
                    <div className="bio-info">
                        <img
                            src="NHphoto2.jpg"
                            id="NHphoto"
                            alt="Picture of very handsome Niko Hoffrén"
                        />
                        <br />
                        <p>
                            {language === "en"
                                ? "Hi! I'm Niko Hoffrén, programmer and music producer from Kuopio, Finland. In my spare time i like to spend time with my son, play video games and code something interesting."
                                : "Hei! Olen Niko Hoffrén, ohjelmistokehittäjä ja musiikintuottaja Kuopiosta. Vapaa-aikanani tykkään viettää aikaa poikani kanssa, pelata videopelejä sekä koodata jotain mielenkiintoista."}
                        </p>
                        <p>
                            {language === "en"
                                ? "My first programming language was Java, after which I delved into the world of HTML, CSS, and JavaScript. My knowledge of programming languages, as well as various development platforms and APIs, has grown over the years."
                                : "Ensimmäinen ohjelmointikieleni oli Java, jonka jälkeen siirryin HTML:n, CSS:n sekä JavaScriptin maailmaan. Tietoni ohjelmointikielistä kuten myös erilaisista kehitysalustoista ja rajapinnoista on kasvanut vuosien aikana."}
                        </p>
                        <p>
                            {language === "en"
                                ? "The page you are reading right now is made with React, Vite and TypeScript. You can find more info about my other projects from the Web development section."
                                : "Sivu jota luet tällä hetkellä on tehty Reactin, Viten sekä TypeScriptin avulla. Lisätietoja muista projekteistani löydät Web-kehitys -osiosta."}
                        </p>
                        <p>
                            {language === "en"
                                ? "I have work experience in areas like being a business sales consultant, from the logistics industry and earlier education from the field of Business Administration in Customer service and Marketing."
                                : "Minulla on työkokemusta mm. yritysmyyntineuvottelijana olemisesta, logistiikka-alalta sekä aiempana koulutuksena Liiketalouden perustutkinto asiakaspalvelu ja markkinointi linjalta."}
                        </p>
                        <p>
                            {language === "en"
                                ? "I'm currently studying Software development in "
                                : "Opiskelen tällä hetkellä ohjelmistokehitystä "}{" "}
                            <a
                                href="https://sakky.fi/fi"
                                target="_blank"
                                className="red-text"
                            >
                                {language === "en"
                                    ? "Savon Ammattiopisto"
                                    : "Savon Ammattiopistossa"}
                            </a>
                            {language === "en"
                                ? " at Kuopio, Finland and hope to graduate in 2024."
                                : " Kuopiossa, josta tulen valmistumaan keväällä 2024."}
                        </p>
                    </div>
                </div>

                <hr />
                <br />

                <div className="container">
                    <h3>
                        {language === "en" ? "WEB DEVELOPMENT" : "WEB-KEHITYS"}
                    </h3>
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
                            ? "Download my CV from "
                            : "Lataa CV:ni "}{" "}
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

                    <p>
                        {language === "en"
                            ? "PROGRAMMING LANGUAGES AND FRAMEWORKS:"
                            : "OHJELMOINTIKIELET JA RAJAPINNAT:"}
                    </p>
                    <p>
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>SQL (MySQL)</li>
                            <li>Java</li>
                            <li>Dart (Flutter)</li>
                            <li>Ruby (on Rails)</li>
                        </ul>
                    </p>
                    <p>
                        {language === "en"
                            ? "LINKEDIN SKILLS ASSESSMENT BADGES:"
                            : "LINKEDIN OSAAMISEN ARVIOINTIMERKIT:"}
                    </p>
                    <p>
                        <ul>
                            <li>GNU/Linux</li>
                            <li>Node.js</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>PHP</li>
                            <li>Ruby on Rails</li>
                            <li>Object-Oriented Programming (OOP)</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Microsoft PowerPoint</li>
                            <li>Pro Tools</li>
                        </ul>
                    </p>

                    <div className="row">
                        <div className="portfolio-col">
                            <a
                                href="https://kuopionjulkinenliikenne.live"
                                target="_blank"
                            >
                                <img src="vilkku-logo.png" alt="Vilkku logo" />
                                <h3>
                                    {language === "en"
                                        ? "KUOPIO PUBLIC TRANSPORT"
                                        : "KUOPION JULKINEN LIIKENNE (KUOPIO PUBLIC TRANSPORT)"}
                                </h3>
                                <p>
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
                                <p className="arial">
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
                                <h3>
                                    {language === "en"
                                        ? "HONEYHOLIC'S HONEY"
                                        : "HUNAJAHOLISTIN HUNAJA"}
                                </h3>
                                <p>
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
                                <p className="arial">
                                    hunajaholisti.fi
                                    <br />
                                    {language === "en"
                                        ? "2021 - present"
                                        : "2021 - nykyhetki"}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <br />
                <hr />

                <div className="container">
                    <div className="bio-info">
                        <h3>
                            {language === "en"
                                ? "MUSIC PRODUCING & AUDIO ENGINEERING"
                                : "MUSIIKIN TUOTANTO SEKÄ MIKSAUS JA MASTEROINTI"}
                        </h3>
                        <p>
                            {language === "en"
                                ? "I have played keyboards from when i was 5 years old and have been making music since. Past several years i've been making electronic music with FL Studio and have released tracks with labels such as Monster Tunes, Trancespired, Trance All-Stars, Alveda, Yeiskomp and many others."
                                : "Olen soittanut koskettimia 5-vuotiaasta lähtien ja tehnyt musiikkia siitä lähtien. Viimeisten vuosien aikana olen tehnyt elektronista musiikkia FL Studiolla sekä julkaissut kappaleita levy-yhtiöillä kuin Monster Tunes, Trancespired, Trance All-Stars, Alveda, Yeiskomp ja monet muut."}
                        </p>
                        <p>
                            {language === "en"
                                ? "I have mixed and mastered tracks for artists such as"
                                : "Olen miksannut ja masteroinut kappaleita sellaisille artisteille kuin"}{" "}
                            <a
                                href="https://linktr.ee/ianjamestabone"
                                target="_blank"
                                className="red-text"
                            >
                                IanT
                            </a>{" "}
                            {language === "en" ? "and" : "ja"}{" "}
                            <a
                                href="https://www.darylg.net"
                                target="_blank"
                                className="red-text"
                            >
                                DarylG
                            </a>
                            .
                        </p>
                        <p>
                            {language === "en"
                                ? "Currently i also play keyboards in"
                                : "Soitan myös koskettimia yhtyeessä"}{" "}
                            <a
                                href="https://www.instagram.com/forsakengodsofficial/"
                                target="_blank"
                                className="red-text"
                            >
                                Forsaken Gods
                            </a>
                            ,{" "}
                            {language === "en"
                                ? "which is a power metal band based in Helsinki. In my past career i've made music with"
                                : "joka on Helsingissä toimiva power metal -yhtye. Aiemmin urallani olen tehnyt musiikkia yhdessä bändien "}{" "}
                            <a
                                href="https://www.youtube.com/watch?v=v5FRxNfK7kE&ab_channel=ElektraHelsinki-Topic"
                                target="_blank"
                                className="red-text"
                            >
                                Elektra Helsinki
                            </a>
                            , Love & Death, Precursor{" "}
                            {language === "en"
                                ? "and several others."
                                : "ja useiden muiden kanssa."}
                        </p>
                    </div>
                </div>

                <hr />
                <br />

                <div className="container">
                    <h3>
                        {language === "en"
                            ? "WORKING HISTORY/EDUCATION"
                            : "TYÖHISTORIA/KOULUTUS"}
                    </h3>
                    <p>
                        {language === "en"
                            ? "You can find my complete working history and education info in my"
                            : "Löydät koko työhistoriani sekä tietoa koulutuksestani"}{" "}
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
