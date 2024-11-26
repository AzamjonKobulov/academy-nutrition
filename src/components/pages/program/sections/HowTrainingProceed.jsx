import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../../../shared/Button";

const steps = [
  { stepNum: 1, label: "Знакомство с платформой" },
  { stepNum: 2, label: "Получение знаний" },
  { stepNum: 3, label: "Практика и закрепление" },
  { stepNum: 4, label: "Обратная связь" },
  { stepNum: 5, label: "Поддержка 24/7" },
];

export default function HowTrainingProceed() {
  const [step, setStep] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const progressTime = 10; // Time for each step in seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prevStep) => (prevStep < steps.length ? prevStep + 1 : 1));
    }, progressTime * 1000);

    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (isInView && stepRefs.current[step - 1]) {
      stepRefs.current[step - 1].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [step, isInView]);

  const textAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 2.5, ease: "easeInOut" },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.85 },
    transition: { duration: 3, ease: "easeInOut" },
  };

  return (
    <section ref={sectionRef} className="bg-brand-cream section-minus">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 sm:px-30px">
        <h2 className="ml-30px sm:ml-0">
          Как проходит <br /> обучение
        </h2>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-10">
          <div className="no-scroll sm:w-auto flex sm:flex-col gap-2.5 overflow-auto">
            {steps.map((s, index) => {
              const isActiveStep = step === s.stepNum;

              return (
                <button
                  ref={(el) => (stepRefs.current[index] = el)}
                  key={s.stepNum}
                  onClick={() => setStep(s.stepNum)}
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
                        isActiveStep
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
                  {isActiveStep && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: progressTime, ease: "linear" }}
                      className="h-1 absolute left-0 bottom-0 bg-brand-orange"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Step View Content */}
          <div className="sm:col-span-2 flex flex-col justify-between space-y-6 sm:space-y-7 lg:space-y-12 3xl:space-y-30px bg-white rounded-22px 3xl:rounded-30px mx-30px sm:mx-0 p-4 lg:p-9 3xl:p-12">
            {/* Image Animation */}
            <motion.div
              key={`image-${step}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imageAnimation}
              className="h-full rounded-22px overflow-hidden"
            >
              <img
                src="/assets/images/img-step.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex flex-col sm:items-end sm:flex-row justify-between">
              {/* Text Animation */}
              <motion.div
                key={`text-${step}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textAnimation}
                className="flex flex-col sm:flex-row sm:items-end justify-between lg:gap-1.5 3xl:gap-2.5"
              >
                <div className="space-y-3">
                  <p className="font-medium text-base lg:text-[22px] 3xl:text-3xl">
                    {steps[step - 1].label}
                  </p>
                  <p>{`Description for step ${step}. Customize each step’s description here.`}</p>
                </div>
              </motion.div>

              {/* Navigation Buttons (Non-animated) */}
              <div className="flex items-center gap-3.5 3xl:gap-5 mt-3">
                {/* Prev Button */}
                <button
                  onClick={() =>
                    setStep((prevStep) =>
                      prevStep > 1 ? prevStep - 1 : steps.length
                    )
                  }
                  className="prev-whom size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200"
                >
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
                {/* Next Button */}
                <button
                  onClick={() =>
                    setStep((prevStep) =>
                      prevStep < steps.length ? prevStep + 1 : 1
                    )
                  }
                  className="next-whom size-11 3xl:size-[60px] shrink-0 grid place-content-center border border-brand-primary/20 rounded-full hover:border-brand-primary transition-all duration-200"
                >
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
          <Button theme="primary" className="w-full sm:w-auto">
            Записаться на бесплатный урок
          </Button>
        </div>
      </div>
    </section>
  );
}
