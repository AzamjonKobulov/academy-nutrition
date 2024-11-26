import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLangsContext } from "../../../contexts/LangsContexts";
import useClickOutside from "../../../hooks/useClickOutside";

export default function LangsDropdown() {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { langs, setLang, lang } = useLangsContext();

  const langDropdownRef = useClickOutside(() => setLangDropdownOpen(false));

  function toggleLangDropdown() {
    setLangDropdownOpen((open) => !open);
  }

  return (
    <div
      ref={langDropdownRef}
      className="relative bg-white border rounded-full"
    >
      <button
        onClick={toggleLangDropdown}
        className="min-w-[68px] hidden lg:flex 3xl:hidden items-center relative z-10 gap-1 h-11 bg-brand-primary text-white text-xl font-medium rounded-full px-2.5"
      >
        {langs[lang].label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-300 ${
            langDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path d="M3 5L8.5 10.5L14 5" stroke="#F3F1E9" strokeWidth="1.5" />
        </svg>
      </button>

      <AnimatePresence>
        {langDropdownOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 w-full rounded-b-full bg-white border overflow-hidden -mt-5 pt-7 pb-2"
          >
            {langs.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => {
                  setLang(code);
                  toggleLangDropdown();
                }}
                className={`block w-full ${
                  code === lang ? "bg-brand-gray" : ""
                } text-left hover:bg-brand-gray px-4 py-2`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
