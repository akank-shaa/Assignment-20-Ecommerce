import React, { useState } from "react";
import Button from "./Button";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState("");


    function callLoginApi(event) {
        event.preventDefault();

        if (password.length < 8) {
            setPasswordError("Pands");
            return;
        }
    }

    function handleChange(event) {
        if (event.target.name == "email") {
            setEmail(event.target.value);
        } else {
            setPassword(event.target.value);
            if (password.length >= 8) {
                setPassword("");
            }
        }
    }

    function handlePassowrdOnBlur(event) {
        if (password.length < 8) {
            setPasswordError("Password shoud be atleast 8 charcters.")
        }
    }

    function resetForm() {
        setPassword("");
        setEmail("");
    }

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-100 font-['Poppins']">
            <form
                onSubmit={callLoginApi}
                className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white">
                <h1 className="text-2xl font-bold self-center mb-4">
                    Login to CodeYogi
                </h1>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Email Address
                    </label>
                    <input
                        value={email}
                        onChange={handleChange}
                        onBlur={handlePassowrdOnBlur}
                        id="email-address"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Email Address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        value={password}
                        onChange={handleChange}
                        onBlur={handlePassowrdOnBlur}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none
                         rounded-b-md border border-gray-300 px-3 py-2 text-gray-900
                          placeholder-gray-500 focus:z-10 focus:border-indigo-500 
                          focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Password"
                    />
                    {passwordError && <div className="text-red-700">{passwordError}</div>}
                </div>
                <Button type="submit" className="self-end mt-3">Login</Button>
                <Button type="button" onClick={resetForm} className="self-end mt-3">Reset</Button>
            </form>
        </div>
    );
}

export default Login;