import { useState, useRef, useEffect, useMemo } from "react";
import Button from "../../../shared/Button";

import ListBox from "../Listbox";

export default function FindOutBenefits() {
  const options = useMemo(
    () => [
      "Все",
      "Нутрициология",
      "Рацион",
      "Диетология",
      "Программа",
      "Практика",
      "Коммьюнити",
      "Обучение",
    ],
    []
  );

  const [dropdownState, setDropdownState] = useState({
    isOpen: false,
    active: options[0],
  });
  const dropdownRef = useRef(null);
  const activeRef = useRef(null); // Reference for the active item

  function handleToggleList(e) {
    e.preventDefault();
    setDropdownState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  }

  function handleSelectOption(option) {
    setDropdownState({ isOpen: false, active: option });
  }

  useEffect(() => {
    if (dropdownState.isOpen && activeRef.current && dropdownRef.current) {
      const dropdownHeight = dropdownRef.current.clientHeight; // Height of dropdown
      const itemHeight = activeRef.current.clientHeight; // Height of active item
      const activeItemIndex = options.indexOf(dropdownState.active); // Index of active item

      // Calculate the scroll position to center the active item
      const offset =
        activeItemIndex * itemHeight - dropdownHeight / 2 + itemHeight / 2;

      // Set scrollTop to center the active item
      dropdownRef.current.scrollTo({
        top: offset,
        behavior: "smooth", // Optional: for smooth scrolling
      });
    }
  }, [dropdownState.isOpen, dropdownState.active]);

  return (
    <section className="bg-brand-cream">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 px-30px">
        <div className="relative flex flex-col lg:grid grid-cols-2 gap-30px lg:gap-12 rounded-2xl lg:rounded-[44px] 3xl:rounded-[60px] overflow-hidden after:absolute after:inset-0 after:bg-black/70 sm:p-30px lg:p-[60px] 3xl:p-[90px]">
          {/* BG Image */}
          <img
            src="/assets/images/bg-findout.jpg"
            alt="Image"
            className="absolute sm:inset-0 w-full h-1/2 sm:h-full object-cover object-left sm:object-center"
          />

          {/* Texts */}
          <div className="relative z-10 h-full flex flex-col gap-30px justify-between sm:gap-0 py-30px px-5 sm:p-0">
            <div className="space-y-14 3xl:space-y-10">
              {/* Title */}
              <div className="space-y-4 text-white">
                <h2>
                  Узнай <br className="xs:hidden" /> преимущества обучения по
                  Американской программе
                </h2>
              </div>

              {/* Socials */}
              <div className="lg:max-w-[280px] 3xl:max-w-[340px] flex sm:hidden lg:flex flex-col sm:flex-row lg:flex-col 3xl:items-center gap-3 lg:gap-6 font-medium">
                <a
                  href="#"
                  className="h-16 3xl:h-[76px] w-full sm:w-fit lg:w-full group flex items-center justify-center gap-3 text-white border border-white rounded-full hover:text-brand-primary hover:bg-white transition-all duration-300 px-6 3xl:px-9"
                >
                  <p>Написать в Telegram</p>
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white group-hover:fill-brand-primary transition-all duration-300"
                  >
                    <path d="M19.9832 1.55416C20.1391 0.518552 19.1818 -0.29886 18.2865 0.105423L0.456022 8.15765C-0.185965 8.44757 -0.139005 9.44776 0.526834 9.66586L4.20393 10.8703C4.90573 11.1002 5.66566 10.9813 6.27848 10.5458L14.5687 4.65464C14.8187 4.47698 15.0912 4.84259 14.8776 5.0691L8.91014 11.3974C8.33126 12.0113 8.44616 13.0515 9.14246 13.5006L15.8237 17.8101C16.5731 18.2934 17.5371 17.8079 17.6773 16.8765L19.9832 1.55416Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-16 3xl:h-[76px] w-full sm:w-fit lg:w-full group flex items-center justify-center gap-3 text-white border border-white rounded-full hover:text-brand-primary hover:bg-white transition-all duration-300 px-6 3xl:px-9"
                >
                  <p>Написать в WhatsApp</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white group-hover:fill-brand-primary transition-all duration-300"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 13.8832 1.99575 15.6505 2.86386 17.1787L1.5 22.5L6.98615 21.2278C8.47603 22.0391 10.1842 22.5 12 22.5ZM12 20.8846C16.9068 20.8846 20.8846 16.9068 20.8846 12C20.8846 7.09316 16.9068 3.11538 12 3.11538C7.09316 3.11538 3.11538 7.09316 3.11538 12C3.11538 13.8945 3.70838 15.6506 4.71888 17.0927L3.92308 20.0769L6.95995 19.3177C8.39202 20.3059 10.1284 20.8846 12 20.8846Z"
                    />
                    <path d="M9.37502 7.12504C9.12537 6.6236 8.7424 6.668 8.35551 6.668C7.66407 6.668 6.58594 7.49621 6.58594 9.03759C6.58594 10.3008 7.14259 11.6836 9.01831 13.7522C10.8285 15.7485 13.207 16.7812 15.1817 16.7461C17.1563 16.7109 17.5625 15.0117 17.5625 14.4379C17.5625 14.1835 17.4047 14.0566 17.296 14.0221C16.6231 13.6992 15.382 13.0975 15.0996 12.9844C14.8172 12.8714 14.6698 13.0243 14.5781 13.1075C14.3221 13.3515 13.8144 14.0707 13.6406 14.2325C13.4668 14.3942 13.2077 14.3124 13.0999 14.2512C12.7031 14.092 11.6272 13.6134 10.7696 12.7821C9.70899 11.754 9.64675 11.4002 9.44693 11.0854C9.28707 10.8335 9.40437 10.6789 9.46291 10.6114C9.69142 10.3477 10.007 9.94061 10.1485 9.73832C10.29 9.53602 10.1776 9.22889 10.1102 9.03759C9.82033 8.21488 9.57474 7.52618 9.37502 7.12504Z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* USA Flag & Anna */}
            <div className="hidden lg:flex items-center">
              <div className="size-[72px] shrink-0 rounded-full overflow-hidden">
                <img src="/assets/images/img-flag-usa.svg" alt="Flag" />
              </div>
              <div className="size-[72px] shrink-0 rounded-full overflow-hidden -ml-3">
                <img src="/assets/images/img-about.png" alt="Anna" />
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            action="#"
            className="relative z-10 h-1/2 sm:h-auto space-y-5 3xl:space-y-8 bg-white rounded-b-2xl sm:rounded-22px 3xl:rounded-30px p-30px lg:p-8 3xl:p-12"
          >
            <div className="space-y-5 3xl:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-xl lg:text-22 3xl:text-30">
                  Ближайший поток
                </p>
                <p className="font-medium text-xl lg:text-22 3xl:text-30">
                  22 октября 2023
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 bg-brand-cream rounded-2xl py-4 px-[22px]">
                <img src="/assets/images/icon-girl.svg" alt="Icon" />
                <p className="text-center sm:text-start">
                  98 студентов уже записались на обучение
                </p>
              </div>
            </div>

            {/* ListBox */}

            {/* Content */}
            <ListBox
              options={options}
              dropdownRef={dropdownRef}
              active={dropdownState.active}
              onSelect={handleSelectOption}
              activeRef={activeRef}
              handleToggleList={handleToggleList}
              isOpen={dropdownState.isOpen}
            />
            <input type="text" placeholder="Имя" className="base-input" />
            <input type="text" placeholder="Телефон" className="base-input" />
            <input type="email" placeholder="Почта" className="base-input" />
            <input type="checkbox" id="check" className="hidden" />
            <label
              htmlFor="check"
              className="flex items-center gap-5 cursor-pointer"
            >
              {/* Checkbox */}
              <div className="size-6 sm:size-8 shrink-0 grid place-content-center border border-brand-gray rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 sm:size-6 hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className="font-medium">Хочу купить в подарок</p>
            </label>
            <Button
              variant="primary"
              className="h-[60px] 3xl:h-20 w-full lg:text-lg 3xl:text-22 font-medium rounded-full"
            >
              Записаться на обучение
            </Button>
          </form>

          {/* Socials */}
          <div className="relative z-10 lg:max-w-[280px] 3xl:max-w-[340px] hidden sm:flex lg:hidden flex-col sm:flex-row lg:flex-col 3xl:items-center gap-3 lg:gap-6 font-medium">
            <a
              href="#"
              className="h-16 3xl:h-[76px] w-full sm:w-fit lg:w-full group flex items-center justify-center gap-3 text-white border border-white rounded-full hover:text-brand-primary hover:bg-white transition-all duration-300 px-6 3xl:px-9"
            >
              <p>Написать в Telegram</p>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-brand-primary transition-all duration-300"
              >
                <path d="M19.9832 1.55416C20.1391 0.518552 19.1818 -0.29886 18.2865 0.105423L0.456022 8.15765C-0.185965 8.44757 -0.139005 9.44776 0.526834 9.66586L4.20393 10.8703C4.90573 11.1002 5.66566 10.9813 6.27848 10.5458L14.5687 4.65464C14.8187 4.47698 15.0912 4.84259 14.8776 5.0691L8.91014 11.3974C8.33126 12.0113 8.44616 13.0515 9.14246 13.5006L15.8237 17.8101C16.5731 18.2934 17.5371 17.8079 17.6773 16.8765L19.9832 1.55416Z" />
              </svg>
            </a>
            <a
              href="#"
              className="h-16 3xl:h-[76px] w-full sm:w-fit lg:w-full group flex items-center justify-center gap-3 text-white border border-white rounded-full hover:text-brand-primary hover:bg-white transition-all duration-300 px-6 3xl:px-9"
            >
              <p>Написать в WhatsApp</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-brand-primary transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 13.8832 1.99575 15.6505 2.86386 17.1787L1.5 22.5L6.98615 21.2278C8.47603 22.0391 10.1842 22.5 12 22.5ZM12 20.8846C16.9068 20.8846 20.8846 16.9068 20.8846 12C20.8846 7.09316 16.9068 3.11538 12 3.11538C7.09316 3.11538 3.11538 7.09316 3.11538 12C3.11538 13.8945 3.70838 15.6506 4.71888 17.0927L3.92308 20.0769L6.95995 19.3177C8.39202 20.3059 10.1284 20.8846 12 20.8846Z"
                />
                <path d="M9.37502 7.12504C9.12537 6.6236 8.7424 6.668 8.35551 6.668C7.66407 6.668 6.58594 7.49621 6.58594 9.03759C6.58594 10.3008 7.14259 11.6836 9.01831 13.7522C10.8285 15.7485 13.207 16.7812 15.1817 16.7461C17.1563 16.7109 17.5625 15.0117 17.5625 14.4379C17.5625 14.1835 17.4047 14.0566 17.296 14.0221C16.6231 13.6992 15.382 13.0975 15.0996 12.9844C14.8172 12.8714 14.6698 13.0243 14.5781 13.1075C14.3221 13.3515 13.8144 14.0707 13.6406 14.2325C13.4668 14.3942 13.2077 14.3124 13.0999 14.2512C12.7031 14.092 11.6272 13.6134 10.7696 12.7821C9.70899 11.754 9.64675 11.4002 9.44693 11.0854C9.28707 10.8335 9.40437 10.6789 9.46291 10.6114C9.69142 10.3477 10.007 9.94061 10.1485 9.73832C10.29 9.53602 10.1776 9.22889 10.1102 9.03759C9.82033 8.21488 9.57474 7.52618 9.37502 7.12504Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
