import TagButton from "../../../shared/TagButton";
import AccordionItem from "../../../shared/AccordionItem";
import { useState } from "react";

const buttons = [
  "Все",
  "Нутрициология",
  "Рацион",
  "Диетология",
  "Программа",
  "Практика",
  "Коммьюнити",
  "Обучение",
];

const faqData = [
  {
    type: "faq",
    url: "/",
    question: "Как получить доступ к лекциям?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Что я получу после обучения?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Курс подойдет мне?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Можно оплатить в рассрочку?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Действуют ли у вас скидки?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Предоставляете сертификат после обучения?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Что я получу после обучения?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Курс подойдет мне?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Можно оплатить в рассрочку?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Можно оплатить в рассрочку?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Действуют ли у вас скидки?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
  {
    type: "faq",
    url: "/",
    question: "Предоставляете сертификат после обучения?",
    answer:
      "Чтобы сделать заказ просто оставьте заявку на сайте, и наш специалист свяжется с вами и проконсультирует по интересующему вопросу",
  },
];

export default function Faq() {
  const [openIndex, setIsOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setIsOpenIndex(openIndex === index ? null : index);
  };

  // Calculate the middle index to split the data
  const middleIndex = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, middleIndex);
  const secondHalf = faqData.slice(middleIndex);

  return (
    <section>
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20">
        <h2 className="px-30px">
          Ответы на <br /> частые вопросы
        </h2>

        {/* Content */}
        <div className="space-y-30px lg:space-y-8 3xl:space-y-12">
          {/* Tags */}
          <div className="no-scroll max-w-min overflow-auto">
            <div className="min-w-max flex sm:flex-wrap gap-2.5">
              {buttons.map((btn, idx) => (
                <TagButton key={idx} idx={idx} btn={btn} buttons={buttons} />
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="flex flex-col lg:flex-row gap-x-10 gap-y-2.5 px-30px">
            <div className="space-y-2.5">
              {firstHalf.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </div>
            <div className="space-y-2.5">
              {secondHalf.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index + middleIndex} // Adjust index for second half
                  onClick={() => handleAccordionClick(index + middleIndex)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
