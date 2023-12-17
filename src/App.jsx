import { useState } from 'react'
import { Chess } from 'chess.js'
import './App.css'
import Taskbar from './components/Taskbar'
import Home from './components/Home';
import Input from './components/Input';
import Library from './components/Library'

function App() {
  const [displayInput, setDisplayInput] = useState(false);
  const [displayLibrary, setDisplayLibrary] = useState(false);

  const toggleHomeDisplay = () => {
    setDisplayInput(false);
    setDisplayLibrary(false);
  }

  const toggleInputDisplay = () => {
    setDisplayInput(true);
    setDisplayLibrary(false);
  };

  const toggleLibraryDisplay = () => {
    setDisplayLibrary(true);
    setDisplayInput(false);
  }

  

  return (
    <div id={"app"}>
      <Taskbar toggleHomeDisplay={toggleHomeDisplay} toggleInputDisplay={toggleInputDisplay} toggleLibraryDisplay={toggleLibraryDisplay} />
      {!displayInput && !displayLibrary && <Home />}
      {displayInput && <Input />}
      {displayLibrary && <Library />}
    </div>
  )
}

export default App
