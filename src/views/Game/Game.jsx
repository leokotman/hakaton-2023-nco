import { useState } from "react";
import { Board, Confirm, GameTitle } from "components";
import classes from "./Game.module.css";
import { Button } from "components/Button/Button";

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
      <section className={classes.gridLayout}>
        <Board className={classes.board} />
        <div className={classes.actionButtons}>
          <Button classname={classes.pause} onButtonClick={onPauseGame} />
          <Button classname={classes.restart} onButtonClick={openModal} />
        </div>
      </section>
    </main>
  );
};
