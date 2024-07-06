import React from 'react';

function Navbar(props) {
    return (
        <div class="flex absolute left-52 top-6">
            <img src={props.photo} class="w-36" />
        </div>
    );
}

export default Navbar;