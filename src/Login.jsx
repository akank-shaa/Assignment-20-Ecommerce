import React from "react";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";


function Login() {

    function callLoginApi(values) {
    }

    //{email:hello@codeyogi.io, myPassword:"123"}
    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        myPassword: Yup.string().min(8).required(),
    }); //structured validation

    const {
        handleSubmit,
        values,
        handleChange,
        resetForm,
        errors,
        handleBlur,
        touched,
        isValid,
        dirty
    } = useFormik({
        initialValues: {
            email: "",
            myPassword: "",
        },
        onSubmit: callLoginApi, //key k andar function
        validationSchema: schema,
    });

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-100 font-['Poppins']">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white">
                <h1 className="text-2xl font-bold self-center mb-4">
                    Login to CodeYogi
                </h1>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email Address
                    </label>
                    <input
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email-address"
                        type="email"
                        required
                        autoComplete="email"
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email Address"
                    />
                    {touched.email && errors.email && (
                        <div className="text-red-700">{errors.email}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        value={values.myPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="password"
                        name="myPassword"
                        required
                        type="password"
                        autoComplete="current-password"
                        className="relative block w-full appearance-none rounded-none
                         rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
                          placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                          focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                    />
                    {touched.myPassword && errors.myPassword && (
                        <div className="text-red-700">{errors.myPassword}</div>
                    )}
                </div>
                <Button
                    type="submit"
                    className="self-end mt-3"
                    disabled={!isValid}
                >
                    Login
                </Button>
                <Button
                    type="button"
                    onClick={resetForm}
                    className="self-end mt-3">
                    Reset
                </Button>
            </form>
        </div>
    );
}

export default Login;