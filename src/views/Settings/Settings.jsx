import { useState } from 'react';

import classes from './Settings.module.css';
import { handleSaveUser } from '../../utils/dbFunctions';

export const Settings = (props) => {
  const { onClickStartGame } = props;
  const [userName, setUserName] = useState('');

  return (
    <div className={classes.settings}>
      Настройки (выбери уровень)
      <input
        type="text"
        placeholder="Ваше имя в игре"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={() => {
          onClickStartGame();
          handleSaveUser(userName);
        }}
      >
        Начать игру
      </button>
    </div>
  );
};
