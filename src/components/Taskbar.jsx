import TaskbarBtn from './TaskbarBtn'


const Taskbar = ({toggleHomeDisplay, toggleInputDisplay}) => {

    const handleHomeClick = () => {
        toggleHomeDisplay()
    }

    const handleGameClick = () => {
        toggleInputDisplay()
    }

    const handleLibraryClick = () => {
        console.log("Library button clicked")
    }

    return(
        <div id="taskbar">
            {/* <h1 id="taskbar-title"> CHESS NOTA </h1> */}
            <TaskbarBtn buttonText={"Home"} onClickHandler={handleHomeClick}/>
            <TaskbarBtn buttonText={"Submit Games"} onClickHandler={handleGameClick}/>
            <TaskbarBtn buttonText={"Library"} onClickHandler={handleLibraryClick}/>
        </div>
    )
}

export default Taskbar; 