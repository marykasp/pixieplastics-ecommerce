import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// components
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { useContext } from 'react';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[25vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-md font-semibold">Shopping Bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer flex items-center justify-center w-8 h-8"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
