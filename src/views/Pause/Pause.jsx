import classes from './Pause.module.css';

export const Pause = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      Найди пару (заголовок)
      <button onClick={onClickPlay}>Вернуться к игре</button>
    </div>
  );
};
