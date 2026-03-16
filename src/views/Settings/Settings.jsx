import classes from './Settings.module.css';

export const Settings = (props) => {
  const { onClickStartGame } = props;
  return (
    <div className={classes.settings}>
      Settings (choose a level)
      <button onClick={onClickStartGame}>Start game</button>
    </div>
  );
};
