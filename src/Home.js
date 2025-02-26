import Navbar from "./components/Navbar/Navbar.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { CONTENT_ITEMS } from "./data.js";
import Projects from "./Projects.js";
import Hero from "./components/Hero/Hero.jsx";

export function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <Feature />
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
