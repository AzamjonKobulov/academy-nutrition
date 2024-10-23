export default function GlobalCommunityOfStudents() {
  return (
    <section className="bg-brand-cream section-minus">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-30px lg:gap-[60px] 3xl:gap-40 lg:px-30px">
        {/* Titles & Text */}
        <div className="lg:max-w-[401px] 3xl:max-w-[507px] flex flex-col lg:gap-40 3xl:gap-[60px] lg:gap-y-20 px-30px">
          <h2>Глобальное коммьюнити студентов</h2>
          <p className="hidden lg:block text-sm xs:text-lg sm:!text-base 3xl:!text-22 leading-5 sm:!leading-6 3xl:!leading-8">
            Присоединяйся и стань частью сообщества, меняющего мир. У нас есть
            всё для твоего обучения и развития - от курсов до стажировок. Найди
            друзей и создавай будущее вместе с нами.
          </p>
        </div>

        {/* Countries */}
        <div className="lg:max-w-[660px] 3xl:max-w-[940px] w-full">
          <img
            src="/assets/images/img-flags.png"
            alt="Flags"
            className="w-full"
          />
        </div>

        {/* Text Mobile */}
        <p className=" lg:hidden px-30px">
          Присоединяйся и стань частью сообщества, меняющего мир. У нас есть всё
          для твоего обучения и развития - от курсов до стажировок. Найди друзей
          и создавай будущее вместе с нами.
        </p>
      </div>
    </section>
  );
}
