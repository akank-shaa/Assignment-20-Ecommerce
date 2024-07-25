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
                <h1 className="font-bold text-3xl text-center">Add Items to Your Cart<br />My Dear Customer</h1>
                <div className="flex justify-center">
                    <Link className="text-indigo-700 font-bold text-5xl" to="/">HOME</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="bg-white flex flex-col gap-6 mx-10">
            <div className="mx-24 mt-24 border">
                <div className="border justify-around flex py-3 bg-zinc-100 text-gray-600">
                    <h3 className="font-semibold text-xl w-1/2 text-center">Product</h3>
                    <div className="flex justify-evenly gap-x-32 items-center">
                        <h6 className="font-semibold text-xl">Price</h6>
                        <h3 className="font-semibold text-xl">Quantity</h3>
                        <h3 className="font-semibold text-xl">SubTotal</h3>
                    </div>
                </div>
                <div className="grid grid-flow-row">
                    {cartKey.map(function (item) {
                        return (
                            <>
                                <CartDetails id={item} quantity={cart[item]} />
                            </>
                        )
                    })}
                </div>
                <div className="flex p-2 justify-between">
                    <div className="flex gap-2 m-3">
                        <input className="border border-gray-300 p-1" type="text" placeholder="Coupon Code" />
                        <CartButton className="text-white" name="APPLY COUPON"></CartButton>
                    </div>
                    <div className="flex gap-2 text-xl m-2">
                        <Link to="/">
                            <CartButton className="text-white" name="UPDATE CART"></CartButton>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-24 flex flex-col self-end w-2/5">
                <div className="flex flex-col border">
                    <h1 className="font-semibold border text-xl bg-gray-50 text-gray-600 py-4 px-4">Cart totals</h1>
                    <div className="flex text-gray-800 font-semibold gap-32 px-8 py-4">
                        <h2 className="">Subtotal</h2>
                        <h2>${totalCount}</h2>
                    </div>
                    <hr />
                    <div className="flex gap-36 text-gray-800 font-semibold  py-4 px-8">
                        <h2>Total</h2>
                        <h2>${totalCount}</h2>
                    </div>
                </div>
                <CartButton className="text-white m-4" name="PROCEED TO CHECKOUT"></CartButton>
            </div>
        </div>

    )
}

export default CartListPage;