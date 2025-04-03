import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { projects } from "../data/projects";

interface Project {
  title: string;
  titleFi?: string;
  type: string;
  description: string;
  descriptionFi: string;
  image: string;
  links: {
    type: "external" | "github" | "playstore" | "npm" | "chrome";
    url: string;
    text: string;
    textFi: string;
  }[];
  technologies: string[];
}

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const sponsorIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const adjustSponsorHeight = () => {
      if (sponsorIframeRef.current) {
        sponsorIframeRef.current.style.height =
          window.innerWidth < 550 ? "170px" : "110px";
      }
    };

    adjustSponsorHeight();
    window.addEventListener("resize", adjustSponsorHeight);
    return () => window.removeEventListener("resize", adjustSponsorHeight);
  }, []);

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "external":
        return "fas fa-external-link-alt";
      case "github":
        return "fab fa-github";
      case "playstore":
        return "fab fa-google-play";
      case "npm":
        return "fab fa-npm";
      case "chrome":
        return "fab fa-chrome";
      default:
        return "fas fa-link";
    }
  };

  return (
    <div className="pt-6 bg-white/80 dark:bg-gray-900/50">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Projects " : "Projektit "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Portfolio
            </span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 sm:mt-4">
            {language === "en"
              ? "Explore my collection of projects and open-source contributions"
              : "Tutustu projekteihini ja avoimen lähdekoodin kontribuutioihini"}
          </p>
          <div className="mt-8 mb-6">
            <a
              href="https://github.com/nikohoffren"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              <i className="fab fa-github mr-2"></i>
              {language === "en" ? "View on GitHub" : "Katso Githubissa"}
            </a>
          </div>
        </div>

        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 dark:opacity-20"></div>
      </div>

      {/* GitHub Sponsors Section */}
      <div className="relative -mt-20 z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pb-6">
        <div className="bg-white/80 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 overflow-hidden">
          <div
            className="sponsor-container p-4"
            style={{ width: "100%", overflow: "hidden" }}
          >
            <iframe
              ref={sponsorIframeRef}
              src="https://github.com/sponsors/nikohoffren/card"
              title="Sponsor nikohoffren"
              style={{
                width: "100%",
                border: "0",
                borderRadius: "0.75rem",
                transform: "scale(0.97)",
              }}
              scrolling="no"
            />
          </div>
        </div>
      </div>

      {/* Projects Portfolio */}
      <section className="relative -mt-20 py-20 bg-white/80 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-white/80 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {language === "en"
                        ? project.title
                        : project.titleFi || project.title}
                    </h3>
                    <span className="px-3 py-1 text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {language === "en"
                      ? project.description
                      : project.descriptionFi}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center space-x-4 mb-4">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
                        >
                          <i className={`${getLinkIcon(link.type)} mr-1`}></i>
                          {language === "en" ? link.text : link.textFi}
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
