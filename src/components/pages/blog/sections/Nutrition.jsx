import Button from "../../../shared/Button";

export default function Nutrition() {
  return (
    <section className="bg-brand-cream -mt-12 sm:-mt-16 lg:-mt-20 3xl:-mt-24">
      <div className="container 3xl:max-w-blog mx-auto section-minus px-30px">
        <h2 className="text-[28px] sm:text-4xl lg:text-5xl 3xl:text-[67px] leading-8 sm:leading-10 lg:leading-[56px] 3xl:leading-[64px]">
          Питание и нутрициология h2
        </h2>

        <p className="mt-4 lg:mt-6 3xl:mt-8">
          Нутрициология изучает влияние пищи на здоровье, анализирует, как
          питательные вещества воздействуют на организм, и помогает разработать
          рекомендации по питанию для различных групп населения.
        </p>

        <p className="mt-2.5 lg:mt-4 3xl:mt-6">
          Правильное питание является ключевым фактором в поддержании здоровья и
          предотвращении многих заболеваний.
        </p>

        {/* Питание и нутрициология h2 */}
        <div className="mt-6 sm:mt-8 lg:mt-10 3xl:mt-[60px]">
          <h3 className="font-felidae text-2xl sm:text-3xl lg:text-4xl 3xl:text-[54px] leading-7 sm:leading-8 lg:leading-9 3xl:leading-[51px]">
            Влияние питания на различные аспекты здоровья: h3
          </h3>

          <ul className="space-y-3 3xl:space-y-4 mt-5 sm:mt-7 lg:mt-9 3xl:mt-12">
            <li className="flex gap-2.5 lg:gap-4">
              <p className="size-6 3xl:size-8 shrink-0 grid place-content-center bg-brand-orange rounded-full">
                1
              </p>
              <p>
                <b>Здоровье сердца:</b> Сбалансированная диета помогает снизить
                риск сердечно-сосудистых заболеваний.
              </p>
            </li>
            <li className="flex gap-2.5 lg:gap-4">
              <p className="size-6 3xl:size-8 shrink-0 grid place-content-center bg-brand-orange rounded-full">
                2
              </p>
              <p>
                <b>Здоровье сердца:</b> Сбалансированная диета помогает снизить
                риск сердечно-сосудистых заболеваний.
              </p>
            </li>
            <li className="flex gap-2.5 lg:gap-4">
              <p className="size-6 3xl:size-8 shrink-0 grid place-content-center bg-brand-orange rounded-full">
                3
              </p>
              <p>
                <b>Иммунитет:</b> Витамины и минералы укрепляют иммунную
                систему, помогая организму бороться с инфекциями.
              </p>
            </li>
          </ul>

          <p className="mt-5 sm:mt-7 lg:mt-9 3xl:mt-12">
            Чтобы организму хватало энергии и всех необходимых веществ, важно
            учитывать разнообразие и баланс в питании.
          </p>
          <p>
            Как раз баланс и разнообразие рациона питания человека входит в
            задачу нутрициологии. Влияние пищи на здоровье и анализ того, как
            питательные вещества воздействуют на организм, и помогает
            разработать рекомендации по питанию для различных групп населения.
            <b>Жирный текст</b>. <br />
            <a href="#" className="underline">
              Ссылка в тексте.
            </a>
          </p>
        </div>

        {/* Влияние питания */}
        <div className="mt-8 sm:mt-10 lg:mt-16 3xl:mt-20">
          <h4 className="font-felidae text-xl sm:text-2xl lg:text-3xl 3xl:text-[43px] leading-6 sm:leading-7 lg:leading-8 3xl:leading-10">
            Влияние питания на различные аспекты здоровья: h3
          </h4>

          <ul className="space-y-3 3xl:space-y-4 mt-3 sm:mt-4 lg:mt-6 3xl:mt-8">
            <li className="flex gap-2.5 lg:gap-4">
              <div className="size-6 3xl:size-8 shrink-0 grid place-content-center bg-brand-orange rounded-full">
                <span className="size-2 3xl:size-2.5 shrink-0 bg-brand-primary rounded-full"></span>
              </div>
              <p>
                <b>Белки:</b> Строительный материал для мышц и тканей.
              </p>
            </li>
            <li className="flex gap-2.5 lg:gap-4">
              <div className="size-6 3xl:size-8 shrink-0 grid place-content-center bg-brand-orange rounded-full">
                <span className="size-2 3xl:size-2.5 shrink-0 bg-brand-primary rounded-full"></span>
              </div>
              <p>
                <b>Углеводы:</b> Главный источник энергии.
              </p>
            </li>
            <li className="flex gap-2.5 lg:gap-4">
              <div className="size-6 3xl:size-8 shrink-0 grid place-content-center bg-brand-orange rounded-full">
                <span className="size-2 3xl:size-2.5 shrink-0 bg-brand-primary rounded-full"></span>
              </div>
              <p>
                <b>Жиры:</b> Необходимы для усвоения витаминов и поддержания
                клеточных мембран.
              </p>
            </li>
            <li className="flex gap-2.5 lg:gap-4">
              <div className="size-6 3xl:size-8 shrink-0 grid place-content-center bg-brand-orange rounded-full">
                <span className="size-2 3xl:size-2.5 shrink-0 bg-brand-primary rounded-full"></span>
              </div>
              <p>
                <b>Витамины и минералы:</b> Участвуют в биохимических процессах
                и поддерживают иммунитет.
              </p>
            </li>
          </ul>
        </div>

        {/* Основные группы */}
        <div className="mt-8 sm:mt-10 lg:mt-16 3xl:mt-20">
          <h5 className="font-semibold text-xl xs:text-2xl lg:text-3xl 3xl:text-[34px] leading-6 xs:leading-7 lg:leading-8 3xl:leading-[46px]">
            Практические советы по здоровому питанию h5
          </h5>

          <p className="mt-5 lg:mt-6 3xl:mt-8">
            Регулярные приемы пищи: Старайтесь питаться 3-5 раз в день
            небольшими порциями. Пейте больше воды: Вода помогает улучшить обмен
            веществ и поддерживать водный баланс.
          </p>

          <p className="mt-2.5 lg:mt-3.5 3xl:mt-5">
            Ограничьте сахар и соль: Избыток сахара и соли может привести к
            проблемам со здоровьем. Добавьте в рацион овощи и фрукты: Они богаты
            клетчаткой и витаминами.
          </p>
        </div>

        {/* Практические советы */}
        <div className="bg-brand-gray rounded-3xl sm:rounded-30px mt-6 sm:mt-8 lg:mt-10 3xl:mt-[60px] p-6 sm:p-8 lg:p-10 3xl:p-12">
          <h6 className="font-semibold text-lg xs:text-xl lg:text-2xl 3xl:text-[28px] leading-6 lg:leading-8 3xl:leading-9">
            Правильное питание — это не диета, это образ жизни, который
            позволяет вам чувствовать себя лучше, жить дольше и радоваться
            каждому дню. h6
          </h6>
        </div>

        {/* Мифы и реальность: h6 */}
        <div
          className="space-y-4 sm:space-y-5 lg:space-y-8
         mt-8 sm:mt-10 lg:mt-16 3xl:mt-20"
        >
          <h6 className="font-semibold text-lg xs:text-xl lg:text-2xl 3xl:text-[28px] leading-6 lg:leading-8 3xl:leading-9">
            Мифы и реальность: h6
          </h6>

          {/* Table */}
          <table className="w-full table table-auto text-left text-sm sm:text-base lg:text-lg">
            <thead>
              <tr>
                <th className="pb-5">Миф</th>
                <th className="pb-5">Реальность</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-brand-gray">
                <td className="py-3 pr-3 lg:py-5 lg:pr-5">
                  <div className="max-w-56">Углеводы вредны для фигуры</div>
                </td>
                <td className="py-3 pr-3 lg:py-5 lg:pr-5">
                  Углеводы важны для энергии, главное — выбирать сложные
                  углеводы
                </td>
              </tr>
              <tr className="border-t border-brand-gray">
                <td className="py-3 pr-3 lg:py-5 lg:pr-5">
                  <div className="max-w-56">Все жиры вредны</div>
                </td>
                <td className="py-3 pr-3 lg:py-5 lg:pr-5">
                  Углеводы важны для энергии, главное — выбирать сложные
                  углеводы
                </td>
              </tr>
              <tr className="border-t border-brand-gray">
                <td className="py-3 pr-3 lg:py-5 lg:pr-5">
                  <div className="max-w-56">Детокс-диеты очищают организм</div>
                </td>
                <td className="py-3 pr-3 lg:py-5 lg:pr-5">
                  Организм сам очищается, главное — сбалансированное питание
                </td>
              </tr>
            </tbody>
          </table>

          <p className="mt-5 sm:mt-7 lg:mt-9 3xl:mt-12">
            Здоровое питание — это основа долгой и активной жизни. Нутрициология
            предлагает науку, основанную на фактах, которая помогает понять, как
            пища влияет на наш организм и как сделать рацион максимально
            полезным.
          </p>

          {/* Хотите узнать больше */}
          <div className="relative space-y-12 bg-brand-primary text-white rounded-3xl lg:rounded-30px overflow-hidden p-6 sm:p-8 lg:p-10 3xl:p-12">
            <div className="space-y-6">
              <h5 className="font-semibold text-xl xs:text-2xl md:text-3xl lg:text-[34px] leading-6 xs:leading-7 md:leading-8 lg:leading-[46px]">
                Хотите узнать больше о нутрициологии и получить персональные
                рекомендации по питанию?
              </h5>
              <p className="max-w-2xl">
                Заполните форму ниже, чтобы получить бесплатную консультацию от
                нашего специалиста и полезные материалы по правильному питанию.
              </p>
            </div>

            {/* Form */}
            <form
              action="#"
              className="w-full lg:w-1/2 space-y-6 text-brand-primary text-sm sm:text-base lg:text-lg 3xl:text-22"
            >
              <input
                type="text"
                className="h-14 md:h-16 xl:h-20 w-full rounded-full placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg 3xl:placeholder:text-22 outline-none focus:outline focus:outline-brand-orange transition-all duration-200 px-30px"
                placeholder="Имя"
              />
              <input
                type="text"
                className="h-14 md:h-16 xl:h-20 w-full rounded-full placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg 3xl:placeholder:text-22 outline-none focus:outline focus:outline-brand-orange transition-all duration-200 px-30px"
                placeholder="Телефон"
              />
              <Button className="h-14 md:h-16 xl:h-20 w-full bg-brand-orange text-brand-primary font-medium text-sm lg:text-lg 3xl:text-2xl whitespace-nowrap rounded-full hover:bg-brand-orange/80 transition-all duration-300 px-4 lg:px-8 2xl:px-16">
                Начать обучение
              </Button>
            </form>

            {/* Round */}
            <img
              src="/assets/images/elipse-round.svg"
              alt="Round Elipse"
              className="w-[40%] hidden lg:block absolute bottom-0 right-0"
            />

            {/* Anna's Image */}
            <img
              src="/assets/images/img-hero.avif"
              alt="Anna"
              className="hidden lg:block w-[30%] absolute right-0 lg:-bottom-12 3xl:bottom-0"
            />
          </div>
        </div>
        {/* Socials */}
        <div className="flex items-center gap-10 mt-8 sm:mt-10 lg:mt-16 3xl:mt-20">
          <p className="font-bold">Поделитесь статьей в социальных сетях:</p>

          <div className="flex items-center gap-3.5 lg:gap-5">
            {/* Whatsapp */}
            <a
              href="#"
              className="size-10 lg:size-12 shrink-0 grid place-content-center border-2 border-brand-gray rounded-lg hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 lg:size-auto shrink-0"
              >
                <g clipPath="url(#clip0_650_2312)">
                  <path
                    d="M12.5031 0H12.4969C5.60469 0 0 5.60625 0 12.5C0 15.2344 0.88125 17.7687 2.37969 19.8266L0.821875 24.4703L5.62656 22.9344C7.60313 24.2438 9.96094 25 12.5031 25C19.3953 25 25 19.3922 25 12.5C25 5.60781 19.3953 0 12.5031 0ZM19.7766 17.6516C19.475 18.5031 18.2781 19.2094 17.3234 19.4156C16.6703 19.5547 15.8172 19.6656 12.9453 18.475C9.27187 16.9531 6.90625 13.2203 6.72188 12.9781C6.54531 12.7359 5.2375 11.0016 5.2375 9.20781C5.2375 7.41406 6.14844 6.54063 6.51562 6.16563C6.81719 5.85781 7.31562 5.71719 7.79375 5.71719C7.94844 5.71719 8.0875 5.725 8.2125 5.73125C8.57969 5.74687 8.76406 5.76875 9.00625 6.34844C9.30781 7.075 10.0422 8.86875 10.1297 9.05313C10.2188 9.2375 10.3078 9.4875 10.1828 9.72969C10.0656 9.97969 9.9625 10.0906 9.77812 10.3031C9.59375 10.5156 9.41875 10.6781 9.23438 10.9062C9.06563 11.1047 8.875 11.3172 9.0875 11.6844C9.3 12.0437 10.0344 13.2422 11.1156 14.2047C12.5109 15.4469 13.6422 15.8438 14.0469 16.0125C14.3484 16.1375 14.7078 16.1078 14.9281 15.8734C15.2078 15.5719 15.5531 15.0719 15.9047 14.5797C16.1547 14.2266 16.4703 14.1828 16.8016 14.3078C17.1391 14.425 18.925 15.3078 19.2922 15.4906C19.6594 15.675 19.9016 15.7625 19.9906 15.9172C20.0781 16.0719 20.0781 16.7984 19.7766 17.6516Z"
                    fill="#434035"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_650_2312">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="size-10 lg:size-12 shrink-0 grid place-content-center border-2 border-brand-gray rounded-lg hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 lg:size-auto shrink-0"
              >
                <path
                  d="M16.6641 4.15104H18.9464V0.176042C18.5526 0.121875 17.1984 0 15.6214 0C12.3307 0 10.0766 2.06979 10.0766 5.87396V9.375H6.44531V13.8187H10.0766V25H14.5286V13.8198H18.013L18.5661 9.37604H14.5276V6.31458C14.5286 5.03021 14.8745 4.15104 16.6641 4.15104Z"
                  fill="#434035"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              className="size-10 lg:size-12 shrink-0 grid place-content-center border-2 border-brand-gray rounded-lg hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 lg:size-auto shrink-0"
              >
                <g clipPath="url(#clip0_650_2322)">
                  <path
                    d="M9.80956 15.8131L9.39602 21.6298C9.98769 21.6298 10.2439 21.3757 10.5512 21.0704L13.3252 18.4194L19.0731 22.6288C20.1273 23.2163 20.87 22.9069 21.1544 21.659L24.9273 3.97982L24.9283 3.97878C25.2627 2.42044 24.3648 1.81107 23.3377 2.19336L1.1606 10.684C-0.35294 11.2715 -0.330023 12.1152 0.90331 12.4975L6.5731 14.2611L19.7429 6.02044C20.3627 5.61003 20.9262 5.83711 20.4627 6.24753L9.80956 15.8131Z"
                    fill="#434035"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_650_2322">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
