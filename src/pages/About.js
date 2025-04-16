import Navbar from "../components/Navbar/Navbar";
import { Reveal } from "../components/Reveal";
import "../styles/About.css";
import "../components/Footer/Footer";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA/CTA";
import Headline from "../components/Headline/Headline";
import aboutHeroImg from "../assets/imgs/about-hero.jpg";
import { motion } from "motion/react";
import logo from "../assets/icons/logo-light.svg";
import julianImg from "../assets/imgs/about/id2-julian.jpg";
import kevinImg from "../assets/imgs/about/id2-kev.jpg";
import lanceImg from "../assets/imgs/about/id2-lance.jpg";
import { Helmet } from "react-helmet";
const TEAM_MEMBERS = [
  {
    name: "Julian Semilla",
    photo: julianImg,
    title: "1",
    socials: "julianpatric",
    link: "#",
  },
  {
    name: "Kevin Nuñez",
    photo: kevinImg,
    title: "3",
    socials: "kevvnunez",
    link: "#",
  },
  {
    name: "Lance Sy",
    photo: lanceImg,
    title: "2",
    socials: "landssea",
    link: "#",
  },
];

function About() {
  const scrollToSection = () => {
    const section = document.getElementById("target-section");
    if (section) {
      const offset = 300; // Adjust as needed
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Slow down by increasing this value (in ms)
      let startTime = null;

      function animationStep(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Normalize progress

        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animationStep);
        }
      }

      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      }

      requestAnimationFrame(animationStep);
    }
  };

  return (
    <>
      <Helmet>
        <title>About | r—vis</title>
      </Helmet>
      <div className="about-hero">
        {/* Scrolling Images */}
        <motion.div
          className="scrolling-images"
          animate={{
            x: ["0%", "-50%"],
          }} // Moves exactly half the container
          transition={{
            ease: "linear",
            duration: 45,
            repeat: Infinity,
          }} // Smooth infinite loop
        >
          <img src={aboutHeroImg} alt="Background" className="scroll-img" />
          <img src={aboutHeroImg} alt="Background" className="scroll-img" />
        </motion.div>

        <div className="container">
          <div className="about-logo">
            <img src={logo} />
          </div>
          <Headline>Visual communication for architecture</Headline>

          <div className="learn-more">
            <p>LEARN MORE</p>

            <div className="arrow-container">
              <motion.div className="scroll-arrow">
                <svg
                  width="50"
                  height="80"
                  viewBox="0 0 24 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2V38M12 38L9 34M12 38L15 34"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
      <div className="main-section">
        <div className="container">
          <Reveal>
            <h3 className="bio" id="target-section">
              <span style={{ fontWeight: "700" }}>r—vis</span> is a creative
              studio focused on creating lasting impressions of built and
              unbuilt spaces. Specializing in{" "}
              <span style={{ fontWeight: "700" }}>
                architectural photography and film
              </span>
              , <span style={{ fontWeight: "700" }}>visualization</span>, and{" "}
              <span style={{ fontWeight: "700" }}>graphic design</span>, we
              craft compelling visuals that translate concepts into immersive
              narratives.
            </h3>
          </Reveal>

          <div className="about-right">
            <ul className="team">
              {TEAM_MEMBERS.map((member, index) => (
                <Reveal key={index}>
                  <li>
                    <a href={`https://www.instagram.com/${member.socials}`}>
                      <img src={member.photo} />
                    </a>
                    <p style={{ fontWeight: "700" }}>{member.name}</p>
                    <p>@{member.socials}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <p className="story">
                The idea behind r—vis began three years prior to its founding in
                2025. Our vision was simple: to create the most memorable images
                for architecture. As then students of the discipline, we
                understood that the way a design is presented—its context,
                process, and intentions—is just as important as the design
                itself. This belief continues to shape our approach today,
                guiding the way we frame each shot, compose each render, and
                communicate every idea on each project that we work on.
              </p>
            </Reveal>
            <Reveal>
              <p className="story">
                What started as personal interests eventually grew into our
                distinct creative crafts. Julian brings a strong foundation in
                photography and cinematography, Lance contributes a precise eye
                for architectural rendering, and Kevin adds depth through
                illustration and graphic design.
              </p>
            </Reveal>
            <Reveal>
              <p className="story">
                Together, we formed r—vis to combine our individual strengths
                into a cohesive practice—one that's grounded in design and
                driven by storytelling.
              </p>
            </Reveal>
          </div>
        </div>
        <CTA />
      </div>

      <Footer />
    </>
  );
}

export default About;
