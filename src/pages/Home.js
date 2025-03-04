import Navbar from "../components/Navbar/Navbar.jsx";
import Feature from "../components/Feature/Feature.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import { useEffect, useState } from "react";
import client from "../sanity/client.js";
import { motion } from "motion/react";

export function Home() {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && slug.current == 'homepage-items'][0]{
          "defaultHero": coverPhoto.asset->url,
          "images": images[]{
            "url": asset->url,
            displayType, 
            alt, 
            link, 
            caption
          }}`
      )
      .then((data) => {
        console.log("Fetched data: ", data);
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
          {projects?.images?.map((item, index) => (
            <motion.div
              initial={{ scale: 1.08, y: 100 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              key={index}
              className={`homepage-content ${item.displayType}`}
            >
              <a href={`/projects/${item.link}`} className="image-link">
                <img src={item.url} alt={item.alt} />

                <div class="caption">
                  <p>{item.caption}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
