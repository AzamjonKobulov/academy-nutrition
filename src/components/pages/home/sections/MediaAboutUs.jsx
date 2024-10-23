const medias = [
  {
    img: "/assets/images/logo-media-1.svg",
    review:
      "«Будучи вегетарианцем, смог решить проблему спортивного питания и достичь желаемых результатов»",
    url: "",
  },
  {
    img: "/assets/images/logo-media-2.svg",
    review:
      "“Курс произвёл на меня впечатление! Смогла похудеть, получила хорошее настроение и массу полезной информации!”",
    url: "",
  },
  {
    img: "/assets/images/logo-media-3.svg",
    review:
      "«Смогла получить толковую теоретическую базу и проверенную информацию для своего блога и аудитории!»",
    url: "",
  },
];

export default function MediaAboutUs() {
  return (
    <section className="bg-brand-cream -mt-[60px] sm:-mt-20 lg:-mt-[90px] 3xl:-mt-32">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-[60px] 3xl:space-y-20 px-30px">
        <h2>Сми о нас</h2>

        {/* Medias */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-30px lg:gap-10">
          {medias.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              className="sm:min-h-[171px] lg:min-h-[347px] 3xl:min-h-[460px] group relative flex flex-col justify-between gap-30px bg-white rounded-[22px] sm:rounded-2xl py-30px px-5 sm:p-30 3xl:p-10"
            >
              {/* Arrow */}
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 3xl:size-8 absolute bottom-30px right-5 sm:bottom-30px sm:right-30px 3xl:bottom-10 3xl:right-10 group-hover:rotate-45 transition-all duration-150"
              >
                <path
                  d="M7 7H26M26 7V26M26 7L8 25"
                  stroke="#434035"
                  strokeWidth="1.5"
                />
              </svg>
              {/* Top */}
              <p>{media.review}</p>
              {/* Bottom */}
              <img
                src={media.img}
                alt="Media Logo"
                className={` ${
                  medias.length - 1
                    ? "max-w-[50%] sm:max-w-[20%] lg:max-w-[50%] h-10 3xl:h-14"
                    : "max-w-[60%] sm:max-w-[40%] lg:max-w-[70%]"
                } `}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
