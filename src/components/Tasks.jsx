const Tasks = ({ tasks, setTasks, handleUpdate }) => {

    const handleRemove = (id) => {
        const deletedItems = tasks.filter((element) => {
            return id !== element.id;
        });
        setTasks(deletedItems);
        localStorage.setItem("tasks", JSON.stringify(deletedItems));
    }

    const handleChecked = (item) => {
        const updatedItems = tasks.filter((element) => {
            if (element.id === item.id) {
                item.isChecked = !item.isChecked
                return element;
            }
            return element;
        })
        setTasks(updatedItems);
        localStorage.setItem("tasks", JSON.stringify(updatedItems));
    }
    return (
        <>
            {
                tasks?.map((item, index) => {
                    return (
                        <div className="row align-items-start" style={{ margin: "10px 0px" }} key={item.id}>
                            <div className="col-8" style={{ textAlign: "left" }}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={item.isChecked} id="flexCheckDefault" defaultChecked={item.isChecked} onClick={() => handleChecked(item)} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{ textDecoration: item.isChecked ? "line-through" : "none" }}>
                                        {item.taskMessage}
                                    </label>
                                </div>
                            </div>
                            {/* <div className="col-7" style={{ textAlign: "left" }}>
                                {item.taskMessage}
                            </div> */}
                            <div className="col-4">
                                <button type="button" id={item.id} className="btn btn-success" style={{ marginRight: "5px" }} onClick={() => handleUpdate(item)}>
                                    update
                                </button>
                                <button type="button" id={item.id} className="btn btn-danger" onClick={() => handleRemove(item.id)}>
                                    delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </>
    );
}

export default Tasks;