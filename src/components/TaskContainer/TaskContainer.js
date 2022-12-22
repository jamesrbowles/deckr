import TaskCard from "../TaskCard/TaskCard";
import "./TaskContainer.css";

const TaskContainer = ({ tasks }) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskContainer;
