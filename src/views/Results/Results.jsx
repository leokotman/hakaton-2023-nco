import classes from './Results.module.css';

export const Results = (props) => {
  const { onRestartGame } = props;

  return (
    <div className={classes.settings}>
      Результаты<button onClick={onRestartGame}>Начать сначала</button>
    </div>
  );
};
