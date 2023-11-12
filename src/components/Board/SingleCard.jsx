import React, { useEffect } from 'react';

import classes from './Board.module.css';
import { backImg } from 'assets/images';

function SingleCard({ card, chooseCard, isOpen }) {
  useEffect(() => {}, [isOpen]);

  const clickOnCard = () => {
    chooseCard(card);
  };

  return (
    <div>
      <img
        className={
          isOpen
            ? `${classes.card} ${classes.open}`
            : `${classes.card} ${classes.none}`
        }
        src={card.src}
        alt={card.alt}
      />
      <img
        className={isOpen ? classes.none : classes.back}
        src={backImg}
        onClick={clickOnCard}
        alt="cards back"
      />
    </div>
  );
}

export default SingleCard;
