import { createContext, useState, useContext, useRef } from 'react';

const TempCardContext = createContext();

const TempCardProvider = ({ children }) => {
  const [tempTasks, setTempTasks] = useState([]);
  const [task, setTask] = useState('');
  const [tempTaskSpread, setTempTaskSpread] = useState(false);
  const [showTempTaskBtns, setShowTempTaskBtns] = useState(false);
  const [tempTaskIndex, setTempTaskIndex] = useState(0);
  const [temptTaskChangeStyle, setTempTaskChangeStyle] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  /*   Task buttons and their functionality */

  const addTempTask = (task) => {
    setTempTasks((prev) => [...prev, task]);
    // ensures if task added in spread mode - user is selected at the front again
    setTempTaskIndex(tempTasks.length);
  };

  const deleteTempTask = (id) => {
    const updatedTasks = [...tempTasks].filter((task) => task.id !== id);

    setTempTasks(updatedTasks);
    if (tempTasks.length === 1) {
      setTempTaskIndex(0);
    } else {
      setTempTaskIndex(tempTasks.length - 2);
    }
    // takes user out of spread mode if only one task left
    if (tempTasks.length < 3) {
      setTempTaskSpread(false);
    }
  };

  const [completed, setCompleted] = useState(false);
  const completeTempTask = (id) => {
    let updatedTasks = [...tempTasks].map((task) => {
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

    setTempTasks(updatedTasks);
  };

  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const updateTempTask = (task) => {
    setTempTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? { ...t, name: task.name, description: task.description }
          : t
      )
    );
    closeTempEditMode();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  const closeTempEditMode = () => {
    setIsEditing(false);
  };

  const spreadTempTasks = () => {
    if (tempTasks.length < 2) {
      setTempTaskSpread(false);
    } else {
      setTempTaskSpread(!tempTaskSpread);
    }
  };

  //Drag and drop functionality

  //save reference for dragTempTask and dragOverTempTask
  const dragTempTask = useRef(null);
  const dragOverTempTask = useRef(null);

  //const handle drag sorting
  const handleTempSort = () => {
    if (tempTaskSpread) {
      //duplicate items
      let _tempTasks = [...tempTasks];

      //remove and save the dragged item content
      const draggedTaskContent = _tempTasks.splice(dragTempTask.current, 1)[0];

      //switch the position
      _tempTasks.splice(dragOverTempTask.current, 0, draggedTaskContent);

      //reset the position ref
      dragTempTask.current = null;
      dragOverTempTask.current = null;

      //update the actual array
      setTempTasks(_tempTasks);
    }
  };

  return (
    <TempCardContext.Provider
      value={{
        task,
        setTask,
        tempTaskSpread,
        setTempTaskSpread,
        showTempTaskBtns,
        setShowTempTaskBtns,
        tempTaskIndex,
        setTempTaskIndex,
        temptTaskChangeStyle,
        setTempTaskChangeStyle,
        addTempTask,
        deleteTempTask,
        completed,
        setCompleted,
        completeTempTask,
        editedTask,
        setEditedTask,
        isEditing,
        setIsEditing,
        updateTempTask,
        enterEditMode,
        closeTempEditMode,
        spreadTempTasks,
        isMenuToggled,
        setIsMenuToggled,
        tempTasks,
        setTempTasks,
        handleTempSort,
        dragTempTask,
        dragOverTempTask,
      }}
    >
      {children}
    </TempCardContext.Provider>
  );
};

export const useTempCardContext = () => useContext(TempCardContext);

export default TempCardProvider;
