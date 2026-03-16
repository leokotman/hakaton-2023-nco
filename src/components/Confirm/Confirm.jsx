import classes from './Confirm.module.css';

export const Confirm = (props) => {
  const { onRestartGame, onClickPlay } = props;

  return (
    <div className={classes.modalContainer}>
      <fieldset className={classes.modal}>
        <legend className={classes.legend}>Warning</legend>
        <p className={classes.question}>Are you sure you want to restart?</p>
        <button onClick={onRestartGame} className={classes.button}>
          new game
        </button>
        <button
          onClick={onClickPlay}
          className={`${classes.button} ${classes.violet}`}
        >
          go back
        </button>
      </fieldset>
    </div>
  );
};
