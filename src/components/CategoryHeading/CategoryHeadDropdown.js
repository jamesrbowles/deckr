import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useCardContext } from '../../hooks/Context';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

const CategoryHeadDropdown = ({ trigger }) => {
  const {
    headCatOpen,
    handleSetHeadCategory,
    categories,
    headCategory,
    handleHeadCatOpen,
    setHeadCatOpen,
  } = useCardContext();

  const handleClickDropAway = () => {
    setHeadCatOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickDropAway}>
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        <div>
          <Menu.Button
            className="rounded-md w-[34px] h-[34px] flex justify-center items-center transition-all"
            style={{ backgroundColor: headCategory.color }}
            onClick={handleHeadCatOpen}
          >
            {headCatOpen ? (
              <FaChevronUp className="text-violet-200 hover:text-violet-100 transition-all" />
            ) : (
              <FaChevronDown className="text-violet-200 hover:text-violet-100 transition-all" />
            )}
          </Menu.Button>
        </div>
        <Transition
          show={headCatOpen}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute flex flex-col right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  z-50">
            {categories.map((menuItem, index) => (
              <Menu.Item
                key={index}
                as="button"
                onClick={() => handleSetHeadCategory(menuItem)}
                className=""
              >
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                    } group flex w-full items-center rounded-md mr-4 py-2 text-sm cursor-pointer`}
                  >
                    <div
                      className="py-2 px-2 rounded-sm mx-3"
                      style={{ backgroundColor: menuItem.color }}
                    />
                    {menuItem.name}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </ClickAwayListener>
  );
};

export default CategoryHeadDropdown;
