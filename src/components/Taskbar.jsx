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

            <h1> CHESS N<img src={chessKnightImage} alt="Icon" />TA</h1>
            <TaskbarBtn buttonText={"Home"} onClickHandler={handleHomeClick}/>
            <TaskbarBtn buttonText={"PGN to FEN"} onClickHandler={handleGameClick}/>
            <TaskbarBtn buttonText={"Library"} onClickHandler={handleLibraryClick}/>
        </div>
    )
}

export default Taskbar; 