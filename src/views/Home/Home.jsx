import classes from './Home.module.css';

export const Home = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      Найди пару (заголовок)
      <button onClick={onClickPlay}>Начать игру</button>
    </div>
  );
};
