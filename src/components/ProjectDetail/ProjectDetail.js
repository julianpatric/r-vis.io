import client from "../../sanity/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProjectDetail.css";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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

  if (!project) return null;

  console.log("Test", project.cover);

  return (
    <>
      <Hero image={project.cover} />
      <Navbar />
      <div className="info-section">
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
            <div className={`content ${item.displayType}`}>
              <img key={index} src={item.url} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
