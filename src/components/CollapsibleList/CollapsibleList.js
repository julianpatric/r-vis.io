import "./CollapsibleList.css";
import CollapsibleItem from "./CollapsibleItem";

export default function CollapsibleList({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="collapsible-list">
      {items.map((item, index) => (
        <CollapsibleItem item={item} index={index} key={index} />
      ))}
    </div>
  );
}
