export default function ServiceItem(props) {
  const handleClick = () => {
    window.location.href = `/services/${props.linkURL}`;
  };

  return (
    <li className="service" onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>{props.title}</h3>
      <ul className="subcategories">
        {props.subcategories.map((subcategory, index) => (
          <li key={index}>— {subcategory}</li>
        ))}
      </ul>
    </li>
  );
}
