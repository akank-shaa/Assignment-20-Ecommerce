import React, { useEffect } from 'react';
import { useState, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import CartListPage from './CartListPage';
import SignUp from './SignUp';
import ForgetPass from './ForgetPass';
import Login from './Login';
import Input from './Input';

function App() {

    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart, setCart] = useState(savedData);
    const [query, setQuery] = useState("");

    function handleSearch(event) {
        setQuery(event.data.value);
    }
    useEffect(function () {

    }, [query]);


    function handleAddToCart(productId, count) {
        const oldCart = cart[productId] || 0;

        // setCart({...cart, [productId]: oldCount + count});

        const newCart = { ...cart, [productId]: oldCart + count };
        setCart(newCart);
        const cartString = JSON.stringify(newCart);
        localStorage.setItem("my-cart", cartString);
    }

    const totalCount = useMemo(function () {

        return (Object.keys(cart).reduce(function (previous, current) {

            return previous + cart[current];

        }, 0))
    }, [cart]);


    return (
        <div className="grow flex flex-col justify-between h-screen w-screen gap-14 font-['Poppins']">
            <Navbar photo="src/Amazon.png" productCount={totalCount} />
            <div className='p-5 '>
                <Input
                    onChange={handleSearch}
                    id="search"
                    name="name"
                    label="Search"
                    className="w-36"
                    value={query}
                    placeholder="Search"
                />
            </div>
            <div className='grow'>
                <Routes>
                    <Route index element={<ProductListPage />} />
                    <Route path='/products/:id' element={<ProductDetail onAddToCart={handleAddToCart} />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path="/cart" element={<CartListPage cart={cart} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path='/forget' element={<ForgetPass />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;