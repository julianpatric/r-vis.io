import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";
import client from "../sanity/client.js";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Tooltip from "../components/Tooltip/Tooltip";
import useHover from "../components/Tooltip/useHover";
import Headline from "../components/Headline/Headline";
import Services from "../components/Services/Services.jsx";
import CTA from "../components/CTA/CTA";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import "../styles/ContentGrid.css";

export function Home() {
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageRefs = useRef([]);
  const loadedImages = useRef(0);
  const startTime = useRef(Date.now());

  const { isHovered, hoverProps } = useHover();

  // Fetch projects from sanity backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const data = await client.fetch(
          `*[_type == "project" && slug.current == 'homepage-items'][0]{
            "defaultHero": coverPhoto.asset->url+ "?w=2500",
            "images": images[]{
              "url": asset->url + "?w=1500",
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

  // Track image loading
  useEffect(() => {
    if (!projects?.images?.length) return;

    // Reset loaded images count when projects change
    loadedImages.current = 0;
    const totalImages = projects.images.length;

    // If there are no images to load, set imagesLoaded to true
    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedImages.current += 1;

      if (loadedImages.current >= totalImages) {
        const loadTime = Date.now() - startTime.current;
        console.log(`Page load time: ${loadTime}ms`);
        setImagesLoaded(true);
      }
    };

    // Add event listeners to all images
    const imageElements = document.querySelectorAll(".content-image");
    imageElements.forEach((img) => {
      // Check if image is already loaded
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad); // Also handle errors
      }
    });

    // Fallback: if no images are found or all are cached, set imagesLoaded to true
    if (imageElements.length === 0) {
      setImagesLoaded(true);
    }

    // Set a timeout to ensure loading screen disappears even if some images fail to load
    const timeoutId = setTimeout(() => {
      if (!imagesLoaded) {
        const loadTime = Date.now() - startTime.current;
        console.log(`Page load time (timeout): ${loadTime}ms`);
        setImagesLoaded(true);
      }
    }, 5000); // 5 second timeout

    return () => {
      // Clean up event listeners
      imageElements.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
      clearTimeout(timeoutId);
    };
  }, [projects]);

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  // Show loading screen while data is being fetched or images are loading
  if (isLoading || !imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Visual Communication for Architecture | r—vis</title>
        <meta
          name="og:title"
          content="r—vis: Visual Communication for Architecture"
        />
        <meta
          name="og:description"
          content="Specializing in architectural photography and film, visualization, and graphic design, r—vis is a creative studio focused on creating lasting impressions of built and unbuilt spaces. "
        />
        <meta name="og:image" content="%PUBLIC_URL%/og-image.jpg" />
        <meta name="og:url" content="https://r-vis.io" />
        <meta name="og:site_name" content="r—vis" />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta
          name="og:image:alt"
          content="r—vis: Visual Communication for Architecture"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://r-vis.io" />
        <meta
          name="twitter:title"
          content="r—vis: Visual Communication for Architecture"
        />
        <meta
          name="twitter:description"
          content="Specializing in architectural photography and film, visualization, and graphic design, r—vis is a creative studio focused on creating lasting impressions of built and unbuilt spaces. "
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/og-image.jpg" />
      </Helmet>
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
                <Link to={`/projects/${item.link}`}>
                  <motion.img
                    className="content-image"
                    src={item.url}
                    alt={item.alt}
                  />
                </Link>

                <div className="caption">
                  <p>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/*
          <div className="endtag">
             <a href="/projects">See all our projects</a> 
          </div>
          */}
          <CTA />
        </div>
      </div>
      <Footer />

      <Tooltip isVisible={isHovered} />
    </>
  );
}
