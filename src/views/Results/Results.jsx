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
      Найди пару (заголовок)
      <p>Поздравляем!</p>
      <p>Вы прошли игру</p>
      <p>За {moves} ходов</p>
      Результаты<button onClick={onRestartGame}>Начать сначала</button>
    </div>
  );
};
