"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
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
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import "../styles/ContentGrid.css";

const DEBUG_SIMULATE_LOADING = false;

export default function Home() {
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageRefs = useRef([]);
  const loadedImages = useRef(0);
  const startTime = useRef(Date.now());

  const { isHovered, hoverProps } = useHover();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);

        if (DEBUG_SIMULATE_LOADING) {
          await new Promise((resolve) => setTimeout(resolve, 10000));
        }

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

  useEffect(() => {
    if (!projects?.images?.length) return;

    loadedImages.current = 0;
    const totalImages = projects.images.length;

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

    const imageElements = document.querySelectorAll(".content-image");
    imageElements.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad);
      }
    });

    if (imageElements.length === 0) {
      setImagesLoaded(true);
    }

    const timeoutId = setTimeout(() => {
      if (!imagesLoaded) {
        const loadTime = Date.now() - startTime.current;
        console.log(`Page load time (timeout): ${loadTime}ms`);
        setImagesLoaded(true);
      }
    }, 5000);

    return () => {
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

  if (isLoading || !imagesLoaded) {
    return <LoadingScreen />;
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
                <Link href={`/projects/${item.link}`}>
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
          <CTA />
        </div>
      </div>
      <Footer />

      <Tooltip isVisible={isHovered} />
    </>
  );
}
