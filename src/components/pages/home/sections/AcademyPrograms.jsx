import { div, img } from "framer-motion/client";
import Button from "../../../shared/Button";

const programs = [
  {
    num: 1,
    title: "Программа для женщин «Нутрициология для жизни»",
    group: "Мини-группа",
    duration: "2",
    texts: [
      "После прохождения программы вы научитесь составлять сбалансированный рацион для себя и своих близких, узнаете как достичь желаемой формы без жестких диет.",
      "Вы избавитесь от раскрученных мифов и научитесь анализировать доступные продукты, у вас появятся привычки, которые помогут питаться правильно.",
    ],
    img: "/assets/images/img-academy-program-1.avif",
  },
  {
    num: 2,
    title: "Профессиональная программа «Нутрициология и диетология»",
    group: "Мини-группа",
    duration: "4",
    texts: [
      "После прохождения программы вы научитесь составлять сбалансированный рацион для себя и своих близких, узнаете как достичь желаемой формы без жестких диет.",
      "Вы избавитесь от раскрученных мифов и научитесь анализировать доступные продукты, у вас появятся привычки, которые помогут питаться правильно.",
    ],
    img: "/assets/images/img-academy-program-2.avif",
  },
  {
    num: 3,
    title:
      "Профессиональная программа «Нутрициология и диетология для спортсменов»",
    group: "Мини-группа",
    duration: "3",
    texts: [
      "После прохождения программы вы научитесь составлять сбалансированный рацион для себя и своих близких, узнаете как достичь желаемой формы без жестких диет.",
      "Вы избавитесь от раскрученных мифов и научитесь анализировать доступные продукты, у вас появятся привычки, которые помогут питаться правильно.",
    ],
    img: "/assets/images/img-academy-program-3.avif",
  },
  {
    num: 4,
    title: "Углубленная программа «Вегетарианство»",
    group: "Мини-группа",
    duration: "3",
    texts: [
      "После прохождения программы вы научитесь составлять сбалансированный рацион для себя и своих близких, узнаете как достичь желаемой формы без жестких диет.",
      "Вы избавитесь от раскрученных мифов и научитесь анализировать доступные продукты, у вас появятся привычки, которые помогут питаться правильно.",
    ],
    img: "/assets/images/img-academy-program-4.avif",
  },
];

const learnings = [
  {
    icon: "/assets/images/icon-learning-1.svg",
    title: "Как составлять индивидуальный сбалансированный рацион питания",
    text: "Узнаёте как оставлять рацион питания для себя и всей семьи. Сможете получить максимум пользы от еды без дополнительных БАДов, добавок и витаминов.",
  },
  {
    icon: "/assets/images/icon-learning-2.svg",
    title: "Как контролировать свой веся",
    text: "Узнаёте всю правду о диетах и детоксах, сможете просто контролировать свой вес без ограничений и изнурительных диет.",
  },
  {
    icon: "/assets/images/icon-learning-3.svg",
    title: "Правду о мифах о питании",
    text: "Сможете отличать мифы от реальности, перестанете подаваться рекламе и бесполезным советам. Научитесь выбирать продукты в доступных вам магазинах и разбираться в их составах.",
  },
  {
    icon: "/assets/images/icon-learning-4.svg",
    title: "Как правильно готовить продукты",
    text: "Разберетесь в тонкостях правильного приготовления продуктов и их обработки. Сможете просто применять эти знания в жизни.",
  },
  {
    icon: "/assets/images/icon-learning-5.svg",
    title: "Все о вегетарианстве",
    text: "Узнаете, как перейти на вегетарианство или разнообразить свое питание растительной пищей. Разберись в плюсах и минусах такого типа питания.",
  },
  {
    icon: "/assets/images/icon-learning-6.svg",
    title: "Получите новую профессию с документом гособразца",
    text: "Получите новую профессию и сертификат государственного образца РФ. Сможете полноценно консультировать клиентов. Увеличите свой доход.",
  },
];

