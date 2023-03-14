import { useCardContext } from "../../hooks/Context";
import { IoIosArrowDown } from "react-icons/io";
import CategoryHeadDropdown from "./CategoryHeadDropdown";

const CategoryHeading = () => {
  const { headCategory } = useCardContext();

  return (
    <div className="flex justify-center items-center gap-3">
      <h2 className="text-lg sm:text-xl"> {headCategory.name}</h2>

      <CategoryHeadDropdown />
    </div>
  );
};

export default CategoryHeading;
