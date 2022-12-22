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
    <div className="modal-background">
      <div className="add-task-form">
        <form onSubmit={handleSubmit}>
          <div className="modal-close">
            <button onClick={() => setShowForm(false)}> X </button>
          </div>
          <div className="modal-title">
            <h1>Add your task</h1>
          </div>
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="add-task-input"
          />
          <button type="submit" className="add-task-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
