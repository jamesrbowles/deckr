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
  enterEditMode,
  spreadTasks,
  taskSpread,
}) => {
  let suitValue;
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
