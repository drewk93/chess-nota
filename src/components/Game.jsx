import { useState, useEffect } from 'react';
import axios from 'axios';

const Game = ({ game_id, toggleInputDisplay}) => {
    const [game, setGame] = useState({});
    const [formattedDate, setFormattedDate] = useState('');
    const [fen, setFen] = useState({})

    const handleInputDisplay = () => {
        toggleInputDisplay(game.game_id)
    }

    const domain = 'https://chess-nota.onrender.com/';

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const res = await axios.get(`${domain}/games/${game_id}`);
                setGame(res.data[0]);
                const date = new Date(res.data[0].date);
                const formattedDate = date.toISOString().split('T')[0];
                setFormattedDate(formattedDate);
                setFen(res.data[0].fen)

            } catch (error) {
                console.error('Error fetching library:', error);
            }
        };
        fetchLibrary();
    }, [game_id, domain]);

    return (
        <div id="game-container">
            <div id="game-info">
                <h2>Game ID: {game.game_id}</h2>
                <h2>Date: {formattedDate} </h2>
                <h2>Winner: {game.winner ? game.winner.toUpperCase() : ''}</h2>
                <button className="list-btn" onClick={handleInputDisplay}>EDIT GAME</button>
                
            </div>
            <h1>PGN </h1>
            <div id="pgn-display">
                <p>{game.pgn}</p>
            </div>
            <h1>FEN</h1>
            <div id="fen-display">
                {Object.keys(fen).map((key, index) => (
                    <p key={key} id="fenItem"><b> Move {index + 1}:</b> {fen[key]}</p>
                ))}
            </div>
        </div>
    );
};

export default Game;
