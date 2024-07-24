import React, { useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";

function CartRow({ thumbnail, title, price }) {

    useEffect(function () {
        return (
            <div className="flex gap-x-4 justify-between items-end border p-4">
                <RxCrossCircled />
                <div className="h-10">
                    <img src={thumbnail} className="h-full" />
                </div>
                <h1 className="">{title}</h1>
                <p>${price}</p>
                <p></p>

            </div>
        );
    });
}
export default CartRow;