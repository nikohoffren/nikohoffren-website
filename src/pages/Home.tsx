import React, { useContext, useRef, useState, useEffect } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import Loader from "../common/components/Loader";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(true);
  const skillsRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const imageLoaded = () => {
    setIsLoading(false);
  };

  //* Handle hash-based navigation
  useEffect(() => {
    const scrollToSkills = () => {
      if (skillsRef.current) {
        const element = skillsRef.current;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    // Check if we have a hash in the URL
    if (location.hash === "#skills") {
      scrollToSkills();
    }

    // Listen for hash changes
    const handleHashChange = () => {
      if (location.hash === "#skills") {
        scrollToSkills();
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [location]);

  const skills = [
    { name: "React", icon: "react" },
    { name: "NextJS", icon: "nextjs" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "HTML5", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Flutter", icon: "flutter" },
    { name: "Dart", icon: "dart" },
    { name: "MySQL", icon: "mysql" },
    { name: "AWS", icon: "aws" },
    { name: "GCP", icon: "gcp" },
    { name: "Terraform", icon: "terraform" },
    { name: "Docker", icon: "docker" },
    { name: "Maven", icon: "maven" },
    { name: "NodeJS", icon: "nodejs" },
    { name: "Linux", icon: "linux" },
    { name: "Git", icon: "git" },
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 dark:opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/20 dark:to-purple-500/20"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {language === "en" ? "I'm " : "Olen "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                    Niko Hoffrén
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-indigo-600 dark:text-indigo-400">
                  {language === "en"
                    ? "Software Engineer"
                    : "Ohjelmistokehittäjä"}
                </h2>
              </div>

              <div className="flex space-x-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center space-x-2"
                >
                  <span>
                    {language === "en" ? "Let's Talk" : "Ota yhteyttä"}
                  </span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              <div className="prose prose-lg max-w-none space-y-6 dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en"
                    ? "Welcome to my website! I'm a software engineer from Kuopio, Finland. In my spare time, I like to spend time with my son, go to gym, play video games, or code something interesting. In my working career I have specialized in technologies such as Infrastructure as Code (IaC), TypeScript, Flutter and Node.js."
                    : "Tervetuloa kotisivuilleni! Olen ohjelmistokehittäjä Kuopiosta. Vapaa-aikanani tykkään viettää aikaa poikani kanssa, käydä salilla, pelata videopelejä, tai koodata jotain mielenkiintoista. Työurallani olen työskennellyt teknologioiden kuten Infrastructure as Code (IaC), TypeScript, Flutter ja Node.js parissa."}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en"
                    ? "I like contributing to open-source software and it's one of the ways I've chosen to give back to the community. I'm always eager to connect with like-minded individuals, potential collaborators, or anyone curious about my work."
                    : "Pidän osallistumisesta avointen lähdekoodien ohjelmistojen kehittämiseen ja se on yksi tapa, jolla olen valinnut antaa panokseni yhteisölle. Olen aina innokas tekemään yhteistyötä samanhenkisten yksilöiden tai potentiaalisten yhteistyökumppaneiden kanssa."}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/nikohoffren"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://www.github.com/nikohoffren"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://www.twitter.com/nikohoffren86"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <i className="fa-brands fa-x text-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/nikohoffren"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-pink-500 transition-colors duration-200"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/5 dark:bg-gray-900/20 rounded-full blur-3xl"></div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gray-900/10 dark:bg-gray-900/30 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-1000"></div>
                {isLoading && <Loader />}
                <img
                  src="/nikohoffren_new3.jpg"
                  alt="Niko Hoffrén"
                  className="relative rounded-full mx-auto shadow-2xl transform group-hover:scale-105 transition duration-500"
                  width="600"
                  height="600"
                  onLoad={imageLoaded}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="scroll-indicator"
          onClick={() => {
            if (skillsRef.current) {
              skillsRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <i className="fas fa-chevron-down text-2xl text-gray-600 dark:text-gray-400"></i>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        id="skills-section"
        className="relative py-20 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Technical Skills" : "Tekniset Taidot"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === "en"
                ? "Technologies I've worked with and mastered over the years"
                : "Teknologiat, joiden parissa olen työskennellyt ja joita olen oppinut vuosien varrella"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <a
                key={skill.name}
                href={
                  skill.name === "React"
                    ? "https://react.dev"
                    : skill.name === "NextJS"
                    ? "https://nextjs.org"
                    : skill.name === "JavaScript"
                    ? "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    : skill.name === "TypeScript"
                    ? "https://www.typescriptlang.org"
                    : skill.name === "HTML5"
                    ? "https://developer.mozilla.org/en-US/docs/Web/HTML"
                    : skill.name === "CSS"
                    ? "https://developer.mozilla.org/en-US/docs/Web/CSS"
                    : skill.name === "Tailwind"
                    ? "https://tailwindcss.com"
                    : skill.name === "Flutter"
                    ? "https://flutter.dev"
                    : skill.name === "Dart"
                    ? "https://dart.dev"
                    : skill.name === "MySQL"
                    ? "https://www.mysql.com"
                    : skill.name === "AWS"
                    ? "https://aws.amazon.com"
                    : skill.name === "GCP"
                    ? "https://cloud.google.com"
                    : skill.name === "Terraform"
                    ? "https://www.terraform.io"
                    : skill.name === "Docker"
                    ? "https://www.docker.com"
                    : skill.name === "Maven"
                    ? "https://maven.apache.org"
                    : skill.name === "NodeJS"
                    ? "https://nodejs.org"
                    : skill.name === "Linux"
                    ? "https://www.linux.org"
                    : "https://git-scm.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-200/20 dark:border-gray-700/20 transform hover:scale-105 transition-all duration-300 flex flex-col items-center">
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={`${skill.name} icon`}
                    className="w-16 h-16 mb-4 transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
