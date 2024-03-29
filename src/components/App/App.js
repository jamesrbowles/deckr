/* import { IoAddCircleOutline } from "react-icons/io5"; */
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

//Routes
import { Route, Routes } from 'react-router-dom';

// custom hooks
import { useCardContext } from '../../hooks/Context';

// CSS
import './App.css';
import '../TaskForm/TaskForm.css';
import '../icons.css';

// components
import Header from '../Header/Header';
import TaskForm from '../TaskForm/TaskForm';
import TaskContainer from '../TaskContainer/TaskContainer';
/* import DateSelect from "../DateSelect/DateSelect"; */
import EditForm from '../TaskForm/EditForm';
import ColorSwitcher from '../ColorSwitcher/ColorSwitcher';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';
import Account from '../../pages/Account/Account';
import ProtectedRoute from '../../pages/ProtectedRoute/ProtectedRoute';
import CategoryHeading from '../CategoryHeading/CategoryHeading';

function App() {
  const { showForm, isEditing, loading, user } = useCardContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={showForm || isEditing ? 'background-blur' : ''}>
                <Header />
                {user && <CategoryHeading />}

                {/* <DateSelect /> */}
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
                {loading && (
                  <AiOutlineLoading3Quarters className="animate-spin text-4xl inline-block" />
                )}
                <TaskContainer />
                {/*   <div className="added-plus2"></div> */}
              </div>
              {!showForm && !isEditing && <ColorSwitcher />}
            </>
          }
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/sign-up"
          element={<Signup />}
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
