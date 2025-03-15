import client from "../sanity/client";
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "motion/react";
import CTA from "../components/CTA/CTA";
import "../styles/ProjectDetail.css";
import { useNavigate } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      client
        .fetch(
          `*[_type == "project" && slug.current == $slug][0]{
              title,
              client,
              description,
              "cover": coverPhoto.asset->url,
              "images": images[]{
                "url": asset->url,
                displayType
              },
              "slug": slug.current,
              endtag,
              endtagLink
            }`,
          { slug }
        )
        .then((data) => {
          //console.log("Fetched project:", data);
          if (data) {
            setProject(data);
          } else {
            navigate("/404"); // Redirect to NotFound page
          }
        })
        .catch(console.error);
    }
  }, [slug]);

  if (!project) return null;

  return (
    <>
      <Hero image={project.cover} />
      <Navbar />
      <div className="content-section">
        <div className="header-section">
          <div className="container">
            <div className="title">
              <Reveal>
                <p>{project.client}</p>
                <h2>{project.title}</h2>
              </Reveal>
            </div>
            <p className="description">{project.description}</p>
          </div>
        </div>

        <div className="container content-grid">
          {project.images.map((item, index) => (
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              key={index}
              className={`content ${item.displayType}`}
            >
              <motion.img
                className="content-image"
                src={item.url}
                alt={item.caption}
              />
            </motion.div>
          ))}
        </div>

        {project.endtagLink && (
          <div className="endtag">
            <a
              href={project.endtagLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.endtag} ↗
            </a>
          </div>
        )}
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
