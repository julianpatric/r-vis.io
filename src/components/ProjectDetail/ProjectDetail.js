import client from "../../sanity/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProjectDetail.css";
import Hero from "../Hero/Hero";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      client
        .fetch(
          `*[_type == "project" && slug.current == $slug][0]{
              title,
              "images": images[]{
                "url": asset->url,
                displayType
              },
              "slug": slug.current
            }`,
          { slug }
        )
        .then((data) => {
          console.log("Fetched project:", data);
          setProject(data);
        })
        .catch(console.error);
    }
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  const getImageStyle = (displayType) => {
    switch (displayType) {
      case "full-row":
        return { width: "100%", height: "auto" };
      case "two-column":
        return { width: "48%", height: "auto" };
      case "isolate":
        return { width: "300px", height: "auto", margin: "0 auto" };
      default:
        return { width: "300px", height: "auto" }; // Fallback style
    }
  };

  console.log("Test: ", project.images);

  return (
    <div className="content-section">
      <div className="container content-grid">
        {project.images.map((item, index) => (
          <div className={`content ${item.displayType}`}>
            <img key={index} src={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
