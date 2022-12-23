import "./TaskBtns.css";
import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaExpandAlt,
} from "react-icons/fa";

const TaskBtns = ({ showTaskBtns }) => {
  return (
    <div>
      <FaExpandAlt
        className={showTaskBtns ? "fa fa-expand-expanded" : "fa fa-expand"}
      />
      <FaRegEdit
        className={showTaskBtns ? "fa fa-edit-expanded" : "fa fa-edit"}
      />
      <FaRegTimesCircle
        className={showTaskBtns ? "fa fa-delete-expanded" : "fa fa-delete"}
      />
      <FaRegCheckCircle
        className={showTaskBtns ? "fa fa-complete-expanded" : "fa fa-complete"}
      />
    </div>
  );
};

export default TaskBtns;
