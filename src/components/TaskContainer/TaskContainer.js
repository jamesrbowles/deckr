import TaskCard from "../TaskCard/TaskCard";
import "./TaskContainer.css";

const TaskContainer = ({
  task,
  tasks,
  displayTaskBtns,
  showTaskBtns,
  deleteTask,
  completeTask,
  taskName,
  taskDesc,
}) => {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <TaskCard
          task={task}
          taskName={taskName}
          taskDesc={taskDesc}
          key={task.id}
          displayTaskBtns={displayTaskBtns}
          showTaskBtns={showTaskBtns}
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskContainer;
