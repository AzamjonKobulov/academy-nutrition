import { useState } from "react";
import { Link } from "react-router-dom";
import { useLangsContext } from "../../../contexts/LangsContexts";
import Contacts from "./Contacts";
import ContactsAndLangs from "./ContactsAndLangs";
import Button from "../../shared/Button";
import { motion } from "framer-motion";

const accordionLinks = [
  { link: "Нутрициология для жизни", url: "/program" },
  { link: "Нутрициология и диетология", url: "" },
  { link: "Нутрициология и диетология для спортсменов", url: "" },
  { link: "Вегетарианство", url: "" },
];

export default function MobileMenu({ toggleMobMenu, scrolling }) {
  const { langs, lang, setLang } = useLangsContext();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.3,
        duration: 0.3,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <div
      className="fixed inset-0 z-40 w-full h-full lg:hidden bg-black/50 overflow-auto pb-10 px-4"
      onClick={toggleMobMenu}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        className={`max-w-[752px] mx-auto bg-white rounded-3xl sm:rounded-[40px] ${
          scrolling ? "mt-5" : "mt-16 3xl:mt-20"
        } pb-2.5`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-white rounded-full px-5 py-3.5">
          <div className="flex items-center gap-5">
            <button className="lg:hidden" onClick={toggleMobMenu}>
              <img src="/assets/images/icon-x.svg" alt="Menu Icon" />
            </button>
            <Link
              to="/"
              onClick={toggleMobMenu}
              className="flex items-center gap-2"
            >
              <img
                src="/assets/images/logo.svg"
                alt="Logo"
                className="w-[180px] h-9 3xl:w-auto 3xl:h-auto"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Contacts />
            <ContactsAndLangs />
          </div>
        </div>
        <ul>
          <li className="sm:hidden py-4 px-5">
            <div className="flex items-center gap-2.5 lg:mr-30px">
              <a
                href="tel:"
                className="h-12 flex-1 xs:flex-none grid place-content-center sm:text-lg font-medium rounded-full text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 px-5"
              >
                +1 424 477-33-77
              </a>
              <Button
                variant="outline"
                className="size-11 group grid place-content-center font-medium rounded-full"
                onClick={toggleMobMenu}
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-brand-primary group-hover:fill-white transition-all duration-300"
                >
                  <path d="M15.9866 1.20879C16.1112 0.403318 15.3454 -0.232446 14.6292 0.0819956L0.364818 6.34484C-0.148772 6.57034 -0.111204 7.34826 0.421467 7.51789L3.36315 8.45467C3.92458 8.63347 4.53253 8.54102 5.02279 8.20231L11.655 3.62027C11.855 3.4821 12.073 3.76646 11.9021 3.94263L7.12811 8.86465C6.66501 9.34211 6.75693 10.1512 7.31397 10.5005L12.659 13.8523C13.2585 14.2282 14.0297 13.8506 14.1418 13.1261L15.9866 1.20879Z" />
                </svg>
              </Button>
            </div>
          </li>
          <li className="py-4 px-5">
            <Link onClick={toggleMobMenu} to="">
              Лектор
            </Link>
          </li>

          {/* Accordion */}
          <li className="relative px-5">
            <button
              onClick={toggleAccordion}
              className="w-full flex items-center justify-between py-4"
            >
              Программа
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform duration-200 ${
                  isAccordionOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M4.5 8L11 14L17.5 8"
                  stroke="#434035"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            {/* Accordion Content */}
            <ul
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isAccordionOpen ? "!max-h-[200px]" : "max-h-0"
              }`}
              style={{
                maxHeight: isAccordionOpen
                  ? `${accordionLinks.length * 40}px`
                  : "0",
              }}
            >
              {accordionLinks.map((link) => (
                <li key={link.link} className="py-2 pl-4">
                  <Link onClick={toggleMobMenu} to={link.url}>
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="py-4 px-5">
            <a onClick={toggleMobMenu} href="#reviews">
              Отзывы
            </a>
          </li>
          <li className="py-4 px-5">
            <a onClick={toggleMobMenu} href="#faq">
              FAQ
            </a>
          </li>
          <li className="py-4 px-5">
            <Link onClick={toggleMobMenu} to="/blog">
              Блог
            </Link>
          </li>
          <li className="flex items-center gap-3 py-2.5 px-5">
            {langs.map(({ code, label }) => (
              <button
                key={code}
                className={`w-[60px] h-11 group text-sm 3xl:text-xl font-medium border border-brand-primary rounded-full ${
                  code === lang
                    ? "bg-brand-primary text-white"
                    : "text-brand-primary"
                }`}
                onClick={() => {
                  setLang(code);
                  toggleMobMenu();
                }}
              >
                {label}
              </button>
            ))}
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
