// @images.js (1-49)
// TODO: Keep this as the single source of truth for card assets.
// If you add difficulty levels or themes, consider exposing sets
// like EASY_IMAGES / HARD_IMAGES instead of hardcoding everywhere.
import catImg from './images/cat.svg';
import flowerImg from './images/flower.svg';
import handImg from './images/hand.svg';
import homeImg from './images/home.svg';
import hugImg from './images/hug.svg';
import peopleImg from './images/people.svg';
import treeImg from './images/tree.svg';
import heartImg from './images/heart.svg';

import backImg from 'assets/images/question.svg';
import star from 'assets/images/star.svg';
import backgroundHouse from 'assets/images/backgrounds-house.png';

const IMAGES = [
  {
    src: catImg,
    alt: 'Cat',
  },
  {
    src: flowerImg,
    alt: 'Children',
  },
  {
    src: handImg,
    alt: 'Granny and child',
  },
  {
    src: homeImg,
    alt: 'A kid ready to school',
  },
  {
    src: hugImg,
    alt: 'A boy on a skateboard',
  },
  {
    src: peopleImg,
    alt: 'Cubes',
  },
  {
    src: treeImg,
    alt: 'A dog',
  },
  {
    src: heartImg,
    alt: 'A boy is playing',
  },
];

export { IMAGES, backImg, star, backgroundHouse };
