import React from "react";
import Product from "./Product";

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      brand: `Brand ${i}`,
      description: "This is a great product",
      price: (Math.random() * 100).toFixed(2),
    });
  }
  return products;
};

const ProductList = () => {
  const products = generateProducts();

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          >
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
