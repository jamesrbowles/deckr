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

  const cardValue = (indexTest) => {
    if (tasks[tasks.length - 1].id == tasks[indexTest].id) {
      return "A";
    } else if (tasks[tasks.length - 2].id == tasks[indexTest].id) {
      return "K";
    } else if (tasks[tasks.length - 3].id == tasks[indexTest].id) {
      return "Q";
    } else if (tasks[tasks.length - 4].id == tasks[indexTest].id) {
      return "J";
    } else if (tasks[tasks.length - 5].id == tasks[indexTest].id) {
      return "10";
    } else if (tasks[tasks.length - 6].id == tasks[indexTest].id) {
      return "9";
    } else if (tasks[tasks.length - 7].id == tasks[indexTest].id) {
      return "8";
    } else if (tasks[tasks.length - 8].id == tasks[indexTest].id) {
      return "7";
    } else if (tasks[tasks.length - 9].id == tasks[indexTest].id) {
      return "6";
    } else if (tasks[tasks.length - 10].id == tasks[indexTest].id) {
      return "5";
    } else if (tasks[tasks.length - 11].id == tasks[indexTest].id) {
      return "4";
    } else if (tasks[tasks.length - 12].id == tasks[indexTest].id) {
      return "3";
    } else if (tasks[tasks.length - 13].id == tasks[indexTest].id) {
      return "2";
    }
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
            : taskSpread && tasks[taskIndex].id == task.id
            ? "spread-task task-card task-card-size-spread selected"
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
        <div className="card-suit-top">
          <h3
            className={
              taskSpread ? "card-suit-value-spread" : "card-suit-value"
            }
          >
            {cardValue(index)}
          </h3>
          <BsSuitSpadeFill
            className={taskSpread ? "card-suit-icon-spread" : "card-suit-icon"}
          />
        </div>
        <div className={taskSpread ? "task-text-spread" : "task-text"}>
          <h1>{task.name}</h1>
          <p>{task.description}</p>
          {/*      <div className="center-line"></div> */}
        </div>
        <div className="card-suit-bottom">
          <h3
            className={
              taskSpread ? "card-suit-value-spread" : "card-suit-value"
            }
          >
            {cardValue(index)}
          </h3>
          <BsSuitSpadeFill
            className={taskSpread ? "card-suit-icon-spread" : "card-suit-icon"}
          />
        </div>
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
