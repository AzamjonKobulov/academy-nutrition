export default function Methods() {
  return (
    <section className="bg-brand-cream section-minus">
      <div className="container mx-auto grid lg:grid-cols-3 gap-5 sm:gap-30px md:gap-10 px-30px">
        {/* 1 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 bg-white rounded-22px overflow-hidden p-2.5 sm:p-5 lg:p-2.5 3xl:p-4">
          <div className="rounded-22px overflow-hidden">
            <img
              src="/assets/images/img-methods-1.png"
              alt="Image"
              className="w-full sm:h-[212px] 3xl:h-80 object-cover"
            />
          </div>

          <div className="space-y-2.5 3xl:space-y-3.5 pb-3 px-2.5 lg:px-3 3xl:p-4">
            <h3 className="text-xl 3xl:text-30 font-medium 3xl:leading-10">
              Практика
            </h3>
            <p className="text-base 3xl:text-22 3xl:leading-8">
              Предоставляем лиды для практики после обучения
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 bg-white rounded-22px overflow-hidden p-2.5 sm:p-5 lg:p-2.5 3xl:p-4">
          <div className="rounded-22px overflow-hidden">
            <img
              src="/assets/images/img-methods-2.png"
              alt="Image"
              className="w-full sm:h-[212px] 3xl:h-80 object-cover"
            />
          </div>

          <div className="space-y-2.5 3xl:space-y-3.5 pb-3 px-2.5 lg:px-3 3xl:p-4">
            <h3 className="text-xl 3xl:text-30 font-medium 3xl:leading-10">
              Стань частью коммьюнити
            </h3>
            <p className="text-base 3xl:text-22 3xl:leading-8">
              Предоставляем лиды для практики после обучения
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 bg-white rounded-22px overflow-hidden p-2.5 sm:p-5 lg:p-2.5 3xl:p-4">
          <div className="rounded-22px overflow-hidden">
            <img
              src="/assets/images/img-methods-3.png"
              alt="Image"
              className="w-full sm:h-[212px] 3xl:h-80 object-cover"
            />
          </div>

          <div className="space-y-2.5 3xl:space-y-3.5 pb-3 px-2.5 lg:px-3 3xl:p-4">
            <h3 className="text-xl 3xl:text-30 font-medium 3xl:leading-10">
              Корпоративное обучение
            </h3>
            <p className="text-base 3xl:text-22 3xl:leading-8">
              Предоставляем лиды для практики после обучения
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
