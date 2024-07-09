import React from 'react';
import { useParams } from 'react-router-dom';
import allData from './DummyData';
import { HiArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    let product;

    for (let i = 0; i < allData.length; i++) {
        const p = allData[i];
        if (id == p.id) {
            product = p;
            break;
        }
    }

    return (
        <>
            <div className="bg-neutral-100 w-[1152px] h-[656px] mx-auto my-8 pt-14 pb-6">
                <Link className="text-indigo-500" to="/">
                    <HiArrowLeft className="text-3xl m-5" />
                </Link>
                <div className="flex bg-white mx-5 px-10 py-6 font-['Poppins']">
                    <img className="w-1/2" src={product.photo} alt="Coffee Mug" />
                    <div className="flex flex-col gap-3 mx-10">
                        <h1 className="text-zinc-600 text-[33px] font-medium">{product.title}</h1>
                        <h2 className="text-[26px] text-gray-600 font-semibold">${product.price}</h2>
                        <p className="text-lg font-medium text-gray-500 ">
                            Neque porro quisquam est, qui dolor ipsum quia dolor sit amet,
                            consectetur adipisci velit, sed quia non incidunt
                            lores to porro ame, numquam eius modi tempora
                            incidunt lores to porro ame.
                        </p>
                        <div className="flex gap-x-1 mt-4">
                            <input className="border border-gray-700 text-gray-500 text-lg w-12 pl-4" value="1" type="number"></input>
                            <button className="bg-red-500 text-slate-100 font-semibold text-lg px-10 py-1 rounded-md">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;