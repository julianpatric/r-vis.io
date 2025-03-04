import Navbar from "../components/Navbar/Navbar.jsx";
import Feature from "../components/Feature/Feature.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import { useEffect, useState } from "react";
import client from "../sanity/client.js";
import { useScroll } from "motion/react";
import { Link } from "react-router-dom";
import Tooltip from "../components/Tooltip/Tooltip";
import useHover from "../components/Tooltip/useHover";

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
      <Feature />
      <div className="content-section">
        <div className="container content-grid">
          {projects?.images?.map((item) => (
            <div
              key={item.link}
              className={`homepage-content ${item.displayType}`}
              {...hoverProps}
            >
              <Link to={`/projects/${item.link}`} className="image-link">
                <img src={item.url} alt={item.alt} loading="lazy" />
                <div className="caption">
                  <p>{item.caption}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Tooltip isVisible={isHovered} />
    </>
  );
}
