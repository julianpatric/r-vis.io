import "./Services.css";
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

export default function Services() {
  return (
    <div className="services-section">
      <ul className="services">
        {SERVICES.map((service, index) => (
          <ServiceItem
            key={service.title}
            link={service.link}
            index={index}
            {...service}
          />
        ))}
      </ul>
    </div>
  );
}
