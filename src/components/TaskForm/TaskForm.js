import "./TaskForm.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useCardContext } from "../../hooks/Context";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { useTempCardContext } from "../../hooks/TempContext";
import CategoryDropdown from "./CategoryDropdown";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const TaskForm = ({}) => {
  const { addTask, setaddTaskBtn, closeForm, user } = useCardContext();
  const { addTempTask } = useTempCardContext();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Home");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      addTempTask({
        id: uuidv4(),
        name: name,
        description: desc,
        category: category,
        completed: false,
      });
    } else {
      addTask({
        id: uuidv4(),
        name: name,
        description: desc,
        category: category,
        completed: false,
      });
    }

    setName("");
    setDesc("");
    closeForm();
    setaddTaskBtn(true);
  };

  /*   Ability to close form with escape key */
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeForm();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeForm]);

  const handleClickAway = () => {
    closeForm();
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSetCategory = (category) => {
    setCategory(category);

    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
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
            <div className="flex gap-3 justify-center">
              <input
                type="text"
                className="add-task-input"
                value={name}
                placeholder="Task name"
                onInput={(e) => setName(e.target.value)}
                required
                autoFocus
              />

              <CategoryDropdown
                open={open}
                setOpen={setOpen}
                trigger={
                  <button
                    type="button"
                    onClick={handleOpen}
                    className="dropdown-btn"
                  >
                    <IoIosArrowDropdownCircle className="dropdown-icon" />
                  </button>
                }
                handleSetCategory={handleSetCategory}
              />
            </div>
            <p>{category}</p>
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
    </ClickAwayListener>
  );
};

export default TaskForm;
