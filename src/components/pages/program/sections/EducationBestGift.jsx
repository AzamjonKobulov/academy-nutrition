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

export default function EducationBestGift() {
  return (
    <section className="bg-brand-cream section-minus">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 px-30px">
        <div className="relative flex flex-col-reverse sm:grid grid-cols-2 sm:items-center sm:gap-12 rounded-2xl lg:rounded-[44px] 3xl:rounded-[60px] overflow-hidden after:absolute after:inset-0 after:bg-black/70 sm:p-30px lg:p-[60px] 3xl:p-[90px]">
          {/* BG Image */}
          <img
            src="/assets/images/img-subscribe.jpg"
            alt="Image"
            className="absolute sm:inset-0 w-full h-full sm:h-full object-cover object-right sm:object-center"
          />

          {/* Texts */}
          <div className="relaative z-10 h-full flex flex-col gap-5 justify-between sm:gap-0 pb-30px px-5 sm:p-0">
            {/* Title */}
            <div className="space-y-3 sm:space-y-6 lg:space-y-30px 3xl:space-y-10 text-white">
              <h2>
                Обучение – <br /> лучший подарок
              </h2>
              <p className="max-w-[586px]">
                Покупай сертификат на обучение и подари его тому, кто никак не
                может решиться
              </p>
              <Button className="h-[59px] lg:h-[73px] 3xl:h-[101px] w-full sm:w-auto lg:w-fit bg-brand-orange text-brand-primary font-medium text-sm lg:text-lg 3xl:text-2xl whitespace-nowrap rounded-full hover:bg-brand-orange/80 transition-all duration-300 px-4 lg:px-8 2xl:px-16">
                Оформить сертификат
              </Button>
            </div>
          </div>

          {/* Certificates */}
          <div className="relative z-10 p-30px sm:p-0">
            {/* Image Mobile */}
            <img
              src="/assets/images/img-gift-certificate-mobile-program.svg"
              alt="Certificate"
              className="w-full sm:hidden"
            />

            <img
              src="/assets/images/img-gift-certificate-program.svg"
              alt="Certificate"
              className="w-full hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
