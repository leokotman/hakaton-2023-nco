import React, { useEffect } from 'react';
import classes from './GameBoard.module.css';

function SingleCard({ card, chooseCard, isOpen }) {

    useEffect(() => {
        
    }, [isOpen]);

    const clickOnCard = () => {
        chooseCard(card)
    }

    return (
        <div>
            <div>
                <img className={isOpen ? `${classes.card} ${classes.open}` : `${classes.card} ${classes.none}`} src={card.src} alt={card.alt} />
                <img
                  className={isOpen ? classes.none : classes.back}
                  src="/img/img-0.jpg"
                  onClick={clickOnCard}
                  alt="cards back" />
            </div>
        </div>
    );
}

export default SingleCard;