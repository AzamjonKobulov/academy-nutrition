import { createContext, useContext, useState } from "react";

const langs = [
  { code: 0, label: "Ru" },
  { code: 1, label: "En" },
];

export const LangsContext = createContext();

export default function LangsProvider({ children }) {
  const [lang, setLang] = useState(0); // Default language

  return (
    <LangsContext.Provider value={{ lang, setLang, langs }}>
      {children}
    </LangsContext.Provider>
  );
}

export const useLangsContext = () => {
  return useContext(LangsContext);
};
