// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const data = [
  {
    title: "Интересующимся темой ПП",
    img: "/assets/images/img-for-whom-1.jpg",
  },
  {
    title: "Беременным и мамам",
    img: "/assets/images/img-for-whom-2.jpg",
  },
  {
    title: "Вегетарианцам",
    img: "/assets/images/img-for-whom-3.jpg",
  },
  {
    title: "Спортсменам",
    img: "/assets/images/img-for-whom-4.jpg",
  },
  {
    title: "Тренерам",
    img: "/assets/images/img-for-whom-5.jpg",
  },
  {
    title: "Диетологам",
    img: "/assets/images/img-for-whom-6.jpg",
  },
  {
    title: "Врачам и медицинским специалистам",
    img: "/assets/images/img-for-whom-7.jpg",
  },
  {
    title: "Интересующимся темой ПП",
    img: "/assets/images/img-for-whom-1.jpg",
  },
  {
    title: "Беременным и мамам",
    img: "/assets/images/img-for-whom-2.jpg",
  },
  {
    title: "Вегетарианцам",
    img: "/assets/images/img-for-whom-3.jpg",
  },
  {
    title: "Спортсменам",
    img: "/assets/images/img-for-whom-4.jpg",
  },
  {
    title: "Тренерам",
    img: "/assets/images/img-for-whom-5.jpg",
  },
  {
    title: "Диетологам",
    img: "/assets/images/img-for-whom-6.jpg",
  },
  {
    title: "Врачам и медицинским специалистам",
    img: "/assets/images/img-for-whom-7.jpg",
  },
];

export default function ForWhomThisCourse() {
  return (
    <section>
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 sm:px-30px">
        {/* Title & Slider Buttons */}
        <div className="flex items-end justify-between px-30px">
          <h2 className="px-30 sm:px-0">Кому подойдет курс</h2>

          {/* Slider Buttons */}
          <div className="hidden sm:flex items-center gap-5 pb-4">
            {/* Prev */}
            <button className="prev-whom size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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
            <button className="next-whom size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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
            prevEl: ".prev-whom",
            nextEl: ".next-whom",
          }}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2.1,
              spaceBetween: 2,
            },
            480: {
              slidesPerView: 3.2,
              spaceBetween: 4,
            },
            640: {
              slidesPerView: 4.2,
              spaceBetween: 4,
            },
            768: {
              slidesPerView: 5.2,
              spaceBetween: 4,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1720: {
              slidesPerView: 6.5,
              spaceBetween: 40,
            },
          }}
          className="mySwiper px-30px sm:px-0"
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[182px] 3xl:h-[260px] flex flex-col justify-between bg-brand-light-gray rounded-30px px-3 py-4 3xl:p-30px">
                {/* Image */}
                <div className="h-20 3xl:h-28 shrink-0 rounded-xl 3xl:rounded-[18px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-sm 3xl:text-22 font-medium leading-5 3xl:leading-7">
                  {item.title}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Buttons Mobile */}
        <div className="container mx-auto flex sm:hidden items-center gap-3.5 pb-4 px-30px">
          {/* Prev */}
          <button className="prev-whom size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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
          <button className="next-whom size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200">
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
