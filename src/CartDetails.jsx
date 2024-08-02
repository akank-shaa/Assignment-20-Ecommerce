// import React, { useEffect, useState, memo } from "react";
// import { getProductData } from "./Api";
// import { ImCross } from 'react-icons/im'

// function CartDetails({ id, quantity }) {

//     const [product, setProduct] = useState();
//     useEffect(function () {
//         getProductData(id).then(function (data) {
//             setProduct(data);
//         })
//     }, [])

//     if (!product) {
//         return (
//             <></>
//         );
//     }

//     return (
//         <div className="flex h-24 space-x-5 border border-gray-100">
//             <div className="flex w-1/2 gap-x-16 ml-5">
//                 <button productid={item.id} onClick={handleRemove}>
//                     <ImCross />
//                 </button>
//                 <img src={product.thumbnail} className="h-20 object-cover" alt={product.name} />
//                 <p className="text-red-500 font-semibold text-xl flex text-left items-center">{product.title}</p>
//             </div>
//             <div className="flex w-1/2 text-left items-center justify-around">
//                 <span className="font-semibold">${product.price}</span>
//                 <input
//                     type="number"
//                     className="border w-10 p-1 text-gray-900" placeholder={quantity}
//                     value={localCart[item.id]}
//                     onChange={function (event) {
//                         handleChange(+event.target.value, item.id);
//                     }}
//                 />
//                 <span className="font-semibold">${(product.price * quantity.toFixed(2))}</span>
//             </div>
//         </div>
//     )
// }

// export default memo(CartDetails);
