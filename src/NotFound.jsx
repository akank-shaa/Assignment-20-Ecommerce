import React from "react";
import PageButton from "./PageButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function NotFound() {
    return (
        <div className="flex items-center justify-center w-full h-full bg-white">
            <img className="h-screen z-0 mx-auto" src="https://static.vecteezy.com/system/resources/previews/004/639/366/original/error-404-not-found-text-design-vector.jpg" />
            <div className="z-10 absolute mb-28 flex">
                <Link to="/">
                    <PageButton>
                        Return to Shopping
                        <span className="ml-30"><HiOutlineArrowNarrowRight /></span>
                    </PageButton>
                </Link>
            </div>
        </div>
    );

}

export default NotFound;


//const a ='{"title" : "iphone" , "price" : "25", "category" = "phone"}';
//const b = {title : "iphone" , price: 25, category:"phone"};

//const c= JSON.parse(a);  //object jaisi string ko actual object mein convert.
//const d = JSON.stringify(b); //object ko string main convert
//JSON - JavaScript Object Notation