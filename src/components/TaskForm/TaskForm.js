import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useCardContext } from '../../hooks/Context';

const TaskForm = ({}) => {
  const { addTask, setaddTaskBtn, closeForm } = useCardContext();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      id: uuidv4(),
      name: name,
      description: desc,
      completed: false,
    });
    setName('');
    setDesc('');
    closeForm();
    setaddTaskBtn(true);
  };

  /*   Ability to close form with escape key */
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === 'Escape' && closeForm();
    };

    window.addEventListener('keydown', closeModalIfEscaped);

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped);
    };
  }, [closeForm]);

  return (
    <div className="modal-background">
      <div className="add-task-form">
        <form onSubmit={handleSubmit}>
          <div className="modal-close">
            <button onClick={closeForm}> X </button>
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
          <button
            type="submit"
            className="add-task-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
