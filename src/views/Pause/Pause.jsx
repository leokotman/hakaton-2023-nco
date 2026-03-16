import classes from './Pause.module.css';

export const Pause = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      <div className={classes.gradient}>
        <div className={classes.modalContainer}>
          <h1 className={classes.title}>Find a pair</h1>
          <fieldset className={classes.modal}>
            <legend className={classes.legend}>PAUSE</legend>
            <p className={classes.question}>Return to game</p>
            <button className={classes.playBtn} onClick={onClickPlay}>
              <div className={classes.playIcon}>
                <div className={classes.play}></div>
              </div>
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
