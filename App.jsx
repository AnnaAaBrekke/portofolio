import Header from "./src/components/Header";
import SidebarProfile from "./src/components/SidebarProfile";
import Footer from "./src/components/Footer";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from "./src/pages/ProjectDetail";
import Home from "./src/pages/home";

function App() {
  return (
    <>
      <Header />
      <SidebarProfile />

      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
