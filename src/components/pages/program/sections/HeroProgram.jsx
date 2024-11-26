import Button from "../../../shared/Button";

export default function HeroProgram() {
  return (
    <section className="relative bg-brand-cream bg-hero-mobile xs:bg-hero bg-no-repeat xs:bg-cover bg-left-bottom sm:bg-right-top -mt-24 sm:-mt-28 lg:-mt-20 sm:pb-20 3xl:pb[143px] pt-36 sm:pt-40 lg:pt-32 3xl:pt-40">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-30px">
        {/* Title & Texts */}
        <div className="w-full">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="">
              <div className="flex items-center gap-2.5 font-bold text-xs lg:text-sm 3xl:text-lg mt-3.5">
                <img src="/assets/images/icon-tick.svg" alt="Tick" />
                Лектор MS Nutrition с Лицензией в США • Профессиональная
                программа
              </div>

              {/* Title */}
              <h1 className="font-felidae text-[52px] sm:text-[57px] lg:text-[83px] 3xl:text-[110px] leading-[52px] lg:leading-[75px] 3xl:leading-[100px] mt-6 lg:mt-30px 3xl:mt-[60px]">
                Нутрициология <br /> и диетология
              </h1>

              <p className="mt-3.5 sm:mt-5 lg:mt-6">
                После прохождения курса вы сможете не только решить
                индивидуальные вопросы с лектором-врачом, но и составлять
                программы питания с учётом индивидуальных особенностей клиентов
                и достигать поставленных клиентом целей.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 lg:gap-5 text-sm lg:text-lg 3xl:text-2xl mt-6 sm:mt-5 lg:mt-30px 3xl:mt-10">
                <Button
                  variant="primary"
                  className="h-[59px] lg:h-[73px] 3xl:h-[101px] w-full sm:w-auto lg:w-full font-medium whitespace-nowrap rounded-full px-4 lg:px-8"
                >
                  Начать обучение
                </Button>
                <Button
                  variant="outline"
                  className="h-[59px] lg:h-[73px] 3xl:h-[101px] w-full sm:w-auto lg:w-full font-medium whitespace-nowrap rounded-full px-4 lg:px-8"
                >
                  Написать консультанту
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="hidden sm:block lg:hidden aspect-square rounded-22px lg:rounded-30px overflow-hidden">
              <img
                src="/assets/images/img-hero-program.jpg"
                alt="Anna"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Infos */}
          <div className="grid grid-cols-3 gap-2 sm:gap-5 3xl:gap-10 mt-12 sm:mt-[60px] lg:mt-12 3xl:mt-16">
            {/* Info 1 */}
            <div className="relative bg-brand-light-gray rounded-22px lg:rounded-[30px] pb-3.5 px-3 pt-9 sm:px-4 3xl:pb-6 3xl:pt-12 3xl:px-30px">
              <img
                src="/assets/images/img-clock.png"
                alt="Clock"
                className="size-9 3xl:size-12 absolute -top-4 lg:-top-5"
              />

              {/* Texts */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm 3xl:text-xl font-bold">1 июня</span>
                <span className="text-xs sm:text-sm 3xl:text-xl">
                  Старт потока
                </span>
              </div>
            </div>
            {/* Info 2 */}
            <div className="relative bg-brand-light-gray rounded-22px lg:rounded-[30px] pb-3.5 px-3 pt-9 sm:px-4 3xl:pb-6 3xl:pt-12 3xl:px-30px">
              <img
                src="/assets/images/img-calendar.png"
                alt="Clock"
                className="size-9 3xl:size-12 absolute -top-4 lg:-top-5"
              />

              {/* Texts */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm 3xl:text-xl font-bold">4 месяца</span>
                <span className="text-xs sm:text-sm 3xl:text-xl">
                  Онлайн-обучение
                </span>
              </div>
            </div>
            {/* Info 3 */}
            <div className="relative bg-brand-light-gray rounded-22px lg:rounded-[30px] pb-3.5 px-3 pt-9 sm:px-4 3xl:pb-6 3xl:pt-12 3xl:px-30px">
              <img
                src="/assets/images/img-chat.png"
                alt="Clock"
                className="size-9 3xl:size-12 absolute -top-4 lg:-top-5"
              />

              {/* Texts */}
              <div className="flex flex-col space-y-1">
                <span className="text-sm 3xl:text-xl font-bold">6 человек</span>
                <span className="text-xs sm:text-sm 3xl:text-xl">
                  Мини-группа
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="sm:hidden lg:block aspect-square rounded-22px lg:rounded-30px overflow-hidden">
          <img
            src="/assets/images/img-hero-program.jpg"
            alt="Anna"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
