import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

// custom hooks
import useLocalStorage from "../../hooks/useLocalStorage";

// CSS
import "./App.css";
import "../TaskForm/TaskForm.css";
import "../icons.css";

// components
import Header from "../Header/Header";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DateSelect from "../DateSelect/DateSelect";
import EditForm from "../TaskForm/EditForm";

function App() {
  const [tasks, setTasks] = useLocalStorage("deckr.tasks", []);
  const [task, setTask] = useState("");

  /* Add a new task form display and close */
  const [showForm, setShowForm] = useState(false);
  const displayForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  /*   Add task button positioning */
  const [addTaskBtn, setaddTaskBtn] = useState(false);
  const addTaskBtnPosition = () => {
    if (tasks.length == 0) {
      return "plus default-plus";
    } else {
      return "plus added-plus";
    }
  };

  /*   Task buttons and their functionality */
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

  const [completed, setCompleted] = useState(false);
  const completeTask = (id) => {
    let updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setCompleted(!completed);

    updatedTasks.forEach((task, i) => {
      if (task.completed) {
        updatedTasks.splice(i, 1);
        updatedTasks.unshift(task);
      }
    });

    setTasks(updatedTasks);
  };

  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const updateTask = (task) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? { ...t, name: task.name, description: task.description }
          : t
      )
    );
    closeEditMode();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className={showForm || isEditing ? "background-blur" : ""}>
        <Header />
        <DateSelect />
      </div>
      {showForm && (
        <TaskForm
          addTask={addTask}
          closeForm={closeForm}
          setaddTaskBtn={setaddTaskBtn}
        />
      )}
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <div className={showForm || isEditing ? "background-blur" : ""}>
        <TaskContainer
          task={task}
          tasks={tasks}
          displayTaskBtns={displayTaskBtns}
          showTaskBtns={showTaskBtns}
          deleteTask={deleteTask}
          completeTask={completeTask}
          enterEditMode={enterEditMode}
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
