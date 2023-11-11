import classes from './GameTitle.module.css';
import star from '../../assets/images/star.svg'

function GameTitle(props) {
  return (
    <div>
      <h1 className={classes.title}>
        <img src={star} alt="star" className={`${classes.star} ${classes.smallStar}`}/>
        <img src={star} alt="star" className={`${classes.star} ${classes.bigStar}`}/>
        {/* <svg className={`${classes.star} ${classes.smallStar}`} xmlns="http://www.w3.org/2000/svg" width="128" height="170" viewBox="0 0 128 170" fill="none">
          <path d="M0.612572 84.8528C0.612572 84.8528 20.9411 77.7645 38.8528 59.8528C56.7646 41.9411 63.8528 -2.90871e-05 63.8528 -2.90871e-05C63.8528 -2.90871e-05 70.9411 41.9411 88.8528 59.8528C106.765 77.7645 127.613 84.8528 127.613 84.8528C127.613 84.8528 106.765 91.941 88.8528 109.853C70.9411 127.765 63.8528 169.706 63.8528 169.706C63.8528 169.706 56.7646 127.765 38.8528 109.853C20.9411 91.941 0.612572 84.8528 0.612572 84.8528Z" fill="#FFC212"/>
        </svg>
        <svg  xmlns="http://www.w3.org/2000/svg" width="128" height="170" viewBox="0 0 128 170" fill="none">
          <path d="M0.612572 84.8528C0.612572 84.8528 20.9411 77.7645 38.8528 59.8528C56.7646 41.9411 63.8528 -2.90871e-05 63.8528 -2.90871e-05C63.8528 -2.90871e-05 70.9411 41.9411 88.8528 59.8528C106.765 77.7645 127.613 84.8528 127.613 84.8528C127.613 84.8528 106.765 91.941 88.8528 109.853C70.9411 127.765 63.8528 169.706 63.8528 169.706C63.8528 169.706 56.7646 127.765 38.8528 109.853C20.9411 91.941 0.612572 84.8528 0.612572 84.8528Z" fill="#FFC212"/>
        </svg> */}
        Найди пару
      </h1>
    </div>
  );
}

export default GameTitle;