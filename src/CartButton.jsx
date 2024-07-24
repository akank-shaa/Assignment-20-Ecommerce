import React from "react";

function CartButton({ name, className }) {
    return (
        <button className="border rounded-md bg-red-500 px-6 text-white">
            {name}
        </button>
    )
}

export default CartButton;