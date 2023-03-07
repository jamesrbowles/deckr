import { useCardContext } from "../../hooks/Context";
import { IoIosArrowDown } from "react-icons/io";
import CategoryDropdown from "../TaskForm/CategoryDropdown";

const CategoryHeading = () => {
  const { categories, open, setOpen, handleOpen, handleSetCategory } =
    useCardContext();
  return (
    <div className="flex justify-center items-center gap-2">
      <h2 className="text-lg sm:text-xl">{categories[0].title}</h2>

      <CategoryDropdown
        open={open}
        setOpen={setOpen}
        trigger={
          /*    <button
            type="button"
            onClick={handleOpen}
            className="dropdown-btn"
          ></button> */
          <IoIosArrowDown
            className="cursor-pointer relative"
            onClick={handleOpen}
          />
        }
        categories={categories}
        handleSetCategory={handleSetCategory}
      />
    </div>
  );
};

export default CategoryHeading;
