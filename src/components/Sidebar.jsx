import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// components
import CartItem from '../components/CartItem';
// import sidebar and cart context
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, totalPrice } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[25vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-md font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer flex items-center justify-center w-8 h-8"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4  mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total price */}
          <div className="uppercase font-semibold">
            <span className="mr-2 text-gray-600">Total:</span> ${' '}
            {parseFloat(totalPrice).toFixed(2)}
          </div>
          {/* clear cart */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex items-center justify-center"
          >
            <FiTrash2 />
          </div>
        </div>
        {/* buttons */}
        <Link
          to={'/'}
          className="bg-gray-200 flex p-4 justify-center items-center text-text w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={'/'}
          className="bg-text flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
