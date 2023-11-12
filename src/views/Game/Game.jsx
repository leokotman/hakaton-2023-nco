import { Navbar, Board } from 'components';
import classes from './Game.module.css';
import { useState } from 'react';
import Confirm from 'components/Confirm/Confirm';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <header className="App-header">
        <div>
          {modalIsOpen && (
            <Confirm onRestartGame={onRestartGame} onClickPlay={closeModal} />
          )}
        </div>
        <Navbar className={classes.title} title="Найди пару" />
        <Board />
        <button className={classes.restart} onClick={openModal}></button>
        <button className={classes.pause} onClick={onPauseGame}></button>
      </header>
    </>
  );
};
