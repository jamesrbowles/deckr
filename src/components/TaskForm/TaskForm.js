import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

const TaskForm = ({ setTasks, showForm, setShowForm, setaddTaskBtn }) => {
  const taskNameRef = useRef();
  const taskDescRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = taskNameRef.current.value;
    const desc = taskDescRef.current.value;
    setTasks((prev) => {
      return [
        ...prev,
        { id: uuidv4(), name: name, description: desc, complete: false },
      ];
    });
    taskNameRef.current.value = null;
    taskDescRef.current.value = null;
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
          {/* <label htmlFor="name" className="form-labels">
            Name
          </label> */}
          <input
            type="text"
            id="name"
            ref={taskNameRef}
            className="add-task-input"
            placeholder="Task name"
            required
          />

          {/* <label htmlFor="desc" className="form-labels">
            Description
          </label> */}
          <textarea
            id="desc"
            ref={taskDescRef}
            className="add-task-input"
            placeholder="Task details"
            rows="8"
          ></textarea>
          <button type="submit" className="add-task-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
