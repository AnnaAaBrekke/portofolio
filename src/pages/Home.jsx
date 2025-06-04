import Intro from "../components/Intro";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import SkillsSection from "../components/Skills";
import GallerySection from "../components/Gallery";
import Contact from "../components/Contact";
import { aiImages, capturedPhotos } from "../data/galleryImages";

function Home() {
  return (
    <>
      <Intro />
      <Timeline />
      <Projects />
      <SkillsSection />
      <GallerySection
        id="media"
        title="My Captured Photos"
        images={capturedPhotos}
      />
      <GallerySection
        id="AIimg"
        title="AI-Created Images"
        images={aiImages}
        isLinked
      />
      <Contact />
    </>
  );
}

export default Home;
