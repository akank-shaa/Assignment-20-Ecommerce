import React from 'react';

function ProductDetail() {
    return (
        <>
            <div className="bg-neutral-100 w-[1116px] h-[656px] m-auto my-8 pt-14 pb-6">
                <div className="flex bg-white mx-5 px-10 pt-6 pb-8 font-['Poppins']">
                    <img className="w-50%" src="https://mrmuch.com/wp-content/uploads/2018/06/mug-coffee.jpg" alt="Coffee Mug" />
                    <div className="flex flex-col gap-3 mx-10">
                        <h1 className="text-[26px] text-gray-600 font-semibold">Black Printed Coffee Mug</h1>
                        <input className="border border-gray-700 rounded-md w-4" value="1" type="text"></input>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;