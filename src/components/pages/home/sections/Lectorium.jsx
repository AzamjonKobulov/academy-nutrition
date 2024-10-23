import { Link } from "react-router-dom";
import Button from "../../../shared/Button";
import TagButton from "../../../shared/TagButton";

const buttons = [
  "Нутрициология",
  "Рацион",
  "Диетология",
  "Программа",
  "Практика",
  "Коммьюнити",
  "Обучение",
];

export default function Lectorium() {
  return (
    <section className="bg-brand-cream">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20">
        <h2 className="px-30px">Лекториум</h2>

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

          {/* Blocks */}
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-30px lg:gap-10 px-30px">
            {/* Block 1 */}
            <Link
              to="/"
              className="group flex flex-col sm:flex-row lg:flex-col items-stretch bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 lg:p-2.5 3xl:p-4"
            >
              {/* Image */}
              <div className="relative w-full sm:w-[260px] lg:w-auto shrink-0 rounded-2xl lg:rounded-22px 3xl:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-lectorium-1.jpg"
                  alt="Image Lektorium"
                  className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
                />

                {/* Date */}
                <div className="h-10 w-fit absolute left-6 bottom-0 hidden lg:flex items-center gap-2.5 bg-brand-primary text-white text-22 rounded-t-2xl px-5">
                  <p>29.10.2023</p>
                  <span className="h-7 w-px bg-white/30"></span>
                  <p>20:30</p>
                </div>
              </div>

              {/* Texts */}
              <div className="flex flex-col gap-y-3.5 lg:gap-y-5 pt-5 sm:pl-30px lg:py-10 lg:px-6">
                {/* Date on Mobile */}
                <div className="h-10 w-fit flex lg:hidden items-center gap-2.5 bg-brand-primary text-white text-22 rounded-lg px-5">
                  <p>29.10.2023</p>
                  <span className="h-7 w-px bg-white/30"></span>
                  <p>20:30</p>
                </div>
                <h3 className="text-xl lg:text-22 3xl:text-3xl">
                  Вебинар «Нутрициология для жизни»
                </h3>
                <p className="text-base xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-6 sm:leading-6 3xl:leading-8">
                  Узнаёте как оставлять рацион питания для себя и всей семьи.
                  Сможете получить максимум пользы от еды без дополнительных
                  БАДов, добавок и витаминов.
                </p>
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
            {/* Block 2 */}
            <Link
              to="/"
              className="group flex flex-col sm:flex-row lg:flex-col items-stretch bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 lg:p-2.5 3xl:p-4"
            >
              {/* Image */}
              <div className="relative w-full sm:w-[260px] lg:w-auto shrink-0 rounded-2xl lg:rounded-22px 3xl:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-lectorium-2.jpg"
                  alt="Image Lektorium"
                  className="w-full h-full object-cover group-hover:scale-125 transition-all duration-300"
                />
              </div>

              {/* Texts */}
              <div className="flex flex-col gap-y-3.5 lg:gap-y-5 pt-5 sm:pl-30px lg:py-10 lg:px-6">
                <h3 className="text-xl lg:text-22 3xl:text-3xl">
                  Как правильно готовить продукты
                </h3>
                <p className="text-base xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-6 sm:leading-6 3xl:leading-8">
                  Разберетесь в тонкостях правильного приготовления продуктов и
                  их обработки. Сможете просто применять эти знания в жизни.
                </p>
                <div className="flex items-center gap-2.5 text-sm lg:text-lg">
                  <button className="h-9 bg-brand-cream rounded-lg px-2.5">
                    Рацион
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
              Перейти в лекториум
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
