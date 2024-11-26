import { useState } from "react";

import AccordionItem from "../../../shared/AccordionItem";

const infoData = [
  {
    type: "info",
    title: "1. Введение",
    text: "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
    list: [
      "Базовая теорией нутрициологии и диетологии",
      "Методы применения теоретических материалов",
      "Питание без запретов",
      "Принципы приемов пищи",
    ],
    icon: "/assets/images/icon-infolist-1.png",
  },
  {
    type: "info",
    title: "2. Водный баланс",
    text: "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
    list: [
      "Базовая теорией нутрициологии и диетологии",
      "Методы применения теоретических материалов",
      "Питание без запретов",
      "Принципы приемов пищи",
    ],
    icon: "/assets/images/icon-infolist-2.png",
  },
  {
    type: "info",
    title: "3. Овощи и фрукты – 1",
    text: "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
    list: [
      "Базовая теорией нутрициологии и диетологии",
      "Методы применения теоретических материалов",
      "Питание без запретов",
      "Принципы приемов пищи",
    ],
    icon: "/assets/images/icon-infolist-3.png",
  },
  {
    type: "info",
    title: "4. Овощи и фрукты – 2",
    text: "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
    list: [
      "Базовая теорией нутрициологии и диетологии",
      "Методы применения теоретических материалов",
      "Питание без запретов",
      "Принципы приемов пищи",
    ],
    icon: "/assets/images/icon-infolist-4.png",
  },
  {
    type: "info",
    title: "5. Гликемический индекс и нагрузка",
    text: "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
    list: [
      "Базовая теорией нутрициологии и диетологии",
      "Методы применения теоретических материалов",
      "Питание без запретов",
      "Принципы приемов пищи",
    ],
    icon: "/assets/images/icon-infolist-5.png",
  },
  {
    type: "info",
    title: "6. Зерновые",
    text: "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
    list: [
      "Базовая теорией нутрициологии и диетологии",
      "Методы применения теоретических материалов",
      "Питание без запретов",
      "Принципы приемов пищи",
    ],
    icon: "/assets/images/icon-infolist-6.png",
  },
];

export default function TrainingProgram() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="-mt-[60px] sm:-mt-20 lg:-mt-[90px] 3xl:-mt-32">
      <div className="container mx-auto px-30px">
        {/* Title & Slider Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-centers justify-between gap-5">
          <h2>
            Программа <br />
            обучения
          </h2>

          <div className="grid grid-cols-2 sm:flex sm:items-center gap-5 3xl:gap-10 pb-4">
            {/* 1 */}
            <div className="sm:max-w-[200px] 3xl:max-w-[308px] flex flex-col justify-between gap-2.5 bg-brand-cream rounded-22px 3xl:rounded-30px p-4 3xl:p-6">
              <div className="flex items-center justify-between">
                <p className="font-bold text-22 3xl:text-30">29</p>
                <img
                  src="/assets/images/icon-tick.svg"
                  alt="Tick"
                  className="size-[22px] 3xl:size-8 shrink-0"
                />
              </div>
              <p className="text-sm 3xl:text-22 leading-5 3xl:leading-8">
                блоков с практическими заданиями
              </p>
            </div>
            {/* 2 */}
            <div className="sm:max-w-[200px] 3xl:max-w-[308px] flex flex-col justify-between gap-2.5 bg-brand-cream rounded-22px 3xl:rounded-30px p-4 3xl:p-6">
              <div className="flex items-center justify-between">
                <p className="font-bold text-22 3xl:text-30">98%</p>
                <img
                  src="/assets/images/icon-tick.svg"
                  alt="Tick"
                  className="size-[22px] 3xl:size-8 shrink-0"
                />
              </div>
              <p className="text-sm 3xl:text-22 leading-5 3xl:leading-8">
                студентов довольны курсом
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2.5 mt-30px sm:mt-10 lg:mt-16 3xl:mt-20">
          {infoData.map((info, idx) => (
            <AccordionItem
              info={info}
              key={idx}
              isOpen={openIndex === idx}
              onClick={() => handleAccordionClick(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
