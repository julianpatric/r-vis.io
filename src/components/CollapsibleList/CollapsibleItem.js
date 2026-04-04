"use client";

import { useState, useRef, useEffect } from "react";

export default function CollapsibleItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false); //tab is closed by default

  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  function toggle() {
    setIsOpen((prev) => !prev); // Toggles between true and false
  }

  return (
    <>
      <div key={index} className="collapsible-item">
        <button className="collapsible-button" onClick={toggle}>
          <span className="collapsible-title">{item.title}</span>
          <span
            className={isOpen ? "collapsible-icon open" : "collapsible-icon"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V20M4 12H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
            </svg>
          </span>
        </button>
        <div
          ref={contentRef}
          className={
            isOpen ? "collapsible-content open" : "collapsible-content"
          }
        >
          <p>{item.content}</p>
        </div>
      </div>
    </>
  );
}
