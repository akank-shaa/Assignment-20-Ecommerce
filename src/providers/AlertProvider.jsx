import { useState } from "react";
import { AlertContext } from "../Contexts";

function AlertProvider({ children }) {

    const [alert, setAlert] = useState({ type: "error", message: "This is a test error" });

    const removeAlert = () => {
        setAlert(undefined);
    }

    return (
        <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
            {children}
        </AlertContext.Provider>)

}

export default AlertProvider;