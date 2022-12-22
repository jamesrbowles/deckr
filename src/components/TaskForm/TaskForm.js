import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({
  task,
  tasks,
  setTask,
  setTasks,
  showForm,
  setShowForm,
  setaddTaskBtn,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: task,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setTask("");
    setShowForm(!showForm);
    setaddTaskBtn(true);
  };

  return (
    <div className="add-task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="add-task-input"
        />
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
