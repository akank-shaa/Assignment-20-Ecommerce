import React, { useEffect } from 'react';
import { useState, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';

function App() {

    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);

    const [cart, setCart] = useState(savedData);

    function handleAddToCart(productId, count) {
        const oldCount = cart[productId] || 0;

        // setCart({...cart, [productId]: oldCount + count});

        const newCart = { ...cart }
        newCart[productId] = oldCount + count; //object mutation
        setCart(newCart);
        const cartString = JSON.stringify(newCart);
        useEffect(() => {
            localStorage.setItem("my-cart", cartString);
        }, []);
    }

    const totalCount = useMemo(function () {

        return (Object.keys(cart).reduce(function (previous, current) {

            return previous + cart[current];

        }, 0))
    }, [cart]);

    return (
        <div className=" grow bg-zinc-100 flex flex-col gap-14 font-['Poppins']">
            <div className="bg-white h-20">
                <Navbar photo="src/Amazon.png" productCount={totalCount} />
            </div>
            <div className='grow'>
                <Routes>
                    <Route index element={<ProductListPage />} />
                    <Route path='/products/:id' element={<ProductDetail onAddToCart={handleAddToCart} />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>

            <div className="bg-gray-700">
                <Footer />
            </div>
        </div>
    );
}

export default App;