import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Skills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold mb-10 text-center">
                {language === "en" ? "SKILLS" : "TAIDOT"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 bg-gray-600 text-white">
                    <div>
                        <p className="text-lg font-semibold mb-4">
                            {language === "en"
                                ? "PROGRAMMING LANGUAGES AND FRAMEWORKS:"
                                : "OHJELMOINTIKIELET JA RAJAPINNAT:"}
                        </p>
                        <ul className="list-disc list-inside">
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
                </div>
                <div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 bg-gray-600 text-white">
                    <div>
                        <p className="text-lg font-semibold mb-4">
                            {language === "en"
                                ? "LINKEDIN SKILLS ASSESSMENT BADGES:"
                                : "LINKEDIN OSAAMISEN ARVIOINTIMERKIT:"}
                        </p>
                        <ul className="list-disc list-inside">
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
                </div>

            </div>
        </section>
    );
}
