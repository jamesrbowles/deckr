import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
    <div>
      <div
        className={
          taskSpread ? "task-container task-container-spread" : "task-container"
        }
      >
        <DragDropContext>
          <Droppable droppableId="characters">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <TaskCard
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        task={task}
                        taskName={taskName}
                        taskDesc={taskDesc}
                        displayTaskBtns={displayTaskBtns}
                        showTaskBtns={showTaskBtns}
                        tasks={tasks}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                        enterEditMode={enterEditMode}
                        spreadTasks={spreadTasks}
                        taskSpread={taskSpread}
                      />
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <IoAddCircleOutline
          className={addTaskBtnPosition()}
          onClick={displayForm}
        />
        <div className="added-plus2"></div>
      </div>
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
