import React from "react";
import { useFormik, } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "./Button";


function Text() {

    function handleCreateAccount() {
        console.log(formik.values.name, formik.values.username, formik.values.email, formik.values.password, formik.values.confirm_password);
    }
    const schema = Yup.object().shape({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().required("Please fill your email"),
        useranme: Yup.string().required("Please Enter username"),
        password: Yup.string().required("Please Enter password").min(8, "password must be 8 chracters"),
        confirm_password: Yup.string().required("Please confirm your pssword").min(8),


    })
    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: schema,
        onSubmit: handleCreateAccount,

    })


    return (
        <div className="flex bg-gray-100 w-screen h-screen justify-center items-center">


            <form
                onSubmit={formik.handleSubmit}
                className=" flex  flex-col bg-white w-96   px-4 py-2 self-center rounded-xl shadow-md gap-2  ">

                <h1 className="self-center my-5 text-2xl text-gray-500 font-bold"> SpeedCart</h1>
                <h2 className="text-2xl bold">Create Account</h2>


                <div>
                    <label htmlFor="name">Name</label>
                    <input onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        id="name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={formik.values.name}
                        className="w-full py-1 border border-gray-600 rounded-md"
                        placeholder="Enter your name" />
                </div>
                {formik.touched.name && formik.errors.name && <div className="text-red-500">{formik.errors.name}</div>}

                <div>
                    <label htmlFor="email" className=" ">Email

                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        autoComplete="email"
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="  w-full rounded-md  border border-gray-500 py-1  placeholder-gray-500   "
                    />
                    {formik.errors.email && formik.touched.email && <div className="text-red-500">{formik.errors.email}</div>}

                </div>





                <div>
                    <label htmlFor="confirm_password" className="mt-4 ">  Confirm Password</label>
                    <input
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        autoComplete="confirm_password"
                        name="confirm_password"
                        placeholder=" Reenter password"
                        id="confirm_password"
                        className="w-full rounded-md  border border-gray-500   py-1 text-black placeholder-gray-500" />

                    {formik.errors.confirm_password && formik.touched.confirm_password && <div className="text-red-400">{formik.errors.confirm_password}</div>}


                </div>

                <Button disabled={!formik.isValid} name="Create Account" />
                <p className="self-center ">New Customer?<Link className="text-blue-600" to="/Login">Login</Link></p>



            </form >
        </div >

    );
}

export default Text;