import Navbar from "../components/Navbar/Navbar";
import { Reveal } from "../components/Reveal";
import "../styles/About.css";
import "../components/Footer/Footer";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA/CTA";
import Headline from "../components/Headline/Headline";
import aboutHero from "../assets/photos/about-hero.jpg";

function About() {
  const TEAM_MEMBERS = [
    {
      name: "Julian Semilla",
      photo: null,
      title: "1",
      socials: "@julianpatric",
      link: "#",
    },
    {
      name: "Lance Sy",
      photo: null,
      title: "2",
      socials: "@landssea",
      link: "#",
    },
    {
      name: "Kevin Nuñez",
      photo: null,
      title: "3",
      socials: "@kevvnunez",
      link: "#",
    },
  ];
  return (
    <>
      <div className="about-hero">
        <div className="sliding-background" />
        <div className="container">
          <Headline>Visual communication for architects.</Headline>
        </div>
      </div>
      <Navbar />
      <div className="main-section">
        <div className="container about-body">
          <Reveal>
            <h3 className="bio">
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
