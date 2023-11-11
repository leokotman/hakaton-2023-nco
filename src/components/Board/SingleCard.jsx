import React, { useEffect } from 'react';
import backImg from '../../assets/img/img-0.jpg';
import classes from './Board.module.css';

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
                  src={backImg}
                  onClick={clickOnCard}
                  alt="cards back" />
            </div>
        </div>
    );
}

export default SingleCard;