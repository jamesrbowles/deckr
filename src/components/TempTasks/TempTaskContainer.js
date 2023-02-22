import TempTaskCard from './TempTasks';
import '../TaskContainer/TaskContainer.css';

import { IoAddCircleOutline } from 'react-icons/io5';
import '../icons.css';
//custom hooks
import { useCardContext } from '../../hooks/Context';
import { useTempCardContext } from '../../hooks/TempContext';

const TaskContainer = ({}) => {
  const { tasks, taskSpread, addTaskBtnPosition, displayForm } =
    useCardContext();
  const { tempTasks } = useTempCardContext();
  return (
    <div
      className={
        taskSpread ? 'task-container task-container-spread' : 'task-container'
      }
    >
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
