import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Skills() {
    const { language } = useContext(LanguageContext);

    const skillUrls: { [key: string]: string } = {
        JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        TypeScript: "https://www.typescriptlang.org/",
        React: "https://reactjs.org/",
        HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        "Cascading Style Sheets (CSS)": "https://developer.mozilla.org/en-US/docs/Web/CSS",
        PHP: "https://www.php.net/",
        "SQL (MySQL, MariaDB)": "https://dev.mysql.com/",
        Java: "https://www.java.com/",
        "Dart (Flutter)": "https://flutter.dev/",
        "Ruby (on Rails)": "https://rubyonrails.org/",
        "GNU/Linux": "https://www.gnu.org/gnu/linux-and-gnu.en.html",
        Bash: "https://www.gnu.org/software/bash/",
        "Node.js": "https://nodejs.org/en",
        "REST APIs": "https://en.wikipedia.org/wiki/Representational_state_transfer",
        JSON: "https://www.json.org/json-en.html",
        Scala: "https://www.scala-lang.org/",
        "Object-Oriented Programming (OOP)": "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming",
        Android: "https://developer.android.com/about?gclid=Cj0KCQjw756lBhDMARIsAEI0Aglur0oB_MTf__HN3LD4iEMlD_yY000kw5NXMO6JW-97ArQKUX9lyyUaAhALEALw_wcB&gclsrc=aw.ds",
        WordPress: "https://wordpress.com/",
        "Google Cloud Platform (GCP)": "https://cloud.google.com/",
        "Google Analytics": "https://www.google.com/analytics",
        "Search Engine Optimization (SEO)": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      };


    return (
        <section className="flex flex-col items-center justify-center py-10 px-8 md:px-16 shadow-lg rounded-lg my-20 mx-4 md:mx-8 lg:mx-16">
            <h1 className="text-4xl font-bold mb-10 text-center">
                {language === "en" ? "SKILLS" : "TAIDOT"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-start space-x-4 bg-white text-gray-900">
                    <div>
                        <p className="text-lg font-semibold mb-4 underline">
                            {language === "en"
                                ? "PROGRAMMING LANGUAGES AND FRAMEWORKS:"
                                : "OHJELMOINTIKIELET JA RAJAPINNAT:"}
                        </p>
                        <ul className="space-y-2">
                            {[
                                "JavaScript",
                                "TypeScript",
                                "React",
                                "HTML",
                                "CSS",
                                "PHP",
                                "SQL (MySQL, MariaDB)",
                                "Java",
                                "Dart (Flutter)",
                                "Ruby (on Rails)",
                            ].map((skill) => (
                                <li
                                    key={skill}
                                    className="py-2 px-4 rounded shadow transition-transform duration-200 transform hover:scale-105 bg-gray-100"
                                >
                                    <a
                                        href={skillUrls[skill] || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {skill}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-start space-x-4 bg-white text-gray-900">
                    <div>
                        <p className="text-lg font-semibold mb-4 underline">
                            {language === "en"
                                ? "LINKEDIN SKILLS ASSESSMENT BADGES:"
                                : "LINKEDIN OSAAMISEN ARVIOINTIMERKIT:"}
                        </p>
                        <ul className="space-y-2">
                            {[
                                "GNU/Linux",
                                "Bash",
                                "Node.js",
                                "REST APIs",
                                "JSON",
                                "JavaScript",
                                "Cascading Style Sheets (CSS)",
                                "React",
                                "PHP",
                                "Ruby (on Rails)",
                                "Scala",
                                "Object-Oriented Programming (OOP)",
                                "Android",
                                "WordPress",
                                "Google Cloud Platform (GCP)",
                                "Google Analytics",
                                "Search Engine Optimization (SEO)",
                            ].map((skill) => (
                                <li
                                    key={skill}
                                    className="py-2 px-4 rounded shadow transition-transform duration-200 transform hover:scale-105 bg-gray-100"
                                >
                                    <a
                                        href={skillUrls[skill] || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {skill}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
