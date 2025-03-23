import Button from "../Button/Button";
import { Reveal } from "../Reveal";
import "./CTA.css";

export default function CTA() {
  return (
    <div className="cta-container">
      <Reveal>
        <br />
        <h2>Your ideas, our visuals. Let’s share the stories of spaces.</h2>
      </Reveal>
      <Reveal>
        <Button to="/contact">Get in touch</Button>
      </Reveal>
    </div>
  );
}
