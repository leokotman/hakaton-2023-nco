import classes from './Pause.module.css';

export const Pause = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      Найди пару (заголовок)
      Вернуться к игре
      <div className={classes.modalContainer}>
      <fieldset className={classes.modal}>
        <legend className={classes.legend}>Предупреждение</legend>
        <p className={classes.question}>Вы точно хотите начать заново?</p>
        <button onClick={onRestartGame}>новая игра</button>
        <button onClick={onClickPlay}>вернуться</button>
      </fieldset>
    </div>
      <button className={classes.playBtn} onClick={onClickPlay}>
        <div className={classes.playIcon}>
          <div className={classes.play}></div>
        </div>
      </button>
    </div>
  );
};
