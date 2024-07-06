import React from 'react';
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="flex flex-wrap w-[1024px]">
      {products.map(function (items) {
        return (
          <Product
            {...items}
          />
        );
      })}
    </div>
  );
}

export default ProductList;