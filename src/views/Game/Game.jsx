import { Board, Confirm, GameTitle } from 'components';
import classes from './Game.module.css';
import { useState } from 'react';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <main className="App-header">
      <header>
        <div>
          {modalIsOpen && (
            <Confirm onRestartGame={onRestartGame} onClickPlay={closeModal} />
          )}
        </div>
        <GameTitle />
      </header>
      <Board />
      <button className={classes.restart} onClick={openModal}></button>
      <button className={classes.pause} onClick={onPauseGame}></button>
    </main>
  );
};
