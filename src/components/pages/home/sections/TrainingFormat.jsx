import Button from "../../../shared/Button";

const list = [
  "Фиксированная стоимость курса и гарантированное место в группе",
  "Доступ к лекциям онлайн из любой точки мира в удобное для вас время",
  "Диплом о повышении квалификации и свидетельство государственного образца",
  "Все материалы в простых схемах и таблицах остаются у вас навсегда",
  "Курирование студентов в небольших группах",
  "Личное участие Анны",
  "Возможность задать вопросы Анне",
];

export default function TrainingFormat() {
  return (
    <section className="">
      <div className="container mx-auto px-30px">
        <h2>Формат обучения</h2>
        <div className="space-y-30px sm:space-y-10 3xl:space-y-40">
          {/* Blocks */}
          <div className="space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 mt-30px sm:mt-10 lg:mt-16 3xl:mt-20">
            {/* Block 1 */}
            <div className="flex flex-col sm:flex-row gap-30px sm:gap-10 lg:gap-16 3xl:gap-20 bg-brand-cream rounded-2xl lg:rounded-22px 3xl:rounded-30px  p-5 sm:p-30px lg:p-10 3xl:p-12">
              <div className="space-y-3.5 sm:space-y-5 lg:space-y-8 3xl:space-y-10">
                <h3>Мини-группа</h3>

                <ul className="space-y-3.5 sm:space-y-4 lg:space-y-6 3xl:space-y-8">
                  {list.map((l) => (
                    <li
                      key={l}
                      className="flex gap-1.5 sm:gap-3 3xl:gap-4 text-sm sm:text-base 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8"
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 sm:size-7 3xl:size-8 shrink-0"
                      >
                        <circle
                          cx="17.0018"
                          cy="18.1337"
                          r="12.4667"
                          fill="#FFDC94"
                        />
                        <path
                          d="M11.332 16.2448L16.6209 21.5337L27.1987 5.66699"
                          stroke="#434035"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="sm:w-[220px] sm:h-[209px] lg:w-1/2 lg:h-auto shrink-0 rounded-2xl lg:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-girls.png"
                  alt="Girls"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col sm:flex-row lg:items-center gap-30px sm:gap-10 lg:gap-16 3xl:gap-20 bg-brand-cream rounded-2xl lg:rounded-22px 3xl:rounded-30px  p-5 sm:p-30px lg:p-10 3xl:p-12">
              {/* Image */}
              <div className="sm:w-[220px] sm:h-[209px] lg:w-1/2 lg:h-auto shrink-0 rounded-2xl lg:rounded-30px overflow-hidden">
                <img
                  src="/assets/images/img-books.png"
                  alt="Girls"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3.5 sm:space-y-5 lg:space-y-8 3xl:space-y-10">
                <h3>Методология обучения</h3>

                <p className="text-sm sm:text-base 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Наши курсы созданы для обучения с нуля. Чтобы усвоить
                  материал, необязательно иметь медицинское образование или даже
                  начальные знания о нутрициологии.
                </p>

                <p className="text-sm sm:text-base 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Чтобы усвоить материал, необязательно иметь медицинское
                  образование или даже начальные знания о нутрициологии.
                </p>
              </div>
            </div>
          </div>

          {/* Our Courses Block */}
          <div className="relative flex flex-col md:flex-row justify-between md:items-center md:justify-end md:gap-30px lg:gap-10 xl:gap-16 3xl:gap-20 bg-brand-cream rounded-2xl lg:rounded-22px 3xl:rounded-30px overflow-hidden md:p-30px lg:p-10 3xl:p-16">
            {/* BG Image */}
            <img
              src="/assets/images/img-girl-with-laptop.png"
              alt="Image"
              className="h-[340px] md:h-full w-full md:absolute inset-0 object-cover object-[25%] sm:object-center"
            />

            {/* Image */}
            <div className="h-1/2 md:h-full relative md:max-w-96 lg:max-w-[518px] 3xl:max-w-[691px] z-10 left-auto lg:w-fit lg:h-full shrink-0 flex flex-col justify-between bg-white border-x border-b border-brand-gray rounded-b-2xl lg:rounded-30px overflow-hidden p-5 md:p-7 lg:p-10">
              <div className="space-y-5">
                <h4 className="font-felidae tracking-wider text-[32px] sm:text-[40px] lg:lg:text-6xl 3xl:text-[80px] leading-[30px] sm:leading-[38px] lg:leading-[58px] 3xl:leading-[76px]">
                  Наши курсы <br /> созданы для <br /> обучения с нуля
                </h4>

                <p className="text-sm sm:text-base 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Чтобы усвоить материал, необязательно иметь медицинское
                  образование или даже начальные знания в области диетологии.
                </p>
              </div>

              <Button
                variant="primary"
                className="h-[60px] sm:h-16 lg:h-20 lg:text-lg 3xl:text-22 font-medium rounded-full mt-5 sm:mt-10"
              >
                Забронировать место
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
