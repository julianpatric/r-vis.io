import Navbar from "./components/Navbar/Navbar.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { CONTENT_ITEMS } from "./data.js";
import Projects from "./Projects.js";
import Hero from "./components/Hero/Hero.jsx";
import { useEffect, useState } from "react";
import client from "./sanity/client.js";

export function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{title, "slug": slug.current}`)
      .then((data) => {
        console.log("Fetched posts:", data);
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

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
