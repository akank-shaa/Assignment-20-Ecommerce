import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import CartPage from './CartPage';
import SignUp from './SignUp';
import ForgetPass from './ForgetPass';
import Login from './Login';
import AuthRoute from './AuthRoute';
import UserRoute from './UserRoute';
import DashBoard from './DashBoard';
import Alert from './Alert';
import UserProviders from './providers/UserProviders';
import AlertProvider from './providers/AlertProvider';

function App() {

    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart, setCart] = useState(savedData);
    // const [query, setQuery] = useState("");

    // function handleSearch(event) {
    //     setQuery(event.data.value);
    // }

    // useEffect(function () {
    // }, [query]);


    function handleAddToCart(productId, count) {
        const oldCart = cart[productId] || 0;

        // setCart({...cart, [productId]: oldCount + count});

        const newCart = { ...cart, [productId]: oldCart + count };
        updateCart(newCart);
    }

    function updateCart(newCart) {
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
            <UserProviders>
                <AlertProvider>
                    <Alert />
                    <Navbar photo="src/Amazon.png" productCount={totalCount} />
                    {/* <div className='p-5 '>
                        <Input
                            onChange={handleSearch}
                            id="search"
                            name="name"
                            label="Search"
                            className="w-36"
                            value={query}
                            placeholder="Search"
                        />
                    </div> */}
                    <div className='grow'>
                        <Routes>
                            <Route
                                element={
                                    <UserRoute>
                                        <DashBoard />
                                    </UserRoute>}
                            />
                            <Route index element={<ProductListPage />} />
                            <Route path='/products/:id' element={<ProductDetail onAddToCart={handleAddToCart} />} />
                            <Route path='*' element={<NotFound />} />
                            <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart} />} />
                            <Route
                                path="/login"
                                element={
                                    <AuthRoute >
                                        <Login />
                                    </AuthRoute>
                                }
                            />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path='/forget' element={<ForgetPass />} />
                        </Routes>
                    </div>
                    <Footer />
                </AlertProvider>
            </UserProviders>
        </div>
    );
}

export default App;