import React, { useState, useEffect } from "react";
import CartButton from "./CartButton";
import CartRow from "./CartRow";
//Product, CartProduct

function CartList({ products, cart, updateCart }) {
    const [localCart, setLocalCart] = useState(cart);

    useEffect(
        function () {
            setLocalCart(cart);
        },
        [cart]
    );

    function handleQuantityChange(productId, newValue) {
        const newLocalCart = { ...localCart, [productId]: newValue };
        setLocalCart(newLocalCart);
    }

    function handleUpdateCartClick() {
        updateCart(localCart);
    }

    function handleRemove(productId) {
        const newCart = { ...cart };
        delete newCart[productId]
        updateCart(newCart);
    }

    return (
        <div>
            <div className="bg-gray-100 bprder border-gray-300 flex space-x-4 px-4 py-2">
                <span className="grow ml-32">Product</span>
                <span className="w-20">Price</span>
                <span className="w-32">Quantity</span>
                <span className="w-20">SubTotal</span>
            </div>
            {products.map(function (p) {
                return (
                    <CartRow
                        key={p.id}
                        product={p}
                        quantity={localCart[p.id]}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                    />)
            })}
            <div className="px-4 py-2 flex justify-end border border-gray-300">
                <CartButton onClick={handleUpdateCartClick}>UPDATE CART</CartButton>
            </div>
        </div>
    )
}

export default CartList;