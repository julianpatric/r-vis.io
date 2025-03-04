import client from "../sanity/client";
import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "motion/react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

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
              "slug": slug.current
            }`,
          { slug }
        )
        .then((data) => {
          //console.log("Fetched project:", data);
          setProject(data);
        })
        .catch(console.error);
    }
  }, [slug]);

  if (!project) return <Navigate to="/404" replace />;

  return (
    <>
      <Hero image={project.cover} />
      <Navbar />
      <div className="header-section">
        <div className="container">
          <div className="title">
            <p>{project.client}</p>
            <h2>{project.title}</h2>
          </div>
          <p className="description">{project.description}</p>
        </div>
      </div>
      <div className="content-section">
        <div className="container content-grid">
          {project.images.map((item, index) => (
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className={`content ${item.displayType}`}
            >
              <img key={index} src={item.url} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
