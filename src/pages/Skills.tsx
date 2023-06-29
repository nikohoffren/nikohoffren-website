import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Skills() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <section className="gear">
                <div className="extra-margin-top" />
                <br />
                <h1>{language === "en" ? "SKILLS" : "TAIDOT"}</h1>
                <div className="small-margin-bottom" />
                <div className="container">
                    <p>
                        {language === "en"
                            ? "PROGRAMMING LANGUAGES AND FRAMEWORKS:"
                            : "OHJELMOINTIKIELET JA RAJAPINNAT:"}
                    </p>
                    <p>
                        <div className="container-left-align small-margin-bottom">
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
                                <li>Scala</li>
                                <li>Object-Oriented Programming (OOP)</li>
                                <li>Android</li>
                                <li>WordPress</li>
                                <li>Google Cloud Platform (GCP)</li>
                                <li>Google Analytics</li>
                                <li>Search Engine Optimization (SEO)</li>
                            </ul>
                        </div>
                    </p>
                    <div className="small-margin-bottom" />

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
                <div className="small-margin-bottom" />
                </div>
            </section>
        </>
    );
}
