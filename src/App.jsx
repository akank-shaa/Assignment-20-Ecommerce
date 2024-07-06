import React from 'react';
import Product from './Product';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';

function App() {
    return (
        <div class="bg-zinc-100 flex flex-col gap-14">
            <div class="bg-white h-24">
                <Navbar photo="src/Amazon.png" />
            </div>
            <div class="w-[1100px] mx-auto">
                <div class="bg-white grid grid-cols-3 px-20 py-32">
                    <Product photo="https://taskroom.in/wp-content/uploads/2018/06/mug-white.jpg" title="Black Printed Coffee Mug" category="Mugs" rating="src/download.png" price="$15.00" />
                    <Product photo="https://taskroom.in/wp-content/uploads/2018/06/mug-coffee.jpg" title="Father's Day Coffee Mug" category="Mugs" rating="src/download.png" price="$19.00" />
                    <Product photo="http://bestieindia.com/wp-content/uploads/2021/03/tshirt1.jpg" title="Green Printed T-Shirt" category="Tshirts" rating="src/download.png" price="$34.00" />
                    <Product photo="https://taskroom.in/wp-content/uploads/2018/06/mug-red.jpg" title="Personalised Mug" category="Mugs" rating="src/download.png" price="$15.00" />
                    <Product photo="https://erlk.shop/wp-content/uploads/2018/06/tshirt6-300x300.jpg" title="Printed Brown T-Shirt" category="Tshirts" rating="src/download.png" price="$25.00" />
                    <Product photo="https://erlk.shop/wp-content/uploads/2018/06/tshirt2-300x300.jpg" title="Printed Dark Blue T-Shirt" category="Tshirts" rating="src/download.png" price="$34.00" />
                    <Product photo="https://erlk.shop/wp-content/uploads/2018/06/tshirt5-300x300.jpg" title="Printed Green T-Shirt" category="Tshirts" rating="src/download.png" price="$28.00" />
                    <Product photo="https://erlk.shop/wp-content/uploads/2018/06/tshirt3-300x300.jpg" title="Printed Tshirt Coffee Black Color" category="Tshirts" rating="src/download.png" price="$25.00" />
                    <Product photo="https://erlk.shop/wp-content/uploads/2018/06/tshirt7-300x300.jpg" title="Typography Teal Printed Tshirt" category="Tshirts" rating="src/download.png" price="$32.00" />
                </div>

            </div>
            <div class="py-8 bg-gray-700">
                <Footer />
            </div>
            <ProductDetail/>
        </div>
    );
}

export default App;