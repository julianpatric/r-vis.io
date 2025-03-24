import Navbar from "../components/Navbar/Navbar";
import { Reveal } from "../components/Reveal";
import "../styles/About.css";
import "../components/Footer/Footer";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA/CTA";
import Headline from "../components/Headline/Headline";
import aboutHeroImg from "../assets/photos/about-hero.jpg";
import { motion } from "motion/react";

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

  const TEAM_MEMBERS = [
    {
      name: "Julian Semilla",
      photo: null,
      title: "1",
      socials: "@julianpatric",
      link: "#",
    },
    {
      name: "Kevin Nuñez",
      photo: null,
      title: "3",
      socials: "@kevvnunez",
      link: "#",
    },
    {
      name: "Lance Sy",
      photo: null,
      title: "2",
      socials: "@landssea",
      link: "#",
    },
  ];

  return (
    <>
      <div className="about-hero">
        {/* Scrolling Images */}
        <motion.div
          className="scrolling-images"
          animate={{ x: ["0%", "-50%"] }} // Moves exactly half the container
          transition={{ ease: "linear", duration: 45, repeat: Infinity }} // Smooth infinite loop
        >
          <img src={aboutHeroImg} alt="Background" className="scroll-img" />
          <img src={aboutHeroImg} alt="Background" className="scroll-img" />
        </motion.div>

        <div className="container">
          <Headline>Visual communication for architects.</Headline>
        </div>

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

      <Navbar />
      <div className="main-section">
        <div className="container">
          <Reveal>
            <h3 className="bio" id="target-section">
              <span style={{ "font-weight": "bold" }}>r—vis</span> is a creative
              studio shaping how architecture is seen and remembered. We
              specialize in{" "}
              <span style={{ "font-weight": "bold" }}>
                architectural photography and film
              </span>
              , <span style={{ "font-weight": "bold" }}>visualization</span>,
              and <span style={{ "font-weight": "bold" }}>graphic design</span>,
              crafting compelling visuals that translate concepts into immersive
              narratives.
            </h3>
          </Reveal>

          <div className="about-right">
            <ul className="team">
              {TEAM_MEMBERS.map((member, index) => (
                <Reveal>
                  <li key={member.index}>
                    <img src={member.link} />
                    <p style={{ "font-weight": "bold" }}>{member.name}</p>
                    <p>{member.socials}</p>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <p className="story">
                Lorem ipsum dolor sit amet. Aut magnam repudiandae in quae
                tempore quo recusandae fuga. Eum explicabo animi ad mollitia
                distinctio sit corporis deserunt. Cum culpa magnam ut molestias
                vitae nam expedita repellendus aut odit quia et beatae
                repudiandae ea laudantium dolores et consequatur voluptas.
              </p>
            </Reveal>
            <Reveal>
              <p className="story">
                Aut vero fuga non officia unde qui quos reiciendis eum iure
                saepe aut suscipit voluptas aut nisi nihil. Est blanditiis
                perferendis aut aliquid rerum aut perspiciatis rerum ut
                doloremque autem aut saepe galisum est illo ipsam ut quasi
                temporibus.
              </p>
            </Reveal>
            <Reveal>
              <p className="story">
                Sit consequatur galisum sed minus optio et illum deleniti eos
                quia vitae. Eos voluptatem perspiciatis non culpa asperiores ut
                error distinctio est aperiam officiis.
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
