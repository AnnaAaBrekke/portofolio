import Header from "./src/components/Header";
import SidebarProfile from "./src/components/SidebarProfile";
import Intro from "./src/components/Intro";
import Timeline from "./src/components/Timeline";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";
import { aiImages, capturedPhotos } from "./src/data/galleryImages";
import GallerySection from "./src/components/Gallery";
import SkillsSection from "./src/components/Skills";

function App() {
  return (
    <>
      <Header />
      <SidebarProfile />

      <main className="flex-1 p-6">
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
      </main>

      <Footer />
    </>
  );
}

export default App;
