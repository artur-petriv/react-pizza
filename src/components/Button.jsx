import classNames from "classnames";

function Button({ className, onClick, children, test }) {
  return (
    <button
      className={classNames("button", className, {
        "button--test": test,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
