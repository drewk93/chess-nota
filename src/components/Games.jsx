const Games = ({game}) => {

    const date = new Date(game.date);
    const formattedDate = date.toISOString().split('T')[0]; // Extracting YYYY-MM-DD

    const selectGame = () => {
        console.log()
    }

    return (
        <h2 id="game" className="game-info" >
            {game.game_id}) &nbsp;
            <span id="date">Date: {formattedDate}</span>
            <span id="winner">Winner: {game.winner}</span>
            <button id="delete-btn" onClick={selectGame}> DELETE </button>
        </h2>
    );
}

export default Games