import { createContext, useState } from 'react';
import './App.css';
import { Home, Settings, Game, Results } from './views';
import { PAGES } from './utils/constants';

export const LocationContext = createContext(null);

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
      <LocationContext.Provider value={{ location, setLocation }}>
        {isHomeOpen && (
          <Home onClickPlay={() => goToNextPage(PAGES.Settings)} />
        )}
        {isSettingsOpen && (
          <Settings onClickStartGame={() => goToNextPage(PAGES.Game)} />
        )}
        {isGameOpen && (
          <Game
            onRestartGame={() => goToNextPage(PAGES.Home)}
            onFinishGame={() => goToNextPage(PAGES.Results)}
            location={location}
          />
        )}
        {isResultsOpen && (
          <Results onRestartGame={() => goToNextPage(PAGES.Home)} />
        )}
      </LocationContext.Provider>
    </div>
  );
}

export default App;
