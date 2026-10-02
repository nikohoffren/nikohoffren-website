import React, { useContext, useRef, useState, useEffect } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import Loader from "../common/components/Loader";
import { skillCategories, certifications } from "../data/skills";

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

    if (location.hash === "#skills") {
      scrollToSkills();
    }

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

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 dark:from-neutral-950 dark:via-neutral-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04] dark:opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-500/[0.04] to-transparent dark:from-white/[0.03]"></div>

        <div className="relative w-full max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 py-24 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center w-full">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-5">
                <p className="text-sm font-medium tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                  {language === "en"
                    ? "Application Developer · IBM"
                    : "Sovelluskehittäjä · IBM"}
                </p>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                  Niko Hoffrén
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  {language === "en"
                    ? "Application Developer at IBM, working primarily on DevOps, cloud infrastructure, CI/CD, and platform automation."
                    : "Sovelluskehittäjä IBM:llä - työnkuva painottuu DevOpsiin, pilvi-infrastruktuuriin, CI/CD:hen sekä automaatioon."}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 bg-neutral-900 hover:bg-black dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-900 text-white font-medium rounded-md transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>
                    {language === "en" ? "Get in Touch" : "Ota yhteyttä"}
                  </span>
                  <i className="fas fa-arrow-right text-sm"></i>
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-3.5 border border-neutral-300 dark:border-neutral-600 text-gray-800 dark:text-gray-200 hover:border-neutral-900 hover:text-neutral-900 dark:hover:border-neutral-300 dark:hover:text-white font-medium rounded-md transition-colors duration-200"
                >
                  {language === "en" ? "View Projects" : "Katso projektit"}
                </Link>
              </div>

              <div className="flex space-x-5 pt-2">
                <a
                  href="https://www.linkedin.com/in/nikohoffren"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="https://www.github.com/nikohoffren"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://www.twitter.com/nikohoffren86"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  <i className="fa-brands fa-x text-xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/nikohoffren"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 w-full flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-neutral-500/10 dark:bg-white/5 rounded-2xl blur-2xl scale-95 pointer-events-none"></div>
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[32rem] xl:max-w-[36rem]">
                {isLoading && <Loader />}
                <img
                  src="/nikohoffren-new-profile-image.jpg"
                  alt="Niko Hoffrén"
                  className="relative w-full aspect-square object-cover rounded-2xl shadow-lg ring-1 ring-gray-200/60 dark:ring-gray-700/60"
                  width="600"
                  height="600"
                  onLoad={imageLoaded}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="scroll-indicator"
          onClick={() => {
            if (skillsRef.current) {
              skillsRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <i className="fas fa-chevron-down text-2xl text-gray-500 dark:text-gray-400"></i>
        </div>
      </section>

      {/* Focus areas */}
      <section className="relative py-16 border-y border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-950/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              {language === "en" ? "Focus Areas" : "Painopistealueet"}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-600 dark:text-gray-300">
              {(language === "en"
                ? [
                    "Azure DevOps pipelines, boards & release workflows",
                    "Git, GitOps and source control best practices",
                    "CI/CD automation across Azure and AWS",
                    "Infrastructure as Code with Terraform & Bicep",
                    "Azure Functions, AWS Lambda & serverless",
                    "Kubernetes (AKS/EKS), containers & platforms",
                    "Observability with Prometheus, Grafana & CloudWatch",
                    "Linux systems, Ansible & DevOps tooling",
                  ]
                : [
                    "Azure DevOps -putket, boardit ja julkaisutyönkulut",
                    "Git, GitOps ja versionhallinnan parhaat käytännöt",
                    "CI/CD-automaatio Azuren ja AWS:n ympäristöissä",
                    "Infrastruktuuri koodina Terraformilla ja Bicepillä",
                    "Azure Functions, AWS Lambda ja serverless",
                    "Kubernetes (AKS/EKS), kontit ja alustat",
                    "Havainnointi Prometheusilla, Grafanalla ja CloudWatchilla",
                    "Linux-järjestelmät, Ansible ja DevOps-työkalut",
                  ]
              ).map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-700 dark:bg-neutral-400 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills — category lists */}
      <section ref={skillsRef} id="skills-section" className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Technical Skills" : "Tekniset Taidot"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "en"
                ? "DevOps, cloud infrastructure, CI/CD, and platform engineering"
                : "DevOps, pilvi-infrastruktuuri, CI/CD ja alustasuunnittelu"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-3">
                <h3 className="font-display text-sm font-semibold tracking-wide uppercase text-neutral-600 dark:text-neutral-400">
                  {language === "en" ? category.title : category.titleFi}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {category.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="relative py-20 border-t border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-950/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Certifications" : "Sertifikaatit"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "en"
                ? "Cloud and AI certifications from Microsoft Azure and AWS"
                : "Pilvi- ja AI-sertifikaatit Microsoft Azuresta ja AWS:ltä"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="bg-white dark:bg-neutral-900/80 rounded-lg p-6 border border-neutral-200/80 dark:border-neutral-700/50"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span
                    className={`text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded ${
                      cert.issuer === "Microsoft"
                        ? "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                        : "bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {cert.code}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {language === "en" ? cert.name : cert.nameFi}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "en" ? cert.description : cert.descriptionFi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
