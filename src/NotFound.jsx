import React, { memo } from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex items-center justify-center w-full h-full bg-white">
            <img className="h-screen z-0 mx-auto" src="https://static.vecteezy.com/system/resources/previews/004/639/366/original/error-404-not-found-text-design-vector.jpg" />
            <div className="z-10 absolute mb-28 flex">
                <Link to="/">
                    <Button>
                        Return to Shopping
                        <span className="ml-30"><HiOutlineArrowNarrowRight /></span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default memo(NotFound);


//const a ='{"title" : "iphone" , "price" : "25", "category" = "phone"}';
//const b = {title : "iphone" , price: 25, category:"phone"};

//const c= JSON.parse(a);  //object jaisi string ko actual object mein convert.
//const d = JSON.stringify(b); //object ko string main convert
//JSON - JavaScript Object Notation