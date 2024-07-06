import React from 'react';


function Product(props) {
    return (
        <div class="w-80 h-full bg-white flex flex-col gap-2 font-['Poppins'] px-2 py-5">
            <div class="w-72">
                <img class="w-full h-full object-cover" src={props.photo} />
            </div>
            <div class="text-gray-500 text-xs">{props.category}</div>
            <div class="text-sm font-bold text-gray-700">{props.title}</div>
            <div class="w-20">
                <img class="w-full h-full" src={props.rating} />
            </div>
            <div class="text-sm font-bold text-gray-700">{props.price}</div>
        </div>

    );
}


export default Product;