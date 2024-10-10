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

export default function Articles() {
  return (
    <section className="bg-brand-cream mt-[60px] sm:-mt-20 lg:-mt-[120px] 2xl:-mt-40">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 2xl:space-y-20">
        <h2 className="px-30px">Статьи</h2>

        {/* Content */}
        <div className="space-y-30px lg:space-y-8 2xl:space-y-12">
          {/* Tags */}
          <div className="no-scroll max-w-min overflow-auto">
            <div className="min-w-max flex sm:flex-wrap gap-2.5">
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={idx === 0 ? "primary" : "outline"}
                  className={`h-10 sm:h-12 lg:h-[60px] 2xl:h-20 2xl:text-22 rounded-xl 2xl:rounded-2xl ${
                    idx === 0
                      ? "ml-30px"
                      : idx === buttons.length - 1
                      ? "mr-30px"
                      : ""
                  } px-2 sm:px-3 lg:px-[18px] 2xl:px-6`}
                >
                  {btn}
                </Button>
              ))}
            </div>
          </div>

          {/* Blocks */}
          <div className="grid lg:grid-cols-3 gap-5 sm:gap-30px lg:gap-10 px-30px">
            {/* Block 1 */}
            <Link
              to="/"
              className="group flex flex-col sm:flex-row lg:flex-col items-stretch bg-white rounded-2xl lg:rounded-22px 2xl:rounded-30px p-5 lg:p-2.5 2xl:p-4"
            >
              {/* Image */}
              <div className="relative w-full sm:w-[260px] lg:w-auto shrink-0 rounded-2xl lg:rounded-22px 2xl:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-article-1.png"
                  alt="Image Lektorium"
                  className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
                />

                {/* Date */}
                <div className="h-10 2xl:h-[52px] w-fit absolute z-10 flex items-center left-6 bottom-0 bg-brand-orange text-22 rounded-t-2xl px-5">
                  06.08.23
                </div>
              </div>

              {/* Texts */}
              <div className="flex flex-col gap-y-3.5 lg:gap-y-5 pb-4 lg:pt-30px lg:px-3.5">
                <h4 className="font-medium text-xl 2xl:text-[26px] leading-8 2xl:leading-8">
                  Как составлять индивидуальный сбалансированный рацион питания
                </h4>

                <div className="flex items-center gap-2.5 text-sm lg:text-lg">
                  <button className="h-9 bg-brand-cream rounded-lg px-2.5">
                    Вебинар
                  </button>
                  <button className="h-9 bg-brand-cream rounded-lg px-2.5">
                    Нутрициология
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              className="h-16 lg:h-[77px] 2xl:h-[98px] 2xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8"
            >
              Все статьи
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
