import { IMAGES } from "assets/images";
import { useEffect, useState } from "react";

export const useBoardGame = () => {

    const [cards, setCards] = useState([]);
      const [move, setMove] = useState(0);
      const [moveToFinish, setMoveToFinish] = useState(0);
    
      const [pickOne, setPickOne] = useState(null);
      const [pickTwo, setPickTwo] = useState(null);
    
      const shuffleImages = (images) =>  [...images, ...images].sort(() => Math.random() - 0.5)
      .map((img, index) => ({ ...img, id: index, isMatched: false }));
      
      const mixImages = () => {
        setCards(shuffleImages(IMAGES));
      };

      const clearChosenCards = () => {
        setPickOne(null);
        setPickTwo(null);
      }

      const resetBoard = () => {
        clearChosenCards();
        setMove((move) => move + 1);
      };

      useEffect(() => {
        const isBothCardsOpen = pickOne && pickTwo;
    
        if (!isBothCardsOpen) {
          return;
        }
        if (pickOne.src === pickTwo.src) {
          setCards((cards) => {
            return cards.map((item) => {
              if (item.src === pickOne.src) {
                return { ...item, isMatched: true };
              } else {
                return item;
              }
            });
          });
          resetBoard();
          setMoveToFinish((move) => move + 1);
        } else {
          setTimeout(() => resetBoard(), 500);
        }
      }, [pickOne, pickTwo]);

      return { cards, move, moveToFinish, pickOne, pickTwo, setPickOne, setPickTwo, mixImages };
}