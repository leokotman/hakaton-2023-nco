import { useState } from 'react';
import { Board, Confirm, GameTitle } from 'components';
import classes from './Game.module.css';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;

  // @Game.jsx (8-27)
  // TODO: Consider moving modal open/close state and restart confirmation
  // into a higher-level GameLayout or shared dialog pattern if you add
  // more overlays. For now this is fine but tightly coupled to Game.
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
      <div className={classes.gridLayout}>
        <Board className={classes.div1} />
        <div className={classes.div2}>
          <button className={classes.pause} onClick={onPauseGame}></button>
          <button className={classes.restart} onClick={openModal}></button>
        </div>
      </div>
    </main>
  );
};
