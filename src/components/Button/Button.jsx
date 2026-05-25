import classes from "./Button.module.css";

export const Button = (props) => {
  const { classname, onButtonClick } = props;
  return (
    <button
      className={`${classes.button} ${classname}`}
      onClick={onButtonClick}
    ></button>
  );
};
