import React, { useContext } from "react";
import { LanguageContext } from "../common/components/LanguageContext";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="pt-6 bg-white/80 dark:bg-gray-900/50">
      {/* Get in Touch */}
      <section className="relative py-20 bg-white/80 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "en" ? "Get in Touch" : "Ota Yhteyttä"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === "en"
                ? "Have a question or want to work together? Let's connect via email or social media"
                : "Onko sinulla kysyttävää tai haluatko tehdä yhteistyötä? Ota yhteyttä viestillä tai sosiaalisen median kautta"}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {language === "en"
                  ? "Send me a message"
                  : "Lähetä minulle viesti"}
              </h2>
              <form
                action="https://formspree.io/f/xyyarzbk"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="grid-email"
                  >
                    {language === "en" ? "Email" : "Sähköposti"}
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                    type="email"
                    name="email"
                    id="grid-email"
                    required
                    placeholder={
                      language === "en"
                        ? "Your email address"
                        : "Sähköpostiosoitteesi"
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="grid-message"
                  >
                    {language === "en" ? "Message" : "Viesti"}
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                    name="message"
                    id="grid-message"
                    rows={6}
                    required
                    placeholder={
                      language === "en" ? "Your message" : "Viestisi"
                    }
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-200 transform hover:scale-[1.02]"
                  >
                    {language === "en" ? "Send Message" : "Lähetä viesti"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Social Links */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 p-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  {language === "en"
                    ? "Social Media Links"
                    : "Sosiaalisen median linkit"}
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <a
                    href="https://www.linkedin.com/in/nikohoffren"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-gray-800/5 dark:hover:bg-gray-800/10 transition-colors duration-200 group"
                  >
                    <i className="fab fa-linkedin text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-200"></i>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://www.twitter.com/nikohoffren86"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-gray-800/5 dark:hover:bg-gray-800/10 transition-colors duration-200 group"
                  >
                    <i className="fa-brands fa-x text-2xl text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-200"></i>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      X (Twitter)
                    </span>
                  </a>
                  <a
                    href="https://www.github.com/nikohoffren"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-gray-800/5 dark:hover:bg-gray-800/10 transition-colors duration-200 group"
                  >
                    <i className="fab fa-github text-2xl text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-200"></i>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/nikohoffren"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-gray-800/5 dark:hover:bg-gray-800/10 transition-colors duration-200 group"
                  >
                    <i className="fab fa-instagram text-2xl text-pink-500 group-hover:scale-110 transition-transform duration-200"></i>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/20 dark:border-gray-700/20 p-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  {language === "en"
                    ? "Email me directly"
                    : "Lähetä sähköpostia"}
                </h2>
                <a
                  href="mailto:niko.hoffren@gmail.com"
                  className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-gray-800/5 dark:hover:bg-gray-800/10 transition-colors duration-200 group"
                >
                  <i className="fas fa-envelope text-2xl text-indigo-500 group-hover:scale-110 transition-transform duration-200"></i>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">
                    niko.hoffren@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
