import React from 'react';
import FormikHOC from './FormikHOC';

function FancyInput({
    label, id, className, touched, error, name, ...rest }) {

    let borderClass = " border-gray-300 focus:border-indigo-500 ";
    if (touched && error) {
        borderClass = "border-red-500";
    }

    return (
        <div className='flex flex-col gap-2 mx-4'>
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                id={id}
                value={value}
                name={name}
                className={
                    "relative block w-full appearance-none rounded-none rounded-t-md border  px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10  focus:outline-none focus:ring-indigo-500 sm:text-sm " + borderClass + className}
                {...rest}
            />
            {touched && error && (
                <div className='text-red-700'>{error}</div>
            )}
        </div>
    );
}

export const FormikFancyInput = FormikHOC(FancyInput);

export default FancyInput;