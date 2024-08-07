import { useState, useEffect } from "react";
import { UserContext } from "../Contexts";
import Loading from "../Loading";
import axios from "axios";


function UserProviders({ children }) {
    const [user, setUser] = useState();
    const token = localStorage.getItem("token");
    const [loading, setLoading] = useState(true);

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


    return (<UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
    )
}

export default UserProviders;