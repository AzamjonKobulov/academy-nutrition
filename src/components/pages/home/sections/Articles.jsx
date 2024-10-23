import { Link } from "react-router-dom";
import Button from "../../../shared/Button";
import TagButton from "../../../shared/TagButton";

const buttons = [
  "Все",
  "Нутрициология",
  "Рацион",
  "Диетология",
  "Программа",
  "Практика",
  "Коммьюнити",
  "Обучение",
];

export default function Articles() {
  return (
    <section className="bg-brand-cream section-minus">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20">
        <h2 className="px-30px">Статьи</h2>

        {/* Content */}
        <div className="space-y-30px lg:space-y-8 3xl:space-y-12">
          {/* Tags */}
          <div className="no-scroll max-w-min overflow-auto">
            <div className="min-w-max flex sm:flex-wrap gap-2.5">
              {buttons.map((btn, idx) => (
                <TagButton key={idx} idx={idx} btn={btn} buttons={buttons} />
              ))}
            </div>
          </div>

          {/* Articles */}
          <div className="grid lg:grid-cols-3 gap-5 sm:gap-30px md:gap-5 3xl:gap-10 px-30px">
            {/* Article 1 */}
            <Link
              to="/"
              className="group flex flex-col-reverse sm:flex-row-reverse lg:flex-col items-stretch sm:justify-between lg:justify-start gap-5 sm:gap-30px lg:gap-0 bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 lg:p-2.5 3xl:p-4"
            >
              {/* Image */}
              <div className="relative w-full h-60 sm:h-[260px] sm:w-[260px] lg:w-auto shrink-0 rounded-2xl lg:rounded-22px 3xl:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-article-1.png"
                  alt="Image Lektorium"
                  className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
                />

                {/* Date */}
                <div className="h-10 3xl:h-[52px] w-fit absolute z-10 hidden lg:flex items-center left-6 bottom-0 bg-brand-orange text-22 rounded-t-2xl px-5">
                  06.08.23
                </div>
              </div>

              {/* Texts */}
              <div className="flex flex-col justify-between gap-2.5 lg:gap-3.5 lg:pt-30px lg:pb-3 3xl:pb-3.5 lg:px-3.5">
                <div className="flex flex-col gap-y-3.5 lg:gap-y-5">
                  {/* Date Mobile */}
                  <div className="h-10 3xl:h-[52px] w-fit z-10 flex lg:hidden items-center left-6 bottom-0 bg-brand-orange rounded-lg px-3.5">
                    06.08.23
                  </div>
                  <h4 className="font-medium text-xl md:text-lg xl:text-xl 3xl:text-[26px] leading-7 3xl:leading-8">
                    Как составлять индивидуальный сбалансированный
                    рацион питания
                  </h4>
                </div>

                <div className="flex items-center gap-2.5 text-sm lg:text-lg">
                  <button className="h-9 md:text-sm xl:text-base bg-brand-cream rounded-lg px-2.5">
                    Вебинар
                  </button>
                  <button className="h-9 md:text-sm xl:text-base bg-brand-cream rounded-lg px-2.5">
                    Нутрициология
                  </button>
                </div>
              </div>
            </Link>
            {/* Article 2 */}
            <Link
              to="/"
              className="group flex flex-col-reverse sm:flex-row-reverse lg:flex-col items-stretch sm:justify-between lg:justify-start gap-5 sm:gap-30px lg:gap-0 bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 lg:p-2.5 3xl:p-4"
            >
              {/* Image */}
              <div className="relative w-full h-60 sm:h-[260px] sm:w-[260px] lg:w-auto shrink-0 rounded-2xl lg:rounded-22px 3xl:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-article-2.png"
                  alt="Image Lektorium"
                  className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
                />

                {/* Date */}
                <div className="h-10 3xl:h-[52px] w-fit absolute z-10 hidden lg:flex items-center left-6 bottom-0 bg-brand-orange text-22 rounded-t-2xl px-5">
                  06.08.23
                </div>
              </div>

              {/* Texts */}
              <div className="flex flex-col justify-between gap-2.5 lg:gap-3.5 lg:pt-30px lg:pb-3 3xl:pb-3.5 lg:px-3.5">
                <div className="flex flex-col gap-y-3.5 lg:gap-y-5">
                  {/* Date Mobile */}
                  <div className="h-10 3xl:h-[52px] w-fit z-10 flex lg:hidden items-center left-6 bottom-0 bg-brand-orange rounded-lg px-3.5">
                    06.08.23
                  </div>
                  <h4 className="font-medium text-xl md:text-lg xl:text-xl 3xl:text-[26px] leading-7 3xl:leading-8">
                    Как контролировать свой вес
                  </h4>
                </div>

                <div className="flex items-center gap-2.5 text-sm lg:text-lg">
                  <button className="h-9 md:text-sm xl:text-base bg-brand-cream rounded-lg px-2.5">
                    Диетология
                  </button>
                  <button className="h-9 md:text-sm xl:text-base bg-brand-cream rounded-lg px-2.5">
                    Рацион
                  </button>
                </div>
              </div>
            </Link>
            {/* Article 3 */}
            <Link
              to="/"
              className="group flex flex-col-reverse sm:flex-row-reverse lg:flex-col items-stretch sm:justify-between lg:justify-start gap-5 sm:gap-30px lg:gap-0 bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 lg:p-2.5 3xl:p-4"
            >
              {/* Image */}
              <div className="relative w-full h-60 sm:h-[260px] sm:w-[260px] lg:w-auto shrink-0 rounded-2xl lg:rounded-22px 3xl:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-article-3.png"
                  alt="Image Lektorium"
                  className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
                />

                {/* Date */}
                <div className="h-10 3xl:h-[52px] w-fit absolute z-10 hidden lg:flex items-center left-6 bottom-0 bg-brand-orange text-22 rounded-t-2xl px-5">
                  06.08.23
                </div>
              </div>

              {/* Texts */}
              <div className="flex flex-col justify-between gap-2.5 lg:gap-3.5 lg:pt-30px lg:pb-3 3xl:pb-3.5 lg:px-3.5">
                <div className="flex flex-col gap-y-3.5 lg:gap-y-5">
                  {/* Date Mobile */}
                  <div className="h-10 3xl:h-[52px] w-fit z-10 flex lg:hidden items-center left-6 bottom-0 bg-brand-orange rounded-lg px-3.5">
                    06.08.23
                  </div>
                  <h4 className="font-medium text-xl md:text-lg xl:text-xl 3xl:text-[26px] leading-7 3xl:leading-8">
                    Правда о мифах о питании
                  </h4>
                </div>

                <div className="flex items-center gap-2.5 text-sm lg:text-lg">
                  <button className="h-9 md:text-sm xl:text-base bg-brand-cream rounded-lg px-2.5">
                    Диетология
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              className="h-16 lg:h-[77px] 3xl:h-[98px] 3xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-16"
            >
              Все статьи
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
