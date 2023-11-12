import { Navbar, Board } from 'components';
import classes from './Game.module.css';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;

  return (
    <>
      <header className="App-header">
        <Navbar className={classes.title} title="Найди пару" />
        <Board />
        <button className={classes.restart} onClick={onRestartGame}></button>
        <button className={classes.pause} onClick={onPauseGame}></button>
      </header>
    </>
  );
};
