import classes from './Confirm.module.css';

function Confirm(props) {
  const { onRestartGame, onClickPlay } = props;

  return (
    <div className={classes.modalContainer}>
      <fieldset className={classes.modal}>
        <legend className={classes.legend}>Предупреждение</legend>
        <p className={classes.question}>Вы точно хотите начать заново?</p>
        <button onClick={onRestartGame}>новая игра</button>
        <button onClick={onClickPlay}>вернуться</button>
      </fieldset>
    </div>
  );
}

export default Confirm;