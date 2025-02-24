export default function ServiceItem(props) {
  const handleClick = () => {
    window.location.href = `/services/${props.linkURL}`;
  };

  return (
    <li className="service" onClick={handleClick} style={{ cursor: "pointer" }}>
      <h2>{props.title}</h2>
      <ul className="subcategories">
        {props.subcategories.map((subcategory) => (
          <li>— {subcategory}</li>
        ))}
      </ul>
    </li>
  );
}
