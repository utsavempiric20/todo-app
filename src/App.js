import "./App.css";
import Tasks from "./components/Tasks";
import AppTitle from "./components/AppTitle";
import { useEffect, useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const loadData = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(loadData);
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const [updateTask, setUpdateTask] = useState(null);
  const handleClose = () => setShow(false);

  const addTask = (event) => {
    event.preventDefault();
    if (updateTask) {
      const updatedItems = tasks.map((item) =>
        item.id === updateTask.id ? { ...item, taskMessage: userInput } : item
      );
      setTasks(updatedItems);
      setUserInput("");
      setUpdateTask(null);
    } else {
      const date = new Date();
      let taskData = { id: date, taskMessage: userInput, isChecked: false };
      setTasks([...tasks, taskData]);
      setUserInput("");
    }
  };

  const handleUpdate = (tasks) => {
    handleOpen(true);
    setUpdateTask(tasks);
    setUserInput(tasks.taskMessage);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App container">
      <AppTitle
        userInput={userInput}
        setUserInput={setUserInput}
        addTask={addTask}
        showModel={show}
        handleOpen={handleOpen}
        handleClose={handleClose}
        updateTask={updateTask}
      />
      <Tasks tasks={tasks} setTasks={setTasks} handleUpdate={handleUpdate} />
    </div>
  );
}

export default App;
