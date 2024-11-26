import { useEffect, useState } from "react";

import NavLinks from "./NavLinks";
import Contacts from "./Contacts";
import ContactsAndLangs from "./ContactsAndLangs";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import TopPin from "../../shared/TopPin";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [hiddenTopPin, setHiddenTopPin] = useState(false); // You can hide the TopPin Component by setting this "true".

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

  function toggleMobMenu() {
    document.body.classList.toggle("overflow-hidden");
    setIsMobMenuOpen((open) => !open);
  }

  return (
    <>
      <TopPin setHiddenTopPin={setHiddenTopPin} hiddenTopPin={hiddenTopPin} />
      <header
        className={`sticky z-50 ${
          scrolling || hiddenTopPin ? "top-5" : "top-16 3xl:top-20"
        } transition-all duration-300`}
      >
        <nav className="container mx-auto relative z-[60] px-3.5 xs:px-4">
          <div className="flex items-center justify-between bg-white border rounded-full px-5 py-2.5 lg:px-2.5 3xl:p-4">
            <div className="flex items-center gap-5">
              {/* Menu Button */}
              <button onClick={toggleMobMenu} className="lg:hidden">
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

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobMenuOpen && (
                <MobileMenu
                  toggleMobMenu={toggleMobMenu}
                  scrolling={scrolling}
                />
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>
    </>
  );
}
