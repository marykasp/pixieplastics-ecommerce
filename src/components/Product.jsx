import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({ product }) => {
  // destructure product
  const { id, name, description, category, price, image } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={`/assets/toy-${id}.png`}
              alt={name}
              className="max-h-[190px] group-hover:scale-110 transition duration-300"
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button>
              <div className="flex justify-center items-center text-white bg-tertiary w-12 h-12">
                <BsPlus className="text-4xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-quatenary flex items-center justify-center text-text drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">
          {category} collection
        </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{name}</h2>
        </Link>
        <div className="font-semibold text-tertiary">${price}</div>
      </div>
    </div>
  );
};

export default Product;
