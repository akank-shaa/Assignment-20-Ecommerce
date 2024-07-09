import React from 'react';

function NoMatching({ children }) {
    return (
        <div className="p-2 m-1 bg-indigo-500 text-white text-xl">
            {children}
        </div>
    );
}

export default NoMatching;