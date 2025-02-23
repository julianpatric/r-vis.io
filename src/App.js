import './App.css';
import Topbar from './components/Topbar.jsx'
import ServiceItem from './components/ServiceItem.jsx'
import Footer from './components/Footer.jsx'
import { SERVICES } from './data.js';


function App() {
  return (
    <>
      <div className="header">
        <Topbar/>
        <div className="hero-section"></div>
      </div>
      <div className="feature-section">
        <div className='container'>
          <h1>Architecture seen, felt, remembered.</h1>
          <ul className="services">
            {SERVICES.map((service) => (
              <ServiceItem key={service.title} {...service} />
            ))}
          </ul>
        </div>
      </div>
      <div className="content-section">
        <div className='container'>
          <div className="content-item"></div>
          <div className="content-item"></div>
          <div className="content-item"></div>
        </div>
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
