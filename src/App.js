import { useState } from 'react';
import './App.css';
import { VIEWS } from './utils/constants';
import { AppContext } from 'utils/context';

function App() {
  const [location, setLocation] = useState(VIEWS.Home);
  const [gameScore, setGameScore] = useState({
    points: 0,
    moves: 0,
  });
  const isHomeOpen = location === VIEWS.Home;
  const isSettingsOpen = location === VIEWS.Settings;
  const isGameOpen = location === VIEWS.Game;
  const isResultsOpen = location === VIEWS.Results;

  const goToNextPage = (viewToOpen) => {
    setLocation(viewToOpen);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{ location, setLocation, gameScore, setGameScore }}
      >
        {isHomeOpen && (
          <Home onClickPlay={() => goToNextPage(VIEWS.Settings)} />
        )}
        {isSettingsOpen && (
          <Settings onClickStartGame={() => goToNextPage(VIEWS.Game)} />
        )}
        {isGameOpen && (
          <Game
            onRestartGame={() => goToNextPage(VIEWS.Home)}
          />
        )}
        {isResultsOpen && (
          <Results onRestartGame={() => goToNextPage(VIEWS.Home)} />
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
