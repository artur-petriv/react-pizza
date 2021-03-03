import classNames from "classnames";

function Button({ text, test }) {
  return (
    <button
      className={classNames("button", {
        "button--test": test,
      })}
    ></button>
  );
}

export default Button;
