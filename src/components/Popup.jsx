import { Modal } from 'react-bootstrap';

const Popup = ({ userInput, setUserInput, addTask, show, handleOpen, handleClose, updateTask }) => {

    return (
        <>
            <button type="button" className="btn btn-primary" style={{ marginTop: "25px" }} onClick={handleOpen}>Add Task</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{updateTask ? "Update" : "Add"} Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addTask}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Task</label>
                            <input className="form-control" id="exampleFormControlTextarea1" type="text" placeholder='Add task' value={userInput} onChange={e => setUserInput(e.target.value)}></input>
                        </div>
                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                Close
                            </button>
                            <button type="submit" className="btn btn-primary" onClick={handleClose}>
                                {updateTask ? "Update" : "Add"}
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

        </>

    );
}

export default Popup;