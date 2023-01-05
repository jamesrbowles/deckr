import { useRef, useState } from "react";
import { BsSuitSpadeFill } from "react-icons/bs";

import "./TaskCard.css";

import TaskBtns from "../TaskBtns/TaskBtns";

const TaskCard = ({
  task,
  tasks,
  showTaskBtns,
  setShowTaskBtns,
  deleteTask,
  completeTask,
  enterEditMode,
  spreadTasks,
  taskSpread,
  index,
  taskIndex,
  setTaskIndex,
  taskChangeStyle,
  setTaskChangeStyle,
}) => {
  const findIndex = (e) => {
    const newIndex = e.currentTarget.id;
    if (taskSpread) {
      setTaskIndex(newIndex);
    } else {
      setTaskIndex(tasks.length - 1);
    }
    if (taskIndex != newIndex) {
      setTaskChangeStyle(true);
    } else {
      setTaskChangeStyle(false);
    }
    setShowTaskBtns(!showTaskBtns);
  };

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
            ? "spread-task task-card task-card-size-spread completed"
            : taskSpread
            ? "spread-task task-card task-card-size-spread"
            : task.completed
            ? "task-card completed"
            : "task-card"
        }
        style={stagger.current}
        id={index}
        onClick={findIndex}
      >
        {/*         <BsSuitSpadeFill className="card-suit-top" /> */}
        <div className="task-text">
          <h1>{task.name}</h1>
          <p>{task.description}</p>
          {/*      <div className="center-line"></div> */}
        </div>
        {/*         <BsSuitSpadeFill className="card-suit-bottom" /> */}
      </div>
      <div
        className={
          taskSpread
            ? "task-card-container-copy task-card-size-spread"
            : "task-card-container-copy"
        }
        style={!taskSpread ? stagger.current : {}}
      >
        {tasks[taskIndex].id == task.id && (
          <TaskBtns
            showTaskBtns={showTaskBtns}
            deleteTask={deleteTask}
            task={task}
            completeTask={completeTask}
            enterEditMode={enterEditMode}
            spreadTasks={spreadTasks}
            taskSpread={taskSpread}
            taskChangeStyle={taskChangeStyle}
          />
        )}
      </div>
    </div>
  );
};

export default TaskCard;
