import './App.css';
import Topbar from './components/Topbar.jsx'
import ServiceItem from './components/ServiceItem.jsx'
import { SERVICES } from './data.js';


function App() {
  return (
    <>
      <div className="header">
        <Topbar/>
        <div className="section hero"></div>
      </div>
      <div className="section feature">
        <h1>Architecture seen, felt, remembered.</h1>
          <ul className="services">
            {SERVICES.map((service) => (
              <ServiceItem key={service.title} {...service} />
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
