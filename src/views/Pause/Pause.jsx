import classes from './Pause.module.css';

export const Pause = (props) => {
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      <div className={classes.gradient}>
        <div className={classes.modalContainer}>
          <h1 className={classes.title}>Find a pair</h1>
          {/* @Pause.jsx (11-18)
              TODO: Reuse the same button component and layout pattern
              as Home/Results so all "Play" actions look and behave
              consistently across the app. */}
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
