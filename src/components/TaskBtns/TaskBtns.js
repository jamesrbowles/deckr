import './TaskBtns.css';

import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaExpandAlt,
} from 'react-icons/fa';

//custom hooks
import { useCardContext } from '../../hooks/Context';

const TaskBtns = ({ task }) => {
  const {
    showTaskBtns,
    deleteTask,
    completeTask,
    enterEditMode,
    spreadTasks,
    taskSpread,
    taskChangeStyle,
    tasks,
  } = useCardContext();
  return (
    <div>
      <FaExpandAlt
        /*    className={showTaskBtns ? "fa fa-expand-expanded" : "fa"} */
        style={{ opacity: tasks.length < 2 && '40%' }}
        className={
          taskSpread && taskChangeStyle
            ? 'fa spread-spread-btn btn-shake'
            : taskSpread
            ? 'fa spread-spread-btn'
            : showTaskBtns
            ? 'fa fa-expand-expanded'
            : 'fa'
        }
        onClick={spreadTasks}
      />
      <FaRegEdit
        /*    className={showTaskBtns ? "fa fa-edit-expanded" : "fa"} */

        className={
          taskSpread && taskChangeStyle
            ? 'fa spread-edit-btn btn-shake'
            : taskSpread
            ? 'fa spread-edit-btn'
            : showTaskBtns
            ? 'fa fa-edit-expanded'
            : 'fa'
        }
        onClick={() => enterEditMode(task)}
      />
      <FaRegTimesCircle
        /*  className={showTaskBtns ? "fa fa-delete-expanded" : "fa"} */

        className={
          taskSpread && taskChangeStyle
            ? 'fa spread-delete-btn btn-shake'
            : taskSpread
            ? 'fa spread-delete-btn'
            : showTaskBtns
            ? 'fa fa-delete-expanded'
            : 'fa'
        }
        onClick={() => deleteTask(task.id)}
      />
      <FaRegCheckCircle
        /*  className={showTaskBtns ? "fa fa-complete-expanded" : "fa"} */

        className={
          taskSpread && taskChangeStyle
            ? 'fa spread-complete-btn btn-shake'
            : taskSpread
            ? 'fa spread-complete-btn'
            : showTaskBtns
            ? 'fa fa-complete-expanded'
            : 'fa'
        }
        onClick={() => completeTask(task)}
      />
    </div>
  );
};

export default TaskBtns;
