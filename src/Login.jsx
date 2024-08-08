import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from './Input';
import { withFormik } from "formik";
import axios from "axios";
import { withAlert, withUser } from "./withProvider";

function callLoginApi(values, bag) {
    axios
        .post("https://myeasykart.codeyogi.io/login", {
            email: values.email,
            password: values.password,
        })
        .then((response) => {
            const { user, token } = response.data;
            localStorage.setItem("token", token);
            bag.props.setUser(user);
        })
        .catch(() => {
            bag.props.setAlert({
                type: "error",
                message: "Invalid Credentials" + values.password,
            })
        });
}

const schema = Yup.object().shape({
    email: Yup.string().email().required("Please Enter Email"),
    password: Yup.string().required("Please Enter password"),
});

const initialValues = {
    email: "",
    password: "",
}

export function Login({
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
}) {

    return (
        <div className="flex w-screen justify-center items-center">
            <form onSubmit={handleSubmit}
                className="flex flex-col bg-white w-1/3 px-4 py-2 self-center rounded-xl shadow-md gap-4">
                <h1 className="self-center py-5 text-3xl text-indigo-500 font-bold"> Login Page</h1>
                <Input
                    values={values.email}
                    error={errors.email}
                    touched={touched.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Email/Username"
                    id="email"
                    autoComplete="email"
                    required
                />
                <Input
                    values={values.password}
                    error={errors.password}
                    touched={touched.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    required
                    name="password"
                    placeholder="Password"
                    id="password" />
                <div className="">
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
            </form>
        </div>
    );
}
//component -> function that takes any object and return JSX
//HOC-> function that takes in a component and returns another comonent
//SuperHOC -> a function that return  HOC , no constraint on taking any input

// export default withFormik({ validationSchema: schema, initialValues: initialValues, onSubmit: callLoginApi });

const FormikLogin = withFormik({
    validationSchema: schema,
    initialValues: initialValues,
    handleSubmit: callLoginApi,
}); (Login);

export default withAlert(withUser(FormikLogin));

// <Button
// type="button"
// onClick={resetForm}
// className="self-end mt-3">
//     Reset
// </Button>