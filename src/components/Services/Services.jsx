import "./Services.css";
import ServiceItem from "./ServiceItem.jsx";
import photography01 from "../../assets/imgs/services/photography-01.jpeg";
import photography02 from "../../assets/imgs/services/photography-02.jpeg";
import photography03 from "../../assets/imgs/services/photography-03.jpeg";
import photography04 from "../../assets/imgs/services/photography-04.jpeg";
import photography05 from "../../assets/imgs/services/photography-05.jpeg";
import photography06 from "../../assets/imgs/services/photography-06.jpeg";
import photography07 from "../../assets/imgs/services/photography-07.jpeg";
import photography08 from "../../assets/imgs/services/photography-08.jpeg";
import visualization01 from "../../assets/imgs/services/visualization-01.jpeg";
import visualization02 from "../../assets/imgs/services/visualization-02.jpeg";
import visualization03 from "../../assets/imgs/services/visualization-03.jpeg";
import visualization04 from "../../assets/imgs/services/visualization-04.jpeg";
import visualization05 from "../../assets/imgs/services/visualization-05.jpeg";
import visualization06 from "../../assets/imgs/services/visualization-06.jpeg";
import graphicdesign01 from "../../assets/imgs/services/graphicdesign-01.jpeg";
import graphicdesign02 from "../../assets/imgs/services/graphicdesign-02.jpeg";
import graphicdesign03 from "../../assets/imgs/services/graphicdesign-03.jpeg";
import graphicdesign04 from "../../assets/imgs/services/graphicdesign-04.jpeg";
import graphicdesign05 from "../../assets/imgs/services/graphicdesign-05.jpeg";
import graphicdesign06 from "../../assets/imgs/services/graphicdesign-06.jpeg";
import graphicdesign07 from "../../assets/imgs/services/graphicdesign-07.jpeg";
import graphicdesign08 from "../../assets/imgs/services/graphicdesign-08.jpeg";
import graphicdesign09 from "../../assets/imgs/services/graphicdesign-09.jpeg";

const SERVICES = [
  {
    title: "Photography & Film",
    subcategories: [
      "Architectural Documentation",
      "Video Features",
      "Walkthrough Videos",
    ],
    images: [
      photography01,
      photography02,
      photography03,
      photography04,
      photography05,
      photography06,
      photography07,
      photography08,
    ],
  },
  {
    title: "Visualization",
    subcategories: ["Still Renders", "Video Renders", "Walkthrough Videos"],
    images: [
      visualization01,
      visualization02,
      visualization03,
      visualization04,
      visualization05,
      visualization06,
    ],
  },
  {
    title: "Graphic Design",
    subcategories: [
      "Project Presentation",
      "Architectural Boards",
      "Project Branding",
    ],
    images: [
      graphicdesign01,
      graphicdesign02,
      graphicdesign03,
      graphicdesign04,
      graphicdesign05,
      graphicdesign06,
      graphicdesign07,
      graphicdesign08,
      graphicdesign09,
    ],
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
