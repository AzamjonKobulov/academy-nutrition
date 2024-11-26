export default function Anna() {
  return (
    <section>
      <div className="container flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-10 mx-auto sm:py-16 px-30px">
        {/* Anna's Image */}
        <div className="size-20 sm:size-[103px] lg:size-[153px] 3xl:size-[233px] shrink-0 rounded-full overflow-hidden">
          <img src="/assets/images/img-hero-program.jpg" alt="" />
        </div>

        {/* Texts */}
        <div className="relative">
          {/* Top Overlay */}
          <div className="w-[90%] h-[90%] hidden sm:block absolute -top-5 left-10 z-10 bg-brand-cream -rotate-[5deg] rounded-30px"></div>
          {/* Bottom Overlay */}
          <div className="w-[90%] h-[90%] hidden sm:block absolute -bottom-5 left-10 z-10 bg-brand-cream rotate-[5deg] rounded-30px"></div>
          {/* Overlay Image Mobile */}
          <img
            src="/assets/images/img-overlay-text-anna.png"
            alt="Overlay"
            className="absolute w-[90%] left-1/2 -translate-x-1/2 h-full -bottom-5"
          />
          <div className="max-w-[1054px] w-full relative z-20 bg-brand-light-gray rounded-2xl lg:rounded-22px 3xl:rounded-30px p-6 lg:p-9 3xl:p-12">
            <div className="relative z-10 space-y-3 sm:space-y-10 lg:space-y-16 3xl:space-y-32">
              <div className="space-y-3">
                <h5 className="sm:text-lg lg:text-22 3xl:text-3xl font-bold">
                  Анна Пригожаева
                </h5>
                <p className="text-sm sm:text-base lg:text-22 3xl:text-3xl">
                  Лектор и основатель Pitanie.Academy
                </p>
              </div>

              <div className="space-y-5">
                <p className="text-sm sm:text-base lg:text-22 3xl:text-3xl leading-5 sm:leading-6 lg:leading-8 3xl:leading-10">
                  Обучение базируется на доказательной медицине и опирается на
                  последние научные исследования.
                </p>

                <p className="text-sm sm:text-base lg:text-22 3xl:text-3xl leading-5 sm:leading-6 lg:leading-8 3xl:leading-10">
                  Лекции и все материалы написаны понятным и доступным языком,
                  поэтому подойдут как практикующим специалистам, так и
                  новичкам.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-fit w-fit mx-auto sm:mx-0 flex items-center gap-1 lg:gap-1.5 3xl:gap-2 bg-brand-light-gray rounded-full mt-4 p-1.5 lg:p-3 3xl:p-4">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5 lg:size-5 3xl:size-auto shrink-0"
          >
            <g opacity="0.5" clipPath="url(#clip0_626_2784)">
              <path
                d="M14.0007 2.3335C20.4442 2.3335 25.6673 7.55666 25.6673 14.0002C25.6673 20.4437 20.4442 25.6668 14.0007 25.6668C7.55715 25.6668 2.33398 20.4437 2.33398 14.0002C2.33398 7.55666 7.55715 2.3335 14.0007 2.3335ZM14.0007 7.00016C13.6912 7.00016 13.3945 7.12308 13.1757 7.34187C12.9569 7.56066 12.834 7.85741 12.834 8.16683V14.0002C12.8341 14.3096 12.957 14.6063 13.1758 14.825L16.6758 18.325C16.8959 18.5375 17.1906 18.6551 17.4965 18.6525C17.8023 18.6498 18.095 18.5271 18.3113 18.3108C18.5276 18.0945 18.6503 17.8019 18.6529 17.496C18.6556 17.1901 18.538 16.8954 18.3255 16.6753L15.1673 13.5172V8.16683C15.1673 7.85741 15.0444 7.56066 14.8256 7.34187C14.6068 7.12308 14.3101 7.00016 14.0007 7.00016Z"
                fill="#434035"
              />
            </g>
            <defs>
              <clipPath id="clip0_626_2784">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-[10px] lg:text-sm 3xl:text-22 whitespace-nowrap">
            5 минут назад
          </p>
        </div>
      </div>
    </section>
  );
}
