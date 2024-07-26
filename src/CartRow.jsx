import React, { useEffect } from "react";
function CartRow({ thumbnail, title, price }) {

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
            </div>
        );
    });
}
export default CartRow;