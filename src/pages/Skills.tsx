import React, { useContext } from "react";
import { LanguageContext } from "../common/components/LanguageContext";

export default function Skills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="flex flex-col items-center justify-center py-10 px-8 md:px-16 rounded-lg my-10 mx-4 md:mx-8 lg:mx-16">
            <div className="py-10" />
            <h1 className="text-4xl font-bold mb-10 text-center prose-lg prose-purple">
                {language === "en" ? "SKILLS" : "TAIDOT"}
            </h1>
            <div className="py-5" />
            <div className="flex flex-wrap justify-center lg:w-2/4 mx-auto">

                <div className="m-4 text-center">
                    <img
                        src="https://techstack-generator.vercel.app/react-icon.svg"
                        alt="icon"
                        width="80"
                        height="80"
                    />
                    <br />
                    React
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://techstack-generator.vercel.app/js-icon.svg"
                        alt="icon"
                        width="80"
                        height="80"
                    />
                    <br />
                    JavaScript
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://techstack-generator.vercel.app/ts-icon.svg"
                        alt="icon"
                        width="80"
                        height="80"
                    />
                    <br />
                    TypeScript
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://skillicons.dev/icons?i=html"
                        width="80"
                        height="80"
                        alt="HTML5"
                    />
                    <br />
                    HTML5
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://skillicons.dev/icons?i=css"
                        width="80"
                        height="80"
                        alt="css"
                    />
                    <br />
                    CSS
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://skillicons.dev/icons?i=tailwind"
                        width="80"
                        height="80"
                        alt="tailwind"
                    />
                    <br />
                    Tailwind
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://skillicons.dev/icons?i=flutter"
                        width="80"
                        height="80"
                        alt="flutter"
                    />
                    <br />
                    Flutter
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://skillicons.dev/icons?i=dart"
                        width="80"
                        height="80"
                        alt="dart"
                    />
                    <br />
                    Dart
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://skillicons.dev/icons?i=nodejs"
                        width="80"
                        height="80"
                        alt="nodejs"
                    />
                    <br />
                    NodeJS
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://skillicons.dev/icons?i=linux"
                        width="80"
                        height="80"
                        alt="linux"
                    />
                    <br />
                    Linux
                </div>
                <div className="m-4 text-center">
                    <img
                        src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                        width="80"
                        height="80"
                        alt="Git"
                    />
                    <br />
                    Git
                </div>
            </div>
            <div className="py-10" />
        </section>
    );
}
