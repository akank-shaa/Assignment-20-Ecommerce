import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getProductData } from "./Api";
import CartButton from "./CartButton";
import CartDetails from "./CartDetails";

function CartListPage({ cart }) {
    const [cartItem, setCartItem] = useState([]);
    const cartKey = Object.keys(cart);
    const totalCount = cartItem.reduce(function (previous, current) {
        return previous + cart[current.id] * current.price;
    }, 0).toFixed(2);

    const allPromise = useCallback(Promise.all(cartKey.map(function (id) {
        return getProductData(id);
    })));

    useEffect(function () {
        allPromise.then(function (data) {
            setCartItem(data);
        })

    }, [cartKey])

    if (cartKey.length == 0) {
        return (
            <div className="flex flex-col gap-5 mx-auto">
                <h1 className="bold text-3xl">Add Items to Your Cart</h1>
                <div className="flex justify-center">
                    <Link className="" to="/">HOME</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2 py-2 px-8 sm:justify-between bg-gray-100">
                <h3 className="bold text-2xl">Product</h3>
                <h3 className="bold text-2xl">Name</h3>
                <h3 className="bold text-2xl">Price</h3>
                <h3 className="bold text-2xl">Quantity</h3>
                <h3 className="bold text-2xl">SubTotal</h3>
            </div>
            {cartKey.map(function (item) {
                return (
                    <>
                        <CartDetails id={item} quantity={cart[item]} />
                    </>
                )
            })}
            <div className="flex p-2 justify-between">
                <div className="flex gap-2">
                    <input className="border border-gray-200 p-1" type="text" placeholder="Coupon Code" />
                    <CartButton name="APPLY COUPON"></CartButton>
                </div>
                <Link to="/">
                    <CartButton name="UPDATE CART"></CartButton>
                </Link>
            </div>
            <div className="border self-end sm:mx-8 flex flex-col gap-4 min-w-80 max-w-96 px-4 py-2">
                <h1 className="px-2 py-2 bold text-xl bg-gray-100">Cart totals</h1>
                <div className="flex flex-col gap-2">
                    <div className="px-2 flex gap-16 justify-between">
                        <h2>Subtotal</h2>
                        <h2>${totalCount}</h2>
                    </div>
                    <hr />
                    <div className="px-2 flex gap-16 justify-between">
                        <h2>Total</h2>
                        <h2>${totalCount}</h2>
                    </div>
                    <hr />
                </div>
                <CartButton name="PROCEED TO CHECKOUT"></CartButton>
            </div>
        </div>

    )
}

export default CartListPage;