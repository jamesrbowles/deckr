import "./TaskBtns.css";

import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaExpandAlt,
} from "react-icons/fa";

const TaskBtns = ({
  showTaskBtns,
  deleteTask,
  task,
  completeTask,
  enterEditMode,
  spreadTasks,
  taskSpread,
}) => {
  return (
    <div>
      <FaExpandAlt
        /*    className={showTaskBtns ? "fa fa-expand-expanded" : "fa"} */
        className={
          taskSpread
            ? "fa spread-spread-btn"
            : showTaskBtns
            ? "fa fa-expand-expanded"
            : "fa"
        }
        onClick={spreadTasks}
      />
      <FaRegEdit
        /*    className={showTaskBtns ? "fa fa-edit-expanded" : "fa"} */
        className={
          taskSpread
            ? "fa spread-edit-btn"
            : showTaskBtns
            ? "fa fa-edit-expanded"
            : "fa"
        }
        onClick={() => enterEditMode(task)}
      />
      <FaRegTimesCircle
        /*  className={showTaskBtns ? "fa fa-delete-expanded" : "fa"} */
        className={
          taskSpread
            ? "fa spread-delete-btn"
            : showTaskBtns
            ? "fa fa-delete-expanded"
            : "fa"
        }
        onClick={() => deleteTask(task.id)}
      />
      <FaRegCheckCircle
        /*  className={showTaskBtns ? "fa fa-complete-expanded" : "fa"} */
        className={
          taskSpread
            ? "fa spread-complete-btn"
            : showTaskBtns
            ? "fa fa-complete-expanded"
            : "fa"
        }
        onClick={() => completeTask(task.id)}
      />
    </div>
  );
};

export default TaskBtns;
