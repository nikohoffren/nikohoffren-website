import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Skills() {
    const { language } = useContext(LanguageContext);

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
                                    {skill}
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
                                "React.js",
                                "PHP",
                                "Ruby on Rails",
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
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
