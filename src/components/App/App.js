import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

import "./App.css";
import "../TaskForm/TaskForm.css";
import "../icons.css";
import Header from "../Header/Header";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DateSelect from "../DateSelect/DateSelect";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const [showForm, setShowForm] = useState(false);
  const displayForm = () => {
    setShowForm(true);
  };

  const [addTaskBtn, setaddTaskBtn] = useState(false);
  const addTaskBtnPosition = () => {
    if (tasks.length == 0) {
      return "plus default-plus";
    }

    if (addTaskBtn) {
      return "plus added-plus";
    } else if (showForm) {
      return "form-plus";
    } else {
      return "plus default-plus";
    }
  };

  const [showTaskBtns, setShowTaskBtns] = useState(false);
  const displayTaskBtns = () => {
    setShowTaskBtns(!showTaskBtns);
  };

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    const updatedTasks = [...tasks].filter((task) => task.id != id);
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = [...tasks].map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className={showForm ? "background-blur" : ""}>
        <Header />
        <DateSelect />
      </div>
      {showForm && (
        <TaskForm
          addTask={addTask}
          showForm={showForm}
          setShowForm={setShowForm}
          setaddTaskBtn={setaddTaskBtn}
        />
      )}
      <div className={showForm ? "background-blur" : ""}>
        <TaskContainer
          task={task}
          tasks={tasks}
          displayTaskBtns={displayTaskBtns}
          showTaskBtns={showTaskBtns}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
        <IoAddCircleOutline
          className={addTaskBtnPosition()}
          onClick={displayForm}
        />
      </div>
    </>
  );
}

export default App;
