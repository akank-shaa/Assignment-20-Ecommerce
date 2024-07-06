import React from 'react';
import Product from "./Product";

function ProductList({ products }) {
    return (
        <div className="flex flex-wrap w-[1024px]">
            {products.map(function (items) {
                return (
                    <Product
                        title={items.title}
                        category={items.category}
                        photo={items.photo}
                        rating={items.rating}
                        price={items.price}
                    />
                );
            })}
        </div>
    );
}

export default ProductList;