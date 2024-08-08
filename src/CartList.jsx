import React, { useState, useEffect } from "react";
import CartButton from "./CartButton";
import CartRow from "./CartRow";
import { withCart } from "./withProvider";
//Product, CartProduct

function CartList({ cart, updateCart }) {

    const [quantityMap, setQuantityMap] = useState({});
    const cartToQuantityMap = () => cart.reduce(
        (m, cartItem) =>
            ({ ...m, [cartItem.product.id]: cartItem.quantity })
        , {}
    );

    useEffect(
        function () {
            setQuantityMap(cartToQuantityMap);
        },
        [cart]
    );

    function handleQuantityChange(productId, newValue) {
        const newQuantityMap = { ...quantityMap, [productId]: newValue };
        setQuantityMap(newQuantityMap);
    }

    function handleUpdateCartClick() {
        // const newCart = cart.map(item => ({
        //     ...item,
        //     quantity: quantityMap[item.product.id],
        // }));
        updateCart(quantityMap);
    }

    function handleRemove(productId) {
        const newQuantityMap = cartToQuantityMap();
        delete newQuantityMap[productId];
        // const newCart = cart.filter(item => item.product.id === productId);
        updateCart(newQuantityMap);
    }

    return (
        <div>
            <div className="bg-gray-100 bprder border-gray-300 flex space-x-4 px-4 py-2">
                <span className="grow ml-32">Product</span>
                <span className="w-20">Price</span>
                <span className="w-32">Quantity</span>
                <span className="w-20">SubTotal</span>
            </div>
            {cart.map((cartItem) => (
                <CartRow
                    key={cartItem.product.id}
                    product={cartItem.product}
                    quantity={quantityMap[cartItem.quantity.id]}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                />
            ))}
            <div className="px-4 py-2 flex justify-end border border-gray-300">
                <CartButton onClick={handleUpdateCartClick}>UPDATE CART</CartButton>
            </div>
        </div>
    )
}

export default withCart(CartList);