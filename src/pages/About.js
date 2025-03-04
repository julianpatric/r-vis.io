import Headline from "../components/Headline/Headline";
import Navbar from "../components/Navbar/Navbar";
import { Reveal } from "../components/Reveal";
function About() {
  return (
    <>
      <Navbar />
      <Headline>Visual communication for architects.</Headline>
      <Reveal>
        <h3 style={{ fontWeight: "normal" }}>
          r—vis is a creative studio shaping how architecture is seen and
          experienced. We specialize in architectural photography and film,
          visualization, and graphic design crafting compelling visuals that
          bridge concept and reality.
        </h3>
      </Reveal>
    </>
  );
}

export default About;
