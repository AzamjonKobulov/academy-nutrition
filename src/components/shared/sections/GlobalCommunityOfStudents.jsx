import Button from "../Button";

export default function GlobalCommunityOfStudents({
  bg = "bg-brand-cream",
  flags = "/assets/images/img-flags.png",
  button = false,
  text = "Присоединяйся и стань частью сообщества, меняющего мир. У нас есть всё для твоего обучения и развития - от курсов до стажировок. Найди друзей и создавай будущее вместе с нами.",
}) {
  return (
    <section className={`${bg} section-minus`}>
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-30px lg:gap-[60px] 3xl:gap-40 lg:px-30px">
        {/* Titles & Text */}
        <div className="lg:max-w-[401px] 3xl:max-w-[507px] flex flex-col lg:gap-40 3xl:gap-[60px] lg:gap-y-20 px-30px">
          <h2>Глобальное коммьюнити студентов</h2>
          <div className="space-y-30px">
            <p className="hidden lg:block text-sm xs:text-lg sm:!text-base 3xl:!text-22 leading-5 sm:!leading-6 3xl:!leading-8">
              {text}
            </p>
            {button && (
              <Button
                variant="primary"
                className="hidden 3xl:block h-[59px] lg:h-[73px] 3xl:h-[101px] w-full sm:w-auto lg:w-full font-medium whitespace-nowrap text-2xl rounded-full px-4 lg:px-8"
              >
                Вступить в наше коммьюнити
              </Button>
            )}
          </div>
        </div>

        {/* Countries */}
        <div className="lg:max-w-[660px] 3xl:max-w-[940px] w-full">
          <img src={flags} alt="Flags" className="w-full" />
        </div>

        {/* Text Mobile */}
        <p className="text-base 3xl:text-22 leading-6 3xl:leading-8 lg:hidden px-30px md:px-0">
          {text}
        </p>
      </div>
    </section>
  );
}
