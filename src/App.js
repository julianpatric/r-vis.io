import About from "./About";
import "./App.css";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./Contact";
import { Home } from "./Home";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
