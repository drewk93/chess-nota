import {useState, useEffect} from 'react';
import { Chess } from 'chess.js';
import axios from 'axios';

const Input = () => {

    const [pgnInput, setPgnInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [winnerInput, setWinnerInput] = useState('')
    const [fenInput, setFenInput] = useState({});
    const [statusMessage, setStatusMessage] = useState('')

    const pgnChange = (event) => {
        setPgnInput(event.target.value);
    };

    const dateChange = (event) => {
        const enteredDate = event.target.value;
        const dateFormat = /^\d{4}\/\d{2}\/\d{2}$/; // YYYY/MM/DD format
        setDateInput(enteredDate);
        if (!enteredDate || (!dateFormat.test(enteredDate))) {
            setStatusMessage(enteredDate ? 'Date Format must be YYYY/MM/DD' : ''); // If empty, clear the message
        } else {
            setStatusMessage('');
        }
    };

    const winnerChange = (event) => {
        setWinnerInput(event.target.value)
    }
    
    const convertToFEN = () => {
        const chess = new Chess();
        const moves = pgnInput.split(/\d+\./).filter(Boolean).map(move => move.trim()); // Splitting moves
        const separatedMoves = moves.flatMap(move => move.split(/\s+/)); // Splitting moves by spaces
        const fenPositions = {};
    
        separatedMoves.forEach((move, index) => {
            chess.move(move);
            fenPositions[`${index + 1}`] = chess.fen();
        });
    
        setFenInput(fenPositions); // Update the state with FEN positions
        console.log(fenInput)
    };

    const postToLibrary = () => {
        console.log(dateInput);
        console.log(winnerInput);
    
        const domain = "http://localhost:3000";
        // Assuming you want to send the entire fenInput object
        axios.post(`${domain}/games`, {
            date: dateInput,
            pgn: pgnInput,
            fen: fenInput, // Entire fenInput object
            winner: winnerInput
        })
        .then(response => {
            console.log(response.data);
            setStatusMessage('Posted Successfully'); // Set status message on successful post
            setTimeout(() => {
                setStatusMessage(''); // Reset status message after 2.5 seconds
            }, 2500);
        })
        .catch(error => {
            console.error('Error:', error.response.data.message);
            setStatusMessage('Error Posting Game')
        });
    };

    return (
        <div id="input-container">
            <h1 id="input-header"> PGN to FEN Converter </h1>
             <div id="pgn-container">
                <label htmlFor="pgn-input" className="input-label" >PGN:</label>
                <input type="text" id="pgn-input" className="input-field" placeholder="pgn moves" value={pgnInput} onChange={pgnChange} />
            </div>
            <div id="date-winner-container">
                <label htmlFor="dateInput" className="input-label"><span class="required-field">*</span>Date:</label>
                <input type="text" id="dateInput" className="input-field" placeholder="yyyy/mm/dd" value={dateInput} onChange={dateChange}/>
                <label htmlFor="winner" className="input-label"><span class="required-field">*</span>Winning Color:</label>
                <select id="winner" className="input-field" value={winnerInput} onChange={winnerChange}>
                    <option value="">Select</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="draw">Draw</option>
                </select>
                <p id="status-msg">{statusMessage}</p>
                <button id="submit-btn" className="input-btn" onClick={convertToFEN}> CONVERT TO FEN</button>
                <button id="post-btn" className="input-btn" onClick={postToLibrary}> POST TO LIBRARY </button>
            </div>
            <div id="fenContainer">
            {Object.entries(fenInput).map(([move, fenString]) => (
                <p key={move} id="fenItem">{`Move ${move} : ${fenString}`}</p>
            ))}
            </div>
        </div>
    )
}

export default Input;