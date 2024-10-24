// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "../../../shared/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { img } from "framer-motion/client";

const data = [
  {
    img: "/assets/images/img-review-insta-1.png",
  },
  {
    text: "Анна, спасибо за курс! Спасибо всей команде школы Питания. В декрете я прошла много разных курсов и искала себя. Представляла с ужасом как я выйду на работу в офис после декрета. Программу я покупала для себя и своего сына, хотела с детства привить ему правильные привычки. Мало того, что курс изменил взгляд на питание всей моей семьи, я нашла новую профессию и начала работать с клиентами еще в декрете!",
    auth: "Виктория, диетолог",
  },
  {
    img: "/assets/images/img-review-insta-2.png",
  },
  {
    text: "Анна, спасибо за курс! Спасибо всей команде школы Питания. В декрете я прошла много разных курсов и искала себя. Представляла с ужасом как я выйду на работу в офис после декрета. Программу я покупала для себя и своего сына, хотела с детства привить ему правильные привычки. Мало того, что курс изменил взгляд на питание всей моей семьи, я нашла новую профессию и начала работать с клиентами еще в декрете!",
    auth: "Виктория, диетолог",
  },
  {
    img: "/assets/images/img-review-insta-2.png",
  },
  {
    img: "/assets/images/img-review-insta-1.png",
  },
];

export default function FeedbackAndCases() {
  return (
    <section className="bg-brand-primary">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20">
        {/* Title & Slider Buttons */}
        <div className="flex items-end justify-between px-30px">
          <h2 className="text-white">
            Отзывы и кейсы <br /> наших учеников
          </h2>

          {/* Slider Buttons */}
          <div className="hidden sm:flex items-center gap-5 pb-4">
            {/* Prev-review */}
            <button className="prev-review size-11 3xl:size-[60px] shrink-0 grid place-content-center bg-white border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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
            <button className="next-review size-11 3xl:size-[60px] shrink-0 grid place-content-center bg-white border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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
            prevEl: ".prev-review",
            nextEl: ".next-review",
          }}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1720: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper mr-0 px-30px"
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`flex flex-col justify-between gap-12 bg-white rounded-22px 3xl:rounded-30px ${
                  !item.img ? "p-6 lg:p-30px 3xl:p-10" : ""
                }`}
              >
                {!item.img && (
                  <div className="space-y-3 3xl:space-y-5">
                    <p>{item.text}</p>
                    <h5 className="text-sm lg:text-sm 3xl:text-lg text-brand-primary/70">
                      {item.auth}
                    </h5>
                  </div>
                )}

                {/* Image */}
                {item.img && (
                  <div className="rounded-xl 3xl:rounded-30px overflow-hidden">
                    <img
                      src={item.img}
                      alt="Review"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Buttons Mobile */}
        <div className="container mx-auto flex sm:hidden items-center gap-3.5 pb-4 px-30px">
          {/* Prev */}
          <button className="prev-review size-11 3xl:size-[60px] shrink-0 grid place-content-center bg-white border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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
          <button className="next-review size-11 3xl:size-[60px] shrink-0 grid place-content-center bg-white border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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

        {/* Button */}
        <div className="flex items-center justify-center px-30px">
          <Button
            variant="outline"
            className="h-16 lg:h-[77px] 3xl:h-[98px] w-full xs:w-fit 3xl:text-22 font-medium whitespace-nowrap text-white border-white hover:bg-white hover:!text-brand-primary rounded-full px-6 lg:px-16"
          >
            Все отзывы
          </Button>
        </div>
      </div>
    </section>
  );
}
