import "./Footer.css";
import logo from "../../assets/icons/logo-white.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show footer after scrolling 120% of the viewport height
      const scrollThreshold = window.innerHeight * 1.2;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`footer-section ${isVisible ? "visible" : ""}`}>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-email">
            <p>Work with us:</p>
            <a href="mailto:hello@r-vis.io">hello@r-vis.io</a>
          </div>
          <div className="footer-sitemap">
            <ul>
              <li>
                <h4>r—vis</h4>
              </li>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <ul>
              <li>
                <h4>services</h4>
              </li>
              <li>
                <Link to="/services/photo-film">photo & film</Link>
              </li>
              <li>
                <Link to="/services/visualization">visualization</Link>
              </li>
              <li>
                <Link to="/services/graphic-design">graphic design</Link>
              </li>
            </ul>
            <ul>
              <li>
                <h4>socials</h4>
              </li>
              <li>
                <Link to="instagram">instagram</Link>
              </li>
              <li>
                <Link to="facebook">facebook</Link>
              </li>
              <li>
                <Link to="/youtube">youtube</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Logo" height="36px" />
          </Link>
          <p>©2025 r—vis. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
