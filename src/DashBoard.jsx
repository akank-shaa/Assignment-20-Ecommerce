import React from "react";
import Button from "./Button";
import { withUser } from "./withProvider";

function DashBoard({ user, setUser }) {
    function handleLogout() {
        localStorage.removeItem("token");
        setUser(undefined);
        //call api to invalidate token
    }
    return (
        <div>
            <div className="text-red-500 text-3xl">Welcome, {user.fullName}</div>
            <Button onclick={handleLogout}>Logout</Button>
        </div>
    )
}

export default withUser(DashBoard);