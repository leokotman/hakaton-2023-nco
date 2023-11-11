import React from 'react';
import classes from './style.css';

function SingleCard({ card }) {
    return (
        <div>
            <div className={classes.card}>
                <img className={classes.card} src={card.src} alt={card.alt} />
                <img className={classes.none} src="/img/img-0.jpg" alt="cards back" />
            </div>
        </div>
    );
}

export default SingleCard;