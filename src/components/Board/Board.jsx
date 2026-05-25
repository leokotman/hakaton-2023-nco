import React, { useEffect, useContext, useRef } from "react";
import classes from "./Board.module.css";
import SingleCard from "./SingleCard";

import { VIEWS } from "utils/constants.js";
import { AppContext } from "utils/context";
import { useBoardGame } from "hooks/useBoardGame";

export const Board = () => {
  const {
    cards,
    move,
    moveToFinish,
    pickOne,
    pickTwo,
    setPickOne,
    setPickTwo,
    mixImages,
  } = useBoardGame();
  const { location, setLocation, setGameScore } = useContext(AppContext);
  const hasInitializedBoard = useRef(false);

  const chooseCard = (card) => {
    !pickOne ? setPickOne(card) : setPickTwo(card);
  };

  // TODO: When the game is finished, Board currently controls navigation
  // and updates global score. Prefer pushing this decision up (callback)
  // so game logic and app navigation are less tightly coupled.
  useEffect(() => {
    if (moveToFinish === 8) {
      console.log("Finish");
      setGameScore({ moves: move });
      setLocation(VIEWS.Results);
    }
  }, [moveToFinish, setLocation, move, setGameScore]);

  useEffect(() => {
    if (location === VIEWS.Game && !hasInitializedBoard.current) {
      mixImages();
      hasInitializedBoard.current = true;
    }
  }, [location, mixImages]);

  return (
    <div className={classes.flexBlock}>
      <div className={classes.stats}>
        <div className={classes.moveCounter}>Moves: {move}</div>
        <div className={classes.move}>Score: {moveToFinish} / 8</div>
      </div>
      <div className={classes.boardGrid}>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            chooseCard={chooseCard}
            isOpen={card === pickOne || card === pickTwo || card.isMatched}
          />
        ))}
      </div>
    </div>
  );
};
