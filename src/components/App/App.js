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
  const [taskSpread, setTaskSpread] = useState(false);

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
    if (tasks.length === 0) {
      return "plus default-plus";
    } else if (taskSpread) {
      return "plus default-plus spread-plus";
    } else {
      return "plus default-plus added-plus";
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

    if (tasks.length < 3) {
      setTaskSpread(false);
    }
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

  const spreadTasks = () => {
    if (tasks.length < 2) {
      setTaskSpread(false);
    } else {
      setTaskSpread(!taskSpread);
    }
  };

  return (
    <>
      <div className={showForm || isEditing ? "background-blur" : ""}>
        <Header />
        <DateSelect taskSpread={taskSpread} />
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
          spreadTasks={spreadTasks}
          taskSpread={taskSpread}
          addTaskBtnPosition={addTaskBtnPosition}
          displayForm={displayForm}
        />
        {/*   <div className="added-plus2"></div> */}
      </div>
    </>
  );
}

export default App;

/* add plus icon to task container and put position absolute - play around with getting it and keeping it same distance to card */
