import "./TaskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-text">{task.text}</div>
    </div>
  );
};

export default TaskCard;
