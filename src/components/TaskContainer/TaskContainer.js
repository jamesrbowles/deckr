import TaskCard from "../TaskCard/TaskCard";
import "./TaskContainer.css";

const TaskContainer = ({ tasks, displayTaskBtns, showTaskBtns }) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          id={task.id}
          displayTaskBtns={displayTaskBtns}
          showTaskBtns={showTaskBtns}
          tasks={tasks}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
