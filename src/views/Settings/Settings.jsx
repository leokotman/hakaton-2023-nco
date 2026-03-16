// remove unused component
// @Settings.jsx (1-12)
// TODO: Either integrate this Settings screen into the navigation flow
// (e.g. go from Home -> Settings -> Game with difficulty options),
// or remove/move it out of main views to avoid carrying unused UI.
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
