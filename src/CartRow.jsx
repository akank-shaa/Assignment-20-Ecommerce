import React from 'react';
import { ImCross } from 'react-icons/im';

function CartRow({ product, quantity, onQuantityChange, onRemove }) {

    function handleChange(event) {
        onQuantityChange(product.id, +event.target.value);
    }

    function handleCrossClick() {
        onRemove(product.id);
    }
    
    return (
        <div className='flex max-w-5xl space-x-4 items-center px-4 py-2 border
        border-gray-300'>
            <span className='w-10 h-10 flex items-center'>
                <ImCross className="cursor-pointer" onClick={handleCrossClick} />
            </span>
            <div className='w-10 h-10'>
                <img className='w-full h-full object-cover' src={product.thumbnail} />
            </div>
            <h3 className='grow'>{product.title}</h3>
            <span className="w-20">${product.price}</span>
            <div className='w-32'>
                <input
                    type="number"
                    className="border w-12 mx-2 text-gray-900 border-gray-300 rounded-md" placeholder={quantity}
                    value={quantity}
                    onChange={handleChange}
                />
            </div>
            <span className='w-20'>${(product.price * quantity).toFixed(2)}</span>
        </div>
    )
}

export default CartRow;


/*
import React, { useEffect } from "react";


function CartRow({ thumbnail, title, price, quantity, SubTotal }) {
    useEffect(function () {
        return (
            <div className="flex justify-between border px-8 py-2">
                <div className="h-10">
                    <img src={thumbnail} className="h-full" />
                </div>
                <h1 className="">{title}</h1>
                <span>${price}</span>
                <span>{quantity}</span>
                <span>${SubTotal}</span>
            </di  v>
        );
    });
}
export default CartRow;
*/
