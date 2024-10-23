import { useState } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import LinksDropdown from "../../layout/nav/LinksDropdown";

const dropdownLinks = [
  "Нутрициология для жизни",
  "Нутрициология и диетология",
  "Нутрициология и диетология для спортсменов",
  "Вегетарианство",
];

export default function NavLinks() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen((open) => !open);
  }

  return (
    <ul className="hidden lg:flex items-center gap-6 xl:gap-30px font-medium 3xl:text-xl">
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
            <LinksDropdown
              links={dropdownLinks}
              onDropdownOpen={setDropdownOpen}
            />
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
