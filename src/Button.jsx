import { memo } from "react";

function Button({ name, type, className, ...props }) {
    return (
        <button
            {...props}
            className={"rounded-md px-4 py-2 bg-indigo-700 disabled:bg-indigo-300 text-white" + "" + className}
            type={type}
        >{name}
        </button>
    );
}

export default memo(Button);

//pure components - jo ki pure function se bane ho

//pure function - output depends only on input
//impure function - output depends on other things as well