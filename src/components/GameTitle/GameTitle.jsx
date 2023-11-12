import { star } from 'assets/images';
import classes from './GameTitle.module.css';

export const GameTitle = (props) => {
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
        Найди пару
      </h1>
    </div>
  );
};
