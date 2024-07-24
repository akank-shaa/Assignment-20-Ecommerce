import React from 'react';
import Product from './Product';

function ProductList({ products }) {
  return (
    <div className="md:grid grid-cols-3 gap-2 space-y-2 md:space-y-0 w-[1024px]">
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