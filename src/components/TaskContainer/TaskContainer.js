import TaskCard from "../TaskCard/TaskCard";
import "./TaskContainer.css";

import { IoAddCircleOutline } from "react-icons/io5";
import "../icons.css";

const TaskContainer = ({
  task,
  tasks,

  showTaskBtns,
  deleteTask,
  completeTask,
  taskName,
  taskDesc,
  enterEditMode,
  spreadTasks,
  taskSpread,
  addTaskBtnPosition,
  displayForm,
  setShowTaskBtns,
  taskIndex,
  setTaskIndex,
  taskChangeStyle,
  setTaskChangeStyle,
}) => {
  return (
    <div
      className={
        taskSpread ? "task-container task-container-spread" : "task-container"
      }
    >
      {tasks.map((task, index) => (
        <TaskCard
          task={task}
          taskName={taskName}
          taskDesc={taskDesc}
          key={task.id}
          showTaskBtns={showTaskBtns}
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
          enterEditMode={enterEditMode}
          spreadTasks={spreadTasks}
          taskSpread={taskSpread}
          index={index}
          setShowTaskBtns={setShowTaskBtns}
          taskIndex={taskIndex}
          setTaskIndex={setTaskIndex}
          taskChangeStyle={taskChangeStyle}
          setTaskChangeStyle={setTaskChangeStyle}
        />
      ))}
      <IoAddCircleOutline
        className={addTaskBtnPosition()}
        style={tasks.length > 12 && { color: "gray" }}
        onClick={displayForm}
      />
      <div className="added-plus2"></div>
    </div>
  );
};

export default TaskContainer;
