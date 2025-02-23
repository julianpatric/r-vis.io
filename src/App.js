import './App.css';
import Topbar from './components/Topbar.jsx'
import ServiceItem from './components/ServiceItem.jsx'
import { SERVICES } from './data.js';


function App() {
  return (
    <>
      <div className="header">
        <Topbar/>
        <div className="section hero-section"></div>
      </div>
      <div className="section feature-section">
        <div className='container'>
          <h1>Architecture seen, felt, remembered.</h1>
          <ul className="services">
            {SERVICES.map((service) => (
              <ServiceItem key={service.title} {...service} />
            ))}
          </ul>
        </div>
      </div>
      <div className="section content-section">
        <div className='container'>
          <div className="content-item"></div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className='footer-main'>
          <div className="footer-email">
            <p>Work with us:</p>
            <a href="mailto:hello@r-vis.io">hello@r-vis.io</a>
          </div>
          <div className="footer-sitemap">
            <ul>
              <li><h4>r—vis</h4></li>
              <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">contact</a></li>
            </ul>
            <ul>
              <li><h4>services</h4></li>
              <li><a href="#">photo & film</a></li>
              <li><a href="#">visualization</a></li>
              <li><a href="#">graphic design</a></li>
            </ul>
            <ul>
              <li><h4>socials</h4></li>
              <li><a href="#">instagram</a></li>
              <li><a href="#">facebook</a></li>
              <li><a href="#">youtube</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
