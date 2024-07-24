import React, { useEffect, useState, useMemo, useCallback } from 'react';
import ProductList from './ProductList';
import NoMatching from './NoMatching';
import { getProductList } from './Api';
import Loading from './Loading';

function ProductListPage() {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        getProductList().then(function (products) {
            setProductList(products);
            setLoading(false);
        });
    }, []);


    let data = productList.filter(function (items) {
        return items.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
    });

    useMemo(function () {
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
        } else if (sort == "rating") {
            data.sort(function (a, b) {
                return b.rating - a.rating;
            });
        }
    }, [sort, data])

    const handleQueryChange = useCallback(function (event) {
        setQuery(event.target.value);
    }, [query]
    )

    const handleSortChange = useCallback(function (event) {
        setSort(event.target.value);
    }, [sort]
)

    if (loading) {
        return <Loading />
    }


    return (
        <div className="max-w-6xl mx-auto bg-white px-28 py-12">
            <div className="flex gap-4 p-6 justify-end">
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
                    <option value="rating">Sort by Rating</option>
                </select>
            </div>
            {data.length > 0 && <ProductList products={data} />}
            {data.length == 0 && <NoMatching>No Matching Product</NoMatching>}
        </div>
    )
}

export default ProductListPage;