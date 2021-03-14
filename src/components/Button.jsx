import classNames from "classnames";

function Button({ className, onClick, children, outline, circle }) {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
        "button--circle": circle,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
