import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import { useEffect, useState } from "react";
import client from "../sanity/client.js";
import { useScroll } from "motion/react";
import Tooltip from "../components/Tooltip/Tooltip";
import useHover from "../components/Tooltip/useHover";
import Headline from "../components/Headline/Headline";
import Services from "../components/Services/Services.jsx";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA/CTA";

export function Home() {
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { scrollYProgress } = useScroll();
  const { isHovered, hoverProps } = useHover();

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
      <Headline>Architecture seen, felt, remembered.</Headline>
      <Services />
      <div className="content-section">
        <div className="container content-grid">
          {projects?.images?.map((item, index) => (
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              key={index}
              className={`homepage-content ${item.displayType}`}
              {...hoverProps}
            >
              <Link to={`/projects/${item.link}`}>
                <motion.div
                  className="content-image"
                  style={{ backgroundImage: `url(${item.url})` }}
                />
              </Link>

              <div className="caption">
                <p>{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <CTA />
      </div>
      <Footer />
      <Tooltip isVisible={isHovered} />
    </>
  );
}
