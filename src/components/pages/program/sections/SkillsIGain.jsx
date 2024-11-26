const skills = [
  {
    icon: "/assets/images/icon-skill-1.png",
    title: "Диагностика образа жизни",
    text: "и подбор наиболее эффективных стратегий работы с подопечными",
  },
  {
    icon: "/assets/images/icon-skill-2.png",
    title: "Диагностики полабораторным анализам",
    text: "и оценки статусов витаминов и минералов",
  },
  {
    icon: "/assets/images/icon-skill-3.png",
    title: "Разработки индивидуального  рациона",
    text: "для подопечных с гипотиреозом, инсулинорезистентностью, астенией, анемией и другими нарушениями",
  },
  {
    icon: "/assets/images/icon-skill-4.png",
    title: "Использования специальных  протоколов",
    text: "а так же схем и протоколов нутрицевтической коррекции нарушений здоровья",
  },
  {
    icon: "/assets/images/icon-skill-5.png",
    title: "Индивидуальной нутрицевтической поддержки",
    text: "а так же правил и нюансов выбора БАД, форм и схем сочетаний",
  },
  {
    icon: "/assets/images/icon-skill-6.png",
    title: "Психологической поддержка подопечного",
    text: "для своевременной коррекции выбранного плана действий и получения измеримых результатов",
  },
];

export default function SkillsIGain() {
  return (
    <section className="bg-brand-cream">
      <div className="container mx-auto space-y-30px sm:space-y-10 lg:space-y-16 3xl:space-y-20 px-30px">
        <h2>
          Какие я <br /> получу навыки
        </h2>

        {/* Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="space-y-3.5 sm:space-y-5 3xl:space-y-30px bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 3xl:px-30px"
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="size-9 sm:size-12 3xl:size-16 shrink-0"
              />
              <div className="space-y-2">
                <h5 className="font-medium text-xl sm:text-22 3xl:text-3xl leading-7 sm:leading-[30px] 3xl:leading-10">
                  {skill.title}
                </h5>
                <p>{skill.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
