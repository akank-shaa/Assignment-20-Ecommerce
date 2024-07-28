import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "./Button";
import FormikInput from './Input';

function Login() {

    function callLoginApi(values) {
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required("Please Enter Email"),
        password: Yup.string().required("Please Enter password").min(8)
    });

    const initialValues = {
        email: "",
        password: "",
    }

    return (
        <div className="flex w-screen justify-center items-center">
            <Formik
                initialValues={initialValues}
                onSubmit={callLoginApi}
                validationSchema={schema}
                validateOnMount
            >
                <Form
                    className="flex flex-col bg-white w-1/3 px-4 py-2 self-center rounded-xl shadow-md gap-4">
                    <h1 className="self-center py-5 text-3xl text-indigo-500 font-bold"> Login Page</h1>
                    <FormikInput
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="Email/Username"
                        id="email"
                        autoComplete="email"
                        required
                    />
                    <FormikInput
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        required
                        name="password"
                        placeholder="Password"
                        id="password" />
                    <div claszsName="">
                        <Link className="text-blue-600 my-2 " to="/forget">Forget Password</Link>
                    </div>
                    <Button
                        // disabled={isValid}
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
                </Form>
            </Formik>
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