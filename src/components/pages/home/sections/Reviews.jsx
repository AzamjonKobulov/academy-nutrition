import Button from "../../../shared/Button";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-brand-primary">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 px-30px">
        <h2 className="text-white">
          Отзывы и кейсы <br /> наших учеников
        </h2>

        <div className="space-y-30px lg:space-y-8 3xl:space-y-12">
          {/* Reviews With Video */}
          <div className="grid lg:grid-cols-12 gap-30px xl:gap-10">
            {/* Review 1 */}
            <div className="group flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 col-span-4 xl:col-span-6 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer p-2.5 sm:p-30px lg:p-2.5">
              {/* Video */}
              <div className="relative sm:w-[229px] sm:h-[282px] shrink-0 lg:w-full 3xl:h-[419px] rounded-xl 3xl:rounded-[26px] overflow-hidden">
                {/* Img When Video is OFF */}
                <img
                  src="/assets/images/img-review-1.png"
                  alt="Image"
                  className="w-full h-full object-cover"
                />

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
              {/* Review Texts */}
              <div className="space-y-5 pt-30px px-2.5 sm:px-0 pb-5 sm:pb-0 sm:pt-0 lg:pt-30px 3xl:pt-10 lg:pb-5 3xl:pb-6 lg:px-3 3xl:px-4">
                <p>
                  «Будучи вегетарианцем, смог решить проблему спортивного
                  питания и достичь желаемых результатов»
                </p>

                {/* Name */}
                <p className="text-xs sm:text-sm 3xl:text-lg text-brand-primary/70">
                  Валентин, Предприниматель
                </p>
              </div>
            </div>
            {/* Review 2 */}
            <div className="group flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 col-span-4 xl:col-span-3 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer p-2.5 sm:p-30px lg:p-2.5">
              {/* Video */}
              <div className="relative sm:w-[229px] sm:h-[282px] shrink-0 lg:w-full 3xl:h-[419px] rounded-xl 3xl:rounded-[26px] overflow-hidden">
                {/* Img When Video is OFF */}
                <img
                  src="/assets/images/img-review-2.png"
                  alt="Image"
                  className="w-full h-full object-cover"
                />

                {/* Video Play Button */}
                <button className="size-20 3xl:size-[110px] shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 grid place-content-center bg-white/50 rounded-full group-hover:bg-brand-primary transition-all duration-300">
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
              {/* Review Texts */}
              <div className="space-y-5 pt-30px px-2.5 sm:px-0 pb-5 sm:pb-0 sm:pt-0 lg:pt-30px 3xl:pt-10 lg:pb-5 3xl:pb-6 lg:px-3 3xl:px-4">
                <p>
                  “Курс произвёл на меня впечатление! Смогла похудеть, получила
                  хорошее настроение и массу полезной информации!”
                </p>

                {/* Name */}
                <p className="text-xs sm:text-sm 3xl:text-lg text-brand-primary/70">
                  Вероника, Юрист
                </p>
              </div>
            </div>
            {/* Review 3 */}
            <div className="group flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 col-span-4 xl:col-span-3 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer p-2.5 sm:p-30px lg:p-2.5">
              {/* Video */}
              <div className="relative sm:w-[229px] sm:h-[282px] shrink-0 lg:w-full 3xl:h-[419px] rounded-xl 3xl:rounded-[26px] overflow-hidden">
                {/* Img When Video is OFF */}
                <img
                  src="/assets/images/img-review-3.png"
                  alt="Image"
                  className="w-full h-full object-cover"
                />

                {/* Video Play Button */}
                <button className="size-20 3xl:size-[110px] shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 grid place-content-center bg-white/50 rounded-full group-hover:bg-brand-primary transition-all duration-300">
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
              {/* Review Texts */}
              <div className="space-y-5 pt-30px px-2.5 sm:px-0 pb-5 sm:pb-0 sm:pt-0 lg:pt-30px 3xl:pt-10 lg:pb-5 3xl:pb-6 lg:px-3 3xl:px-4">
                <p>
                  «Смогла получить толковую теоретическую базу и проверенную
                  информацию для своего блога и аудитории!»
                </p>

                {/* Name */}
                <p className="text-xs sm:text-sm 3xl:text-lg text-brand-primary/70">
                  Мария, Писатель и блогер
                </p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="grid lg:grid-cols-12 items-start gap-30px xl:gap-10">
            {/* Review 4 */}
            <div className="group flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 lg:col-span-4 h-auto bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer px-5 py-30px 3xl:p-10">
              {/* There is no video in this review */}

              {/* Review Texts */}
              <div className="space-y-5">
                <p>
                  Единственный курс, который полностью оправдал мои вложения.
                  Я работаю фитнес-тренером и в моей работе важную часть
                  составляет мое питание и питание моих клиентов. После курся я
                  составляю программы сбалансированного питания для клиентов и
                  значительно больше зарабатываю!
                </p>

                {/* Name */}
                <p className="text-xs sm:text-sm 3xl:text-lg text-brand-primary/70">
                  Яна, фитнес-тренер
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-30px xl:space-y-10">
              {/* Review 5 */}
              <div className="group flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 lg:col-span-4 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer px-5 py-30px 3xl:p-10">
                {/* There is no video in this review */}

                {/* Review Texts */}
                <div className="space-y-5">
                  <p>
                    Спасибо всей команде Школы! Вы лучшие! Я буду рекомендовать
                    вас своим знакомым! Ну и с теми знаниями, которые я
                    получила, я и сама консультирую своих друзей!
                  </p>

                  {/* Name */}
                  <p className="text-xs sm:text-sm 3xl:text-lg text-brand-primary/70">
                    Татьяна, менеджер по продажам
                  </p>
                </div>
              </div>
              {/* Review 7 */}
              <div className="group flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 lg:col-span-4 col-start-4 col-end-8 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer px-5 py-30px 3xl:p-10">
                {/* There is no video in this review */}

                {/* Review Texts */}
                <div className="space-y-5">
                  <p>
                    Ребята, спасибо за курс! Теперь мои дети едят правильную еду
                    с удовольствием! Я такого и препдоложить не могла)
                  </p>

                  {/* Name */}
                  <p className="text-xs sm:text-sm 3xl:text-lg text-brand-primary/70">
                    Алина, домохозяйка
                  </p>
                </div>
              </div>
            </div>
            {/* Review 6 */}
            <div className="group flex flex-col sm:flex-row-reverse lg:flex-col sm:gap-30px lg:gap-0 lg:col-span-4 bg-white rounded-22px sm:rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer px-5 py-30px 3xl:p-10">
              {/* There is no video in this review */}

              {/* Review Texts */}
              <div className="space-y-5">
                <p>
                  Анна, спасибо за курс! Спасибо всей команде школы Питания. В
                  декрете я прошла много разных курсов и искала себя.
                  Представляла с ужасом как я выйду на работу в офис после
                  декрета. Программу я покупала для себя и своего сына, хотела с
                  детства привить ему правильные привычки. Мало того, что курс
                  изменил взгляд на питание всей моей семьи, я нашла новую
                  профессию и начала работать с клиентами еще в декрете!
                </p>

                {/* Name */}
                <p className="text-xs sm:text-sm 3xl:text-lg text-brand-primary/70">
                  Виктория, диетолог
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              className="h-16 lg:h-[77px] 3xl:h-[98px] 3xl:text-22 font-medium whitespace-nowrap text-white border-white hover:bg-white hover:!text-brand-primary rounded-full px-6 lg:px-16"
            >
              Все отзывы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
