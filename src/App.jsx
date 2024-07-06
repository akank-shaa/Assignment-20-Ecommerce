import React, { useState } from 'react';
import ProductList from './ProductList';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';

function App() {
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");

    const allData = [
        {
            photo: "https://taskroom.in/wp-content/uploads/2018/06/mug-white.jpg",
            title: "Black, Printed Coffee Mug",
            category: "Mugs",
            rating: "src/download.png",
            price: "15.00",
        },
        {
            photo: "https://taskroom.in/wp-content/uploads/2018/06/mug-coffee.jpg",
            title: "Father's Day Coffee Mug",
            category: "Mugs",
            rating: "src/download.png",
            price: "19.00",
        },
        {
            photo: "http://bestieindia.com/wp-content/uploads/2021/03/tshirt1.jpg",
            title: "Green Printed T-Shirt",
            category: "Tshirts",
            rating: "src/download.png",
            price: "34.00",
        },
        {
            photo: "https://taskroom.in/wp-content/uploads/2018/06/mug-red.jpg",
            title: "Personalised Mug",
            category: "Mugs",
            rating: "src/download.png",
            price: "15.00",
        },
        {
            photo: "https://erlk.shop/wp-content/uploads/2018/06/tshirt6-300x300.jpg",
            title: "Printed Brown T-Shirt",
            category: "Tshirts",
            rating: "src/download.png",
            price: "25.00",
        },
        {
            photo: "https://erlk.shop/wp-content/uploads/2018/06/tshirt2-300x300.jpg",
            title: "Printed Dark Blue T-Shirt",
            category: "Tshirts",
            rating: "src/download.png",
            price: "34.00",
        },
        {
            photo: "https://erlk.shop/wp-content/uploads/2018/06/tshirt5-300x300.jpg",
            title: "Printed Green T-Shirt",
            category: "Tshirts",
            rating: "src/download.png",
            price: "28.00",
        },
        {
            photo: "https://erlk.shop/wp-content/uploads/2018/06/tshirt3-300x300.jpg",
            title: "Printed Tshirt Coffee Black Color",
            category: "Tshirts",
            rating: "src/download.png",
            price: "25.00",
        },
        {
            photo: "https://erlk.shop/wp-content/uploads/2018/06/tshirt7-300x300.jpg",
            title: "Typography Teal Printed Tshirt",
            category: "Tshirts",
            rating: "src/download.png",
            price: "32.00",
        },
    ];

    let data = allData.filter(function (items) {
        return items.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
    });

    if (sort == 'price1') {
        data.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sort == 'price2') {
        data.sort(function (a, b) {
            return b.price - a.price;
        });
    } else if (sort == 'name') {
        data.sort(function (a, b) {
            return a.title < b.title ? -1 : 1;
        });
    }

    function handleQueryChange(event) {
        setQuery(event.target.value);
    }

    function handleSortChange(event) {
        setSort(event.target.value);
    }

    return (
        <div class="bg-zinc-100 flex flex-col gap-14 font-['Poppins']">
            <div class="bg-white h-24">
                <Navbar photo="src/Amazon.png" />
            </div>
            <div class="w-[1152px] mx-auto bg-white p-28">
                <div class="flex gap-4 p-6 justify-end">
                    <input
                        value={query}
                        placeholder="Search"
                        className="border border-gray-300 p-1 text-sm"
                        onChange={handleQueryChange}
                    />
                    <select
                        onChange={handleSortChange}
                        className="border border-gray-300 text-sm p-1 text-gray-500"
                        value={sort}
                    >
                        <option value="default">Default Sort</option>
                        <option value="name">Sort By Title</option>
                        <option value="price1">Sort By Price:low to high</option>
                        <option value="price2">Sort By Price:high to low</option>
                    </select>
                </div>
                <ProductList products={data} />
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