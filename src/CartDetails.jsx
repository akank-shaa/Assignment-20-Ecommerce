import React, { useEffect, useState, memo } from "react";
import { getProductData } from "./Api";

function CartDetails({ id, quantity }) {

    const [product, setProduct] = useState();
    useEffect(function () {
        getProductData(id).then(function (data) {
            setProduct(data);
        })
    }, [])

    if (!product) {
        return (
            <></>
        );
    }

    return (
        <div className="flex h-24 space-x-5 border border-gray-100">
            <div className="flex w-1/2 gap-x-16 ml-5">
                <img src={product.thumbnail} className="h-20 object-cover" alt={product.name} />
                <p className="text-red-500 font-semibold text-xl flex text-left items-center">{product.title}</p>
            </div>
            <div className="flex w-1/2 text-left items-center justify-around">
                <p className="font-semibold">${product.price}</p>
                <p className="border px-5 py-1 text-gray-700">{quantity}</p>
                <p className="font-semibold">${(product.price * quantity.toFixed(2))}</p>
            </div>
        </div>
    )
}

export default memo(CartDetails);
