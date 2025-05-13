import "./Footer.css";
import logotype from "../../assets/icons/logotype-light.svg";
import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";
import { useState } from "react";

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("hello@r-vis.io");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  return (
    <div className="footer-section">
      <div className="footer-bg" />
      <div className="footer-container">
        <div className="footer-main">
          <Reveal>
            <div className="footer-email">
              <p>Work with us:</p>

              <span className="email" onClick={handleEmailClick}>
                hello@r-vis.io
                {showTooltip && (
                  <span className="tooltip">Copied to clipboard!</span>
                )}
              </span>
            </div>
          </Reveal>
          <div className="footer-sitemap">
            <Reveal>
              <ul>
                <li className="sitemap-header">navigate</li>
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
            </Reveal>
            <Reveal>
              <ul>
                <li className="sitemap-header">more</li>
                <li>
                  <a href="https://www.instagram.com/r_vis.io">instagram</a>
                </li>
                <li>
                  <a href="https://www.archdaily.com/photographer/r-vis-kevin-nunez-lance-sy-julian-patric-semilla">
                    archdaily
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/gallery/223535179/rvis-Visual-Identity">
                    brand
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
        <div className="footer-copyright">
          <Reveal>
            <Link to="/" className="footer-logo">
              <img src={logotype} alt="Logo" height="30px" />
            </Link>
          </Reveal>
          <Reveal>
            <p>©2025 r—vis. All rights reserved.</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
