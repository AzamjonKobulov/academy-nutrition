import { useEffect, useState } from "react";

import NavLinks from "./NavLinks";
import Contacts from "./Contacts";
import ContactsAndLangs from "./ContactsAndLangs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky z-50 ${
        scrolling ? "top-5" : "top-16 3xl:top-20"
      } transition-all duration-300`}
    >
      <nav className="container mx-auto px-3.5 xs:px-4">
        <div className="flex items-center justify-between bg-white border rounded-full px-5 py-2.5 lg:px-2.5 3xl:p-4">
          <div className="flex items-center gap-5">
            {/* Menu Button */}
            <button className="lg:hidden">
              <img src="/assets/images/icon-menu.svg" alt="Menu Icon" />
            </button>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/images/logo.svg"
                alt="Logo"
                className="w-[180px] h-9 3xl:w-auto 3xl:h-auto"
              />
            </Link>
          </div>

          <NavLinks />

          {/* Contacts & Language */}
          <div className="flex items-center">
            <Contacts />
            <ContactsAndLangs />
          </div>
        </div>
      </nav>
    </header>
  );
}
