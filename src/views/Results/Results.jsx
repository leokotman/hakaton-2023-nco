import { useContext } from 'react';
import classes from './Results.module.css';
import { AppContext } from 'utils/context';

export const Results = (props) => {
  const { onRestartGame } = props;
  const {
    gameScore: { moves },
  } = useContext(AppContext);

  return (
    <div className={classes.settings}>
      <title className={classes.title}>Найди пару</title>
      <p className={classes.titleCongrats}>Поздравляем!</p>
      <div className={classes.cover}>
      <p className={classes.titleWin}>Вы прошли игру</p>
      <p className={classes.titleWin}>За {moves} ходов</p>
      </div>
      <button className={classes.restartButton} onClick={onRestartGame}>Начать сначала</button>
    </div>
  );
};
