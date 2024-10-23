export default function FromAuthor() {
  return (
    <section className="3xl:-mt-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start gap-30px 3xl:gap-24 px-30px">
        {/* Texts */}
        <div className="sm:space-y-10">
          <h2 className="hidden md:block">От автора</h2>

          <div className=" w-full space-y-30px">
            <div className="space-y-5">
              <h3>Анна Пригожаева</h3>

              <ul className="list-disc space-y-3.5 sm:space-y-5 text-sm xs:text-base 3xl:text-22  pl-7">
                <li>Преподаватель в University of Saint Joseph</li>
                <li>Клинический диетолог в Charlotte Hungerford Hospital</li>
                <li>
                  Исследователь и соавтор научных работ по общественному питанию
                </li>
                <li>Зарегистрированный врач-диетолог и нутрициолог (США)</li>
              </ul>
            </div>

            <div className="space-y-3.5 xs:space-y-5 text-sm xs:text-base 3xl:text-22">
              <p>
                Узнаете как оставлять рацион питания для себя и всей семьи.
                Сможете получить максимум пользы от еды без дополнительных
                БАДов, добавок и витаминов.
              </p>
              <p>
                Узнаете, как перейти на вегетарианство или разнообразить свое
                питание растительной пищей. Разберись в плюсах и минусах такого
                типа питания.
              </p>
              <p>
                Разберетесь в тонкостях правильного приготовления продуктов и их
                обработки. Сможете просто применять эти знания в жизни.
              </p>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="md:max-w-[350px] lg:max-w-[780px] group flex flex-col md:flex-row-reverse lg:flex-col md:gap-30px lg:gap-0 col-span-4 xl:col-span-6 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer">
          <h2 className="md:hidden mb-30px">От автора</h2>

          {/* Video */}
          <div className="relative rounded-xl 3xl:rounded-[26px] overflow-hidden">
            {/* Img When Video is OFF */}
            <img
              src="/assets/images/img-from-author.png"
              alt="Image"
              className="w-full h-full object-cover"
            />

            {/* Video */}

            {/* Video Play Button */}
            <button className="size-20 3xl:size-[110px] shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:translate-x-0 xl:translate-y-0 xl:right-10 xl:top-10 xl:left-auto z-10 grid place-content-center bg-white/50 rounded-full group-hover:bg-brand-primary transition-all duration-300">
              <svg
                width="32"
                height="48"
                viewBox="0 0 32 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-10 3xl:w-auto 3xl:h-auto ml-2"
              >
                <path
                  d="M30.1622 21.6781L4.89971 1.00886C2.94092 -0.593792 0 0.799846 0 3.33073V44.6693C0 47.2002 2.94092 48.5938 4.89971 46.9911L30.1622 26.3219C31.6292 25.1216 31.6292 22.8784 30.1622 21.6781Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
