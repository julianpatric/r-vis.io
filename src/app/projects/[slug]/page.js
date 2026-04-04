import client from "../../../sanity/client";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  title,
  client,
  description,
  "cover": coverPhoto.asset->url + "?w=2500",
  "images": images[]{
    "url": asset->url + "?w=1500",
    displayType,
    alt,
  },
  "slug": slug.current,
  youtubeID,
  "videoBgURL": videoBg.asset->url,
  endtag,
  endtagLink
}`;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_QUERY, { slug });

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | ${project.client}`,
    description: project.description
      ? project.description
      : `${project.client} - ${project.title}, photographed by r-vis: Visual Communication for Architecture`,
    openGraph: {
      title: `${project.title} | ${project.client} | r—vis`,
      description: `${project.client} - ${project.title}, photographed by r-vis: Visual Communication for Architecture`,
      images: project.cover ? [{ url: project.cover }] : [],
      url: `https://r-vis.io/projects/${project.slug}`,
      siteName: "r—vis",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_QUERY, { slug });

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
