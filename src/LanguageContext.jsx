import React, { useState } from "react"

export const LanguageContext = React.createContext({
  language: "en",
  setLanguage: () => {}
})

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const value = {
    language,
    setLanguage
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const LanguageContextConsumer = LanguageContext.Consumer
