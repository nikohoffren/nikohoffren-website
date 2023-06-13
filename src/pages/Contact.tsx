import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Contact() {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <div className="container">
                <div className="huge-margin-bottom"></div>
                <h1>{language === "en" ? "CONTACT" : "OTA YHTEYTTÄ"}</h1>
                <div className="medium-margin-bottom"></div>
                <form action="https://formspree.io/f/xyyarzbk" method="POST">
                    <h3 className="smaller-width">
                        {language === "en"
                            ? "Contact me via this form for job opportunites or other requests and i'll get back to you as soon as i can!"
                            : "Ota minuun yhteyttä työtarjouksien tai muiden pyyntöjen kanssa tämän lomakkeen avulla, niin palaan asiaan mahdollisimman pian!"}
                    </h3>
                    <div className="small-margin-bottom"></div>
                    <label>
                        {language === "en" ? "Your email:" : "Sähköpostisi:"}
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        {language === "en" ? "Your message:" : "Viestisi:"}
                        <textarea name="message" required />
                    </label>
                    <button type="submit">
                        {language === "en" ? "Send" : "Lähetä"}
                    </button>
                </form>
                <div className="huge-margin-bottom"></div>
            </div>
        </>
    );
}
