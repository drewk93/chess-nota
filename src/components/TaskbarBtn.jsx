const TaskbarBtn = ({buttonText, onClickHandler}) => {
    return (
        <button className="taskbar-btn" onClick={onClickHandler}>
            <h1>{buttonText}</h1>
        </button>
    )
}

export default TaskbarBtn