import { useState } from "react";

import Button from "../../../shared/Button";

const steps = [
  {
    stepNum: 1,
    label: "Знакомство с платформой",
  },
  {
    stepNum: 2,
    label: "Получение знаний",
  },
  {
    stepNum: 3,
    label: "Практика и закрепление",
  },
  {
    stepNum: 4,
    label: "Обратная связь",
  },
  {
    stepNum: 5,
    label: "Поддержка 24/7",
  },
];

export default function HowTrainingProceed() {
  const [step, setStep] = useState(1);

  return (
    <section className="bg-brand-cream section-minus">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 sm:px-30px">
        <h2 className="ml-30px sm:ml-0">
          Как проходит <br /> обучение
        </h2>

        {/* Skills */}
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-10">
          {/* Steps */}
          <div className="no-scroll sm:w-auto flex sm:flex-col gap-2.5 overflow-auto">
            {steps.map((s) => {
              const activeStep = step === s.stepNum;

              return (
                <button
                  key={s.step}
                  className={`min-w-[227px] sm:min-w-0 w-full h-16 lg:h-[92px] 3xl:h-[124px] relative group bg-white rounded-22px 3xl:rounded-30px overflow-hidden ${
                    s.stepNum === 1
                      ? "ml-30px"
                      : s.stepNum === 5
                      ? "mr-30px"
                      : ""
                  } sm:mx-0 px-4 lg:px-7 3xl:px-9`}
                >
                  <div className="flex items-center gap-3 lg:gap-4 3xl:gap-[22px]">
                    <div
                      className={`size-7 lg:size-9 3xl:size-12 shrink-0 grid place-content-center ${
                        activeStep
                          ? "bg-brand-orange border-brand-orange"
                          : "border-brand-gray"
                      } font-medium text-sm sm:text-base lg:text-lg 3xl:text-22 border rounded-full group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300`}
                    >
                      {s.stepNum}
                    </div>
                    <p className="font-medium text-sm sm:text-base lg:text-lg 3xl:text-22 text-left">
                      {s.label}
                    </p>
                  </div>
                  {/* Progress Line */}
                  {activeStep && (
                    <div className="w-1/2 h-1 absolute left-0 bottom-0 bg-brand-orange"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Step View */}
          <div className="sm:col-span-2 flex flex-col justify-between space-y-6 sm:space-y-7 lg:space-y-12 3xl:space-y-30px bg-white rounded-22px 3xl:rounded-30px mx-30px sm:mx-0 p-4 lg:p-9 3xl:p-12">
            {/* Image */}
            <div className="h-full rounded-22px overflow-hidden">
              <img
                src="/assets/images/img-step.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texts */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between lg:gap-1.5 3xl:gap-2.5">
              <div className="space-y-3">
                <p className="font-medium text-base lg:text-[22px] 3xl:text-[30px]">
                  Знакомство с платформой
                </p>
                <p>
                  После оплаты получаете доступ в личный кабинет. Вас ждут
                  первые видеолекции, вводное тестирование знаний
                </p>
              </div>
              <div className="flex items-center gap-3.5 3xl:gap-5 mt-3">
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
                    <path
                      d="M10 17L2 9L10 1"
                      stroke="#434035"
                      strokeWidth="1.5"
                    />
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
                    <path
                      d="M1 1L9 9L1 17"
                      stroke="#434035"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-30px sm:px-0">
          <Button
            variant="primary"
            className="h-[59px] lg:h-[73px] 3xl:h-[101px] w-full sm:w-auto lg:w-fit font-medium text-sm lg:text-lg 3xl:text-2xl whitespace-nowrap rounded-full px-4 lg:px-8 2xl:px-16"
          >
            Начать обучение
          </Button>
        </div>
      </div>
    </section>
  );
}
