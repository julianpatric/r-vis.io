import "./Footer.css";
import logo from "../../assets/icons/logo-white.svg";
import { useEffect, useState } from "react";

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
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <h4>services</h4>
              </li>
              <li>
                <a href="#">photo & film</a>
              </li>
              <li>
                <a href="#">visualization</a>
              </li>
              <li>
                <a href="#">graphic design</a>
              </li>
            </ul>
            <ul>
              <li>
                <h4>socials</h4>
              </li>
              <li>
                <a href="#">instagram</a>
              </li>
              <li>
                <a href="#">facebook</a>
              </li>
              <li>
                <a href="#">youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <a href="/" className="footer-logo">
            <img src={logo} alt="Logo" height="36px" />
          </a>
          <p>©2025 r—vis. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
