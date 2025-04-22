import { useState, useEffect } from "react";

export default function ServiceItem(props) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % props.images.length);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <li className="service-item" tabIndex="0">
        <div className="service-front">
          <h2>{props.title}</h2>
          <ul className="subcategories">
            {props.subcategories.map((subcategory, index) => (
              <li key={index}>— {subcategory}</li>
            ))}
          </ul>
        </div>
        <div className="service-back">
          <img src={props.images[imageIndex]} alt={props.title} />
        </div>
      </li>
    </>
  );
}
