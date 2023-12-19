

const Games = ({game, toggleGameDisplay, deleteGame}) => {

    const date = new Date(game.date);
    const formattedDate = date.toISOString().split('T')[0]; // Extracting YYYY-MM-DD

    const handleSelectGame = () => {
        toggleGameDisplay(game.game_id);
    };

    const handleDeleteGame = () => {
        deleteGame(game.game_id)
    }

    return (
        <h2 id="game" className="game-info" >
            <button id="select-btn" className="list-btn" onClick={handleSelectGame}>SELECT</button>
            <span id="date">Date: {formattedDate}</span>
            <span id="winner">Winner: {game.winner ? game.winner.toUpperCase() : ''}</span>
            <button id="delete-btn" className="list-btn" onClick={handleDeleteGame}> DELETE </button>
        </h2>
    );
}

export default Games