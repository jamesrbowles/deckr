import "./TaskForm.css";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import categories from "../Categories/categories";

const CategoryDropdown = ({ open, setOpen, trigger, handleSetCategory }) => {
  const handleClickDropAway = () => {
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickDropAway}>
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {categories.map((menuItem, index) => (
              <li
                key={index}
                style={{ backgroundColor: menuItem.color }}
                onClick={() => handleSetCategory(menuItem.title)}
              >
                {menuItem.title}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default CategoryDropdown;
