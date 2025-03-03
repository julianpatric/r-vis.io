import About from "./About";
import "./App.css";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./Contact";
import { Home } from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </>
  );
}

export default App;
