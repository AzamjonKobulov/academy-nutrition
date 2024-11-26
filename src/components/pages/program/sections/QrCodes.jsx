export default function QrCodes() {
  return (
    <section className="bg-brand-cream -mt-[60px] sm:-mt-20 lg:-mt-[90px] 3xl:-mt-32">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-y-10 sm:gap-x-5 lg:gap-7 3xl:gap-10 px-30px">
        {/* Texts */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-between space-y-10 pb-2.5 sm:pb-0">
          <div className="h-full flex flex-col sm:flex-row lg:flex-col sm:items-end lg:items-start justify-between sm:justify-start gap-x-5 gap-y-30px">
            <div className="sm:max-w-[358px] lg:max-w-none space-y-5 sm:space-y-7 3xl:space-y-10">
              <h2>Остались вопросы?</h2>
              <p>
                Чтобы забронировать место или если у вас остались вопросы,
                пожалуйста, напишите нам!
              </p>
            </div>

            <div className="h-fit w-fit flex items-center gap-6 bg-brand-orange rounded-2xl sm:rounded-22px 3xl:rounded-30px lg:mt-auto p-4 sm:p-[22px] 3xl:p-30px">
              <p className="font-bold">
                Отсканируйте QR код или <br /> нажмите на него
              </p>
              <svg
                width="39"
                height="16"
                viewBox="0 0 39 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M38.7071 8.70711C39.0976 8.31658 39.0976 7.68342 38.7071 7.29289L32.3431 0.928932C31.9526 0.538408 31.3195 0.538408 30.9289 0.928932C30.5384 1.31946 30.5384 1.95262 30.9289 2.34315L36.5858 8L30.9289 13.6569C30.5384 14.0474 30.5384 14.6805 30.9289 15.0711C31.3195 15.4616 31.9526 15.4616 32.3431 15.0711L38.7071 8.70711ZM0 9H38V7H0V9Z"
                  fill="#434035"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* QR Code */}

        {/* Telegram */}
        <a
          href="#"
          className="bg-white rounded-22px 3xl:rounded-30px p-5 3xl:p-30px"
        >
          <img
            src="/assets/images/img-qr-telegram.png"
            alt="Telegram QR code"
            className="w-full"
          />
        </a>

        {/* Whatsapp */}
        <a
          href="#"
          className="bg-white rounded-22px 3xl:rounded-30px p-5 3xl:p-30px"
        >
          <img
            src="/assets/images/img-qr-whatsapp.png"
            alt="Telegram QR code"
            className="w-full"
          />
        </a>
      </div>
    </section>
  );
}
