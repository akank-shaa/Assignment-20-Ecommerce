import React, { memo } from "react";

function CartButton({ name, className, ...props }) {
    return (
        <button
            {...props}
            className={"border rounded-md bg-red-500 px-10 py-2 text-white" + " " + className}
        >
            {name}
        </button>
    )
}

export default memo(CartButton);