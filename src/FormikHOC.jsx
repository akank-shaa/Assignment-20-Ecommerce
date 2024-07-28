import React from "react";
import { useField } from "formik";

function FormikHOC(IncomingComponent) {
    function OutgoingCompnent({ name, ...rest }) {

        const field = useField(name);     //Context API use krke-useContext krke

        const [data, meta] = field;           //array destructuring
        const { value, onBlur, onChange } = data;
        const { error, touched } = meta;

        let borderClass = "border-gray-300 focus:border-indigo-500";
        if (error && touched) {
            borderClass = "border-red-500";
        }

        return (
            <IncomingComponent
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={error}
                touched={touched}
                name={name}
                {...rest}
            />
        );
    }

    return OutgoingCompnent;
}

export default FormikHOC;