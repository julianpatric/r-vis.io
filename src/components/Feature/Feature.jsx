import './Feature.css';
import ServiceItem from '../ServiceItem/ServiceItem.jsx'

export default function Feature(){
    return (
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

)}