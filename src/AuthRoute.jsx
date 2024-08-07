import React from "react";
import { withUser } from "./withProvider";
import { Navigate } from "react-router";

function AuthRoute({ user, children }) {

    if (user) {
        return <Navigate to="/" />;
    }
    return children;
}

export default withUser(AuthRoute);