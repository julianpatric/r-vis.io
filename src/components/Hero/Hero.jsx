import "./Hero.css";
import defaultImage from "../../assets/photos/hero.jpg";

export default function Hero({ image = defaultImage }) {
  console.log(image);
  return (
    <>
      <div className="hero-section">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="hero-img"
        ></div>
      </div>
    </>
  );
}
