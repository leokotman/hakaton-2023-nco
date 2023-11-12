import classes from './Pause.module.css';

export const Pause = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      Найди пару (заголовок)
      Вернуться к игре
      <button onClick={onClickPlay}>
        <div className={classes.playIcon}>
          <div className={classes.play}></div>
        </div>
      </button>
    </div>
  );
};
