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
    <section className="bg-brand-cream -mt-[60px] sm:-mt-20 lg:-mt-[120px] 2xl:-mt-40">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 2xl:space-y-20">
        <div className="relative grid grid-cols-2 gap-12 rounded-2xl lg:rounded-[44px] 2xl:rounded-[60px] p-30px lg:p-[60px] 2xl:p-[90px]">
          {/* BG Image */}
          <img
            src="/public/assets/images/img-subscribe.jpg"
            alt="Image"
            className="sm:absolute inset-0 w-full h-1/2 sm:h-full object-cover"
          />

          <div className="flex flex-col justify-between">
            {/* Title */}
            <div className="space-y-4 text-white">
              <h2>Подписаться</h2>
              <p>
                Подпишись на обновления, чтобы не пропускать выход новых
                вебинаров и статей о нутрициологии и здоровом образе жизни.
                Никакого спама.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
