const steps = [
  {
    step: 1,
    label: "Знакомство с платформой",
  },
  {
    step: 2,
    label: "Получение знаний",
  },
  {
    step: 3,
    label: "Практика и закрепление",
  },
  {
    step: 4,
    label: "Обратная связь",
  },
  {
    step: 5,
    label: "Поддержка 24/7",
  },
];

export default function HowTrainingProceed() {
  return (
    <section className="bg-brand-cream section-minus">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 px-30px">
        <h2>
          Как проходит <br /> обучение
        </h2>

        {/* Skills */}
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-10">
          {/* Steps */}
          <div className="flex sm:flex-col gap-2.5">
            {steps.map((step) => (
              <button
                key={step.step}
                className="w-full h-[124px] relative  bg-white rounded-22px 3xl:rounded-30px overflow-hidden px-7 3xl:px-9"
              >
                <div className="flex items-center gap-4">
                  <div className="size-9 3xl:size-12 shrink-0 grid place-content-center bg-brand-orange font-medium text-22 rounded-full">
                    {step.step}
                  </div>
                  <p className="font-medium">{step.label}</p>
                </div>
                {/* Progress Line */}
                <div className="w-1/2 h-1 absolute left-0 bottom-0 bg-brand-orange"></div>
              </button>
            ))}
          </div>

          {/* Step View */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
