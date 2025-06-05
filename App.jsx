import Header from "./src/components/Header";
import SidebarProfile from "./src/components/SidebarProfile";
import Footer from "./src/components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import SingleProject from "./src/pages/SingleProject";
import Home from "./src/pages/Home";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Sidebar appears on all pages */}
      <SidebarProfile />

      {/* Header only on home page */}
      {isHomePage && <Header />}

      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<SingleProject />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
