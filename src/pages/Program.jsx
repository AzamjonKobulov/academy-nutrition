import About from "../components/pages/home/sections/About";
import Anna from "../components/pages/program/sections/Anna";
import FeedbackAndCases from "../components/pages/program/sections/FeedbackAndCases";
import ForWhomThisCourse from "../components/pages/program/sections/ForWhomThisCourse";
import Hero from "../components/pages/program/sections/Hero";
import SpecialOffer from "../components/pages/program/sections/SpecialOffer";
import StudyingIn from "../components/pages/program/sections/StudyingIn";
import GlobalCommunityOfStudents from "../components/shared/sections/GlobalCommunityOfStudents";

export default function Program() {
  return (
    <>
      <Hero />
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
    </>
  );
}
