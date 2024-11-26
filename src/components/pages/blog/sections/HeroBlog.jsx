export default function HeroBlog() {
  return (
    <section className="bg-brand-cream pt-32 -mt-16 sm:-mt-20 3xl:-mt-24 lg:pt-32 3xl:pt-44">
      <div className="container 3xl:max-w-blog mx-auto px-30px">
        {/* Path */}
        <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm 3xl:text-lg -mt-5 sm:mt-0">
          <span>Главная</span>
          <span>/</span>
          <span>Блог</span>
          <span>/</span>
          <span>Как правильное питание влияет на здоровье</span>
        </div>

        <h1 className="font-felidae text-4xl sm:text-6xl 3xl:text-[84px] 3xl:leading-[80px] mt-6 lg:mt-10 mt-12">
          Как правильное питание влияет на здоровье h1
        </h1>
        <p className="mt-4 3xl:mt-6">
          Нутрициология — это наука о питании и его влиянии на здоровье
          человека. В этом тексте мы разберем ключевые аспекты нутрициологии,
          как питание влияет на организм, и дадим практические советы для
          улучшения рациона.
        </p>

        <div className="text-center space-y-3 3xl:space-y-5">
          <div className="aspect-video rounded-3xl overflow-hidden mt-8 sm:mt-12 3xl:mt-16">
            <img
              src="/assets/images/img-blog.png"
              alt="Blog"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm">Caption текст</p>
        </div>
      </div>
    </section>
  );
}
