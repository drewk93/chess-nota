import { useState, useEffect } from 'react';
import axios from 'axios';

const Game = ({ game_id }) => {
    const [game, setGame] = useState({});
    const [formattedDate, setFormattedDate] = useState('');

    const domain = 'http://localhost:3000';

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const res = await axios.get(`${domain}/games/${game_id}`);
                setGame(res.data[0]);
                const date = new Date(res.data[0].date);
                const formattedDate = date.toISOString().split('T')[0];
                const fenEntries = Object.entries(game.fen);
                setFormattedDate(formattedDate);

            } catch (error) {
                console.error('Error fetching library:', error);
            }
        };
        fetchLibrary();
    }, [game_id, domain]);

    return (
        <div id="game-container">
            <div id="game-info">
                <h2>ID: {game.game_id}</h2>
                <h2>Date: {formattedDate} </h2>
                <h2>Winner: {game.winner}</h2>
            </div>
            <div id="pgn-display">
                <p>{game.pgn}</p>
            </div>
            <div id="fen-display">
                {/* <p>{game.fen}</p> */}
            </div>
        </div>
    );
};

export default Game;
