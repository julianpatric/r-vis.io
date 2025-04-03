export default function ServiceItem(props) {
  const handleClick = () => {
    window.location.href = `/services/${props.linkURL}`;
  };

  return (
    <>
      <li className="service-item">
        <div className="service-front">
          <h3>{props.title}</h3>
          <ul className="subcategories">
            {props.subcategories.map((subcategory, index) => (
              <li key={index}>— {subcategory}</li>
            ))}
          </ul>
        </div>
        <div className="service-back"></div>
      </li>
    </>
  );
}
