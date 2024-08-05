import React, { useEffect } from 'react';
import { useState, useMemo } from 'react';
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
import Loading from './Loading';
import AuthRoute from './AuthRoute';
import UserRoute from './UserRoute';
import DashBoard from './DashBoard';

function App() {

    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart, setCart] = useState(savedData);
    const [query, setQuery] = useState("");
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios.get("https://myeasykart.codeyogi.io/me", {
                headers: {
                    Authorization: token,
                }
            }).then((response) => {
                setUser(response.data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    function handleSearch(event) {
        setQuery(event.data.value);
    }

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

    if (loading) {
        return <Loading />
    }

    return (
        <div className="grow flex flex-col justify-between h-screen w-screen gap-14 font-['Poppins']">
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
                    <Route element={
                        <AuthRoute user={user}>
                            <DashBoard user={user} setUser={setUser}/>
                        </AuthRoute>} />
                    <Route index element={<ProductListPage />} />
                    <Route path='/products/:id' element={<ProductDetail onAddToCart={handleAddToCart} />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart} />} />
                    <Route path="/login" element={
                        <UserRoute user={user}>
                            <Login setUser={setUser} />
                        </UserRoute>
                    }
                    />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path='/forget' element={<ForgetPass />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;