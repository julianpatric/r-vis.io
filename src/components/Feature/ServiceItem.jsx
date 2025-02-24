import './ServiceItem.css'

export default function ServiceItem(props) {
    return (
        <li className="service">
            <h2>{props.title}</h2>
            <ul className="subcategories">
                {props.subcategories.map((subcategory) => (
                    <li>— {subcategory}</li>
                ))}
            </ul>
        </li>
    )
}