import React, { useContext, useRef, useState, useEffect } from "react";
import { LanguageContext } from "../common/components/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import Loader from "../common/components/Loader";
import { skills } from "../data/skills";

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

    //* Check if we have a hash in the URL
    if (location.hash === "#skills") {
      scrollToSkills();
    }

    //* Listen for hash changes
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
                    ? "Software Developer"
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
                {language === "en" ? (
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>10+ years of experience with Linux systems</li>
                    <li>
                      Strong expertise in CI/CD, containerization, and
                      automation (GitHub Actions, Docker, Podman, Jenkins,
                      Terraform, Maven)
                    </li>
                    <li>
                      Backend development with Java and Spring Boot, including
                      microservices architecture and security implementations
                    </li>
                    <li>
                      Integration development with TypeScript & Node.js
                      (Serverless)
                    </li>
                    <li>Website creation with React and Next.js</li>
                    <li>Mobile application development with Flutter (Dart)</li>
                    <li>
                      Hands-on experience with cloud platforms (AWS, Azure,
                      GCP), infrastructure as code (IaC), and modern DevOps
                      practices
                    </li>
                    <li>6+ years contributing to open-source projects</li>
                  </ul>
                ) : (
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Yli 10 vuoden kokemus Linux-järjestelmistä</li>
                    <li>
                      Vankka osaaminen CI/CD:ssä, konttiteknologioissa ja
                      automaatiossa (GitHub Actions, Docker, Podman, Jenkins,
                      Terraform, Maven)
                    </li>
                    <li>
                      Backend-kehitystä Javalla ja Spring Bootilla, mukaan
                      lukien mikropalveluarkkitehtuuri ja tietoturvatoteutukset
                    </li>
                    <li>
                      Integraatiokehitystä TypeScriptillä & Node.js:llä
                      (Serverless)
                    </li>
                    <li>
                      Verkkosivustojen toteutusta Reactilla ja Next.js:llä
                    </li>
                    <li>Mobiilisovellusten kehitystä Flutterilla (Dart)</li>
                    <li>
                      Käytännön kokemusta pilvipalveluista (AWS, Azure, GCP),
                      infrastructure as code (IaC) ja moderneista
                      DevOps-käytännöistä
                    </li>
                    <li>
                      Yli 6 vuoden kokemus avoimen lähdekoodin projekteista
                    </li>
                  </ul>
                )}
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
                  src="/nikohoffren-profile-image2.jpg"
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
                    : skill.name === "Spring Boot"
                    ? "https://spring.io/projects/spring-boot"
                    : skill.name === "Java"
                    ? "https://www.java.com"
                    : skill.name === "Kubernetes"
                    ? "https://kubernetes.io"
                    : skill.name === "AWS"
                    ? "https://aws.amazon.com"
                    : skill.name === "Azure"
                    ? "https://azure.microsoft.com"
                    : skill.name === "GCP"
                    ? "https://cloud.google.com"
                    : skill.name === "Terraform"
                    ? "https://www.terraform.io"
                    : skill.name === "Docker"
                    ? "https://www.docker.com"
                    : skill.name === "Jenkins"
                    ? "https://www.jenkins.io"
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

      {/* Certifications Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Certifications" : "Sertifikaatit"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === "en"
                ? "Certifications and achievements"
                : "Sertifikaatit ja saavutukset"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Java Basic Certificate */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {language === "en" ? (
                    <>
                      HackerRank Java (Basic)
                      <br />
                      Certification
                    </>
                  ) : (
                    "HackerRank Java (Basic) Sertifikaatti"
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en"
                    ? "Certified in Java programming fundamentals"
                    : "Sertifioitu Java-ohjelmoinnin perusteissa"}
                </p>
              </div>
              <div className="p-6">
                <div className="relative group flex justify-center">
                  <img
                    src="/hackerrank_java_basic_certification.png"
                    alt="HackerRank Java Basic Certification"
                    className="max-w-md w-full h-auto rounded-lg shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <a
                      href="https://www.hackerrank.com/certificates/iframe/903421a5c703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      {language === "en"
                        ? "View Certificate"
                        : "Katso sertifikaatti"}
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://www.hackerrank.com/certificates/iframe/903421a5c703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    {language === "en"
                      ? "View on HackerRank"
                      : "Katso HackerRankissa"}
                  </a>
                </div>
              </div>
            </div>

            {/* Software Engineer Certificate */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {language === "en"
                    ? "HackerRank Software Engineer Certification"
                    : "HackerRank Software Engineer Sertifikaatti"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "en"
                    ? "Certified in Problem Solving, SQL, and REST API"
                    : "Sertifioitu ongelmanratkaisussa, SQL:ssä ja REST API:ssa"}
                </p>
              </div>
              <div className="p-6">
                <div className="relative group flex justify-center">
                  <img
                    src="/hackerrank_software_engineer_sertificate.png"
                    alt="HackerRank Software Engineer Certification"
                    className="max-w-md w-full h-auto rounded-lg shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <a
                      href="https://www.hackerrank.com/certificates/4626b4e966da"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      {language === "en"
                        ? "View Certificate"
                        : "Katso sertifikaatti"}
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://www.hackerrank.com/certificates/4626b4e966da"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    {language === "en"
                      ? "View on HackerRank"
                      : "Katso HackerRankissa"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
