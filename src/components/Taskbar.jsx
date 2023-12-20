import TaskbarBtn from './TaskbarBtn'
import chessKnightImage from '../img/chess-knight.png';

const Taskbar = ({toggleHomeDisplay, toggleInputDisplay, toggleLibraryDisplay}) => {

    const handleHomeClick = () => {
        toggleHomeDisplay()
    }

    const handleGameClick = () => {
        toggleInputDisplay()
    }

    const handleLibraryClick = () => {
        toggleLibraryDisplay();
    }

    return(
        <div id="taskbar">
            <div className="taskbar-title"> {/* Fixed: className */}
                <h1> CHESS N<img src={chessKnightImage} alt="Icon" />TA</h1>
                <p id="chess-js"><em>Powered by</em> <b>Chess.JS</b></p>
            </div>
            
            <TaskbarBtn buttonText={"Home"} onClickHandler={handleHomeClick}/>
            <TaskbarBtn buttonText={"PGN to FEN"} onClickHandler={handleGameClick}/>
            <TaskbarBtn buttonText={"Library"} onClickHandler={handleLibraryClick}/>
        </div>
    )
}

export default Taskbar; 