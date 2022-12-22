import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const translateX =
    Math.floor(Math.random() * 12) * (Math.round(Math.random()) ? 1 : -1);
  const translateY =
    Math.floor(Math.random() * 12) * (Math.round(Math.random()) ? 1 : -1);
  const rotate =
    Math.floor(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

  return (
    <div
      className="task-card"
      style={{ transform: `translateX(${translateX}%) rotate(${rotate}deg)` }}
    >
      <div className="task-text">{task.text}</div>
    </div>
  );
};

export default TaskCard;
