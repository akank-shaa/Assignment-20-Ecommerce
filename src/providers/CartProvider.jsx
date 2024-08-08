import React, { useEffect, useState } from "react";
import { CartContext } from "../Contexts";
import { withUser } from "../withProvider";
import { getCart, saveCart } from "../Api";
import { set } from "lodash";

function CartProvider({ user, children }) {
    const [cart, setCart] = useState([]);

    useEffect(function () {
        if (!user) {
            const savedDataString = localStorage.getItem("my-cart") || "{}";
            const savedData = JSON.parse(savedDataString);
            setCart(savedData);
        } else {
            //get from server using API
            getCart().then(function (savedData) {
                setCart(savedData);
            });
        }
    }, [user]);


    function handleAddToCart(productId, count) {
        const
            oldCart = cart[productId] || 0;

        // setCart({...cart, [productId]: oldCount + count});
        const newCart = { ...cart, [productId]: oldCart + count };
        updateCart(newCart);
    }

    function updateCart(newCart) {
        setCart(newCart);
        const cartString = JSON.stringify(newCart);
        if (!user) {
            localStorage.setItem("my-cart", cartString);
        } else {
            saveCart(newCart);
            //save on server using api
        };
    }

    const cartCount = useMemo(function () {

        return (Object.keys(cart).reduce(function (previous, current) {
            return previous + cart[current];
        }, 0))
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, cartCount, updateCart, handleAddToCart }}>
            {children}
        </CartContext.Provider>)

}

export default withUser(CartProvider);
