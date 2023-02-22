import '../TaskBtns/TaskBtns.css';

import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaExpandAlt,
} from 'react-icons/fa';

//custom hooks
import { useCardContext } from '../../hooks/Context';
import { useTempCardContext } from '../../hooks/TempContext';

const TempTaskBtns = ({ task }) => {
  const { enterEditMode } = useCardContext();
  const {
    deleteTempTask,
    completeTempTask,
    tempTasks,
    spreadTempTasks,
    tempTaskSpread,
    showTempTaskBtns,
    temptTaskChangeStyle,
  } = useTempCardContext();
  return (
    <div>
      <FaExpandAlt
        /*    className={showTaskBtns ? "fa fa-expand-expanded" : "fa"} */
        style={{ opacity: tempTasks.length < 2 && '40%' }}
        className={
          tempTaskSpread && temptTaskChangeStyle
            ? 'fa spread-spread-btn btn-shake'
            : tempTaskSpread
            ? 'fa spread-spread-btn'
            : showTempTaskBtns
            ? 'fa fa-expand-expanded'
            : 'fa'
        }
        onClick={spreadTempTasks}
      />
      <FaRegEdit
        /*    className={showTaskBtns ? "fa fa-edit-expanded" : "fa"} */

        className={
          tempTaskSpread && temptTaskChangeStyle
            ? 'fa spread-edit-btn btn-shake'
            : tempTaskSpread
            ? 'fa spread-edit-btn'
            : showTempTaskBtns
            ? 'fa fa-edit-expanded'
            : 'fa'
        }
        onClick={() => enterEditMode(task)}
      />
      <FaRegTimesCircle
        /*  className={showTaskBtns ? "fa fa-delete-expanded" : "fa"} */

        className={
          tempTaskSpread && temptTaskChangeStyle
            ? 'fa spread-delete-btn btn-shake'
            : tempTaskSpread
            ? 'fa spread-delete-btn'
            : showTempTaskBtns
            ? 'fa fa-delete-expanded'
            : 'fa'
        }
        onClick={() => deleteTempTask(task.id)}
      />
      <FaRegCheckCircle
        /*  className={showTaskBtns ? "fa fa-complete-expanded" : "fa"} */

        className={
          tempTaskSpread && temptTaskChangeStyle
            ? 'fa spread-complete-btn btn-shake'
            : tempTaskSpread
            ? 'fa spread-complete-btn'
            : showTempTaskBtns
            ? 'fa fa-complete-expanded'
            : 'fa'
        }
        onClick={() => completeTempTask(task.id)}
      />
    </div>
  );
};

export default TempTaskBtns;
