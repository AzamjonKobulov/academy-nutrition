import { useState } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import useClickOutside from "../../../hooks/useClickOutside";

const dropdownLinks = [
  "Нутрициология для жизни",
  "Нутрициология и диетология",
  "Нутрициология и диетология для спортсменов",
  "Вегетарианство",
];

export default function NavLinks() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useClickOutside(() => setDropdownOpen(false));

  function toggleDropdown() {
    setDropdownOpen((open) => !open);
  }

  return (
    <ul className="hidden lg:flex items-center gap-6 xl:gap-30px font-medium 2xl:text-xl">
      <li>
        <Link
          to="/"
          className="hover:text-brand-orange transition-all duration-300"
        >
          Лектор
        </Link>
      </li>
      {/* Dropdown */}
      <li className="relative">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          href="#"
          className="group flex items-center gap-1"
        >
          Программа
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              dropdownOpen ? "mt-0" : "rotate-180 mt-1"
            } group-hover:stroke-brand-cream transition-all duration-300`}
          >
            <path d="M9 9L5 5L1 9" stroke="#434035" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Dropdown Content */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-80 lg:w-[360px] absolute top-16 -left-full bg-white rounded-xl shadow-dropdown p-6"
              ref={dropdownRef}
            >
              <div className="relative w-full h-full ">
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -top-7 left-1/2 -translate-x-1/2"
                >
                  <path d="M0 5L5 0L10 5H0Z" fill="white" />
                </svg>
                <ul className="space-y-3.5 2xl:space-y-5">
                  {dropdownLinks.map((link) => (
                    <li key={link}>
                      <Link
                        to="/"
                        className="hover:underline underline-offset-4 hover:font-semibold transition-all duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
      <li>
        <Link
          to="/"
          className="hover:text-brand-orange transition-all duration-300"
        >
          Отзывы
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className="hover:text-brand-orange transition-all duration-300"
        >
          FAQ
        </Link>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-brand-orange transition-all duration-300"
        >
          Блог
        </a>
      </li>
    </ul>
  );
}
