import React, { memo } from "react";

function CartButton({ className, ...props }) {
    return (
        <button
            {...props}
            className={"border rounded-md bg-red-500 px-10 py-2 text-white" + " " + className}
        >
        </button>
    )
}

export default memo(CartButton);