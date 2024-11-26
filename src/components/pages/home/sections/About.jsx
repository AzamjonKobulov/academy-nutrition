export default function About() {
  return (
    <section className="bg-brand-cream">
      <div className="container mx-auto relative flex flex-col md:flex-row space-y-5 px-30px">
        {/* Title & Blocks */}
        <div className="space-y-5 md:space-y-10 lg:space-y-16 3xl:space-y-20 left-0 top-0">
          <h2 className="pb-2.5 md:pb-0">
            Анна <br /> Пригожаева
          </h2>

          {/* Image Mobile */}
          <div className="md:hidden md:w-[350px] md:h-[498px] lg:h-[762px] lg:w-[537px] 3xl:w-[780px] 3xl:h-[672px] shrink-0 md:absolute right-8 top-0">
            <img
              src="/assets/images/img-about.png"
              alt="Anna's Image"
              className=""
            />
          </div>

          {/* Blocks */}
          <div className="md:max-w-lg lg:max-w-2xl 3xl:max-w-4xl relative z-10 grid sm:grid-cols-2 gap-5 lg:gap-30px text-sm leading-5 sm:text-base sm:leading-6 3xl:text-22 3xl:leading-8 md:pb-20 md:pr-11 lg:pr-3 3xl:pr-8">
            {/* Block 1 */}
            <div className="min-h-40 sm:min-h-[230px] 3xl:min-h-[304px] flex flex-col justify-between items-start bg-white rounded-2xl 3xl:rounded-22px p-5 3xl:p-30px">
              <img
                src="/assets/images/img-blocks-1.png"
                alt="Image"
                className="w-[150px] h-11 lg:w-[193px] lg:h-[58px] 3xl:w-[258px] 3xl:h-[77px]"
              />
              <p>Преподаватель в University of Saint Joseph</p>
            </div>
            {/* Block 2  */}
            <div className="min-h-40 sm:min-h-[230px] 3xl:min-h-[304px] flex flex-col justify-between items-start bg-white rounded-2xl 3xl:rounded-22px p-5 3xl:p-30px">
              <img
                src="/assets/images/img-blocks-2.png"
                alt="Image"
                className="size-12 lg:size-16 3xl:size-20"
              />
              <p>Клинический диетолог в Charlotte Hungerford Hospital</p>
            </div>
            {/* Block 3  */}
            <div className="min-h-40 sm:min-h-[230px] 3xl:min-h-[304px] flex flex-col justify-between items-start bg-white rounded-2xl 3xl:rounded-22px p-5 3xl:p-30px">
              <img
                src="/assets/images/img-blocks-3.png"
                alt="Image"
                className="size-14 xs:size-16 sm:size-14 lg:size-20 3xl:size-24"
              />
              <p>
                Исследователь и соавтор научных работ по общественному питанию
              </p>
            </div>
            {/* Block 4  */}
            <a
              href="#"
              className="min-h-40 sm:min-h-[230px] 3xl:min-h-[304px] relative group flex flex-col justify-between items-start bg-white rounded-2xl 3xl:rounded-22px p-5 3xl:p-30px"
            >
              <img
                src="/assets/images/img-blocks-4.png"
                alt="Image"
                className="size-14 xs:size-16 sm:size-14 lg:size-20 3xl:size-24"
              />
              <p>Зарегистрированный врач-диетолог и нутрициолог (США)</p>

              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 3xl:size-auto shrink-0 absolute top-5 right-5 lg:top-30px lg:right-30px 3xl:top-10 3xl:right-10 group-hover:rotate-45 transition-all duration-300"
              >
                <path
                  d="M7 7H26M26 7V26M26 7L8 25"
                  stroke="#434035"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Image Desktop */}
        <div className="hidden md:block md:w-[350px] md:h-[498px] lg:h-[762px] lg:w-[537px] 3xl:w-[780px] 3xl:h-[672px] shrink-0 md:absolute right-8 top-0">
          <img
            src="/assets/images/img-about.png"
            alt="Anna's Image"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
