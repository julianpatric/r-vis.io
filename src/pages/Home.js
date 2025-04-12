import { useEffect, useState, useRef } from "react";
import { useScroll } from "motion/react";
import { motion } from "motion/react";
import client from "../sanity/client.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Tooltip from "../components/Tooltip/Tooltip";
import useHover from "../components/Tooltip/useHover";
import Headline from "../components/Headline/Headline";
import Services from "../components/Services/Services.jsx";
import CTA from "../components/CTA/CTA";
import "../styles/ContentGrid.css";

export function Home() {
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isHovered, hoverProps } = useHover();

  // Fetch projects from sanity backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(
          `*[_type == "project" && slug.current == 'homepage-items'][0]{
            "defaultHero": coverPhoto.asset->url,
            "images": images[]{
              "url": asset->url,
              displayType, 
              alt, 
              link, 
              caption
            }}`
        );
        setProjects(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  return (
    <>
      <Hero />
      <Navbar />
      <div className="main-section">
        <div className="container">
          <Headline>Architecture seen, felt, remembered.</Headline>
        </div>
        <Services />
        <div className="container">
          <div className="content-grid">
            {projects?.images?.map((item, index) => (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className={`homepage content ${item.displayType}`}
                {...hoverProps}
              >
                <a href={`/projects/${item.link}`}>
                  <motion.img
                    className="content-image"
                    src={item.url}
                    alt={item.caption}
                  />
                </a>

                <div className="caption">
                  <p>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="endtag">
            <a href="/projects">See all our projects</a>
          </div>
          <CTA />
        </div>
      </div>
      <Footer />

      <Tooltip isVisible={isHovered} />
    </>
  );
}
