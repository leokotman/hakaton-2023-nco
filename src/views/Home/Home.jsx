import startImg from '../../assets/images/start.png';
import GameTitle from '../../components/GameTitle/GameTitle';
import classes from './Home.module.css';

export const Home = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      <div className={classes.gradient}></div>
      <img src={startImg} className={classes.startImg} alt="start" />
      <div className={classes.startContainer}>
        <div className={classes.startBox}>
          <GameTitle />
          <div className={classes.start}>Начать игру</div>
        </div>
        <button className={classes.playBtn} onClick={onClickPlay}>
          <div className={classes.playIcon}>
              <div className={classes.play}></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
