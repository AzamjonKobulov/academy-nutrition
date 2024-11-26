import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import useClickOutside from "../../../hooks/useClickOutside";

export default function LinksDropdown({ links, setDropdownOpen }) {
  const dropdownRef = useClickOutside(() => setDropdownOpen(false));

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-80 lg:w-[360px] absolute top-16 -left-full bg-white rounded-xl shadow-dropdown p-6"
      ref={dropdownRef}
    >
      <div className="relative w-full h-full">
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
        <ul className="space-y-3.5 3xl:space-y-5">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link.url}
                className="hover:underline underline-offset-4 transition-all duration-300"
                onClick={() => setDropdownOpen(false)}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
