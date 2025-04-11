import "./Services.css";
import ServiceItem from "./ServiceItem.jsx";
import photography01 from "../../assets/imgs/services/photography-01.jpg";
import photography02 from "../../assets/imgs/services/photography-02.jpg";
import photography03 from "../../assets/imgs/services/photography-03.jpg";
import photography04 from "../../assets/imgs/services/photography-04.jpg";

const SERVICES = [
  {
    title: "Photography & Film",
    subcategories: [
      "Architectural Documentation",
      "Video Features",
      "Walkthrough Videos",
    ],
    images: [photography01, photography02, photography03, photography04],
  },
  {
    title: "Visualization",
    subcategories: ["Still Renders", "Video Renders", "Walkthrough Videos"],
    images: [photography01, photography02, photography03],
  },
  {
    title: "Graphic Design",
    subcategories: [
      "Project Presentation",
      "Architectural Boards",
      "Project Branding",
    ],
    images: [photography01, photography02, photography03],
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
