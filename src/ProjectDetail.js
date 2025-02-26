import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "./sanityClient";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && _id == $projectId][0]{
          title,
          client,
          description,
          location,
          year,
          "photos": photos[].asset->url
        }`,
        { projectId }
      )
      .then(setProject)
      .catch(console.error);
  }, [projectId]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h1>{project.title}</h1>
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
        {project.photos?.map((url, index) => (
          <img key={index} src={url} alt={project.title} width="300" />
        ))}
      </div>
    </div>
  );
};
