import classes from './Pause.module.css';

export const Pause = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      Найди пару (заголовок)
      <div className={classes.modalContainer}>
      <fieldset className={classes.modal}>
        <legend className={classes.legend}>ПАУЗА</legend>
        <p className={classes.question}>Вернуться к игре</p>
        <button className={classes.playBtn} onClick={onClickPlay}>
          <div className={classes.playIcon}>
            <div className={classes.play}></div>
          </div>
        </button>
      </fieldset>
    </div>
      
    </div>
  );
};
