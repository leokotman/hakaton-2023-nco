
import React, { useState, useEffect } from 'react';
import classes from './GameBoard.module.css';
import { IMAGES } from '../../assets/images';
import SingleCard from './SingleCard';

const GameBoard = (props) => {

    const [cards, setCards] = useState([]);
    const [live, setLive] = useState(20);
    const [moveToFinish, setMoveToFinish] = useState(0);

    const [pickOne, setPickOne] = useState(null);
    const [pickTwo, setPickTwo] = useState(null);

    const mixImages = () => {
        const images = [...IMAGES, ...IMAGES]
          .sort(() => Math.random() - 0.5)
          .map((img, index) => ({ ...img, id: index, status: false}));
        
        setCards(images);
    }

    const chooseCard = (card) => {
        console.log('card:', card);
        !pickOne ? setPickOne(card) : setPickTwo(card);
    }
    
    const reset = () => {
        setPickOne(null);
        setPickTwo(null);
        setLive(live => live - 1);
    }

    useEffect(() => {
        if (pickOne && pickTwo) {
            if (pickOne.src === pickTwo.src) {
                setCards(cards => {
                    return cards.map(item => {
                        if (item.src === pickOne.src) {
                            return {...item, status: true}
                        } else {
                            return item
                        }
                    })
                })
                reset();
                setMoveToFinish(move => move + 1);
            } else {
                setTimeout(() => reset(), 500);
            }
            
        }
    }, [pickOne, pickTwo]);

    useEffect(() => {
        if (moveToFinish === 8) {
            console.log('Finish')
        }
    }, [moveToFinish]);

    return (
        <div>
            <button onClick={mixImages}>Start</button>
            <div className={classes.liveCounter}>Live: {live}</div>
            <div className={classes.move}>Cards to finish : {moveToFinish} / 8</div>
            <div className={classes.boardGrid}>
                
                {cards.map(card => (
                    <SingleCard
                      key={card.id}
                      card={card}
                      chooseCard={chooseCard}
                      isOpen={card === pickOne || card === pickTwo || card.status}
                    />
                ))
                }
            </div>
            <button>Restart</button>
        </div>
    );
}

export default GameBoard;
