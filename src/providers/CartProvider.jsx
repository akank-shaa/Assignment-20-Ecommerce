import React, { useEffect, useState } from "react";
import { CartContext } from "../Contexts";
import { withUser } from "../withProvider";
import { getCart, getProductByIds, saveCart } from "../Api";
import { set } from "lodash";

function CartProvider({ isLoggedIn, children }) {
    const [cart, setCart] = useState([]);

    useEffect(function () {
        if (!isLoggedIn) {
            //get from server using API
            getCart().then(function (savedCart) {
                setCart(savedCart);
            });
        } else {
            const savedDataString = localStorage.getItem("my-cart") || "{}";
            const savedData = JSON.parse(savedDataString);
            // setCart(savedData);
            quantityMapToCart(savedData);

        }
    },
        [isLoggedIn]
    );

    function quantityMapToCart(quantityMap) {
        getProductByIds(Object.keys(quantityMap)), then(function (products) {
            const savedCart = products.map((p) =>
            ({
                product: p,
                quantity: quantityMap[p.id]
            }));

            setCart(savedCart);
        });
    }

    function handleAddToCart(productId, count) {
        const quantityMap = cart.reduce(
            (m, cartItem) =>
                ({ ...m, [cartItem.product.id]: cartItem.quantity })
            , {}
        );

        const oldCart = quantityMap[productId] || 0;


        // setCart({...cart, [productId]: oldCount + count});
        const newCart = { ...quantityMap, [productId]: oldCart + count };
        updateCart(newCart);
    }

    function updateCart(quantityMap) {
        if (isLoggedIn) {
            //save on server using api
            saveCart(quantityMap).then(function (response) {
                //   setCart(response);
                quantityMapToCart(quantityMap);
            });
        } else {
            const quantityMapString = JSON.stringify(quantityMap);
            localStorage.setItem("my-cart", quantityMapString);
            quantityMapToCart(quantityMap);
        };
    }

    const cartCount = useMemo(function () {
        return (cart.reduce(function (previous, current) {
            return previous + current.quantity;
        }, 0))
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, cartCount, updateCart, handleAddToCart }}>
            {children}
        </CartContext.Provider>)

}

export default withUser(CartProvider);
