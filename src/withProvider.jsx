import React, { useContext } from "react"
import { AlertContext, CartContext, UserContext } from "./Contexts";


// function withProvider(provider) {
//     function MyHOC(IncomingComponent) {
//         function OutgoingComponent(props) {
//             const contextData = useContext(provider);
//             return <IncomingComponent
//                 {...props} {...contextData}
//             />
//         }

//         return OutgoingComponent;
//     }
//     return MyHOC;
// }
const withProvider = (provider) => (IncomingComponent) => (props) => {
    const contextData = useContext(provider);
    return <IncomingComponent {...props} {...contextData} />;
};

export default withProvider;

export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);

//HOC Creator
//CURRYING;