import Intro from "../components/Intro";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import SkillsSection from "../components/Skills";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Intro />
      <Timeline />
      <SkillsSection />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
