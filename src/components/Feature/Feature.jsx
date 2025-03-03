import "./Feature.css";
import ServiceItem from "./ServiceItem.jsx";

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
  return (
    <div className="feature-section">
      <div className="container">
        <div className="headline">
          <h1>Architecture seen, felt, remembered.</h1>
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
