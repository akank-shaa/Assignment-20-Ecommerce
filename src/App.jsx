import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage';

function App() {
    return (
        <div class="bg-zinc-100 flex flex-col gap-14 font-['Poppins']">
            <div class="bg-white h-20">
                <Navbar photo="src/Amazon.png" />
            </div>

            <div>
                <ProductListPage />
            </div>

            <div class="bg-gray-700">
                <Footer />
            </div>

            <div>
                <ProductDetail />
            </div>
        </div>
    );
}

export default App;