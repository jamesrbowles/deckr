import { IoAddCircleOutline } from 'react-icons/io5';

// custom hooks
import { useCardContext } from '../../Context';

// CSS
import './App.css';
import '../TaskForm/TaskForm.css';
import '../icons.css';

// components
import Header from '../Header/Header';
import TaskForm from '../TaskForm/TaskForm';
import TaskContainer from '../TaskContainer/TaskContainer';
import DateSelect from '../DateSelect/DateSelect';
import EditForm from '../TaskForm/EditForm';
import ColorSwitcher from '../ColorSwitcher/ColorSwitcher';

function App() {
  const { showForm, isEditing } = useCardContext();

  return (
    <>
      <div className={showForm || isEditing ? 'background-blur' : ''}>
        <Header />
        <DateSelect />
      </div>
      {showForm && <TaskForm />}
      {isEditing && <EditForm />}
      <div
        className={
          showForm || isEditing
            ? 'container-position background-blur'
            : 'container-position'
        }
      >
        <TaskContainer />
        {/*   <div className="added-plus2"></div> */}
      </div>
      {!showForm && !isEditing && <ColorSwitcher />}
    </>
  );
}

export default App;
