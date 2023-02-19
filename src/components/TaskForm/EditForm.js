import "./TaskForm.css";
import { useState, useEffect } from "react";
import { useCardContext } from "../../hooks/Context";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const EditForm = ({}) => {
  const { editedTask, updateTask, closeEditMode } = useCardContext();
  const [updatedName, setUpdatedName] = useState(editedTask.name);
  const [updatedDesc, setUpdatedDesc] = useState(editedTask.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedName, description: updatedDesc });
  };

  /*   Ability to close form with escape key */
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleClickAway = () => {
    closeEditMode();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="modal-background">
        <div className="add-task-form">
          <form onSubmit={handleSubmit}>
            <div className="modal-close">
              <button onClick={closeEditMode}> X </button>
            </div>
            <div className="modal-title">
              <h1>Edit your task</h1>
            </div>
            {/* <label htmlFor="name" className="form-labels">
            Name
          </label> */}
            <input
              type="text"
              className="add-task-input"
              value={updatedName}
              placeholder="Task name"
              onInput={(e) => setUpdatedName(e.target.value)}
              required
              autoFocus
            />

            {/* <label htmlFor="desc" className="form-labels">
            Description
          </label> */}
            <textarea
              className="add-task-input"
              value={updatedDesc}
              placeholder="Task details"
              onInput={(e) => setUpdatedDesc(e.target.value)}
              rows="8"
            ></textarea>
            <button type="submit" className="add-task-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default EditForm;
