import "./TaskBtns.css";
import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaExpandAlt,
} from "react-icons/fa";

const TaskBtns = ({ showTaskBtns, deleteTask, task, completeTask }) => {
  return (
    <div>
      <FaExpandAlt className={showTaskBtns ? "fa fa-expand-expanded" : "fa"} />
      <FaRegEdit className={showTaskBtns ? "fa fa-edit-expanded" : "fa"} />
      <FaRegTimesCircle
        className={showTaskBtns ? "fa fa-delete-expanded" : "fa"}
        onClick={() => deleteTask(task.id)}
      />
      <FaRegCheckCircle
        className={showTaskBtns ? "fa fa-complete-expanded" : "fa"}
        onClick={() => completeTask(task.id)}
      />
    </div>
  );
};

export default TaskBtns;