export default function AcademyPrograms() {
  return (
    <section className="bg-brand-primary">
      <div className="container mx-auto px-30px">
        <h2 className="text-white mb-30px sm:mb-10 lg:mb-16 3xl:mb-20">
          Программы <br /> академии
        </h2>

        <div className="space-y-5 sm:space-y-30px lg:space-y-10 3xl:space-y-16">
          {programs.map((prog) => (
            <div
              key={prog.num}
              className="flex flex-col-reverse lg:flex-row gap-30px sm:gap-10 xl:gap-16 3xl:gap-20 bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px px-5 py-30px sm:p-30px lg:p-10 3xl:p-12"
            >
              <div className="space-y-5 lg:space-y-30px 3xl:space-y-10">
                {/* Number & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="size-14 sm:size-[70px] 3xl:size-24 shrink-0 grid place-content-center bg-brand-solid-cream text-xl sm:text-22 3xl:text-3xl font-bold rounded-full">
                    {prog.num}
                  </div>
                  <h3 className="text-lg sm:text-[1.375rem] 3xl:text-3xl font-bold">
                    {prog.title}
                  </h3>
                </div>

                {/* Format & Duration */}
                <div className="flex items-center gap-2.5 sm:gap-6">
                  <div className="w-full xs:w-fit text-center border border-brand-gray rounded-full xs:px-7 py-3 3xl:px-9 3xl:py-5">
                    <p className="text-[10px] sm:text-sm 3xl:text-lg text-brand-primary/50">
                      Формат обучения
                    </p>
                    <p className="text-sm sm:text-base 3xl:text-22">
                      {prog.group}
                    </p>
                  </div>

                  <div className="w-full xs:w-fit text-center border border-brand-gray rounded-full xs:px-7 py-3 3xl:px-9 3xl:py-5">
                    <p className="text-[10px] sm:text-sm 3xl:text-lg text-brand-primary/50">
                      Длительность
                    </p>
                    <p className="text-sm sm:text-base 3xl:text-22">
                      {prog.duration} месяца
                    </p>
                  </div>
                </div>

                {/* Paragraphs */}
                <div className="max-w-2xl space-y-5 text-sm sm:text-base 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8 pr-8">
                  {prog.texts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col 3xl:flex-row gap-3.5 3xl:gap-5">
                  <Button
                    variant="primary"
                    className="h-16 lg:h-[77px] 3xl:h-[98px] w-full sm:w-auto 3xl:w-1/2 text-lg 3xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8"
                  >
                    Забронировать место
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 lg:h-[77px] 3xl:h-[98px] w-full sm:w-auto 3xl:w-1/2 text-lg 3xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8"
                  >
                    Узнать подробнее
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="h-40 xs:h-80 w-full lg:w-1/2 lg:h-[656px] shrink-0 rounded-2xl lg:rounded-30px overflow-hidden">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* What will you learn? */}
        <div className="flex flex-col lg:flex-row justify-between gap-30px sm:gap-10 lg:gap-16 xl:gap-10 mt-16 sm:mt-24 lg:mt-[150px] 3xl:mt-[200px]">
          <h2 className="text-white mb-30px sm:mb-10 lg:mb-16 2xl-mb-20">
            Что вы <br className="hidden 3xl:block" /> узнаете
          </h2>

          {/* Blocks */}
          <div className="max-w-[1052px] grid sm:grid-cols-2 gap-5 sm:gap-y-10 lg:gap-10">
            {/* Left Blocks */}
            <div className="space-y-5 sm:space-y-10 lg:space-y-10">
              {/* Learning Block 1 */}
              <div className="bg-brand-cream min-h-60 sm:min-h-[400px] md:min-h-80 lg:min-h-[356px] 3xl:min-h-[444px] flex flex-col justify-between gap-10 rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 sm:p-30px lg:p-10">
                <div className="flex sm:flex-col-reverse md:flex-row items-start justify-between gap-6">
                  <h3 className="text-lg lg:text-22 3xl:text-3xl font-medium !leading-6 lg:leading-[30px] 3xl:leading-10">
                    Как составлять индивидуальный сбалансированный
                    рацион питания
                  </h3>

                  <img
                    src="/assets/images/icon-learning-1.svg"
                    alt="Icon"
                    className="size-12 xs:size-20 sm:size-12 3xl:size-16"
                  />
                </div>

                <p className="text-sm xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Узнаёте как оставлять рацион питания для себя и всей семьи.
                  Сможете получить максимум пользы от еды без дополнительных
                  БАДов, добавок и витаминов.
                </p>
              </div>
              {/* Learning Block 2 */}
              <div className="bg-white min-h-60 sm:min-h-[400px] md:min-h-80 lg:min-h-[356px] 3xl:min-h-[444px] flex flex-col justify-between gap-10 rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 sm:p-30px lg:p-10">
                <div className="flex sm:flex-col-reverse md:flex-row items-start justify-between gap-6">
                  <h3 className="text-lg lg:text-22 3xl:text-3xl font-medium !leading-6 lg:leading-[30px] 3xl:leading-10">
                    Правду о мифах о питании
                  </h3>

                  <img
                    src="/assets/images/icon-learning-2.svg"
                    alt="Icon"
                    className="size-12 xs:size-20 sm:size-12 3xl:size-16"
                  />
                </div>

                <p className="text-sm xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Сможете отличать мифы от реальности, перестанете подаваться
                  рекламе и бесполезным советам. Научитесь выбирать продукты
                  в доступных вам магазинах и разбираться в их составах.
                </p>
              </div>
              {/* Learning Block 3 */}
              <div className="bg-brand-cream min-h-60 sm:min-h-[400px] md:min-h-80 lg:min-h-[356px] 3xl:min-h-[444px] flex flex-col justify-between gap-10 rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 sm:p-30px lg:p-10">
                <div className="flex sm:flex-col-reverse md:flex-row items-start justify-between gap-6">
                  <h3 className="text-lg lg:text-22 3xl:text-3xl font-medium !leading-6 lg:leading-[30px] 3xl:leading-10">
                    Все о вегетарианстве
                  </h3>

                  <img
                    src="/assets/images/icon-learning-3.svg"
                    alt="Icon"
                    className="size-12 xs:size-20 sm:size-12 3xl:size-16"
                  />
                </div>

                <p className="text-sm xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Узнаете, как перейти на вегетарианство или разнообразить свое
                  питание растительной пищей. Разберись в плюсах и минусах
                  такого типа питания.
                </p>
              </div>
            </div>
            {/* Right Blocks */}
            <div className="flex flex-col items-stretch space-y-5 sm:space-y-10 lg:space-y-10 sm:mt-16 3xl:mt-32">
              {/* Learning Block 1 */}
              <div className="bg-white min-h-60 sm:min-h-[400px] md:min-h-80 lg:min-h-[356px] 3xl:min-h-[444px] flex flex-col justify-between gap-10 rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 sm:p-30px lg:p-10">
                <div className="flex sm:flex-col-reverse md:flex-row items-start justify-between gap-6">
                  <h3 className="text-lg lg:text-22 3xl:text-3xl font-medium !leading-6 lg:leading-[30px] 3xl:leading-10">
                    Как контролировать свой вес
                  </h3>

                  <img
                    src="/assets/images/icon-learning-4.svg"
                    alt="Icon"
                    className="size-12 xs:size-20 sm:size-12 3xl:size-16"
                  />
                </div>

                <p className="text-sm xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Узнаёте всю правду о диетах и детоксах, сможете просто
                  контролировать свой вес без ограничений и изнурительных диет.
                </p>
              </div>
              {/* Learning Block 2 */}
              <div className="bg-brand-cream min-h-60 sm:min-h-[400px] md:min-h-80 lg:min-h-[356px] 3xl:min-h-[444px] flex flex-col justify-between gap-10 rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 sm:p-30px lg:p-10">
                <div className="flex sm:flex-col-reverse md:flex-row items-start justify-between gap-6">
                  <h3 className="text-lg lg:text-22 3xl:text-3xl font-medium !leading-6 lg:leading-[30px] 3xl:leading-10">
                    Как правильно готовить продукты
                  </h3>

                  <img
                    src="/assets/images/icon-learning-5.svg"
                    alt="Icon"
                    className="size-12 xs:size-20 sm:size-12 3xl:size-16"
                  />
                </div>

                <p className="text-sm xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Разберетесь в тонкостях правильного приготовления продуктов и
                  их обработки. Сможете просто применять эти знания в жизни.
                </p>
              </div>
              {/* Learning Block 3 */}
              <div className="bg-white min-h-60 sm:min-h-[400px] md:min-h-80 lg:min-h-[356px] 3xl:min-h-[444px] flex flex-col justify-between gap-10 rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 sm:p-30px lg:p-10">
                <div className="flex sm:flex-col-reverse md:flex-row items-start justify-between gap-6">
                  <h3 className="text-lg lg:text-22 3xl:text-3xl font-medium !leading-6 lg:leading-[30px] 3xl:leading-10">
                    Получите новую профессию с документом гособразца
                  </h3>

                  <img
                    src="/assets/images/icon-learning-6.svg"
                    alt="Icon"
                    className="size-14 xs:size-24 sm:size-14 3xl:size-[72px]"
                  />
                </div>

                <p className="text-sm xs:text-lg sm:text-base lg:text-lg 3xl:text-22 leading-5 sm:leading-6 3xl:leading-8">
                  Получите новую профессию и сертификат государственного образца
                  РФ. Сможете полноценно консультировать клиентов.
                  Увеличите свой доход.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
