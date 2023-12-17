import { useState } from 'react'
import { Chess } from 'chess.js'
import './App.css'
import Taskbar from './components/Taskbar'
import Home from './components/Home';
import Input from './components/Input';

function App() {
  const [displayInput, setDisplayInput] = useState(false);
  const [displayLibrary, setDisplayLibrary] = useState(false);

  const toggleInputDisplay = () => {
    setDisplayInput(true);
  };

  

  return (
    <div id={"app"}>
      <Taskbar toggleInputDisplay={toggleInputDisplay} />
      {displayInput ? <Input /> : <Home />}
    </div>
  )
}

export default App
