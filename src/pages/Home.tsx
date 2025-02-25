import React, { useContext, useRef, useState } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Loader from "../common/components/Loader";
import { SectionRefContext } from "../common/components/SectionRefContext";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const cvUrl = "/nikohoffren-cv.pdf";
  const [inProp, setInProp] = useState(false);
  const [textInProp, setTextInProp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = () => {
    setIsLoading(false);
  };
  const skillsSectionRef = useContext(SectionRefContext);

  React.useEffect(() => {
    setInProp(true);
    setTextInProp(true);
  }, []);

  return (
    <main className={`mt-8`}>
      <div className="py-10" />
      <section>
        <div className="grid lg:grid-cols-2 gap-8 items-center mx-auto container px-4 sm:px-6 lg:px-8">
          <div>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <h1 className="text-center sm:text-left text-6xl font-semibold mb-2">
                {language === "en" ? "I'm Niko Hoffrén" : "Olen Niko Hoffrén"}
              </h1>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <h2 className="text-center sm:text-left text-3xl font-semibold mb-4 mt-4">
                {language === "en"
                  ? "Software Engineer"
                  : "Ohjelmistokehittäjä"}
              </h2>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <div className="text-center sm:text-left mb-10">
                <Link to="/contact">
                  <button className="btn btn-primary btn-ghost btn-shine text-white">
                    {language === "en" ? "HIRE ME" : "PALKKAA MINUT"}
                  </button>
                </Link>
              </div>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <div className="text-center sm:text-left mt-4 text-base space-y-4">
                <p>
                  {language === "en"
                    ? "Welcome to my website! I'm a software engineer from Kuopio, Finland. In my spare time, I like to spend time with my son, go to gym, play video games, or code something interesting. In my working career I have specialized in technologies such as Infrastructure as Code (IaC), TypeScript, Flutter and Node.js."
                    : "Tervetuloa kotisivuilleni! Olen ohjelmistokehittäjä Kuopiosta. Vapaa-aikanani tykkään viettää aikaa poikani kanssa, käydä salilla, pelata videopelejä, tai koodata jotain mielenkiintoista. Työurallani olen työskennellyt teknologioiden kuten Infrastructure as Code (IaC), TypeScript, Flutter ja Node.js parissa."}
                </p>
                <p>
                  {language === "en"
                    ? "The page you are currently reading has been created using Vite and React with TypeScript. In addition, I have developed, among other things, various projects which you can find in the "
                    : "Sivu jota luet tällä hetkellä on luotu Viten avulla käyttäen Reactia TypeScriptin kera. Lisäksi olen tehnyt lukuisasti muita projekteja joista lisätietoja löydät "}
                  <Link
                    className="underline text-blue-600 hover:text-red-600"
                    to="/projects"
                  >
                    {language === "en" ? "Projects" : "Projektit"}
                  </Link>
                  {language === "en" ? "-section." : "-osiosta."}
                </p>
                <p>
                  {language === "en"
                    ? " I like contributing to open-source software and it's one of the ways I've chosen to give back to the community."
                    : "Pidän osallistumisesta avointen lähdekoodien ohjelmistojen kehittämiseen ja se on yksi tapa, jolla olen valinnut antaa panokseni yhteisölle."}
                </p>
                {/* <iframe
                  src="https://github.com/sponsors/nikohoffren/button"
                  title="Sponsor nikohoffren"
                  className="w-full sm:w-32 h-8 sm:h-8 border-0 ´"
                /> */}
                <p>
                  {language === "en"
                    ? "I'm always eager to connect with like-minded individuals, potential collaborators, or anyone curious about my work. Feel free to reach out to me with any queries or opportunities. Let's code, collaborate, and create together!"
                    : "Olen aina innokas tekemään yhteistyötä samanhenkisten yksilöiden, potentiaalisten yhteistyökumppaneiden tai kenen tahansa kanssa, joka on utelias työstäni. Ota rohkeasti yhteyttä minuun, jos sinulla on kysyttävää tai mahdollisuuksia tarjolla. Koodataan, tehdään yhteistyötä ja luodaan yhdessä!"}
                </p>
              </div>
            </CSSTransition>
            {/* <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <h4 className="text-center sm:text-left mt-4 text-lg font-semibold">
                {language === "en"
                  ? "You can download my CV here:"
                  : "Lataa CV:ni tästä linkistä:"}
              </h4>
            </CSSTransition>
            <CSSTransition
              in={textInProp}
              timeout={500}
              classNames="slide-text"
            >
              <div className="text-center sm:text-left">
                <a
                  href={cvUrl}
                  download
                  className={`mt-2 inline-block py-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-sm uppercase tracking-widest`}
                >
                  {language === "en" ? "Download CV" : "Lataa CV"}
                </a>
              </div>
            </CSSTransition> */}
          </div>
          <div>
            {isLoading && <Loader />}
            <CSSTransition in={inProp} timeout={500} classNames="slide">
              <img
                src="nikohoffren_new3.jpg"
                alt="Niko Hoffrén"
                className="rounded-full mx-auto"
                onLoad={imageLoaded}
              />
            </CSSTransition>
          </div>
        </div>
      </section>

      <section ref={skillsSectionRef} className="bg-black bg-opacity-10 mt-6">
        <div className="py-10" />
        <div className="py-5" />
        <h1 className="text-5xl font-bold mb-10 text-center prose-lg prose-purple">
          {language === "en" ? "SKILLS" : "TAIDOT"}
        </h1>
        <div className="py-5" />
        <div className="flex flex-wrap justify-center lg:w-2/4 mx-auto">
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="icon"
              width="80"
              height="80"
            />
            <br />
            React
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=nextjs"
              alt="icon"
              width="80"
              height="80"
            />
            <br />
            NextJS
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=javascript"
              alt="icon"
              width="80"
              height="80"
            />
            <br />
            JavaScript
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=typescript"
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
              src="https://skillicons.dev/icons?i=mysql"
              width="80"
              height="80"
              alt="dart"
            />
            <br />
            MySQL
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=aws"
              width="80"
              height="80"
              alt="dart"
            />
            <br />
            AWS
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=gcp"
              width="80"
              height="80"
              alt="dart"
            />
            <br />
            GCP
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=terraform"
              width="80"
              height="80"
              alt="dart"
            />
            <br />
            Terraform
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=docker"
              width="80"
              height="80"
              alt="dart"
            />
            <br />
            Docker
          </div>
          <div className="m-4 text-center">
            <img
              src="https://skillicons.dev/icons?i=maven"
              width="80"
              height="80"
              alt="dart"
            />
            <br />
            Maven
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
    </main>
  );
}
