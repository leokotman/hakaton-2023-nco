import classes from './GameTitle.module.css';
import star from '../../assets/images/star.svg'

function GameTitle(props) {
  return (
    <div>
      <h1 className={classes.title}>
        <img src={star} alt="star" className={`${classes.star} ${classes.smallStar}`}/>
        <img src={star} alt="star" className={`${classes.star} ${classes.bigStar}`}/>
        Найди пару
      </h1>
    </div>
  );
}

export default GameTitle;