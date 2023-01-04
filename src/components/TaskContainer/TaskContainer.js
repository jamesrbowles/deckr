import TaskCard from "../TaskCard/TaskCard";
import "./TaskContainer.css";

import { IoAddCircleOutline } from "react-icons/io5";
import "../icons.css";

const TaskContainer = ({
  task,
  tasks,
  displayTaskBtns,
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
          displayTaskBtns={displayTaskBtns}
          showTaskBtns={showTaskBtns}
          tasks={tasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
          enterEditMode={enterEditMode}
          spreadTasks={spreadTasks}
          taskSpread={taskSpread}
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

/* 
     {
       tasks.map((task, index) => (
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
           enterEditMode={enterEditMode}
           spreadTasks={spreadTasks}
           taskSpread={taskSpread}
         />
       ));
     } */
