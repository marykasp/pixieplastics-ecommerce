import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { name, price, description } = product;
  return (
    <section className="pt-32 pb-32 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={`/assets/toy${id}-lg.png`}
              alt={name}
            />
          </div>
          <div className="flex-1 text-center lg:text-left bg-gray-50 px-[40px] py-[24px]">
            <h1 className="text-[26px] font-light mb-2 uppercase tracking-wide max-w-[450px] mx-auto lg:mx-0">
              {name}
            </h1>
            <div className="text-xl text-secondary font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-text text-white py-4 px-8 border border-text-2 rounded-sm hover:bg-white hover:text-text transition-all duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
