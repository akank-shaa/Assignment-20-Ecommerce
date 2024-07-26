import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useFormik } from "formik";

function SignUp() {
    function handleSignup() {
    }
    
    const schema = Yup.object().shape({
        name: Yup.string().required("Please Enter Full-Name!"),
        email: Yup.string().required("Please Enter Email!"),
        useranme: Yup.string().required("Please Enter Username!"),
        password: Yup.string().required("Please Enter Password!").min(8, "Password must be minimum of 8 characters"),
        confirm_pass: Yup.string().required("Please confirm your pssword").min(8),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            username: "",
            password: "",
            confirm_pass: "",
        },
        onSubmit: handleSignup,
        validationSchema: schema,
    })

    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col bg-white w-2/5 px-4 py-2 self-center rounded-xl shadow-md gap-4">
                <h1 className="self-center py-4 text-3xl text-indigo-500 font-bold"> Sign Up Page</h1>
                <h2 className="text-2xl text-gray-600 font-semibold mx-4">Create Your Account</h2>
                <div className="mx-4">
                    <label htmlFor="name">Name</label>
                    <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        id="name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formik.values.name}
                        placeholder="Enter Your Name Here"
                        className="relative block w-full appearance-none sm:rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {formik.touched.name && formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}
                <div className="mx-4">
                    <label htmlFor="email" className="">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address Here"
                        id="email"
                        autoComplete="email"
                        required
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="relative block w-full appearance-none sm:rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    {formik.errors.email && formik.touched.email && <div className="text-red-500">{formik.errors.email}</div>}
                </div>
                <div className="mx-4">
                    <label htmlFor="username">UserName</label>
                    <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        id="username"
                        type="text"
                        name="username"
                        autoComplete="username"
                        required
                        className="relative block w-full appearance-none sm:rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={formik.values.username}
                        placeholder="Enter your Username Here" />
                </div>
                {formik.touched.username && formik.errors.username && <div className="text-red-500">{formik.errors.username}</div>}

                <div className="mx-4">
                    <label htmlFor="password" className="">Password</label>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        name="password"
                        autoComplete="password"
                        required
                        placeholder=" Enter Your Password Here"
                        id="password"
                        className="relative block w-full appearance-none sm:rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    {formik.errors.password && formik.touched.password && <div className="text-red-400">{formik.errors.password}</div>}
                </div>
                <div className="mx-4">
                    <label htmlFor="confirm_pass" className="">  Confirm Password</label>
                    <input
                        value={formik.values.confirm_pass}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        type="password"
                        autoComplete="confirm_password"
                        name="confirm_pass"
                        placeholder=" Re-Enter Your Password"
                        id="confirm_pass"
                        className="relative block w-full appearance-none sm:rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                    {formik.errors.confirm_pass && formik.touched.confirm_pass && <div className="text-red-400">{formik.errors.confirm_pass}</div>}
                </div>
                <Button
                    disabled={!formik.isValid}
                    type="submit"
                    name="Sign-Up"
                    className="self-end mx-4 font-semibold text-xl text-white"
                />
                <span className="self-center">
                    Already have an Account?
                    <Link className="text-indigo-700 p-2 text-xl font-semibold" to="/Login">
                        Log-In
                    </Link>
                </span>
            </form >
        </div >
    );
}

export default SignUp;