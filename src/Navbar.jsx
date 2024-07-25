import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { GrShop } from "react-icons/gr";

function Navbar({ productCount }) {
  return (
    <div className="py-4">
      <div className="max-w-6xl flex justify-between mx-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
          className="h-10" />
        <div className='flex flex-col items-center'>
          <Link to="cart">
            <GrShop className='text-5xl text-orange-500' />
            <p className='text-orange-500 text-xl ml-3 -mt-7'>{productCount}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);