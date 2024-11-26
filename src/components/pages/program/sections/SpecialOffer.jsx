import Button from "../../../shared/Button";

const offerBenefits = [
  "Профессиональный курс",
  "Уникальное предложение",
  "Группа 10 человек + лектор-куратор",
  "Лектор M.S. in Nutrition, США.",
  "4 месяца",
  "29 объемных тем",
  "Профиль на about.doctor",
];

export default function SpecialOffer() {
  return (
    <section>
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 px-30px">
        <div className="relative flex flex-col md:grid grid-cols-2 gap-30px lg:gap-12 rounded-2xl sm:rounded-[42px] lg:rounded-[60px] overflow-hidden after:absolute after:inset-0 after:bg-black/70 md:p-30px lg:p-[60px] 3xl:p-[90px]">
          {/* BG Image */}
          <img
            src="/assets/images/bg-findout.jpg"
            alt="Image"
            className="absolute md:inset-0 w-full h-1/2 md:h-full object-cover object-left sm:object-center"
          />

          {/* Texts */}
          <div className="relative z-10 h-full flex flex-col justify-between gap-3.5 lg:gap-10 pt-30px px-5 sm:p-8 md:p-0">
            <div className="space-y-3.5 sm:space-y-30px lg:space-y-10">
              {/* Title */}
              <div className="space-y-4 text-white">
                <h2>
                  Спец- <br />
                  предложение
                </h2>
              </div>

              {/* Offer Benefits */}
              <ul className="text-white text-sm lg:text-22 space-y-3 sm:space-y-5 lg:space-y-7">
                {offerBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 lg:gap-2.5">
                    <img
                      src="/assets/images/icon-tick.svg"
                      alt="Tick"
                      className="size-[22px] lg:size-8 shrink-0"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cost */}
            <div className="w-full xs:w-fit font-felidae flex items-end justify-center sm:justify-start gap-5 lg:gap-7 3xl:gap-10 bg-brand-orange rounded-22px lg:rounded-30px p-4 pb-3 lg:p-5 3xl:pb-4 3xl:p-8 lg:pb-5">
              <span className="text-brand-primary/40 line-through text-xl sm:text-[26px] lg:text-[37px] 3xl:text-[52px] tracking-wider leading-5 sm:leading-6 lg:leading-9">
                1090
              </span>
              <span className="text-[32px] sm:text-[52px] lg:text-7xl 3xl:text-[96px] tracking-wider leading-8 sm:leading-[49px] lg:leading-[68px] 3xl:leading-[91px]">
                690 usd
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            action="#"
            className="relative z-10 h-1/2 sm:h-auto space-y-5 sm:space-y-2.5 lg:space-y-5 3xl:space-y-8 bg-brand-cream md:bg-white md:rounded-22px lg:rounded-30px p-30px lg:p-8 lg:p-12"
          >
            <div className="space-y-5 sm:space-y-2.5 lg:space-y-5 3xl:space-y-8">
              <div className="text-center space-y-5">
                <p className="font-bold text-lg lg:text-22 3xl:text-30">
                  Получить консультацию
                </p>
                <p className="font-medium text-xs lg:text-sm 3xl:text-xl">
                  Координатор курса свяжется с вами, детально расскажет
                  о программе курса, ответит на ваши вопросы. Расскажет
                  подробнее о вариантах оплаты.
                </p>
              </div>

              <div className="h-14 lg:h-[60px] 3xl:h-[85px] flex items-center justify-center gap-3 bg-brand-orange rounded-2xl py-4 px-[22px]">
                <img
                  src="/assets/images/img-clock.png"
                  alt="clock"
                  className="size-8 lg:size-9 3xl:size-12 shrink-0"
                />
                <p className="font-medium text-base lg:text-[22px] 3xl:text-3xl">
                  Старт потока 8 июля
                </p>
              </div>
            </div>

            {/* ListBox */}

            <input type="text" placeholder="Имя" className="base-input" />
            <input type="text" placeholder="Телефон" className="base-input" />
            <input type="email" placeholder="Почта" className="base-input" />
            <input type="checkbox" id="check" className="hidden" />
            <div className="flex items-center sm:gap-3 bg-brand-cream rounded-2xl p-2 sm:p-3 3xl:p-4">
              <img
                src="/assets/images/icon-warning.svg"
                alt="Attention Icon"
                className="size-7 lg:size-[34px] 3xl:size-12 shrink-0"
              />
              <p className="text-xs md:text-sm 3xl:text-22 3xl:!leading-7">
                Важно: укажите телефон, на котором есть WhatsApp или Telegram.
              </p>
            </div>
            <Button
              variant="primary"
              className="h-[60px] lg:h-20 w-full lg:text-lg lg:text-22 font-medium rounded-full"
            >
              Получить консультацию
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
