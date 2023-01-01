import { useRef } from "react";
import "./TaskCard.css";
import TaskBtns from "../TaskBtns/TaskBtns";

const TaskCard = ({
  task,
  tasks,
  displayTaskBtns,
  showTaskBtns,
  deleteTask,
  completeTask,
  enterEditMode,
  spreadTasks,
  taskSpread,
}) => {
  const firstKey = tasks[tasks.length - 1].id;

  const translateX =
    Math.floor(Math.random() * 12) * (Math.round(Math.random()) ? 1 : -1);
  const translateY =
    Math.floor(Math.random() * 4) * (Math.round(Math.random()) ? 1 : -1);
  const rotate =
    Math.floor(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

  const stagger = useRef({
    transform: `translateX(${translateX}%) translateY(${translateY}%) rotate(${rotate}deg)`,
  });

  return (
    <div className="each-card">
      <div
        className={
          taskSpread && task.completed
            ? "spread-task task-card completed"
            : taskSpread
            ? "spread-task task-card"
            : task.completed
            ? "task-card completed"
            : "task-card"
        }
        /*         className={task.completed ? "task-card completed" : "task-card"} */
        style={stagger.current}
        onClick={displayTaskBtns}
      >
        <div className="task-text">
          <h1>{task.name}</h1>
          <p>{task.description}</p>
        </div>
      </div>
      <div className="task-card-container-copy" style={stagger.current}>
        {firstKey === task.id && (
          <TaskBtns
            showTaskBtns={showTaskBtns}
            deleteTask={deleteTask}
            task={task}
            completeTask={completeTask}
            enterEditMode={enterEditMode}
            spreadTasks={spreadTasks}
          />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
