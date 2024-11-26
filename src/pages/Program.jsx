import About from "../components/pages/home/sections/About";
import Anna from "../components/pages/program/sections/Anna";
import FeedbackAndCases from "../components/pages/program/sections/FeedbackAndCases";
import ForWhomThisCourse from "../components/pages/program/sections/ForWhomThisCourse";
import HowTrainingProceed from "../components/pages/program/sections/HowTrainingProceed";
import SkillsIGain from "../components/pages/program/sections/SkillsIGain";
import SpecialOffer from "../components/pages/program/sections/SpecialOffer";
import StudyingIn from "../components/pages/program/sections/StudyingIn";
import TrainingProgram from "../components/pages/program/sections/TrainingProgram";
import GlobalCommunityOfStudents from "../components/shared/sections/GlobalCommunityOfStudents";
import QrCodes from "../components/pages/program/sections/QrCodes";
import EducationBestGift from "../components/pages/program/sections/EducationBestGift";
import HeroProgram from "../components/pages/program/sections/HeroProgram";

export default function Program() {
  return (
    <>
      <HeroProgram />
      <SpecialOffer />
      <StudyingIn />
      <GlobalCommunityOfStudents
        bg="bg-white"
        flags="/assets/images/img-flags-2.png"
        text="У нас есть всё для твоего обучения и развития - от курсов до стажировок. Найди друзей и создавай будущее вместе с нами."
        button={true}
      />
      <FeedbackAndCases />
      <Anna />
      <About />
      <ForWhomThisCourse />
      <div className="section-minus">
        <SpecialOffer />
      </div>
      <TrainingProgram />
      <SkillsIGain />
      <HowTrainingProceed />
      <QrCodes />
      <EducationBestGift />
    </>
  );
}
