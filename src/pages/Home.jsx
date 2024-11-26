import About from "../components/pages/home/sections/About";
import AboutDoctor from "../components/pages/home/sections/AboutDoctor";
import AcademyPrograms from "../components/pages/home/sections/AcademyPrograms";
import Articles from "../components/pages/home/sections/Articles";
import BigBlock from "../components/pages/home/sections/BigBlock";
import BloggersAboutUs from "../components/pages/home/sections/BloggersAboutUs";
import Certificate from "../components/pages/home/sections/Certificate";
import Faq from "../components/pages/home/sections/Faq";
import FindOutBenefits from "../components/pages/home/sections/FindOutBenefits";
import FromAuthor from "../components/pages/home/sections/FromAuthor";
import GiftCertificate from "../components/pages/home/sections/GiftCertificate";
import HeroHome from "../components/pages/home/sections/HeroHome";
import Lectorium from "../components/pages/home/sections/Lectorium";
import MediaAboutUs from "../components/pages/home/sections/MediaAboutUs";
import Methods from "../components/pages/home/sections/Methods";
import Reviws from "../components/pages/home/sections/Reviews";
import Subscribe from "../components/pages/home/sections/Subscribe";
import TrainingFormat from "../components/pages/home/sections/TrainingFormat";
import GlobalCommunityOfStudents from "../components/shared/sections/GlobalCommunityOfStudents";

export default function Home() {
  return (
    <>
      <HeroHome />
      <Certificate />
      <About />
      <TrainingFormat />
      <AcademyPrograms />
      <Lectorium />
      <Articles />
      <Subscribe />
      <Reviws />
      <FromAuthor />
      <AboutDoctor />
      <Methods />
      <GlobalCommunityOfStudents />
      <Faq />
      <FindOutBenefits />
      <BigBlock />
      <GiftCertificate />
      <BloggersAboutUs />
      <MediaAboutUs />
    </>
  );
}
