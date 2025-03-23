import "./Button.css";
const Button = ({ children, to }) => {
  return (
    <>
      <a href={to}>
        <div className="button">
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
    </>
  );
};

export default Button;
