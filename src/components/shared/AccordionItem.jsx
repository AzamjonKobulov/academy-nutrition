import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AccordionItem({
  info: { title, text, type, url, list, icon },
  isOpen,
  onClick,
}) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const accordionRef = useRef(null); // Reference for the accordion item

  // Dynamically set the max height based on the content
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  // Handle clicks outside the accordion
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        // Call onClick to close the accordion if it's open
        if (isOpen) {
          onClick();
        }
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClick]);

  const faq = type === "faq";

  return (
    <div
      ref={accordionRef}
      className="bg-brand-cream rounded-2xl pb-5 sm:pb-6 3xl:pb-8"
    >
      {/* Header */}
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between transition-all duration-[10000] ${
          isOpen ? "pb-4" : ""
        } pt-5 px-5 sm:pt-6 sm:px-6 3xl:pt-8 3xl:px-8`}
      >
        <div className="flex items-center gap-3 3xl:gap-6">
          {!faq && (
            <img
              src={icon}
              alt={title}
              className="size-6 3xl:size-9 shrink-0"
            />
          )}
          <h4
            className={`font-medium text-left ${
              !faq ? "text-xl" : "text-lg"
            } sm:text-22 3xl:text-30 leading-7 sm:leading-[22px] lg:leading-[30px] 3xl:leading-10`}
          >
            {title}
          </h4>
        </div>
        <button className="size-8 3xl:size-11 shrink-0 relative bg-brand-primary rounded-full">
          {/* Minus */}
          <span className="h-[1.5px] w-4 3xl:h-0.5 3xl:w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"></span>
          {/* Plus */}
          <span
            className={`w-[1.5px] h-4 3xl:h-5 w-3xl:w-0.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ${
              isOpen ? "hidden" : "block"
            }`}
          ></span>
        </button>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          transition: "max-height 0.3s ease",
          overflow: "hidden",
        }}
      >
        {faq ? (
          <p className="pb-2 3xl:pb-4 px-5 sm:px-6 3xl:px-8">{text}</p>
        ) : (
          <ul className="list-disc space-y-2 sm:space-y-3 3xl:space-y-4 text-sm lg:text-base 3xl:text-22 pl-10 sm:pl-12 3xl:pl-16">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {faq && (
          <Link
            to={url}
            className="text-sm sm:text-base 3xl:text-22 font-semibold leading-8 underline underline-offset-4 hover:no-underline ml-5 sm:ml-6 3xl:ml-8"
          >
            Подробнее
          </Link>
        )}
      </div>
    </div>
  );
}
