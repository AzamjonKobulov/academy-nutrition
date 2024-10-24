// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const data = [
  {
    title: "4 месяца практики",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-1.jpg",
  },
  {
    title: "Личное сопровождение лектора",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-2.jpg",
  },
  {
    title: "Личная страница на about.doctor",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-3.jpg",
  },
  {
    title: "29 объёмных тем с практическими заданиями",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-4.jpg",
  },
  {
    title: "4 месяца практики",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-1.jpg",
  },
  {
    title: "Личное сопровождение лектора",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-2.jpg",
  },
  {
    title: "Личная страница на about.doctor",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-3.jpg",
  },
  {
    title: "29 объёмных тем с практическими заданиями",
    text: "Предоставляем лиды для практики после обучения",
    img: "/assets/images/img-studying-4.jpg",
  },
];

export default function StudyingIn() {
  return (
    <section>
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 section-minus">
        {/* Title & Slider Buttons */}
        <div className="flex items-end justify-between px-30px">
          <h2>
            Обучение в <br /> pitanie.academy это:
          </h2>

          {/* Slider Buttons */}
          <div className="hidden sm:flex items-center gap-5 pb-4">
            {/* Prev */}
            <button className="prev size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1.5 h-3 3xl:w-auto 3xl:h-auto"
              >
                <path d="M10 17L2 9L10 1" stroke="#434035" strokeWidth="1.5" />
              </svg>
            </button>
            {/* Next */}
            <button className="next size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-1.5 h-3 3xl:w-auto 3xl:h-auto"
              >
                <path d="M1 1L9 9L1 17" stroke="#434035" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 40,
            },
            1720: {
              slidesPerView: 3.2,
              spaceBetween: 40,
            },
          }}
          className="mySwiper mr-0 px-30px"
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-80 lg:h-96 3xl:h-[555px] flex flex-col justify-between gap-12 bg-brand-light-gray rounded-22px 3xl:rounded-30px px-3 py-4 3xl:p-30px">
                <div className="space-y-1.5 sm:space-y-2 3xl:space-y-2.5">
                  <h4 className="xs:text-22 3xl:text-[30px] font-medium leading-[18px] xs:leading-[30px] 3xl:leading-[40px]">
                    {item.title}
                  </h4>
                  <p>{item.text}</p>
                </div>

                {/* Image */}
                <div className="h-56 lg:h-80 3xl:h-[270px] rounded-xl 3xl:rounded-30px overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Buttons Mobile */}
        <div className="container mx-auto flex sm:hidden items-center gap-3.5 pb-4 px-30px">
          {/* Prev */}
          <button className="prev size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1.5 h-3 3xl:w-auto 3xl:h-auto"
            >
              <path d="M10 17L2 9L10 1" stroke="#434035" strokeWidth="1.5" />
            </svg>
          </button>
          {/* Next */}
          <button className="next size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1.5 h-3 3xl:w-auto 3xl:h-auto"
            >
              <path d="M1 1L9 9L1 17" stroke="#434035" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
