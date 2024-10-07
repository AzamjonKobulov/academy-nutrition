import Button from "../../shared/Button";

export default function Hero() {
  return (
    <section className="relative bg-brand-cream bg-hero-mobile xs:bg-hero bg-no-repeat xs:bg-cover bg-left-bottom sm:bg-top -mt-16 sm:-mt-20 2xl:-mt-24 pt-32 pb-0 sm:pb-20 lg:pt-40 2xl:pt-48">
      <div className="container mx-auto px-30px">
        {/* Title */}
        <h1 className="mx-auto text-[52px] xs:text-7xl md:text-[119px] lg:text-[160px] xl:text-[185px] 2xl:text-[224px] 3xl:text-[265px] font-felidae leading-[52px] xs:leading-[60px] md:leading-[119px] lg:leading-[155px] xl:leading-[180px] 3xl:leading-[15rem]">
          Нутрициология <br /> и диетология
        </h1>
        {/* Image */}
        <img
          src="/public/images/img-hero.png"
          alt="Image"
          className="hidden sm:block w-[360px] h-[590px] md:w-80 md:h-[520px] lg:w-[413px] lg:h-[676px] 3xl:w-auto 3xl:h-auto absolute bottom-0 right-0 md:right-10 lg:left-1/2 lg:-translate-x-1/3"
        />

        {/* Button & USA Flag */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-30px sm:gap-10 mt-7 xs:mt-10 2xl:mt-24">
          <Button
            variant="primary"
            className="sm:w-fit h-[62px] sm:h-[73px] 2xl:h-[6.3125rem] lg:text-lg 2xl:text-2xl font-medium rounded-full px-8 lg:px-12 2xl:px-16"
          >
            Начать обучение
          </Button>

          <div className="sm:max-w-80 xl:max-w-72 2xl:max-w-[31.0625rem] flex gap-5 xl:gap-30px">
            <img
              src="/public/images/img-usa-flag.svg"
              alt="USA flag"
              className="size-12 lg:size-16 shrink-0"
            />
            <p className="text-sm sm:text-base 2xl:text-2xl font-medium">
              Онлайн-обучение по программе Американской Академии питания и
              диетологии
            </p>
          </div>
        </div>

        {/* Academies */}
        <div className="max-w-full xs:max-w-64 sm:max-w-80 md:max-w-96 lg:max-w-[439px] 2xl:max-w-auto h-8 lg:h-10 2xl:h-auto flex items-center gap-5 sm:gap-7 2xl:gap-10 mt-8 sm:mt-40 lg:mt-32 2xl:mt-24">
          <img
            src="/public/images/academy-1.svg"
            alt="Academy"
            className="h-full w-1/3 xs:w-fit"
          />
          <img
            src="/public/images/academy-2.svg"
            alt="Academy"
            className="h-full w-1/3 xs:w-fit"
          />
          <img
            src="/public/images/academy-3.svg"
            alt="Academy"
            className="h-full w-1/3 xs:w-fit"
          />
        </div>

        {/* Image Mobile */}
        <img
          src="/public/images/img-hero.png"
          alt="Image"
          className=" sm:hidden w-[261px] h-[428px] mt-3 mx-auto"
        />
      </div>
    </section>
  );
}
