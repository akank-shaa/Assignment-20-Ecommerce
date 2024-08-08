import CartList from "./CartList";
import React, { useEffect, useState } from "react";
import { getProductByIds, getProductData } from "./Api";
import Loading from "./Loading";
import { Link } from 'react-router-dom';
import { withCart } from "./withProvider";


function CartPage() {
    // const [loading, setLoading] = useState(true);
    // const [products, setProducts] = useState([]);

    // useEffect(
    //     function () {
    //         setLoading(true);
    //         const productIds = Object.keys(cart);
    //         // const myProductPromises = productIds.map(function (id) {
    //         //     return getProductData(id);
    //         // });
    //         // Promise.all(myProductPromises)
    //         getProductByIds(productIds).then(function (products) {
    //             setProducts(products);
    //             setLoading(false);
    //         });
    //     },
    //     [cart]
    // );

    // if (loading) {
    //     return <Loading />
    // }

    // if (productId.length == 0) {
    //     return (
    //         <div className="flex flex-col gap-5 mx-auto">
    //             <h1 className="font-bold text-3xl text-center">Add Items to Your Cart<br />My Dear Customer</h1>
    //             <div className="flex justify-center">
    //                 <Link className="text-indigo-700 font-bold text-5xl" to="/">HOME</Link>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="h-screen p-20 bg-white max-w-6xl mx-auto">
            <CartList />
        </div>
    );
}

export default CartPage;