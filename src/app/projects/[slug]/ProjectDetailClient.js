"use client";

import { useState } from "react";
import Hero from "../../../components/Hero/Hero";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { motion } from "motion/react";
import CTA from "../../../components/CTA/CTA";
import "../../../styles/ProjectDetail.css";
import YouTube from "react-youtube";
import PlayButton from "../../../components/PlayButton";

export default function ProjectDetailClient({ project }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

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
              tabIndex="0"
            >
              <motion.img
                className="content-image"
                src={item.url}
                alt={
                  item.alt
                    ? item.alt
                    : `${project.title} by ${project.client}. Image by r-vis`
                }
              />
            </motion.div>
          ))}
        </div>
        {project.youtubeID && (
          <div className="video-section">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
            >
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
                alt={`${project.title} video thumbnail`}
                tabIndex="0"
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
}
