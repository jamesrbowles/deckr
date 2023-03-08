import '../TaskForm/TaskForm.css';
import ClickAwayListener from '@mui/base/ClickAwayListener';
/* import categories from "../Categories/categories"; */
import { useCardContext } from '../../hooks/Context';

const CategoryHeadDropdown = ({ trigger }) => {
  const { open, setOpen, handleSetCategory, categories } = useCardContext();
  /*   const handleClickDropAway = () => {
    setOpen(false);
  }; */
  console.log(open);
  return (
    <ClickAwayListener /* onClickAway={handleClickDropAway} */>
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {categories.map((menuItem, index) => (
              <li
                key={index}
                onClick={() => handleSetCategory(menuItem)}
                className="bg-white flex items-center"
              >
                <div
                  className="py-2 px-2 rounded-sm mx-3"
                  style={{ backgroundColor: menuItem.color }}
                />
                <span className="py-1 flex">{menuItem.title}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default CategoryHeadDropdown;
