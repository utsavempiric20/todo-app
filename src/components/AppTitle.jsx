import Popup from "./Popup";

const AppTitle = ({ userInput, setUserInput, addTask, showModel, handleOpen, handleClose, updateTask }) => {

    return (
        <>
            <div className="row">
                <div className="col-md-4">.<h1>Todo List</h1></div>
                <div className="col-md-4 offset-md-4">
                    <Popup
                        userInput={userInput} setUserInput={setUserInput} addTask={addTask}
                        show={showModel} handleOpen={handleOpen} handleClose={handleClose} updateTask={updateTask}
                    />
                </div>
            </div>
        </>

    );
}

export default AppTitle;