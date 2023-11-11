
import React, { useState } from 'react';
import classes from './style.css';
import { IMAGES } from '../../assets/images';
import SingleCard from './SingleCard';

const GameBoard = (props) => {

    const [cards, setCard] = useState([]);

    const mixImages = () => {
        const images = [...IMAGES, ...IMAGES]
          .sort(() => Math.random() - 0.5)
          .map((img) => ({ ...img, id: Math.random()}));
        
        setCard(images);
    }


    return (
        <div>
            <button onClick={mixImages}>Start</button>
            <div className={classes.boardGrid}>
                {cards.map(card => (
                    <SingleCard key={card.id} card={card}/>
                ))
                }
            </div>
        </div>
    );
}

export default GameBoard;
