import TaskCard from '../TaskCard/TaskCard';
import TempTaskCard from '../TempTasks/TempTasks';
import './TaskContainer.css';

import { IoAddCircleOutline } from 'react-icons/io5';
import '../icons.css';
//custom hooks
import { useCardContext } from '../../hooks/Context';
import { useTempCardContext } from '../../hooks/TempContext';

const TaskContainer = () => {
  const { tasks, taskSpread, addTaskBtnPosition, displayForm } =
    useCardContext();
  const { tempTasks, tempTaskSpread } = useTempCardContext();
  return (
    <div
      className={
        taskSpread || tempTaskSpread
          ? 'task-container task-container-spread'
          : 'task-container'
      }
    >
      {tasks.map((task, index) => (
        <TaskCard
          task={task}
          key={task.id}
          index={index}
        />
      ))}
      {tempTasks.map((task, index) => (
        <TempTaskCard
          task={task}
          key={task.id}
          index={index}
        />
      ))}
      <IoAddCircleOutline
        className={addTaskBtnPosition()}
        style={
          tasks.length > 12 || tempTasks.length > 12 ? { color: 'gray' } : ''
        }
        onClick={displayForm}
      />
      {/*   <div className="added-plus2"></div> */}
    </div>
  );
};

export default TaskContainer;
