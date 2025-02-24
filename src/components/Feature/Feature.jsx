import './Feature.css';
import ServiceItem from './ServiceItem.jsx'
import { SERVICES } from '../../data.js';

export default function Feature(){
    return (
        <div className="feature-section">
            <div className='container'>
            <h1>Architecture seen, felt, remembered.</h1>
            <ul className="services">
                {SERVICES.map((service) => (
                <ServiceItem key={service.title} link={service.link}{...service} />
                ))}
            </ul>
            </div>
        </div>

)}