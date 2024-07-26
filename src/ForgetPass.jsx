import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import * as Yup from "yup";
import { useFormik } from "formik";


function ForgetPass() {
    function forgotData(values) {
    }
    const schema = Yup.object().shape({
        email: Yup.string().required("Please Enter Your Email"),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: schema,
        onSubmit: forgotData,
    })

    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col bg-white w-1/3 px-4 py-2 self-center rounded-xl shadow-md gap-4">
                <h2 className="text-2xl text-gray-600 mx-4 font-semibold">Forgot The Password</h2>
                <div className="flex flex-col gap-2 mx-4">
                    <label htmlFor="email">Email</label>
                    <input
                        onBlur={formik.handleBlur}
                        id="email"
                        onChange={formik.handleChange}
                        type="email"
                        name="email"
                        required
                        value={formik.values.email}
                        className="relative block w-full appearance-none sm:rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter your email" />
                    {formik.touched.email && formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                </div>
                <div className="flex flex-col gap-2 mx-4">
                    <h1>Reset Password</h1>
                    <Button
                        className="self-end font-semibold text-xl text-white"
                        type="submit"
                        disabled={!formik.isValid}
                        name="RESET PASSWORD" />
                </div>
                <Link className="self-center" to="/login">
                    <button
                        className="px-2 mb-2 border rounded-md bg-black text-white">
                        Back
                    </button>
                </Link>
            </form>
        </div>
    )
}
export default ForgetPass;