import { createContext, useState, useEffect, useContext } from 'react';
import useLocalStorage from './useLocalStorage';
import { db, auth } from '../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useTempCardContext } from './TempContext';

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [taskSpread, setTaskSpread] = useState(false);
  const [showTaskBtns, setShowTaskBtns] = useState(false);
  const [taskIndex, setTaskIndex] = useState(0);
  const [taskChangeStyle, setTaskChangeStyle] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { tempTasks, tempTaskSpread } = useTempCardContext();

  const user = auth.currentUser;

  /* database fetching */
  useEffect(() => {
    const auth = getAuth();
    const tasksCollectionRef = collection(db, 'tasks');

    // Set up a listener to get the current user's ID
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is logged in, run the query for their tasks
        const q = query(
          tasksCollectionRef,
          orderBy('timestamp', 'asc'),
          where('userId', '==', user.uid)
        );
        const unsubscribeTasks = onSnapshot(q, (querySnapshot) => {
          let tasksArr = [];
          querySnapshot.forEach((doc) => {
            tasksArr.push({ ...doc.data(), id: doc.id });
          });
          setTasks(tasksArr);
          setLoading(false);
        });
        return () => unsubscribeTasks();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  /* Add a new task form display and close */
  const [showForm, setShowForm] = useState(false);
  const displayForm = () => {
    if (tasks.length < 13 && tempTasks.length < 13) {
      setShowForm(true);
    }
  };

  const closeForm = () => {
    setShowForm(false);
  };

  /*   Add task button positioning */
  const [addTaskBtn, setaddTaskBtn] = useState(false);
  const addTaskBtnPosition = () => {
    if (tasks.length === 0 && tempTasks.length === 0) {
      return 'plus default-plus';
    } else if (taskSpread || tempTaskSpread) {
      return 'plus default-plus spread-plus';
    } else {
      return 'plus default-plus added-plus';
    }
  };

  /*   Task buttons and their functionality */

  const addTask = async (task) => {
    try {
      await addDoc(collection(db, 'tasks'), {
        name: task.name,
        description: task.description,
        completed: task.completed,
        timestamp: serverTimestamp(),
        userId: auth?.currentUser?.uid,
      });
    } catch (err) {
      console.error(err);
    }

    // ensures if task added in spread mode - user is selected at the front again
    setTaskIndex(tasks.length);
  };

  const deleteTask = async (id) => {
    let newIndex = tasks.length;
    await deleteDoc(doc(db, 'tasks', id));

    /*     if (taskIndex === tasks.length - 1) {
      setTaskIndex(0);
    } */
    setTaskIndex(newIndex - 2);
  };

  // takes user out of spread mode if only one task left
  useEffect(() => {
    if (tasks.length < 2) {
      setTaskSpread(false);
    }
  }, [tasks.length]);

  /* allow read, write: if request.auth != null; */

  const [completed, setCompleted] = useState(false);
  const completeTask = async (task) => {
    await updateDoc(doc(db, 'tasks', task.id), {
      completed: !task.completed,
      timestamp: serverTimestamp() * serverTimestamp(),
    });
  };

  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const updateTask = async (task) => {
    await updateDoc(doc(db, 'tasks', task.id), {
      name: task.name,
      description: task.description,
    });

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
        isMenuToggled,
        setIsMenuToggled,
        loading,
        user,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);

export default CardProvider;