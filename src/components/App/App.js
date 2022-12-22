import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoAddCircleOutline } from "react-icons/io5";

import "../icons.css";
import Header from "../Header/Header";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import TaskCard from "../TaskCard/TaskCard";
import DateSelect from "../DateSelect/DateSelect";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [addTaskBtn, setaddTaskBtn] = useState(false);

  const displayForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Header />
      <DateSelect />

      {showForm && (
        <TaskForm
          task={task}
          tasks={tasks}
          setTask={setTask}
          setTasks={setTasks}
          displayForm={displayForm}
          showForm={showForm}
          setShowForm={setShowForm}
          setaddTaskBtn={setaddTaskBtn}
        />
      )}
      <TaskContainer task={task} tasks={tasks} />
      <IoAddCircleOutline
        className={`${addTaskBtn ? "test" : "plus-icon"}`}
        onClick={displayForm}
      />
    </>
  );
}

export default App;
