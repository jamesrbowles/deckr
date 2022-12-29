import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TaskForm = ({ addTask, showForm, setShowForm, setaddTaskBtn }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      id: uuidv4(),
      name: name,
      description: desc,
      completed: false,
    });
    setName("");
    setDesc("");
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
            className="add-task-input"
            value={name}
            placeholder="Task name"
            onInput={(e) => setName(e.target.value)}
            required
            autoFocus
          />

          {/* <label htmlFor="desc" className="form-labels">
            Description
          </label> */}
          <textarea
            className="add-task-input"
            value={desc}
            placeholder="Task details"
            onInput={(e) => setDesc(e.target.value)}
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
