import About from "../components/pages/home/sections/About";
import AcademyPrograms from "../components/pages/home/sections/AcademyPrograms";
import Articles from "../components/pages/home/sections/Articles";
import Certificate from "../components/pages/home/sections/Certificate";
import Hero from "../components/pages/home/sections/Hero";
import Lectorium from "../components/pages/home/sections/Lectorium";
import Reviws from "../components/pages/home/sections/Reviews";
import Subscribe from "../components/pages/home/sections/Subscribe";
import TrainingFormat from "../components/pages/home/sections/TrainingFormat";

export default function Home() {
  return (
    <>
      <Hero />
      <Certificate />
      <About />
      <TrainingFormat />
      <AcademyPrograms />
      <Lectorium />
      <Articles />
      <Subscribe />
      <Reviws />
    </>
  );
}
