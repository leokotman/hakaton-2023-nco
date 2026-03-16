import React, { useState, useEffect, useContext } from 'react';
import classes from './Board.module.css';
import { IMAGES } from 'assets/images.js';
import SingleCard from './SingleCard';

import { VIEWS } from 'utils/constants.js';
import { AppContext } from 'utils/context';

export const Board = (props) => {
  // @Board.jsx (10-13)
  // TODO: Consider extracting game state into a dedicated hook or context
  // (e.g. useMemoryGame) and have Board receive props like onGameFinished.
  // That would separate domain logic (moves, matches, finish) from this UI.
  const { location, setLocation, setGameScore } = useContext(AppContext);
  const [cards, setCards] = useState([]);
  const [move, setMove] = useState(0);
  const [moveToFinish, setMoveToFinish] = useState(0);

  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);

  // TODO: Move this shuffle/mapping logic into a pure utility function
  // (e.g. mixImages(IMAGES)) so it can be tested independently of React.
  const mixImages = () => {
    const images = [...IMAGES, ...IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({ ...img, id: index, status: false }));

    setCards(images);
  };

  const chooseCard = (card) => {
    !pickOne ? setPickOne(card) : setPickTwo(card);
  };

  const reset = () => {
    setPickOne(null);
    setPickTwo(null);
    setMove((move) => move + 1);
  };

  // TODO: This effect encodes core game rules (matching, marking, move count).
  // Moving it into a custom hook would make the Board component much simpler.
  useEffect(() => {
    const bothCardsOpened = pickOne && pickTwo;

    if (!bothCardsOpened) {
      return;
    }
    if (pickOne.src === pickTwo.src) {
      setCards((cards) => {
        return cards.map((item) => {
          if (item.src === pickOne.src) {
            return { ...item, status: true };
          } else {
            return item;
          }
        });
      });
      reset();
      setMoveToFinish((move) => move + 1);
    } else {
      setTimeout(() => reset(), 500);
    }
  }, [pickOne, pickTwo]);

  // TODO: When the game is finished, Board currently controls navigation
  // and updates global score. Prefer pushing this decision up (callback)
  // so game logic and app navigation are less tightly coupled.
  useEffect(() => {
    if (moveToFinish === 8) {
      console.log('Finish');
      setGameScore({ moves: move });
      setLocation(VIEWS.Results);
    }
  }, [moveToFinish, setLocation, move, setGameScore]);

  // TODO: This effect implicitly starts a new game any time location === Game.
  // In a larger app, consider explicit "startGame" actions instead of location checks.
  useEffect(() => {
    if (location === VIEWS.Game) {
      mixImages();
    }
  }, [location]);

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
            isOpen={card === pickOne || card === pickTwo || card.status}
          />
        ))}
      </div>
    </div>
  );
};
