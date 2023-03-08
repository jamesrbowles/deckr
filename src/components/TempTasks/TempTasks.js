import { useRef } from 'react';
import { BsSuitSpadeFill } from 'react-icons/bs';

import '../TaskCard/TaskCard.css';

import TempTaskBtns from './TempTasksBtns';
//custom hooks
import { useTempCardContext } from '../../hooks/TempContext';

const TempTaskCard = ({ index, task }) => {
  const {
    tempTasks,
    tempTaskSpread,
    showTempTaskBtns,
    setShowTempTaskBtns,
    setTempTaskIndex,
    tempTaskIndex,
    setTempTaskChangeStyle,
    handleTempSort,
    dragTempTask,
    dragOverTempTask,
  } = useTempCardContext();

  //Functionality for selecting different cards in spread
  const findIndex = (e) => {
    const newIndex = e.currentTarget.id;
    if (tempTaskSpread) {
      setTempTaskIndex(newIndex);
    } else {
      setTempTaskIndex(tempTasks.length - 1);
    }
    if (tempTaskIndex !== newIndex) {
      setTempTaskChangeStyle(true);
    } else {
      setTempTaskChangeStyle(false);
    }

    setShowTempTaskBtns(!showTempTaskBtns);
  };

  //Getting the card suit value on the correct cards
  const cardValue = (indexTest) => {
    if (tempTasks[tempTasks.length - 1].id === tempTasks[indexTest].id) {
      return 'A';
    } else if (tempTasks[tempTasks.length - 2].id === tempTasks[indexTest].id) {
      return 'K';
    } else if (tempTasks[tempTasks.length - 3].id === tempTasks[indexTest].id) {
      return 'Q';
    } else if (tempTasks[tempTasks.length - 4].id === tempTasks[indexTest].id) {
      return 'J';
    } else if (tempTasks[tempTasks.length - 5].id === tempTasks[indexTest].id) {
      return '10';
    } else if (tempTasks[tempTasks.length - 6].id === tempTasks[indexTest].id) {
      return '9';
    } else if (tempTasks[tempTasks.length - 7].id === tempTasks[indexTest].id) {
      return '8';
    } else if (tempTasks[tempTasks.length - 8].id === tempTasks[indexTest].id) {
      return '7';
    } else if (tempTasks[tempTasks.length - 9].id === tempTasks[indexTest].id) {
      return '6';
    } else if (
      tempTasks[tempTasks.length - 10].id === tempTasks[indexTest].id
    ) {
      return '5';
    } else if (
      tempTasks[tempTasks.length - 11].id === tempTasks[indexTest].id
    ) {
      return '4';
    } else if (
      tempTasks[tempTasks.length - 12].id === tempTasks[indexTest].id
    ) {
      return '3';
    } else if (
      tempTasks[tempTasks.length - 13].id === tempTasks[indexTest].id
    ) {
      return '2';
    }
  };

  //styling for random stagger when not spread
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
          tempTaskSpread && task.completed
            ? 'spread-task task-card task-card-size-spread completed'
            : tempTaskSpread && tempTasks[tempTaskIndex]?.id === task.id
            ? 'spread-task task-card task-card-size-spread selected'
            : tempTaskSpread
            ? 'spread-task task-card task-card-size-spread'
            : task.completed
            ? 'task-card completed'
            : 'task-card'
        }
        style={stagger.current}
        id={index}
        onClick={findIndex}
        draggable
        onDragStart={(e) => (dragTempTask.current = index)}
        onDragEnter={(e) => (dragOverTempTask.current = index)}
        onDragEnd={handleTempSort}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="card-suit-top">
          <h3
            className={
              tempTaskSpread ? 'card-suit-value-spread' : 'card-suit-value'
            }
          >
            {cardValue(index)}
          </h3>
          <BsSuitSpadeFill
            className={
              tempTaskSpread ? 'card-suit-icon-spread' : 'card-suit-icon'
            }
          />
        </div>
        <div className={tempTaskSpread ? 'task-text-spread' : 'task-text'}>
          <h1
            className={
              tempTaskSpread ? 'task-text-name-spread' : 'task-text-name'
            }
          >
            {task.name}
          </h1>
          <p
            className={
              tempTaskSpread ? 'task-text-desc-spread' : 'task-text-desc'
            }
          >
            {task.description}
          </p>
          {/*      <div className="center-line"></div> */}
        </div>
        <div className="card-suit-bottom">
          <h3
            className={
              tempTaskSpread ? 'card-suit-value-spread' : 'card-suit-value'
            }
          >
            {cardValue(index)}
          </h3>
          <BsSuitSpadeFill
            className={
              tempTaskSpread ? 'card-suit-icon-spread' : 'card-suit-icon'
            }
          />
        </div>
      </div>

      <div
        className={
          tempTaskSpread
            ? 'task-card-container-copy task-card-size-spread'
            : 'task-card-container-copy'
        }
        style={!tempTaskSpread ? stagger.current : {}}
      >
        {tempTasks[tempTaskIndex]?.id === task.id && (
          <TempTaskBtns task={task} />
        )}
      </div>
    </div>
  );
};

export default TempTaskCard;
