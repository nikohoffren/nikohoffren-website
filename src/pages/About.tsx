import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function About() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <section className="gear">
                <div className="extra-margin-top" />
                <br />
                <h1>{language === "en" ? "ABOUT" : "TIETOJA MINUSTA"}</h1>
                <div className="container">
                    <div className="bio-info hyphens">
                        <img
                            src="NHphoto3.png"
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
                                ? "My first programming language was Java using Eclipse IDE, after which I delved into the world of HTML, CSS, and JavaScript using VS Code. My knowledge of programming languages, as well as various development platforms and APIs, has grown over the years."
                                : "Ensimmäinen ohjelmointikieleni oli Java käyttäen Eclipse IDE:tä, jonka jälkeen siirryin HTML:n, CSS:n sekä JavaScriptin maailmaan VS Coden kera. Tietoni ohjelmointikielistä kuten myös erilaisista kehitysalustoista ja rajapinnoista on kasvanut vuosien aikana."}
                        </p>
                        <p>
                            {language === "en"
                                ? "The page you are currently reading has been created using Vite and React with TypeScript JSX. In addition, I have developed, among other things, my own CSS library/framework called KISS (Keep It Simple Stylesheets), which has been published as an npm package, as well as the Smart Meeting Scheduler Chrome-extension designed to facilitate the process of scheduling meetings using Google Calendar. You can find more information about these and other projects in the Web Development section."
                                : "Sivu jota luet tällä hetkellä on luotu Viten avulla käyttäen Reactia TypeScript JSX:n kera. Lisäksi olen tehnyt mm. oman CSS-kirjaston nimeltä KISS (Keep It Simple Stylesheets) joka on julkaistu npm-pakettina sekä Smart Meeding Scheduler Chrome-laajennuksen, joka on suunniteltu helpottamaan kokousten ajanvaraamisprosessia käyttäen Google-kalenteria. Lisätietoja näistä sekä muista projekteistani löydät Web-kehitys -osiosta."}
                        </p>
                        <p>
                            {language === "en"
                                ? "In total I have +15 years of work experience in areas like business sales consultanting, logistics industry and earlier education from the field of Business Administration in Customer service and Marketing."
                                : "Kokonaisuudessaan minulla on yli 15 vuoden työkokemus eri aloilta, kuten yritysmyyntineuvottelijana toimimisesta, logistiikka-alalta sekä aiemmin hankitusta koulutuksesta liiketalouden alalta asiakaspalvelussa ja markkinoinnissa."}
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

            </section>
        </>
    );
}
