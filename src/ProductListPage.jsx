import React, { useState } from 'react';
import ProductList from './ProductList';
import allData from './DummyData';

function ProductListPage() {

    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");

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
        <div class="w-[1152px] mx-auto bg-white px-28 py-12">
            <div class="flex gap-4 p-6 justify-end">
                <input
                    value={query}
                    placeholder="Search"
                    className="border border-gray-300 p-2 text-sm"
                    onChange={handleQueryChange}
                />
                <select
                    onChange={handleSortChange}
                    className="border border-gray-300 text-sm p-2 text-gray-500"
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
    )
}

export default ProductListPage;