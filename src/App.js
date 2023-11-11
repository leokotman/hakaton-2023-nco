import { useState } from 'react';
import './App.css';
import { Home, Settings, Game } from './views';

function App() {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [isGameOpen, setIsGameOpen] = useState(true);

  return (
    <div className="App">
      {isHomeOpen && <Home />}
      {isSettingsOpen && <Settings />}
      {isGameOpen && <Game />}
    </div>
  );
}

export default App;
