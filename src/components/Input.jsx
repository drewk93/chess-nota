const Input = () => {
    return (
        <div id="input-container">
            <h1 id="input-header"> PGN to FEN Converter </h1>
             <div id="pgn-container">
                <label htmlFor="pgn-input" className="input-label">PGN:</label>
                <input type="text" id="pgn-input" className="input-field" placeholder="pgn string" />
                <button id="submit-btn"> SUBMIT</button>
            </div>
            <div id="date-winner-container">
                <label htmlFor="dateInput" className="input-label">Date:</label>
                <input type="text" id="dateInput" className="input-field" placeholder="yyyy/mm/dd" />
                <label htmlFor="winner" className="input-label">Winning Color:</label>
                <input type="text" id="winner" className="input-field" placeholder="color" />
            </div>
            <div id="fenContainer">              
            </div>
        </div>
    )
}

export default Input;