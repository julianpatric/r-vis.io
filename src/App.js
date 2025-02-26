import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { CONTENT_ITEMS } from "./data.js";
import Projects from "./Projects.js";

function App() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-img"> </div>
      </div>
      <Navbar />
      <Feature />
      <Projects />
      <div className="content-section">
        <div className="container content-grid">
          {CONTENT_ITEMS.map((content, index) => (
            <div
              key={index}
              className={
                content.fullRow ? "content full-row" : "content two-column"
              }
            >
              <img src={content.image} alt={content.title}></img>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
