import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Footer() {
    const { language } = useContext(LanguageContext);
    return (
        <section className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-4 mb-4">
                    <a
                        href="https://www.linkedin.com/in/nikohoffren"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://www.github.com/nikohoffren"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300"
                    >
                        <i className="fa fa-github"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/nikohoffren"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-400"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a
                        href="https://www.twitter.com/nikohoffren"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
                <p className="text-center mb-2">Email: niko.hoffren@gmail.com</p>
                <p className="text-center mb-4">
                    {language === "en" ? "My music: " : "Musiikkini: "}
                    <a
                        href="https://nikohoffrenmusic.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-400 hover:text-blue-300"
                    >
                        nikohoffrenmusic.netlify.app
                    </a>
                </p>
                <div className="text-center text-sm space-y-2">
                    <p>
                        {language === "en"
                            ? "Copyright © 2020-2023 Niko Hoffrén"
                            : "Tekijänoikeus © 2020-2023 Niko Hoffrén"}
                    </p>
                    <p>
                        {language === "en" ? "Coded with React " : "React "}
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/react.svg"
                                className="inline h-5 w-auto mx-1"
                                alt="React logo"
                            />
                        </a>{" "}
                        + Vite
                        <a
                            href="https://vitejs.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/vite.svg"
                                className="inline h-5 w-auto mx-1"
                                alt="Vite logo"
                            />
                        </a>
                        + TypeScript
                        <a
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/typescript.png"
                                className="inline h-5 w-auto mx-1"
                                alt="TypeScript logo"
                            />
                        </a>
                        {language === "en" ? ". Hosted by Netlify" : " + Netlify"}
                        <a
                            href="https://www.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/netlify.png"
                                className="inline h-5 w-auto mx-1"
                                alt="Netlify logo"
                            />
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
