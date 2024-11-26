import { useEffect, useRef } from "react";

export default function TopPin({ setHiddenTopPin, hiddenTopPin }) {
  const topPinRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (topPinRef.current) {
        const isHidden = topPinRef.current.classList.contains("hidden");
        setHiddenTopPin(isHidden);
      }
    });

    if (topPinRef.current) {
      observer.observe(topPinRef.current, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [setHiddenTopPin]);

  return (
    <div
      ref={topPinRef}
      className={`relative z-10 ${
        hiddenTopPin ? "hidden" : "flex"
      } items-center justify-center gap-2.5 bg-brand-primary text-white text-sm sm:text-base 3xl:text-lg font-semibold py-2.5`}
    >
      <img
        src="/assets/images/icon-recording.svg"
        alt="Recording icon"
        className="hidden sm:block"
      />
      <a
        href="#"
        className="hover:text-brand-orange transition-all duration-300"
      >
        Вебинар «Нутрициология для жизни»
      </a>
      <a
        href="#"
        className="hover:text-brand-orange transition-all duration-300"
      >
        Записаться
      </a>
    </div>
  );
}
