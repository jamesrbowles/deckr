import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoAddCircleOutline } from "react-icons/io5";

import "../TaskForm/TaskForm.css";
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
    setShowForm(true);
  };

  const addTaskBtnPosition = () => {
    if (addTaskBtn) {
      return "added-plus";
    } else if (showForm) {
      return "form-plus";
    } else {
      return "default-plus";
    }
  };

  return (
    <>
      <div className={showForm ? "background-blur" : ""}>
        {<Header />}
        <DateSelect />
      </div>
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
      <div className={showForm ? "background-blur" : ""}>
        <TaskContainer task={task} tasks={tasks} />
        <IoAddCircleOutline
          className={addTaskBtnPosition()}
          onClick={displayForm}
        />
      </div>
    </>
  );
}

export default App;

/* Ternary operator for plus icon
`${addTaskBtn || showForm ? "added-plus" : "default-plus"}` */
