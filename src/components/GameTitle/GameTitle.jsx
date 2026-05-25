import { star } from 'assets/images';
import classes from './GameTitle.module.css';

export const GameTitle = (props) => {
  // @GameTitle.jsx (4-21)
  // TODO: This is a good shared title; if you add more games or screens,
  // keep this generic and drive text via props instead of hardcoding.
  return (
    <div>
      <h1 className={classes.title}>
        <img
          src={star}
          alt="star"
          className={`${classes.star} ${classes.smallStar}`}
        />
        <img
          src={star}
          alt="star"
          className={`${classes.star} ${classes.bigStar}`}
        />
        Find a pair
      </h1>
    </div>
  );
};
