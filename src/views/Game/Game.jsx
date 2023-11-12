import { Navbar, Board } from 'components';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;

  return (
    <>
      <header className="App-header">
        <Navbar title="Найди пару" />
        <Board />
        <button onClick={onRestartGame}>Начать сначала</button>
        <button onClick={onPauseGame}>Приостановить игру</button>
      </header>
    </>
  );
};
