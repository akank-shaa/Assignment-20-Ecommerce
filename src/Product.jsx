import React from 'react';

function Product({ title, rating, category, photo, price }) {
    return (
        <div class="w-76 h-full bg-white flex flex-col gap-2 px-2 py-5">
            <div class="w-72">
                <img class="w-full h-full object-cover" src={photo} />
            </div>
            <div class="text-gray-500 text-xs">{category}</div>
            <div class="text-sm font-bold text-gray-700">{title}</div>
            <div class="w-20">
                <img class="w-full h-full" src={rating} />
            </div>
            <div class="text-sm font-bold text-gray-700">${price}</div>
        </div>

    );
}

export default Product;