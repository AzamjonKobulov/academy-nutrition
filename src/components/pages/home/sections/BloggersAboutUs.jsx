const bloggers = [
  {
    img: "/assets/images/img-blogger-1.png",
    name: "Аделина Лазарова",
    nickname: "adelina_lazarova",
    followers: "124k",
    review:
      "Меня как тренера часто спрашивают по правилам приема пищи. Хочу вам порекомендовать Школу Культуры Питания.",
    url: "https://www.instagram.com/adelina_lazarova/?__pwa=1",
  },
  {
    img: "/assets/images/img-blogger-2.png",
    name: "Кайфория",
    nickname: "kajforia",
    followers: "38,1k",
    review:
      "Я нашла для себя очень интересную информацию. На мой вгляд, эту информацию должны давать детям в школе вместе с математикой и литературой :)",
    url: "https://www.instagram.com/kajforia/?__pwa=1",
  },
  {
    img: "/assets/images/img-blogger-3.png",
    name: "Влад Романов",
    nickname: "toprvd",
    followers: "116k",
    review:
      "Хочу вам порекомендовать Школу Культуры Питания, где обучают основам нутрициологии и диетологии.",
    url: "https://www.instagram.com/toprvd/?__pwa=1",
  },
];

export default function BloggersAboutUs() {
  return (
    <section className="bg-brand-cream -mt-[60px] sm:-mt-20 lg:-mt-[90px] 3xl:-mt-32">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-[60px] 3xl:space-y-20 px-30px">
        <h2>Блогеры о нас</h2>

        {/* Blogers */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-30px lg:gap-10">
          {bloggers.map((blogger) => (
            <a
              key={blogger.name}
              href={blogger.url}
              target="_blank"
              className="group relative flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-30px lg:gap-6 bg-white rounded-[22px] sm:rounded-2xl py-30px px-5 sm:p-30 3xl:p-10"
            >
              {/* Arrow */}
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 3xl:size-8 absolute top-30px right-5 sm:top-30px sm:right-30px 3xl:top-10 3xl:right-10 group-hover:rotate-45 transition-all duration-150"
              >
                <path
                  d="M7 7H26M26 7V26M26 7L8 25"
                  stroke="#434035"
                  strokeWidth="1.5"
                />
              </svg>
              {/* Top */}
              <div>
                {/* Blogger Image */}
                <div className="size-[142px] 3xl:size-48 shrink-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full p-1">
                  <div className="w-full h-full bg-white rounded-full p-1">
                    <img
                      src={blogger.img}
                      alt={blogger.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Bottom */}
              <div className="space-y-[18px]">
                <div className="space-y-2.5">
                  <h4 className="font-medium text-xl lg:text-22 3xl:text-3xl">
                    {blogger.name}
                  </h4>
                  {/* Profile Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 text-sm 3xl:text-lg text-brand-primary/60">
                    <span>@{blogger.nickname}</span>
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/images/icon-user.svg"
                        alt="Followers Icon"
                        className="size-4 3xl:size-5 shrink-0"
                      />
                      <span>{blogger.followers} подписчиков</span>
                    </div>
                  </div>
                </div>
                <p>{blogger.review}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
