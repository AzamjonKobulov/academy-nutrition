import { motion } from "framer-motion";

export default function LangsDropdown({
  setLang,
  langDropdownRef,
  toggleLangDropdown,
  lang,
}) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {Array.from({ length: 2 }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => {
            setLang(lang === 0 ? 1 : 0);
            toggleLangDropdown();
          }}
          className="absolute w-full rounded-b-full bg-white border -mt-5 pt-7 pb-2"
          ref={langDropdownRef}
        >
          {lang === idx ? "Ru" : "En"}
        </button>
      ))}
    </motion.div>
  );
}
