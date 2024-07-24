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
        <div className="grid grid-flow-row">
            <div className="">
                <img src={product.thumbnail} className="h-16 object-cover" alt={product.name} />
            </div>
            <span className="">{product.title}</span>
            <span className="">${product.price}</span>
            <span className="">{quantity}</span>
            <span className="">${(product.price * quantity.toFixed(2))}</span>
        </div>
    )
}

export default memo(CartDetails);
