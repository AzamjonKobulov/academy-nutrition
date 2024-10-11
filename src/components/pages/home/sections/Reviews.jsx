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

export default function Reviws() {
  return (
    <section className="bg-brand-primary">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 2xl:space-y-20 px-30px">
        <h2 className="text-white">
          Отзывы и кейсы <br /> наших учеников
        </h2>

        <div className="space-y-30px lg:space-y-8 2xl:space-y-12">
          {/* Reviews */}
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Review 1 */}
            <div className="flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 lg:col-span-6 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden p-2.5 sm:p-30px lg:p-2.5">
              {/* Video */}
              <div className="relative sm:w-[229px] sm:h-[282px] shrink-0 lg:w-full 2xl:h-[419px] rounded-xl 2xl:rounded-[26px] overflow-hidden">
                {/* Img When Video is OFF */}
                <img
                  src="/assets/images/img-review-1.png"
                  alt="Image"
                  className="w-full h-full object-cover"
                />

                {/* Video */}

                {/* Video Play Button */}
                <button className="size-20 2xl:size-[110px] shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:right-10 lg:top-10 lg:left-auto z-10 grid place-content-center bg-white/50 rounded-full">
                  <svg
                    width="32"
                    height="48"
                    viewBox="0 0 32 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-10 2xl:w-auto 2xl:h-auto ml-2"
                  >
                    <path
                      d="M30.1622 21.6781L4.89971 1.00886C2.94092 -0.593792 0 0.799846 0 3.33073V44.6693C0 47.2002 2.94092 48.5938 4.89971 46.9911L30.1622 26.3219C31.6292 25.1216 31.6292 22.8784 30.1622 21.6781Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              {/* Review Texts */}
              <div className="space-y-5 pt-30px px-2.5 sm:px-0 pb-5 sm:pb-0 sm:pt-0 lg:pt-30px 2xl:pt-10 lg:pb-5 2xl:pb-6 lg:px-3 2xl:px-4">
                <p>
                  «Будучи вегетарианцем, смог решить проблему спортивного
                  питания и достичь желаемых результатов»
                </p>

                {/* Name */}
                <p className="text-xs sm:text-sm 2xl:text-lg">
                  Валентин, Предприниматель
                </p>
              </div>
            </div>
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
