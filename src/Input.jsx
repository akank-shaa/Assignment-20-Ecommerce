import React from 'react';
import FormikHOC from './FormikHOC';

function Input({
    label, value, id, className, touched, error, name, ...rest }) {

    let borderClass = " border-gray-300 focus:border-indigo-500 ";

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

export const FormikInput = FormikHOC(Input);

export default Input;


//http a state less protocol - 

//Stateless - Postman letters
//Statefull - Phone call

