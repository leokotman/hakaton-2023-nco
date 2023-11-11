import { useState } from 'react';
import './App.css';
import { Home, Settings, Game, Results } from './views';
import { PAGES } from './utils/constants';

function App() {
  const [location, setLocation] = useState(PAGES.Home);
  const isHomeOpen = location === PAGES.Home;
  const isSettingsOpen = location === PAGES.Settings;
  const isGameOpen = location === PAGES.Game;
  const isResultsOpen = location === PAGES.Results;

  const goToNextPage = (viewToOpen) => {
    setLocation(viewToOpen);
  };

  return (
    <div className="App">
      {isHomeOpen && <Home onClickPlay={() => goToNextPage(PAGES.Settings)} />}
      {isSettingsOpen && (
        <Settings onClickStartGame={() => goToNextPage(PAGES.Game)} />
      )}
      {isGameOpen && (
        <Game
          onRestartGame={() => goToNextPage(PAGES.Home)}
          onFinishGame={() => goToNextPage(PAGES.Results)}
        />
      )}
      {isResultsOpen && (
        <Results onRestartGame={() => goToNextPage(PAGES.Home)} />
      )}
    </div>
  );
}

export default App;
