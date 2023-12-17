import React, { useState } from 'react';
import { Chess } from 'chess.js';
import './App.css';
import Taskbar from './components/Taskbar';
import Home from './components/Home';
import Input from './components/Input';
import Library from './components/Library';
import Game from './components/Game';

function App() {
  const [displayInput, setDisplayInput] = useState(false);
  const [displayLibrary, setDisplayLibrary] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);
  const [game_id, setGameId] = useState(null);

  const toggleHomeDisplay = () => {
    setDisplayInput(false);
    setDisplayLibrary(false);
    setDisplayGame(false);
  };

  const toggleInputDisplay = () => {
    setDisplayInput(true);
    setDisplayLibrary(false);
    setDisplayGame(false);
  };

  const toggleLibraryDisplay = () => {
    setDisplayLibrary(true);
    setDisplayInput(false);
    setDisplayGame(false);
  };

  const toggleGameDisplay = (game_id) => {
    setGameId(game_id)
    setDisplayGame(true);
    setDisplayLibrary(false);
  }

  return (
    <div id={"app"}>
      <Taskbar
        toggleHomeDisplay={toggleHomeDisplay}
        toggleInputDisplay={toggleInputDisplay}
        toggleLibraryDisplay={toggleLibraryDisplay}
      />
      {!displayInput && !displayLibrary && !displayGame && <Home />}
      {displayInput && <Input />}
      {displayLibrary && <Library toggleGameDisplay={toggleGameDisplay}/>}
      {displayGame && <Game game_id={game_id} />}
    </div>
  );
}

export default App;
