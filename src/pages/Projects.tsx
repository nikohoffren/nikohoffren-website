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

                <p className="mb-6 mt-4 text-center">
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

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            href="https://forkcommitmerge.vercel.app/"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="fork-commit-merge-web-banner.png"
                                alt="Fork, Commit, Merge -banner"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "FORK, COMMIT, MERGE - Website"
                                    : "FORK, COMMIT, MERGE - Verkkosivusto"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        {" "}
                                        Welcome to Fork, Commit, Merge! Your
                                        one-stop resource hub for mastering
                                        GitHub contributions! Whether you're a
                                        novice coder or an experienced
                                        developer, our comprehensive guides are
                                        designed to streamline your GitHub
                                        journey. Tools: React, NextJS,
                                        TypeScript, Tailwind CSS, MongoDB and
                                        AWS S3.{" "}
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        Tämä sivusto on yhden pysähdyksen
                                        resurssikeskus GitHub-kontribuutioiden
                                        hallitsemiseen! Riippumatta siitä,
                                        oletko aloitteleva koodaaja vai kokenut
                                        kehittäjä, kattavat oppaamme on
                                        suunniteltu helpottamaan
                                        GitHub-matkaasi. Työkalut: React,
                                        NextJS, TypeScript, Tailwind CSS,
                                        MongoDB ja AWS S3.{" "}
                                    </>
                                )}
                            </p>
                            <a
                                href="https://forkcommitmerge.vercel.app/"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                https://forkcommitmerge.vercel.app/
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/fork-commit-merge-web"
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
                            href="https://github.com/nikohoffren/fork-commit-merge"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="fork-commit-merge-logo.jpg"
                                alt="Fork, Commit, Merge -logo"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "FORK, COMMIT, MERGE - Github project for learning to contribute"
                                    : "FORK, COMMIT, MERGE - Github projekti kontribuutioiden opettelemiseen"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        A project designed to help you
                                        familiarize yourself with the open
                                        source contribution workflow on GitHub!
                                        We present tasks of varying difficulty.
                                        You're free to choose either the easy or
                                        medium issue, depending on your
                                        proficiency in HTML or JavaScript Tools:
                                        JavaScript, Node.js.{" "}
                                    </>
                                ) : (
                                    <>
                                        Projekti, joka on suunniteltu auttamaan
                                        sinua perehtymään avoimen lähdekoodin
                                        kontribuutioiden työnkulkuun GitHubissa!
                                        Tarjoamme kaksi tehtävää eri
                                        vaikeusasteilla. Voit vapaasti valita
                                        joko helpomman tai keskitasoisen
                                        tehtävän riippuen taitotasostasi
                                        HTML:ssä tai JavaScriptissä. Työkalut:
                                        JavaScript, Node.js.{" "}
                                    </>
                                )}
                            </p>

                            <a
                                href="https://github.com/nikohoffren/fork-commit-merge"
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
                                    ? "Stolen Or Not? - Flutter App"
                                    : "Stolen Or Not? - Flutter Mobiilisovellus"}
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
                            href="https://github.com/nikohoffren/puck-hub"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="puck-hub-logo.jpg"
                                alt="Puck Hub logo"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "PUCK HUB - Flutter App"
                                    : "PUCK HUB - Flutter Mobiilisovellus"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        Puck Hub is a modern, user-centric
                                        hockey mobile app, designed and built
                                        using Flutter. It's your one-stop
                                        destination for all statistics related
                                        to your favorite hockey teams. Tailored
                                        specifically to cater to dedicated
                                        hockey fans, Puck Hub ensures you never
                                        miss an update about your favorite
                                        teams.
                                        <br />
                                        Tools: Flutter, RapidAPI.
                                    </>
                                ) : (
                                    <>
                                        Puck Hub on moderni, käyttäjäkeskeinen
                                        jääkiekkoaiheinen mobiilisovellus, joka
                                        on suunniteltu ja rakennettu käyttäen
                                        Flutteria. Se on sinun yhden pysäkin
                                        määränpääsi kaikille tilastoille, jotka
                                        liittyvät
                                        suosikkijääkiekkojoukkueisiisi.
                                        <br />
                                        <br />
                                        Työkalut: Flutter, RapidAPI
                                    </>
                                )}
                            </p>

                            <a
                                href="https://github.com/nikohoffren/puck-hub"
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
                            href="https://nikohoffrenmusic.netlify.app"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                alt="Niko Hoffrén logo"
                                src="NHbackground.jpg"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "NIKO HOFFRÉN MUSIC - Website"
                                    : "NIKO HOFFRÉN MUSIC - Verkkosivusto"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        This website contains info of my music
                                        production related stuff. The website
                                        shows all the information you need with
                                        showcase of my music, videos and gear.
                                        It also supports language selection,
                                        allowing users to switch between Finnish
                                        and English languages seamlessly. Tools:
                                        Vite, React, TypeScript.
                                    </>
                                ) : (
                                    <>
                                        Tämä verkkosivusto sisältää tietoa
                                        musiikkituotantooni liittyvistä
                                        asioista. Verkkosivusto näyttää kaiken
                                        tarvitsemasi tiedon musiikkini,
                                        videoideni ja soittimieni esittelyn
                                        avulla. Se tukee myös kielivalintaa,
                                        mahdollistaen käyttäjien vaihtaa
                                        saumattomasti suomen ja englannin kielen
                                        välillä. Työkalut: Vite, React,
                                        TypeScript.
                                    </>
                                )}
                            </p>
                            <a
                                href="https://nikohoffrenmusic.netlify.app"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                nikohoffrenmusic.netlify.app
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/nikohoffrenmusic-homepage"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Github source code"
                                    : "Github lähdekoodi"}
                            </a>
                            <p className="text-sm text-gray-900 dark:text-white italic my-2">
                                2020-present
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
                                    : "Smart Meeting Scheduler - Chrome laajennus"}
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

                    <div className="overflow-hidden shadow-lg rounded-lg h-auto md:h-120 w-full md:w-full m-auto">
                        <a
                            href="https://doublewordle.netlify.app/"
                            target="_blank"
                            className="w-full block h-full"
                        >
                            {isLoading && <Loader />}
                            <img
                                src="double-wordle.png"
                                alt="Double Wordle image"
                                className="max-h-40 w-full object-cover"
                                onLoad={imageLoaded}
                            />
                        </a>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <h2 className="text-xl font-medium text-black dark:text-white pb-2">
                                {language === "en"
                                    ? "Double Wordle - Web Game"
                                    : "Double Wordle - Web peli"}
                            </h2>
                            <p className="text-md text-gray-800 dark:text-white py-2">
                                {language === "en" ? (
                                    <>
                                        Simple wordle clone with two words in a
                                        row combined. Letters that are found in
                                        either of the words in a row, but in a
                                        wrong position, are shown in yellow.
                                        Letters that are in correct position on
                                        the row are shown in green. If you guess
                                        both words in a row correctly, you win!
                                        You have ten tries. Tools: HTML, CSS,
                                        JavaScript
                                    </>
                                ) : (
                                    <>
                                        Yksinkertainen Wordle-klooni, jossa on
                                        kaksi riviin yhdistettyä sanaa.
                                        Kirjaimet, jotka löytyvät kummastakin
                                        sanasta rivillä, mutta ovat väärässä
                                        paikassa, näkyvät keltaisina. Kirjaimet,
                                        jotka ovat oikeassa paikassa rivillä,
                                        näkyvät vihreinä. Jos arvaat molemmat
                                        sanat rivillä oikein, voitat! Sinulla on
                                        kymmenen yritystä. Työkalut: HTML, CSS,
                                        JavaScript
                                    </>
                                )}
                            </p>
                            <a
                                href="https://doublewordle.netlify.app/"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 italic"
                            >
                                {language === "en"
                                    ? "Play Double Wordle here"
                                    : "Pelaa Double Wordlea täällä"}
                            </a>
                            <br />
                            <a
                                href="https://github.com/nikohoffren/double-wordle"
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
