import { createContext, useState, useEffect, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('deckr.tasks', []);
  const [task, setTask] = useState('');
  const [taskSpread, setTaskSpread] = useState(false);
  const [showTaskBtns, setShowTaskBtns] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);
  const [taskChangeStyle, setTaskChangeStyle] = useState(false);

  /* Add a new task form display and close */
  const [showForm, setShowForm] = useState(false);
  const displayForm = () => {
    if (tasks.length < 13) {
      setShowForm(true);
    }
  };

  const closeForm = () => {
    setShowForm(false);
  };

  /*   Add task button positioning */
  const [addTaskBtn, setaddTaskBtn] = useState(false);
  const addTaskBtnPosition = () => {
    if (tasks.length === 0) {
      return 'plus default-plus';
    } else if (taskSpread) {
      return 'plus default-plus spread-plus';
    } else {
      return 'plus default-plus added-plus';
    }
  };

  /*   Task buttons and their functionality */

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
    // ensures if task added in spread mode - user is selected at the front again
    setTaskIndex(tasks.length);
  };

  const deleteTask = (id) => {
    const updatedTasks = [...tasks].filter((task) => task.id != id);

    setTasks(updatedTasks);
    if (tasks.length == 1) {
      setTaskIndex(0);
    } else {
      setTaskIndex(tasks.length - 2);
    }
  };

  // takes user out of spread mode if only one task left
  useEffect(() => {
    if (tasks.length < 2) {
      setTaskSpread(false);
    }
  });

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
    <CardContext.Provider
      value={{
        tasks,
        setTasks,
        task,
        setTask,
        taskSpread,
        setTaskSpread,
        showTaskBtns,
        setShowTaskBtns,
        taskIndex,
        setTaskIndex,
        taskChangeStyle,
        setTaskChangeStyle,
        showForm,
        setShowForm,
        displayForm,
        closeForm,
        addTaskBtn,
        setaddTaskBtn,
        addTaskBtnPosition,
        addTask,
        deleteTask,
        completed,
        setCompleted,
        completeTask,
        editedTask,
        setEditedTask,
        isEditing,
        setIsEditing,
        updateTask,
        enterEditMode,
        closeEditMode,
        spreadTasks,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);

export default CardProvider;
