import { Link } from "react-router-dom";
import Button from "../../../shared/Button";

const buttons = [
  "#Все",
  "#Нутрициология",
  "#Рацион",
  "#Диетология",
  "#Программа",
  "#Практика",
  "#Коммьюнити",
  "#Обучение",
];

export default function Subscribe() {
  return (
    <section className="bg-brand-cream section-minus">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 px-30px">
        <div className="relative flex flex-col sm:grid grid-cols-2 sm:gap-12 rounded-2xl lg:rounded-[44px] 3xl:rounded-[60px] overflow-hidden after:absolute after:inset-0 after:bg-black/70 sm:p-30px lg:p-[60px] 3xl:p-[90px]">
          {/* BG Image */}
          <img
            src="/assets/images/img-subscribe.jpg"
            alt="Image"
            className="absolute sm:inset-0 w-full h-1/2 sm:h-full object-cover object-left sm:object-center"
          />

          {/* Texts */}
          <div className="relaative z-10 h-full flex flex-col gap-5 justify-between sm:gap-0 py-30px px-5 sm:p-0">
            {/* Title */}
            <div className="space-y-4 text-white">
              <h2>Подписаться</h2>
              <p>
                Подпишись на обновления, чтобы не пропускать выход новых
                вебинаров и статей о нутрициологии и здоровом образе жизни.
                Никакого спама.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 lg:gap-5">
              <a href="#">
                <img
                  src="/assets/images/icon-telegram-subscribe.svg"
                  alt="Telegram Icon"
                  className="size-[54px] lg:size-[72px] 3xl:size-24"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/images/icon-instagram-subscribe.svg"
                  alt="Insagram Icon"
                  className="size-[54px] lg:size-[72px] 3xl:size-24"
                />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            action="#"
            className="relative z-10 h-1/2 sm:h-auto space-y-5 3xl:space-y-8 bg-white rounded-b-2xl sm:rounded-22px 3xl:rounded-30px p-30px lg:p-8 3xl:p-12"
          >
            <input type="text" placeholder="Имя" className="base-input" />
            <input type="text" placeholder="Телефон" className="base-input" />
            <input type="email" placeholder="Почта" className="base-input" />
            <Button
              variant="primary"
              className="h-[60px] 3xl:h-20 w-full lg:text-lg 3xl:text-22 font-medium rounded-full"
            >
              Подписаться
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
