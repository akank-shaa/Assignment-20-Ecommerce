import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "./Button";

function Login() {

    function callLoginApi(values) {
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required("Please Enter Email"),
        password: Yup.string().required("Please Enter password").min(8)
    });


    const formik = useFormik(
        {
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit: callLoginApi,
            validationSchema: schema,
        });

    return (
        <div className="flex w-screen justify-center items-center">
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col bg-white w-1/3 px-4 py-2 self-center rounded-xl shadow-md gap-4">
                <h1 className="self-center py-5 text-3xl text-indigo-500 font-bold"> Login Page</h1>
                <div className="flex flex-col gap-2 mx-4">
                    <label htmlFor="email" className="text-xl sr-only">
                        Email/Username
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email/Username"
                        id="email"
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="relative block w-full appearance-none sm:rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        autoComplete="email"
                        required
                    />
                    {formik.errors.email && formik.touched.email && <div className="text-red-600">{formik.errors.email}</div>}
                </div>

                <div className="flex flex-col gap-2 mx-4">
                    <label htmlFor="password" className="text-xl sr-only">
                        Password
                    </label>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        autoComplete="current-password"
                        required
                        name="password"
                        placeholder="Password"
                        id="password"
                        className="relative block w-full appearance-none sm:rounded-none
                         rounded-md border border-gray-300 px-3 py-2 text-gray-900
                          placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                          focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    <div className="">
                        {formik.errors.password && formik.touched.password && <div className="text-red-600">{formik.errors.password}</div>}
                        <Link className="text-blue-600 my-2 " to="/forget">Forget Password</Link>
                    </div>
                </div>
                <Button
                    disabled={!formik.isValid}
                    type="submit"
                    name="Log In"
                    className="self-end mx-4 font-semibold text-xl"
                />
                <span className="self-center">
                    Don't have an Account?
                    <Link className="text-indigo-700 p-2 text-xl font-semibold" to="/Signup">
                        Sign Up
                    </Link>
                </span>
            </form>
        </div>
    );
}

export default Login;


// <Button
// type="button"
// onClick={resetForm}
// className="self-end mt-3">
//     Reset
// </Button>