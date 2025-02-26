import React, { useState, useEffect } from "react";
import client from "./sanity/cdclient";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
          title,
          client,
          description,
          location,
          year,
          "photos": photos[].asset->url
        }`
      )
      .then((data) => {
        console.log("Fetched data:", data);
        setProjects(data);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <p>Error loading projects: {error}</p>;
  }

  return (
    <div>
      <h1>Portfolio Projects</h1>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Location:</strong> {project.location}
            </p>
            <p>
              <strong>Year:</strong> {project.year}
            </p>
            <div>
              {project.photos?.map((url, i) => (
                <img key={i} src={url} alt={project.title} width="200" />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default Projects;
