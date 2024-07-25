import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import allData from './DummyData';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { getProductData } from './Api';
import Loading from './Loading';
import NotFound from './NotFound';

function ProductDetail({ onAddToCart }) {
    const id = parseInt(useParams().id);

    // let product;

    // for (let i = 0; i < allData.length; i++) {
    //     const p = allData[i];
    //     if (id == p.id) {
    //         product = p;
    //         break;useSearchParams
    //     }
    // }
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    useEffect(function () {
        getProductData(id).then(function (product) {
            setProduct(product);
            setLoading(false);
            setCount(1);

        }).catch(function () {
            setLoading(false);
        });
    }, [id]);

    //[k andar dependency hai.]

    //undefined -- false
    //any object -- true;


    // if (!product) {
    //     return <div className='text-indigo-700 text-3xl'>Loading...</div>
    // }

    // function handleCountChange(event) {
    //     setCount(+event.target.value);
    // }

    // function handleButtonClick() {
    //     onAddToCart(id, count);
    // }

    const handleCountChange = useCallback(function (event) {
        if (event.target.value <= 0) {
            setCount(1);
        }
        else {
            setCount(+event.target.value);
        }

    }, []);

    function handleButtonClick() {
        onAddToCart(id, count);

    }

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <NotFound />;
    }

    return (
        <>
            <div className="bg-neutral-100 w-[1152px] h-[656px] mx-auto my-8 pt-14 pb-6">
                <Link className="text-indigo-500 flex" to="/">
                    <HiArrowLeft className="text-3xl ml-4" />
                    <p className='ml-1 text-2xl'>BACK</p>
                </Link>
                <div className="flex bg-white mx-5 px-10 py-6 font-['Poppins']">
                    <img className="w-1/2" src={product.thumbnail} alt="Coffee Mug" />
                    <div className="flex flex-col gap-3 mx-10">
                        <h1 className="text-zinc-600 text-[33px] font-medium">{product.title}</h1>
                        <h2 className="text-[26px] text-gray-600 font-semibold">${product.price}</h2>
                        <p className='text-gray-500 text-xs lg:text-base'>Rating:{product.rating}/5</p>
                        <p className="text-lg font-medium text-gray-500 ">
                            {product.description}
                        </p>
                        <div className="flex gap-x-1 mt-4">
                            <input className="border border-gray-700 text-gray-500 text-lg w-12 pl-4" value={count} onChange={handleCountChange} type="number"></input>
                            <button className="bg-red-500 text-slate-100 font-semibold text-lg px-10 py-1 rounded-md" onClick={handleButtonClick}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between px-5'>
                    <div>
                        {id > 1 && (<Link className="flex items-center" to={"/products/" + (id - 1)}>
                            <HiArrowLeft className="text-2xl text-red-500" />
                            <p className='text-2xl text-red-500'>Previous</p>
                        </Link>)}
                    </div>
                    <div>
                        <Link className="flex items-center" to={"/products/" + (id + 1)}>
                            <HiArrowRight className="text-2xl text-red-500" />
                            <p className='text-2xl text-red-500'>Next</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;



// API -> Way Other software to use our software
// UI -> User Interface, GUI - Graphic User Interface
// CLI -> Command Line Interface -> npm 


// Api is set of functions

// REST API -->not using api directly
// BASE URL ->
// PATH
// Method
// DATA -what and how to send

//baseurl + path =link