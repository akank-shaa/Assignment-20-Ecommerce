import React from "react";
import Button from "./Button";

function DashBoard({ user ,setUser}) {
    function handleLogout() {
        localStorage.removeItem("token");
        setUser(undefined);
        //call api to invalidate token
    }
    return (
        <div>
            <Button onclick={handleLogout}>Logout</Button>
        </div>
    )
}

export default DashBoard;