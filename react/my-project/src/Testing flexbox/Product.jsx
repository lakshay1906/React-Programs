import React from "react";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-1">Brand: {product.brand}</p>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <p className="text-xl font-bold mb-4">${product.price}</p>
      <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
