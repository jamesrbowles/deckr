import { useRef } from "react";
import "./TaskCard.css";
import TaskBtns from "../TaskBtns/TaskBtns";

const TaskCard = ({ task, tasks, displayTaskBtns, showTaskBtns, id }) => {
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
    <div
      className="task-card"
      style={stagger.current}
      onClick={displayTaskBtns}
    >
      <div className="task-text">{task.text}</div>
      {firstKey === task.id && <TaskBtns showTaskBtns={showTaskBtns} />}
    </div>
  );
};

export default TaskCard;
