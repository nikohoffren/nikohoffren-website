import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { projects } from "../data/projects";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const sponsorIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const adjustSponsorHeight = () => {
      if (sponsorIframeRef.current) {
        sponsorIframeRef.current.style.height =
          window.innerWidth < 550 ? "180px" : "125px";
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
    <div className="pt-6 bg-neutral-100/80 dark:bg-neutral-950/50">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100 dark:bg-neutral-950 text-center">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "en" ? "Projects" : "Projektit"}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 sm:mt-4">
            {language === "en"
              ? "Selected projects and open-source contributions"
              : "Valikoima projekteja ja avoimen lähdekoodin kontribuutioita"}
          </p>
          <div className="mt-8 mb-6">
            <a
              href="https://github.com/nikohoffren"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-900 transition-colors duration-200"
            >
              <i className="fab fa-github mr-2"></i>
              {language === "en" ? "View on GitHub" : "Katso Githubissa"}
            </a>
          </div>
        </div>

        {/* Decorative background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-20"></div>
      </div>

      {/* GitHub Sponsors Section */}
      <div className="relative -mt-20 z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pb-6">
        <div className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/20 dark:border-neutral-700/40 overflow-hidden">
          <div
            className="sponsor-container p-4 sm:p-5"
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
              }}
              scrolling="no"
            />
          </div>
        </div>
      </div>

      {/* Projects Portfolio */}
      <section className="relative -mt-20 py-20 bg-neutral-50/80 dark:bg-neutral-950/50 backdrop-blur-lg">
        <div className="absolute inset-0 bg-neutral-500/5"></div>
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
                    <span className="px-3 py-1 text-sm text-neutral-700 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full">
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
                          className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
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
