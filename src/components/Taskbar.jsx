import TaskbarBtn from './TaskbarBtn'


const Taskbar = ({toggleInputDisplay}) => {

    const handleGameClick = () => {
        toggleInputDisplay()
    }

    const handleLibraryClick = () => {
        console.log("Library button clicked")
    }

    return(
        <div id="taskbar">
            <TaskbarBtn buttonText={"Submit Games"} onClickHandler={handleGameClick}/>
            <h1 id="taskbar-title"> CHESS NOTA </h1>
            <TaskbarBtn buttonText={"Library"} onClickHandler={handleLibraryClick}/>
        </div>
    )
}

export default Taskbar; 