import "./Feature.css";
import ServiceItem from "./ServiceItem.jsx";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Photography & Film",
    subcategories: [
      "Architectural documentation",
      "Video feature",
      "Walkthrough video",
    ],
    linkURL: "photography",
  },
  {
    title: "Visualization",
    subcategories: [
      "Architectural visualization",
      "Video renders",
      "Animation",
    ],
    linkURL: "vis",
  },
  {
    title: "Graphic Design",
    subcategories: [
      "Project presentation",
      "Architectural boards",
      "Project branding",
    ],
    linkURL: "graphics",
  },
];

export default function Feature() {
  const text = "Architecture seen, felt, remembered.";
  const words = text.split(" ");

  return (
    <div className="feature-section">
      <div className="container">
        <div className="headline">
          <h1>
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: i * 0.3 }}
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <ul className="services">
          {SERVICES.map((service) => (
            <ServiceItem key={service.title} link={service.link} {...service} />
          ))}
        </ul>
      </div>
    </div>
  );
}
