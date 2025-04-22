import "./Button.css";

const Button = ({ children, to, type, className, disabled, onClick }) => {
  // If it's a link button
  if (to) {
    return (
      <a href={to}>
        <button
          type="button"
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
      </a>
    );
  }

  // Default button (for form submission or regular buttons)
  return (
    <button
      type={type || "button"}
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
};

export default Button;
