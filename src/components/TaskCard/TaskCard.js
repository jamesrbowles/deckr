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
}) => {
  const translateX =
    Math.floor(Math.random() * 12) * (Math.round(Math.random()) ? 1 : -1);
  const translateY =
    Math.floor(Math.random() * 4) * (Math.round(Math.random()) ? 1 : -1);
  const rotate =
    Math.floor(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

  const stagger = useRef({
    transform: `translateX(${translateX}%) translateY(${translateY}%) rotate(${rotate}deg)`,
  });
  const firstKey = tasks[tasks.length - 1].id;

  return (
    <div>
      <div
        className="task-card"
        style={stagger.current}
        onClick={displayTaskBtns}
      >
        <div className="task-text">
          {task.name}
          {task.description}
        </div>
      </div>
      <div className="task-card-container-copy" style={stagger.current}>
        {firstKey === task.id && (
          <TaskBtns
            showTaskBtns={showTaskBtns}
            deleteTask={deleteTask}
            task={task}
            completeTask={completeTask}
          />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
