import React, { useContext } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { skillUrls } from "../common/constants/SkillUrls";
import { skillIcons } from "../common/constants/SkillIcons";
import { skillCategories, categoryNames } from "../common/constants/SkillCategories";

export default function Skills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="flex flex-col items-center justify-center py-10 px-8 md:px-16 rounded-lg my-10 mx-4 md:mx-8 lg:mx-16">
            <div className="py-10" />
            <h1 className="text-4xl font-bold mb-10 text-center prose-lg prose-purple">
                {language === "en" ? "SKILLS" : "TAIDOT"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(skillCategories).map((category) => (
                    <div
                        key={category}
                        className="p-6 min-h-[20rem] min-w-[22rem] mx-auto rounded-xl shadow-md flex flex-col justify-between bg-gray-100 text-gray-800"
                    >
                        <div>
                            <p className="text-lg font-semibold mb-4">
                                {categoryNames[language][category]}
                            </p>
                            <ul className="space-y-3">
                                {skillCategories[category].map((skill) => (
                                    <a
                                        key={skill}
                                        href={skillUrls[skill] || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl"
                                    >
                                        <li className="flex items-center space-x-2 py-2 px-4 rounded-md shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 bg-white hover:bg-gray-200 cursor-pointer">
                                            <img
                                                src={skillIcons[skill]}
                                                alt={`${skill} icon`}
                                                className="w-8 h-8"
                                            />
                                            <span>{skill}</span>
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
