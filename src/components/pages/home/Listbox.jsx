import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "../../../hooks/useClickOutside";

export default function ListBox({
  options,
  dropdownRef,
  active,
  onSelect,
  activeRef,
  handleToggleList,
  isOpen,
}) {
  const listRef = useClickOutside(() => onSelect(active));

  return (
    <div className="relative w-full h-[60px] 3xl:h-20 3xl:text-22 border border-brand-gray rounded-xl 3xl:rounded-2xl px-5 3xl:px-30px">
      {/* Button */}
      <button
        onClick={handleToggleList}
        className="w-full h-full flex items-center justify-between"
      >
        <span className="3xl:text-22 ">{active}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5L8.5 10.5L14 5" stroke="#434035" strokeWidth="1.5" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={dropdownRef}
            className="absolute top-16 3xl:top-[85px] z-20 left-0 max-h-80 w-full bg-white border rounded-2xl shadow-lg overflow-y-auto p-2.5" // Enable vertical scrolling
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((opt) => (
              <motion.li
                key={opt}
                onClick={() => onSelect(opt)}
                ref={opt === active ? activeRef : null}
                className={`${
                  opt === active ? "bg-brand-cream" : ""
                } hover:bg-brand-cream cursor-pointer rounded-md py-4 px-5`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {opt}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
