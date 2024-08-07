import React from "react";
import { Navigate } from "react-router";
import  { withUser } from "./withProvider";


function UserRoute({ user, children }) {


    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;

}

export default withUser(UserRoute);

//children is jsx
//isliye ye component h