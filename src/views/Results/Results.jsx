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
      <title className={classes.title}>Find a pair</title>
      <p className={classes.titleCongrats}>Congratulations!</p>
      <div className={classes.cover}>
      <p className={classes.titleWin}>You have completed the game</p>
      <p className={classes.titleWin}>In {moves} moves</p>
      </div>
      <button className={classes.restartButton} onClick={onRestartGame}>Start again</button>
    </div>
  );
};
