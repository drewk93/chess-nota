import { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games'

const Library = ({toggleGameDisplay}) => {
    const [games, setGames] = useState([]);

    const domain = 'https://chess-nota.onrender.com';

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const res = await axios.get(`${domain}/games`);
                setGames(res.data);
                console.log(res.data)
            } catch (error) {
                // Handle fetch error here
                console.error('Error fetching library:', error);
            }
        };

        fetchLibrary();
    }, []);

    const deleteGame = async (game_id) => {
        try {
          await axios.delete(`${domain}/games/${game_id}`);
          // Filter out the deleted game from the current state
          const updatedGames = games.filter((game) => game.game_id !== game_id);
          setGames(updatedGames);
        } catch (error) {
          console.error('Error deleting game:', error);
        }
      };
    



    return (
        <div id="library-container">
            <h1 id="library-header">GAME LIBRARY</h1>
            <div id="library-display">
                {games.map((game) => (
                    <Games key={game.game_id} game={game} toggleGameDisplay={toggleGameDisplay} deleteGame={deleteGame} />
                ))}
            </div>
        </div>
    );
};

export default Library;