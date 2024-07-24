import React from 'react';
import { Link } from 'react-router-dom';
import { GrShop } from "react-icons/gr";

function Navbar({ productCount }) {
  return (
    <div className="py-4">
      <div className="max-w-6xl flex justify-between mx-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
          className="h-16" />
        <div className='flex flex-col items-center'>
          <Link to="cart">
            <GrShop className='text-3xl text-orange-500' />
            <span className='text-orange-500'>{productCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;