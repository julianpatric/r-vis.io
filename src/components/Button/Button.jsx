import "./Button.css";

const Button = ({ children, to, type, className, disabled, onClick }) => {
  // If it's a button (for form submission)
  if (type === "submit" || type === "button") {
    return (
      <button
        type={type}
        className={`button ${className || ""}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
        <svg
          className="arrow-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }

  // If it's a link
  return (
    <a href={to}>
      <div className={`button ${className || ""}`}>
        {children}
        <svg
          className="arrow-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
};

export default Button;
