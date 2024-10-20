import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import useClickOutside from "../../../hooks/useClickOutside";
import Button from "../../shared/Button";
import LangsDropdown from "./LangsDropdown";

export default function ContactsAndLangs() {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [lang, setLang] = useState(0);

  const langDropdownRef = useClickOutside(() => setLangDropdownOpen(false));

  function toggleLangDropdown() {
    setLangDropdownOpen((open) => !open);
  }

  return (
    <div className="flex items-center">
      {/* Lang Buttons above 1440px */}
      <div className="hidden 2xl:flex items-center gap-2.5">
        {Array.from({ length: 2 }).map((_, idx) => {
          return (
            <Button
              variant={idx === lang ? "primary" : "outline"}
              className="size-11 group text-xl font-medium rounded-full"
              onClick={() => setLang(idx)}
            >
              {idx === 0 ? "Ru" : "En"}
            </Button>
          );
        })}
      </div>
      {/* Lang Buttons under 1440px */}
      <dwiv className="relative bg-white border rounded-full">
        {/* Dropdown */}
        <button
          onClick={toggleLangDropdown}
          className="min-w-[68px] hidden lg:flex 2xl:hidden items-center  relative z-10 gap-1 h-11 bg-brand-primary text-white text-xl font-medium rounded-full px-2.5"
        >
          {lang === 0 ? "Ru" : "En"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              langDropdownOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          >
            <path d="M3 5L8.5 10.5L14 5" stroke="#F3F1E9" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Dropdown Content */}
        <AnimatePresence>
          {langDropdownOpen && (
            <LangsDropdown
              setLang={setLang}
              langDropdownRef={langDropdownRef}
              toggleLangDropdown={toggleLangDropdown}
            />
          )}
        </AnimatePresence>
      </dwiv>
    </div>
  );
}
