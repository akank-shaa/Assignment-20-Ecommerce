// import React, { useState, useEffect } from 'react';
// import { getProductData } from "./Api";
// import CartRow from "./CartRow";

// function Cart(cart) {
//     const [cartList, setCartList] = useState([]);

//     useEffect(function (cart) {
//         const promise = Object.keys(cart).map(function (id) {
//             return getProductData(id);
//         });
//         const mainPromise = Promise.all(promise);
//         mainPromise.then(function (products) {
//             setCartList(products);
//         });
//     });
    
//     cartList.map(function (item) {
//         return (
//             <CartRow {...item} plus={cart.cart} />
//         );
//     })
//     return (
//         <div>
//             {cart}
//         </div>
//     );
// }

// export default Cart;
