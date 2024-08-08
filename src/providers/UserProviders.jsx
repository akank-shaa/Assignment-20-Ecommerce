import { useState, useEffect } from "react";
import { UserContext } from "../Contexts";
import Loading from "../Loading";
import axios from "axios";


function UserProviders({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");



    useEffect(() => {
        if (token) {
            axios
                .get("https://myeasykart.codeyogi.io/me", {
                    headers: {
                        Authorization: token,
                    }
                }).then((response) => {
                    setUser(response.data);
                    setLoading(false);
                }).catch(() => {
                    localStorage.removeItem("token");
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <Loading />
    }

    return (<UserContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
        {children}
    </UserContext.Provider>
    )
}

export default UserProviders;

//! converts truthy value to false and vice versa
//false - false
//falsy - 0, "", NaN , undefined,null
//so ! worconvertks on non-booleans as well.But output is always boolean
//paltega aur pure boolean mein convert


//!!pure boolean mein convert  
//!! converts truthy to true and falsy values to false