import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Portfolio() {
  const { language } = useContext(LanguageContext) as {
    language: string;
    setLanguage: (language: string) => void;
  };
  return <>

<section className="bio">
    <div className="extra-margin-top" />

    <h1>PORTFOLIO</h1>
    <div className="container">
        <div className="bio-info">
        <img src="NHphoto2.jpg" width="100%" id="NHphoto" alt="Picture of very handsome Niko Hoffrén" />
        <br />
            <p>{language === "en"
                ? "I'm Niko Hoffrén, music producer and programmer born in Kuopio, Finland in 1986. In my spare time i like to spend time with my son, play video games and code something interesting."
                : "Olen Niko Hoffrén, musiikkituottaja ja ohjelmistokehityksen opiskelija, syntynyt Kuopiossa vuonna 1986. Vapaa-aikanani tykkään viettää aikaa poikani kanssa, pelata videopelejä sekä koodata jotain mielenkiintoista."}</p>
            <p>{language === "en"
                ? "In 2020 i started programming as a hobby with Java and my knowledge of languages and different frameworks has grown since over the years."
                : "Aloitin ohjelmoinnin harrastuksena vuonna 2020 Javalla ja tietoni ohjelmointikielistä kuten myös erilaisista kehitysalustoista ja rajapinnoista on kasvanut vuosien aikana."}</p>
            <p>{language === "en"
                ? "The page you are reading right now is made with React, Vite and TypeScript. You can find more info about my other projects from the Web development section."
                : "Sivu jota luet tällä hetkellä on tehty Reactin, Viten sekä TypeScriptin avulla. Lisätietoja muista projekteistani löydät Web-kehitys -osiosta."}</p>
            <p>{language === "en"
                ? "I'm currently studying Software development in "
                : "Opiskelen tällä hetkellä ohjelmistokehitystä "} <a href="https://sakky.fi/fi" target="_blank" className="red-text">{language === "en"
                ? "Savon Ammattiopisto"
                : "Savon Ammattiopistossa"}</a>{language === "en"
                ? " at Kuopio, Finland and hope to graduate in 2024."
                : " Kuopiossa, ja toivon valmistuvani vuonna 2024."}</p>
        </div>
    </div>

    <hr />
    <br />

    <div className="container">
        <h3>{language === "en" ? "WEB DEVELOPMENT" : "WEB-KEHITYS"}</h3>
        <p>{language === "en" ? "Find all of my projects on " : "Löydät kaikki projektini "} <a href="https://www.github.com/nikohoffren" className="red-text" target="_blank">{language === "en" ? "Github" : "Githubista"}</a>.</p>
        <p>{language === "en" ? "Be sure to also check out my " : "Tutustu myös "} <a href="https://www.freecodecamp.org/nikohoffren" className="red-text" target="_blank">freeCodeCamp</a> {language === "en" ? "account." : "tiliini."}</p>

        <p>{language === "en" ? "Languages/Frameworks:" : "Ohjelmointikielet ja rajapinnat:"}</p>
        <p>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>Java</li>
                <li>Dart (Flutter)</li>
                <li>Ruby (on Rails)</li>
            </ul>
        </p>

        <div className="row">
            <div className="portfolio-col">
                <a href="https://kuopio-public-transport.netlify.app" target="_blank"><img src="vilkku-logo.png" alt="Vilkku logo" />
                <h3>{language === "en" ? "KUOPIO PUBLIC TRANSPORT" : "KUOPION JULKINEN LIIKENNE (KUOPIO PUBLIC TRANSPORT)"}</h3>
                <p>{language === "en" ? "Website for all the Kuopio/Siilinjärvi region Vilkku busses, Vilkku bicycles and Biketaxis current locations, stops and routes. Made with JavaScript + Netlify functions." : "Verkkosivusto josta käyttäjä näkee kaikki Kuopion sekä Siilinjärven alueen Vilkku bussien, Vilkku fillarien sekä Biketaxien sijainnit, pysäkit sekä reitit. Työkalut: JavaScript + Netlify Functions."}</p>
                <a href="https://github.com/nikohoffren/kuopio-public-transport" target="_blank" className="portfolio-col-link">{language === "en" ? "Github source code" : "Github lähdekoodi"}</a>
                <p className="arial">kuopio-public-transport.netlify.app<br />2023</p></a>
            </div>

            <div className="portfolio-col">
                <a href="https://www.hunajaholisti.fi" target="_blank"><img src="HHlahja.jpg" alt="Bottle of delicious honey from Hunajaholistin Hunaja" />
                <h3>{language === "en" ? "HONEYHOLIC'S HONEY" : "HUNAJAHOLISTIN HUNAJA"}</h3>
                <p>{language === "en" ? "This is a Finnish commercial website for selling honey-products. Made with React, Vite and TypeScript." : "Suomalainen hunajanmyyntisivusto. Työkalut: React, Vite ja TypeScript."}</p>
                <a href="https://github.com/nikohoffren/hunajaholisti-homepage" target="_blank" className="portfolio-col-link">{language === "en" ? "Github source code" : "Github lähdekoodi"}</a>
                <p className="arial">hunajaholisti.fi<br />{language === "en" ? "2021 - present" : "2021 - nykyhetki"}</p></a>
            </div>
        </div>
    </div>

    <br />
    <hr />


    <div className="container">
    <div className="bio-info">
        <h3>{language === "en" ? "MUSIC PRODUCING & AUDIO ENGINEERING" : "MUSIIKIN TUOTANTO SEKÄ MIKSAUS JA MASTEROINTI"}</h3>
        <p>{language === "en"
            ? "I have played keyboards from when i was 5 years old and have been making music since. Past several years i've been making electronic music with FL Studio and have released tracks with labels such as Monster Tunes, Trancespired, Trance All-Stars, Alveda, Yeiskomp and many others."
            : "Olen soittanut koskettimia 5-vuotiaasta lähtien ja tehnyt musiikkia siitä lähtien. Viimeisten vuosien aikana olen tehnyt elektronista musiikkia FL Studiolla sekä julkaissut kappaleita levy-yhtiöillä kuin Monster Tunes, Trancespired, Trance All-Stars, Alveda, Yeiskomp ja monet muut."}
        </p>
        <p>{language === "en" ? "I have mixed and mastered tracks for artists such as" : "Olen miksannut ja masteroinut kappaleita sellaisille artisteille kuin"} <a href="https://linktr.ee/ianjamestabone" target="_blank" className="red-text">IanT</a> {language === "en" ? "and" : "ja"} <a href="https://www.darylg.net" target="_blank" className="red-text">DarylG</a>.</p>
        <p>{language === "en" ? "Currently i also play keyboards in" : "Soitan myös koskettimia yhtyeessä"} <a href="https://www.instagram.com/forsakengodsofficial/" target="_blank" className="red-text">Forsaken Gods</a>, {language === "en" ? "which is a power metal band based in Helsinki. In my past career i've made music with" : "joka on Helsingissä toimiva power metal -yhtye. Aiemmin urallani olen tehnyt musiikkia yhdessä bändien "} <a href="https://www.youtube.com/watch?v=v5FRxNfK7kE&ab_channel=ElektraHelsinki-Topic" target="_blank" className="red-text">Elektra Helsinki</a>, Love & Death, Precursor {language === "en" ? "and several others." : "ja useiden muiden kanssa."}</p>
    </div>
</div>


<hr />
<br />

    <div className="container">
        <h3>{language === "en" ? "WORKING HISTORY" : "TYÖHISTORIA"}</h3>
        <p>{language === "en" ? "You can find my complete working history in my" : "Löydät koko työhistoriani"} <a href="https://www.linkedin.com/in/nikohoffren/details/experience/" target="_blank" className="red-text">{language === "en" ? "LinkedIn" : "LinkedIn-profiilistani"}.</a></p>
    </div>

<br />
<hr />
<br />

    <div className="container">
        <h3>{language === "en" ? "LANGUAGES" : "KIELET"}</h3>
        <p>{language === "en" ? "ENGLISH - Full professional proficiency" : "ENGLANTI - Täysi ammatillinen sujuvuus"}</p>
        <p>{language === "en" ? "FINNISH - Native or bilingual proficiency" : "SUOMI - Äidinkieli tai kaksikielinen sujuvuus"}</p>
        <p>{language === "en" ? "SWEDISH - Elementary proficiency" : "RUOTSI - Perustason sujuvuus"}</p>
    </div>

    <br />
    <hr />
    <br />
    <br />
</section>

    </>
}
