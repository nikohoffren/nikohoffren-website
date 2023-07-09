import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Projects() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    const cvUrl = "/nikohoffren-cv.pdf";

    return (
        <>
            <section className="py-10 px-8 md:px-16 shadow-lg rounded-lg my-20 mx-4 md:mx-8 lg:mx-16">
                <h1 className="text-4xl font-bold mb-10 text-center">
                    {language === "en" ? "PROJECTS" : "PROJEKTIT"}
                </h1>

                <p className="mb-6 text-center">
                    {language === "en"
                        ? "Find all of my projects on "
                        : "Löydät kaikki projektini "}{" "}
                    <a
                        href="https://www.github.com/nikohoffren"
                        className="text-blue-500 hover:text-blue-700 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {language === "en" ? "Github" : "Githubista"}
                    </a>
                    .
                </p>
                <p className="mb-6 text-center">
                    {language === "en"
                        ? "Be sure to also check out my "
                        : "Tutustu myös "}{" "}
                    <a
                        href="https://www.freecodecamp.org/nikohoffren"
                        className="text-blue-500 hover:text-blue-700 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        freeCodeCamp
                    </a>{" "}
                    {language === "en" ? "account." : "tiliini."}
                </p>
                <p className="mb-6 text-center">
                    {language === "en"
                        ? "You can also find all of my music production related info on "
                        : "Löydät myös kaikki musiikkituotantooni liittyvät tiedot täältä: "}{" "}
                    <a
                        href="https://nikohoffrenmusic.netlify.app"
                        className="text-blue-500 hover:text-blue-700 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        nikohoffrenmusic.netlify.app
                    </a>{" "}
                </p>
                <p className="mb-6 text-center">
                    {language === "en" ? "Download my CV " : "Lataa CV:ni "}{" "}
                    <a
                        href={cvUrl}
                        download
                        className="text-blue-500 hover:text-blue-700 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {language === "en" ? "here" : "täältä"}
                    </a>
                    .
                </p>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full cursor-pointer m-auto">
                        <a
                            href="https://kuopionjulkinenliikenne.live"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            <img
                                alt="Vilkku logo"
                                src="Vilkku_sydan_violetti.png"
                                className="max-h-40 w-full object-cover"
                            />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                    {language === "en"
                                        ? "KUOPIO PUBLIC TRANSPORT - Website"
                                        : "KUOPION JULKINEN LIIKENNE (KUOPIO PUBLIC TRANSPORT) - Verkkosivusto"}
                                </h2>
                                <p className="text-md text-gray-800 dark:text-white py-2">
                                    {language === "en" ? (
                                        <>
                                            Website for all the
                                            Kuopio/Siilinjärvi region Vilkku
                                            busses, Vilkku bicycles, and
                                            Biketaxis current locations, stops,
                                            and routes.
                                            <br />
                                            Tools: JavaScript, Express.js & Netlify
                                            functions.
                                        </>
                                    ) : (
                                        <>
                                            Verkkosivusto josta käyttäjä näkee
                                            kaikki Kuopion sekä Siilinjärven
                                            alueen Vilkku bussien,
                                            <br />
                                            Vilkku fillarien sekä Biketaxien
                                            sijainnit, pysäkit sekä reitit.
                                            Työkalut: JavaScript, Express.js & Netlify
                                            functions.
                                        </>
                                    )}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/kuopio-public-transport"
                                    target="_blank"
                                    className="text-blue-500 italic"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                    kuopionjulkinenliikenne.live
                                    <br />
                                    2023
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full cursor-pointer m-auto">
                        <a
                            href="https://www.hunajaholisti.fi"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            <img
                                src="HHlahja.jpg"
                                alt="Bottle of delicious honey from Hunajaholistin Hunaja"
                                className="max-h-40 w-full object-cover"
                            />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                    {language === "en"
                                        ? "HUNAJAHOLISTIN HUNAJA - E-Commerce Website"
                                        : "HUNAJAHOLISTIN HUNAJA - Verkkosivusto"}
                                </h2>
                                <p className="text-md text-gray-800 dark:text-white py-2">
                                    {language === "en"
                                        ? "This is a Finnish commercial website for selling honey-products. Made with React, Vite, TypeScript, Tailwind CSS, Netlify Functions, Firebase and Stripe."
                                        : "Suomalainen hunajanmyyntisivusto. Työkalut: React, Vite, TypeScript, Tailwind CSS, Netlify Functions, Firebase ja Stripe."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/hunajaholisti-homepage"
                                    target="_blank"
                                    className="text-blue-500 italic"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                    hunajaholisti.fi
                                    <br />
                                    {language === "en"
                                        ? "2021 - present"
                                        : "2021 - nykyhetki"}
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full cursor-pointer m-auto">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.nikohoffren.stolen_gear_app"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            <img
                                src="stolen-gear-logo.jpeg"
                                alt="StolenOrNot? app logo"
                                className="max-h-40 w-full object-cover"
                            />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                    {language === "en"
                                        ? "StolenOrNot? (Flutter App)"
                                        : "StolenOrNot? (Flutter Mobiilisovellus)"}
                                </h2>
                                <p className="text-md text-gray-800 dark:text-white py-2">
                                    {language === "en"
                                        ? "This Flutter application is built to help people keep track of their valuable devices and protect them from theft. It allows users to register their devices, such as computers, cars, musical instruments, and more. Available in Google Play Store. Tools: Flutter, Dart & Firebase."
                                        : "Tämä Flutter-sovellus on rakennettu auttamaan ihmisiä pitämään kirjaa arvokkaista laitteistaan ja suojaamaan niitä varkauksilta. Saatavilla Google Play Store:sta. Työkalut: Flutter, Dart & Firebase."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/stolen-or-not-app"
                                    target="_blank"
                                    className="text-blue-500 italic"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                    2023
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full cursor-pointer m-auto">
                        <a
                            href="https://github.com/nikohoffren/kiss-css"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            <img
                                src="kiss-css-logo.jpg"
                                alt="KISS CSS logo"
                                className="max-h-40 w-full object-cover"
                            />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                    {language === "en"
                                        ? "KISS CSS Framework"
                                        : "KISS CSS Kehys"}
                                </h2>
                                <p className="text-md text-gray-800 dark:text-white py-2">
                                    {language === "en"
                                        ? "KISS (Keep It Simple Stylesheets) is a simple, lightweight CSS framework designed for ease of use. It provides a collection of reusable CSS classes and components to quickly style your web projects. Published as npm-package. The website and detailed documentation are still in the production phase. Tools: CSS, JavaScript & Node.js"
                                        : "KISS (Keep It Simple Stylesheets) on yksinkertainen ja kevyt CSS-kehys, joka on suunniteltu helppokäyttöisyyttä ajatellen. Se tarjoaa kokoelman uudelleenkäytettäviä CSS-luokkia ja komponentteja, joiden avulla voit nopeasti tyylittää verkkoprojektejasi. Julkaistu npm-pakettina. Web-sivusto ja tarkempi dokumentaatio on vielä tuotantovaiheessa. Työkalut: CSS, JavaScript & Node.js"}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/kiss-css"
                                    target="_blank"
                                    className="text-blue-500 italic"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                    2023
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full cursor-pointer m-auto">
                        <a
                            href="https://chrome.google.com/webstore/detail/smart-meeting-scheduler/icaojehhbdenebdcahljjhnohnjmbpfa"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            <img
                                src="smart-meeting-scheduler-logo.jpg"
                                alt="KISS CSS logo"
                                className="max-h-40 w-full object-cover"
                            />
                            <div className="bg-white dark:bg-gray-800 w-full p-4">
                                <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                    {language === "en"
                                        ? "Smart Meeting Scheduler Chrome Extension"
                                        : "Smart Meeting Scheduler Chrome -laajennus"}
                                </h2>
                                <p className="text-md text-gray-800 dark:text-white py-2">
                                    {language === "en"
                                        ? "The Smart Meeting Scheduler Chrome Extension is a powerful tool designed to simplify and streamline the process of scheduling meetings using Google Calendar. Downloadable in Chrome Webstore! Tools: JavaScript, Node.js."
                                        : "Smart Meeting Scheduler Chrome -laajennus on tehokas työkalu, joka on suunniteltu helpottamaan ja tehostamaan kokousten ajanvaraamisprosessia käyttäen Google-kalenteria. Ladattavissa Chrome Webstoresta! Työkalut: JavaScript, Node.js."}
                                </p>
                                <a
                                    href="https://github.com/nikohoffren/smart-meeting-scheduler"
                                    target="_blank"
                                    className="text-blue-500 italic"
                                >
                                    {language === "en"
                                        ? "Github source code"
                                        : "Github lähdekoodi"}
                                </a>
                                <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                    2023
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
