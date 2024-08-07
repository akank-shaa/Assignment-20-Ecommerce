import React, { useEffect, useState, useMemo, useCallback } from 'react';
import ProductList from './ProductList';
import NoMatching from './NoMatching';
import { getProductList } from './Api';
import Loading from './Loading';
import { range, replace } from 'lodash';
import { Link, useSearchParams } from 'react-router-dom';

function ProductListPage() {
    const [productData, setProductData] = useState();
    // const [query, setQuery] = useState("");
    // const [sort, setSort] = useState("default");
    const [loading, setLoading] = useState(true);
    // const [page, setPage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();

    const params = Object.fromEntries([...searchParams]);
    let { query, sort, page } = params;

    query = query || "";
    sort = sort || "default";
    page = +page || 1;

    useEffect(function () {
        let sortBy;
        let sortType;

        if (sort = 'title') {
            sortBy = 'title';
        } else if (sort == 'lowToHigh') {
            sortBy = 'price';
        } else if (sort == 'highToLow') {
            sortBy = 'price';
            sortType = 'desc';
        }


        getProductList({ sortBy, query, page, sortType }).then(function (xyz) {
            setProductData(xyz);
            setLoading(false);
        });
    }, [sort, query, page]);

    // useEffect(() => { }, [query, sort]);


    // let data = productList.filter(function (items) {
    //     return items.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
    // });

    // useMemo(function () {
    //     if (sort == 'price1') {
    //         data.sort(function (a, b) {
    //             return a.price - b.price;
    //         });
    //     } else if (sort == 'price2') {
    //         data.sort(function (a, b) {
    //             return b.price - a.price;
    //         });
    //     } else if (sort == 'name') {
    //         data.sort(function (a, b) {
    //             return a.title < b.title ? -1 : 1;
    //         });
    //     } else if (sort == "rating") {
    //         data.sort(function (a, b) {
    //             return b.rating - a.rating;
    //         });
    //     }
    // }, [sort, data])

    // const handleQueryChange = useCallback(function (event) {
    //     setQuery(event.target.value);
    // }, [query]
    // )

    // const handleSortChange = useCallback(function (event) {
    //     setSort(event.target.value);
    // }, [sort]
    // )

    function handleSearch(event) {
        setSearchParams(
            { ...params, query: event.target.value, page: 1 },
            { replace: false }
        );
    }

    function handleSort(event) {
        setSearchParams(
            { ...params, sort: event.target.value },
            { replace: false }
        );
    }

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
                    onChange={handleSearch}
                />
                <select
                    onChange={handleSort}
                    className="border border-gray-300 text-sm p-2 text-gray-500"
                    value={sort}
                >
                    <option value="default">Default Sort</option>
                    <option value="title">Sort By Title</option>
                    <option value="lowToHigh">Sort By Price:low to high</option>
                    <option value="highToLow">Sort By Price:high to low</option>
                    <option value="rating">Sort by Rating</option>
                </select>
            </div>
            {productData.data.length > 0 && <ProductList products={productData.data} />}
            {productData.data.length == 0 && <NoMatching>No Matching Product</NoMatching>}
            {range(1, productData.meta.last_page + 1).map((pageNo) => (
                <Link
                    key={pageNo}
                    to={"?" + new URLSearchParams({ ...params, page: pageNo })}
                    className={'p-2 m-1 ' + ((pageNo == page) ? 'bg-red-500' : 'bg-indigo-700')}
                >
                    {pageNo}
                </Link>
            ))}

            {/* <Button onClick={() => setPage(1)}>1</Button>
            <Button onClick={() => setPage(2)}>2</Button>
            <Button onClick={() => setPage(3)}>3</Button> */}
        </div>
    )
}

export default ProductListPage;