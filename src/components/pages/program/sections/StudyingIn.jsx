import React, { useRef, useState } from "react";
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
];

export default function StudyingIn() {
  return (
    <section>
      <div className="space-y-20 section-minus">
        {/* Title & Slider Buttons */}
        <div className="container mx-auto flex items-end justify-between px-30px">
          <h2>
            Обучение в <br /> pitanie.academy это:
          </h2>

          {/* Slider Buttons */}
          <div className="flex items-center gap-5 pb-4">
            {/* Prev */}
            <button className=" size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 17L2 9L10 1" stroke="#434035" strokeWidth="1.5" />
              </svg>
            </button>
            {/* Next */}
            <button className="size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
              <svg
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L9 9L1 17" stroke="#434035" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
            1720: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
          }}
          className="mySwiper container ml-auto"
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <div className="h-full flex flex-col justify-between gap-12 bg-brand-light-gray rounded-22px 3xl:rounded-30px px-3 py-4 3xl:p-30px">
                <div className="space-y-1.5 sm:space-y-2 3xl:space-y-2.5">
                  <h4 className="lg:text-22 3xl:text-[30px] font-medium">
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
      </div>
    </section>
  );
}
