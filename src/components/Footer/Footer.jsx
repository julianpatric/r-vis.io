import "./Footer.css";
import logo from "../../assets/icons/logo-white.svg";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
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
