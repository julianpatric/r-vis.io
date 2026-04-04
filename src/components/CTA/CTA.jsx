import Button from "../Button/Button";
import { Reveal } from "../Reveal";
import "./CTA.css";

export default function CTA() {
  return (
    <div className="cta-container">
      <Reveal>
        <br />
        <span className="CTA">
          Your ideas, our visuals. Let’s share the stories of spaces.
        </span>
      </Reveal>
      <Reveal>
        <Button to="/contact">Get in touch</Button>
      </Reveal>
    </div>
  );
}
