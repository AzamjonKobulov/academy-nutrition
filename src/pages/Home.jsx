import About from "../components/pages/home/sections/About";
import AcademyPrograms from "../components/pages/home/sections/AcademyPrograms";
import Certificate from "../components/pages/home/sections/Certificate";
import Hero from "../components/pages/home/sections/Hero";
import TrainingFormat from "../components/pages/home/sections/TrainingFormat";

export default function Home() {
  return (
    <>
      <Hero />
      <Certificate />
      <About />
      <TrainingFormat />
      <AcademyPrograms />
    </>
  );
}
