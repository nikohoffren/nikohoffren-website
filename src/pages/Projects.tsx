import React, { useContext, useState } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import Loader from "../common/components/Loader";

export default function Projects() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
    };
    const cvUrl = "/nikohoffren-cv.pdf";
    const [isLoading, setIsLoading] = useState(true);
    const imageLoaded = () => {
        setIsLoading(false);
    };

    return (
        <>
            <section className="py-10 px-8 md:px-16 rounded-lg my-10 mx-4 md:mx-8 lg:mx-16">
                <div className="py-10" />
                <h1 className="text-4xl font-bold mb-10 text-center">
                    {language === "en" ? "PROJECTS" : "PROJEKTIT"}
                </h1>

                <p className="mb-6 text-center">
                    {language === "en"
                        ? "Find all of my projects and open-source contributions on "
                        : "Löydät kaikki projektini sekä avoimen lähdekoodin kontribuutioni "}{" "}
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
                <div className="flex justify-center items-center">
                    <iframe
                        src="https://github.com/sponsors/nikohoffren/card"
                        title="Sponsor nikohoffren"
                        className="w-full sm:w-700 h-220 sm:h-100 border-0 rounded-xl"
                    ></iframe>
                </div>

                {/* <p className="mb-6 text-center">
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
                </p> */}
                <p className="mb-6 mt-6 text-center">
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
                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto">
                        <a
                            href="https://www.hunajaholisti.fi"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="HHlahja.jpg"
                                alt="Bottle of delicious honey from Hunajaholistin Hunaja"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "HUNAJAHOLISTIN HUNAJA - E-Commerce Website"
                                    : "HUNAJAHOLISTIN HUNAJA - Verkkosivusto"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        {" "}
                                        Finnish e-commerce platform designed for
                                        the sale of honey products, featuring an
                                        integrated shopping cart and secure
                                        checkout functionality powered by
                                        Stripe. Tools: React, Vite, TypeScript,
                                        Tailwind CSS, Netlify Functions,
                                        Firebase and Stripe.{" "}
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        Suomalainen verkkokauppa-alusta
                                        hunajatuotteiden myyntiin, joka sisältää
                                        integroidun ostoskorin ja turvallisen
                                        Stripe-maksutoiminnon.
                                        <br />
                                        <br />
                                        Työkalut: React, Vite, TypeScript,
                                        Tailwind CSS, Netlify Functions,
                                        Firebase ja Stripe.{" "}
                                    </>
                                )}
                            </p>
                            <a
                                href="https://www.hunajaholisti.fi"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                hunajaholisti.fi
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/hunajaholisti-homepage"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Github source code"
                                    : "Github lähdekoodi"}
                            </a>
                            <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                {language === "en"
                                    ? "2021 - present"
                                    : "2021 - nykyhetki"}
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.nikohoffren.stolen_gear_app"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="stolen-gear-logo.jpeg"
                                alt="StolenOrNot? app logo"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "StolenOrNot? - Flutter App"
                                    : "StolenOrNot? - Flutter Mobiilisovellus"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        {" "}
                                        This Flutter application is built to
                                        help people keep track of their valuable
                                        devices and protect them from theft. It
                                        allows users to register their devices,
                                        such as computers, cars, musical
                                        instruments, and more.
                                        <br />
                                        Available in Google Play Store. Tools:
                                        Flutter, Dart & Firebase.{" "}
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        Tämä Flutter-sovellus on rakennettu
                                        auttamaan ihmisiä pitämään kirjaa
                                        arvokkaista laitteistaan ja suojaamaan
                                        niitä varkauksilta.
                                        <br />
                                        <br />
                                        Saatavilla Google Play Store:sta.
                                        Työkalut: Flutter, Dart & Firebase.{" "}
                                    </>
                                )}
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.nikohoffren.stolen_gear_app"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Download from Google Play Store"
                                    : "Lataa Google Play Store:sta"}
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/stolen-or-not-app"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Github source code"
                                    : "Github lähdekoodi"}
                            </a>
                            <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                2023
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto">
                        <a
                            href="https://kuopionjulkinenliikenne.live"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                alt="Vilkku logo"
                                src="Vilkku_sydan_violetti.png"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "KUOPIO PUBLIC TRANSPORT - Website"
                                    : "KUOPION JULKINEN LIIKENNE - Verkkosivusto"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        This platform provides comprehensive
                                        real-time tracking and route information
                                        for all Vilkku buses, bicycles, and bike
                                        taxis operating within the
                                        Kuopio/Siilinjärvi region.
                                        <br />
                                        <br />
                                        <br />
                                        Tools: JavaScript, Express.js & Netlify
                                        functions.
                                    </>
                                ) : (
                                    <>
                                        Tämä alusta tarjoaa kattavaa
                                        reaaliaikaista seuranta- ja reittitietoa
                                        kaikille Vilkku-busseille, polkupyörille
                                        ja polkupyörätakseille, jotka toimivat
                                        Kuopion/Siilinjärven alueella. Työkalut:
                                        JavaScript, Express.js & Netlify
                                        functions.
                                    </>
                                )}
                            </p>
                            <a
                                href="https://kuopionjulkinenliikenne.live"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                kuopionjulkinenliikenne.live
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/kuopio-public-transport"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Github source code"
                                    : "Github lähdekoodi"}
                            </a>
                            <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                2023
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto">
                        <a
                            href="https://www.npmjs.com/package/kiss-css"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="kiss-css-logo.jpg"
                                alt="KISS CSS logo"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                KISS CSS - Framework
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        KISS (Keep It Simple Stylesheets) is a
                                        simple, lightweight CSS framework
                                        designed for ease of use. It provides a
                                        collection of reusable CSS classes and
                                        components to quickly style your web
                                        projects. Published as npm-package. The
                                        website and detailed documentation are
                                        still in the production phase. Tools:
                                        CSS, JavaScript & Node.js.{" "}
                                    </>
                                ) : (
                                    <>
                                        KISS (Keep It Simple Stylesheets) on
                                        yksinkertainen ja kevyt CSS-kirjasto,
                                        joka on suunniteltu helppokäyttöisyyttä
                                        ajatellen. Se tarjoaa kokoelman
                                        uudelleenkäytettäviä CSS-luokkia ja
                                        komponentteja. Julkaistu npm-pakettina.
                                        Web-sivusto ja tarkempi dokumentaatio on
                                        vielä tuotantovaiheessa. Työkalut: CSS,
                                        JavaScript & Node.js.
                                    </>
                                )}
                            </p>
                            <a
                                href="https://www.npmjs.com/package/kiss-css"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Download NPM-package"
                                    : "Lataa NPM-paketti"}
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/kiss-css"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Github source code"
                                    : "Github lähdekoodi"}
                            </a>
                            <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                2023
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto">
                        <a
                            href="https://app-icon-generator.netlify.app/"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="icon_512x512.png"
                                alt="App Icon Generator logo"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "ANDROID APP ICON GENERATOR - Web application"
                                    : "ANDROID APP ICON GENERAATTORI - Verkkosivusto"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        {" "}
                                        A modern web application for generating
                                        Android app icons of various sizes.
                                        <br />
                                        <br />
                                        Built with React and Vite, and uses the
                                        Fabric.js library for image
                                        manipulation.{" "}
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        Moderni verkkosovellus
                                        Android-sovelluskuvakkeiden luomiseen
                                        eri kokoisina.
                                        <br />
                                        <br />
                                        Rakennettu Reactin ja Viten avulla, ja
                                        käyttää Fabric.js-kirjastoa
                                        kuvankäsittelyyn.
                                        <br />
                                        <br />{" "}
                                    </>
                                )}
                            </p>
                            <a
                                href="https://app-icon-generator.netlify.app/"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                app-icon-generator.netlify.app
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/app-icon-generator-website"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Github source code"
                                    : "Github lähdekoodi"}
                            </a>
                            <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                2023
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto">
                        <a
                            href="https://chrome.google.com/webstore/detail/smart-meeting-scheduler/icaojehhbdenebdcahljjhnohnjmbpfa"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="smart-meeting-scheduler-logo.jpg"
                                alt="Smart Meeting Scheduler logo"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "Smart Meeting Scheduler - Chrome Extension"
                                    : "Smart Meeting Scheduler - Chrome aajennus"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        The Smart Meeting Scheduler Chrome
                                        Extension is a powerful tool designed to
                                        simplify and streamline the process of
                                        scheduling meetings using Google
                                        Calendar. Downloadable in Chrome
                                        Webstore!
                                        <br />
                                        <br />
                                        Tools: JavaScript, Node.js.{" "}
                                    </>
                                ) : (
                                    <>
                                        Smart Meeting Scheduler Chrome
                                        -laajennus on tehokas työkalu, joka on
                                        suunniteltu helpottamaan ja tehostamaan
                                        kokousten ajanvaraamisprosessia käyttäen
                                        Google-kalenteria.
                                        <br />
                                        <br />
                                        Ladattavissa Chrome Webstoresta!
                                        Työkalut: JavaScript, Node.js.
                                    </>
                                )}
                            </p>
                            <a
                                href="https://chrome.google.com/webstore/detail/smart-meeting-scheduler/icaojehhbdenebdcahljjhnohnjmbpfa"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Download from Chrome Web Store"
                                    : "Lataa Chrome Web Store:sta"}
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/smart-meeting-scheduler"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Github source code"
                                    : "Github lähdekoodi"}
                            </a>
                            <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                2023
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
