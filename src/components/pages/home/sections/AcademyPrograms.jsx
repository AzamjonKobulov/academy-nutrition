import { img } from "framer-motion/client";
import Button from "../../../shared/Button";

const programs = [
  {
    num: 1,
    title: "Программа для женщин «Нутрициология для жизни»",
    group: "Мини-группа",
    duration: "4",
    texts: [
      "После прохождения программы вы научитесь составлять сбалансированный рацион для себя и своих близких, узнаете как достичь желаемой формы без жестких диет.",
      "Вы избавитесь от раскрученных мифов и научитесь анализировать доступные продукты, у вас появятся привычки, которые помогут питаться правильно.",
    ],
    img: "/assets/images/img-academy-program-1.png",
  },
];

export default function AcademyPrograms() {
  return (
    <section className="bg-brand-primary">
      <div className="container mx-auto px-30px">
        <h2 className="text-white mb-30px sm:mb-10 lg:mb-16 2xl:mb-20">
          Программы <br /> академии
        </h2>

        <div>
          <div className="flex flex-col-reverse lg:flex-row gap-30px sm:gap-10 xl:gap-16 2xl:gap-20 bg-white rounded-2xl lg:rounded-22px 2xl:rounded-30px px-5 py-30px sm:p-30px lg:p-10 2xl:p-12">
            <div className="space-y-5 lg:space-y-30px 2xl:space-y-10">
              {/* Number & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="size-14 sm:size-[70px] 2xl:size-24 shrink-0 grid place-content-center bg-brand-solid-cream text-xl sm:text-22 2xl:text-3xl font-bold rounded-full">
                  1
                </div>
                <h3 className="text-lg sm:text-[1.375rem] 2xl:text-3xl font-bold">
                  Программа для женщин «Нутрициология для жизни»
                </h3>
              </div>

              {/* Format & Duration */}
              <div className="flex items-center gap-2.5 sm:gap-6">
                <div className="text-center border border-brand-gray rounded-full px-7 py-3 2xl:px-9 2xl:py-5">
                  <p className="text-[10px] sm:text-sm 2xl:text-lg text-brand-primary/50">
                    Формат обучения
                  </p>
                  <p className="text-sm sm:text-base 2xl:text-22">
                    Мини-группа
                  </p>
                </div>

                <div className="text-center border border-brand-gray rounded-full px-7 py-3 2xl:px-9 2xl:py-5">
                  <p className="text-[10px] sm:text-sm 2xl:text-lg text-brand-primary/50">
                    Длительность
                  </p>
                  <p className="text-sm sm:text-base 2xl:text-22">4 месяца</p>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="max-w-2xl space-y-5 text-sm sm:text-base 2xl:text-22 leading-5 sm:leading-6 2xl:leading-8 pr-8">
                <p>
                  После прохождения программы вы научитесь составлять
                  сбалансированный рацион для себя и своих близких, узнаете как
                  достичь желаемой формы без жестких диет.
                </p>

                <p>
                  Вы избавитесь от раскрученных мифов и научитесь анализировать
                  доступные продукты, у вас появятся привычки, которые помогут
                  питаться правильно.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col 2xl:flex-row gap-3.5 2xl:gap-5">
                <Button
                  variant="primary"
                  className="h-16 lg:h-[77px] 2xl:h-[98px] w-full sm:w-auto 2xl:w-1/2 text-lg 2xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8"
                >
                  Забронировать место
                </Button>
                <Button
                  variant="outline"
                  className="h-16 lg:h-[77px] 2xl:h-[98px] w-full sm:w-auto 2xl:w-1/2 text-lg 2xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8"
                >
                  Узнать подробнее
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="h-40 xs:h-80 w-full lg:w-1/2 lg:h-[656px] shrink-0 rounded-2xl lg:rounded-30px overflow-hidden">
              <img
                src="/assets/images/img-academy-program-1.png"
                alt="Girls"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
