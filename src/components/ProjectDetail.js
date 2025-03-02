import client from "../sanity/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && slug.current == $slug][0]{
          title,
          images,
          "slug": slug.current
        }`,
        { slug }
      )
      .then(setProject)
      .catch(console.error);
  }, [slug]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </div>
  );
};

export default ProjectDetail;
