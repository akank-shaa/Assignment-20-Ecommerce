import React from 'react';
import { Link } from 'react-router-dom';


function Product({ title, rating, category, thumbnail, price, id }) {
    return (
        <div className="max-w-xs h-full bg-white flex flex-col gap-2 p-2">
            <div className="w-full aspect-square">
                <img className="w-full h-full object-cover" src={thumbnail} />
            </div>
            <div className="text-gray-500 text-xs">{category}</div>
            <div className="text-sm font-bold text-gray-700">{title}</div>
            <div className="text-xs font-semibold text-gray-800">
                {rating}/5
            </div>
            <div className="text-sm font-bold text-gray-700">${price}</div>
            <Link to={"/products/" + id} className='text-indigo-600 italic'>View Details</Link>
        </div>
    );
}


export default Product;