import {useState, useEffect} from 'react'
import { Chess } from 'chess.js'

const Input = () => {

    const [pgnInput, setPgnInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [winnerInput, setWinnerInput] = useState('')
    const [fenInput, setFenInput] = useState({});

    const pgnChange = (event) => {
        setPgnInput(event.target.value);
    };

    const convertToFEN = () => {
        const chess = new Chess();
        chess.loadPgn(pgnInput)
        console.log(chess.fen())
    }
    


    return (
        <div id="input-container">
            <h1 id="input-header"> PGN to FEN Converter </h1>
             <div id="pgn-container">
                <label htmlFor="pgn-input" className="input-label" >PGN:</label>
                <input type="text" id="pgn-input" className="input-field" placeholder="pgn string" value={pgnInput} onChange={pgnChange} />
            </div>
            <div id="date-winner-container">
                <label htmlFor="dateInput" className="input-label">Date:</label>
                <input type="text" id="dateInput" className="input-field" placeholder="yyyy/mm/dd" />
                <label htmlFor="winner" className="input-label">Winning Color:</label>
                <select id="winner" className="input-field">
                    <option value="">Select</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="draw">Draw</option>
                </select>
                <button id="submit-btn" className="input-btn" onClick={convertToFEN}> SUBMIT</button>
                <button id="post-btn" className="input-btn"> POST </button>
            </div>
            <div id="fenContainer">
            </div>
        </div>
    )
}

export default Input;