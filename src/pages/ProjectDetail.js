import client from "../sanity/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "motion/react";
import CTA from "../components/CTA/CTA";
import "../styles/ProjectDetail.css";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import { ReactComponent as PlayButton } from "../assets/icons/play-button.svg";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  console.log(project);

  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      client
        .fetch(
          `*[_type == "project" && slug.current == $slug][0]{
              title,
              client,
              description,
              "cover": coverPhoto.asset->url+ "?w=2500",
              "images": images[]{
                "url": asset->url + "?w=1500",
                displayType
              },
              "slug": slug.current,
              youtubeID,
              "videoBgURL": videoBg.asset->url,
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

  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      showinfo: 1,
      modestbranding: 1,
      rel: 0,
      vq: "hd1080",
    },
  };

  return (
    <>
      <Hero image={project.cover} halfHeight={true} />
      <Navbar />
      <div className="main-section">
        <div className="container header-section">
          <div className="header-left">
            <span className="client-name">{project.client}</span>
            <h1>{project.title}</h1>
          </div>
          <div className="header-right">
            <p>{project.description}</p>
          </div>
        </div>
        <div className="container content-grid">
          {project.images.map((item, index) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
        {project.youtubeID && (
          <div className="video-section">
            <video autoPlay muted loop>
              <source src={project.videoBgURL} type="video/webm" />
            </video>
            <div
              className="video-thumbnail-container"
              onClick={() => setVideoPlaying(true)}
            >
              <PlayButton className="play-button" />
              <img
                className="video-thumbnail"
                src={`https://img.youtube.com/vi/${project.youtubeID}/maxresdefault.jpg`}
                alt={project.title}
              />
            </div>
          </div>
        )}
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

      {/* Video Player */}

      <div
        className={`video-player-container ${
          videoPlaying ? "active" : "hidden"
        }`}
        onClick={() => setVideoPlaying(false)}
      >
        <div className="video-player">
          <button
            className="close-button"
            onClick={() => setVideoPlaying(false)}
          >
            X
          </button>
          <YouTube videoId={project.youtubeID} opts={videoOptions} />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
