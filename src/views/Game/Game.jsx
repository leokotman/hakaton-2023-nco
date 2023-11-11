import classes from './Game.module.css';
import { Navbar, Counter } from '../../components';
import Board from '../../components/Board/Board';

export const Game = (props) => {
  const { onRestartGame, onFinishGame } = props;

  return (
    <>
      <header className="App-header">
        <Navbar title="Hakaton" />
        <Counter />
        <Board />
        <button onClick={onRestartGame}>Начать сначала</button>
        <p>Игра доска</p>
        <button onClick={onFinishGame}>Закончить игру</button>
      </header>
    </>
  );
};
